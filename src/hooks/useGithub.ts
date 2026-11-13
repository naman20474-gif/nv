import { useEffect, useState } from 'react'

export interface RepoStat {
  stars: number
  forks: number
}

/**
 * Live star / fork counts for a list of "owner/repo" strings.
 * Failures resolve to zero so the UI never shows broken values.
 */
export function useRepoStats(repos: string[]): Record<string, RepoStat> {
  const key = repos.join(',')
  const [stats, setStats] = useState<Record<string, RepoStat>>({})

  useEffect(() => {
    const list = key ? key.split(',') : []
    if (list.length === 0) return

    const controller = new AbortController()
    let cancelled = false

    Promise.all(
      list.map(async (repo) => {
        try {
          const res = await fetch(`https://api.github.com/repos/${repo}`, {
            signal: controller.signal,
            headers: { Accept: 'application/vnd.github+json' },
          })
          if (!res.ok) return [repo, { stars: 0, forks: 0 }] as const
          const data: { stargazers_count?: number; forks_count?: number } = await res.json()
          return [
            repo,
            { stars: data.stargazers_count ?? 0, forks: data.forks_count ?? 0 },
          ] as const
        } catch {
          return [repo, { stars: 0, forks: 0 }] as const
        }
      }),
    ).then((entries) => {
      if (!cancelled) setStats(Object.fromEntries(entries))
    })

    return () => {
      cancelled = true
      controller.abort()
    }
  }, [key])

  return stats
}

/** Public repository count for a GitHub username (null until resolved). */
export function useGithubUser(username?: string): number | null {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    if (!username) return

    const controller = new AbortController()
    let cancelled = false

    fetch(`https://api.github.com/users/${username}`, {
      signal: controller.signal,
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((d: { public_repos?: number } | null) => {
        if (!cancelled && d) setCount(d.public_repos ?? null)
      })
      .catch(() => {
        /* keep null — the stat falls back to its placeholder */
      })

    return () => {
      cancelled = true
      controller.abort()
    }
  }, [username])

  return count
}
