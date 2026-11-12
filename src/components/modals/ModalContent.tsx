import { Download, FileText } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

const SOCIAL_ICON: Record<string, string> = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  twitter: 'Twitter / X',
  mail: 'Email',
  globe: 'Website',
}

export function ResumeContent() {
  const { personal } = portfolioData

  return (
    <div className="space-y-5 text-sm">
      <p className="text-2">
        View my resume in the browser, download a copy, or reach out directly.
      </p>

      <div className="flex flex-wrap gap-3">
        <a
          className="btn btn-primary"
          href={personal.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FileText size={16} /> Open resume
        </a>
        <a className="btn btn-ghost" href={personal.resumeUrl} download>
          <Download size={16} /> Download PDF
        </a>
      </div>

      <p className="rounded-lg border border-line bg-canvas-soft px-3 py-2 font-mono text-xs text-muted">
        {personal.email}
      </p>
    </div>
  )
}

export function HireContent() {
  const { personal } = portfolioData
  const subject = encodeURIComponent('Project enquiry')
  const body = encodeURIComponent(
    "Hi,\n\nI'd like to talk about a project.\n\nWhat I'm building:\nTimeline:\nBudget:\n\nThanks!",
  )

  return (
    <div className="space-y-5 text-sm">
      <p className="text-2">Tell me about your project — I usually reply within 24 hours.</p>

      <a
        className="btn btn-accent w-full justify-center"
        href={`mailto:${personal.email}?subject=${subject}&body=${body}`}
      >
        Email {personal.email}
      </a>

      <ul className="space-y-1.5 border-t border-line pt-4">
        {personal.social.map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg px-3 py-2 text-muted transition-colors hover:bg-canvas-soft hover:text-ink"
            >
              <span>{SOCIAL_ICON[link.icon] ?? link.label}</span>
              <span className="font-mono text-xs text-faint">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ConnectContent() {
  const { personal } = portfolioData

  return (
    <div className="space-y-5 text-sm">
      <p className="text-2">
        Just want to say hello? Pick whichever channel suits you best.
      </p>

      <ul className="space-y-1.5">
        {personal.social.map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border border-line px-3 py-2.5 transition-colors hover:border-line-strong hover:bg-canvas-soft"
            >
              <span className="font-medium">{SOCIAL_ICON[link.icon] ?? link.label}</span>
              <span className="font-mono text-xs text-faint">↗</span>
            </a>
          </li>
        ))}
      </ul>

      <p className="rounded-lg border border-line bg-canvas-soft px-3 py-2 font-mono text-xs text-muted">
        {personal.email}
      </p>
    </div>
  )
}
