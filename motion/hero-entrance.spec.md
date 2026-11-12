# Motion Spec: hero-entrance

SOURCE: https://bdnath.xyz/ | SECTION: Hero | CAPTURED: 2026-11-12 | TRIGGER: load (session-scoped, once per session)

## 1. What the visitor sees (3 to 6 plain sentences)

A full-screen welcome overlay shows a single word ("Welcome") on a dark background. When it finishes, it wipes upward and disappears. Immediately after, the hero content fades and slides up into view in a staggered sequence: availability badge first, then the headline word by word, then the subtitle, then the CTAs, then the stats strip, and finally a scroll-down cue. Each element has its own inline delay so they arrive one after another rather than all at once.

## 2. Anatomy

- Wrapper(s): `<body>` receives `.hero-ready` class (added by welcome.js after overlay exit); hero elements opt in via `.hero-anim` class with inline `--d` custom property
- Items: pill badge, h1 headline (split into highlighted words), subtitle paragraph, CTA button group, stats definition list, "what I build" aside, scroll-down cue anchor
- Skeleton (text and media stripped):

```html
<body class="hero-ready">
  <span class="hero-anim" style="--d: 100ms">…badge…</span>
  <h1 class="hero-anim" style="--d: 220ms">…headline…</h1>
  <p class="hero-anim text-2" style="--d: 340ms">…subtitle…</p>
  <div class="hero-actions hero-anim" style="--d: 460ms">…buttons…</div>
  <dl class="hero-stats hero-anim" style="--d: 580ms">…stats…</dl>
  <aside class="build-motion hero-anim" style="--d: 420ms">…list…</aside>
  <a class="scroll-cue hero-anim" style="--d: 800ms">…arrow…</a>
</body>
```

## 3. States

| Element | Property | Initial | Final | Confidence |
|---|---|---|---|---|
| .hero-anim | opacity | 0 | 1 | measured |
| .hero-anim | transform | translateY(30px) | none | measured |
| .hero-anim (each) | animation-delay | var(--d, 0ms) | var(--d, 0ms) | measured |
| body | class | (none) | hero-ready | inferred |

## 4. Timeline

| # | Target | Property | From | To | Start (s) | Duration (s) | Ease | Stagger | Confidence |
|---|---|---|---|---|---|---|---|---|---|
| 1 | .hero-anim (badge) | opacity + transform | 0 / translateY(30px) | 1 / none | 0.100 | 0.800 | cubic-bezier(0.22, 1, 0.36, 1) | 100ms | measured |
| 2 | .hero-anim (headline) | opacity + transform | 0 / translateY(30px) | 1 / none | 0.220 | 0.800 | cubic-bezier(0.22, 1, 0.36, 1) | 120ms | measured |
| 3 | .hero-anim (subtitle) | opacity + transform | 0 / translateY(30px) | 1 / none | 0.340 | 0.800 | cubic-bezier(0.22, 1, 0.36, 1) | 120ms | measured |
| 4 | .hero-anim (aside) | opacity + transform | 0 / translateY(30px) | 1 / none | 0.420 | 0.800 | cubic-bezier(0.22, 1, 0.36, 1) | 80ms | measured |
| 5 | .hero-anim (actions) | opacity + transform | 0 / translateY(30px) | 1 / none | 0.460 | 0.800 | cubic-bezier(0.22, 1, 0.36, 1) | 40ms | measured |
| 6 | .hero-anim (stats) | opacity + transform | 0 / translateY(30px) | 1 / none | 0.580 | 0.800 | cubic-bezier(0.22, 1, 0.36, 1) | 120ms | measured |
| 7 | .hero-anim (scroll cue) | opacity + transform | 0 / translateY(30px) | 1 / none | 0.800 | 0.800 | cubic-bezier(0.22, 1, 0.36, 1) | 220ms | measured |

## 5. Trigger and scroll config

- Trigger: `load` (session-scoped, runs once per session)
- Preceded by: welcome overlay exit (`welcome-wipe` 640ms ease-out + `welcome-word-out` 300ms ease-out)
- Scroll: none (hero entrance is time-based, not scroll-driven)
- Pin: none
- Once: yes (per session, gated by welcome.js session-scoped logic)

## 6. Interaction and feel

- Hover: none on hero-anim elements themselves (they are entrance-only)
- CTAs: `.arrow` nudge — translate(3px, -3px) on hover, 160ms ease-out
- Links: `.link-draw` underline draw — scaleX 0 → 1 on hover, transform-origin right → left, 320ms ease-out
- Buttons: active state scale 0.97, 160ms ease-out
- Reduced motion: `.hero-anim`, `[data-reveal]` skip animation entirely (opacity 1, transform none, animation none)

## 7. Responsive and reduced motion

- Breakpoints: none specific to hero entrance (delay values constant across viewports)
- Reduced motion: hard override — `opacity: 1 !important`, `transform: none !important`, `animation: none !important`, `transition: none !important`

## 8. Dependencies

- Core library: none (pure CSS keyframes + custom properties)
- JS glue: `welcome.js` adds `.hero-ready` to `<body>` after welcome overlay exits
- Smooth scroll: none (html scroll-behavior: smooth)

## 9. Evidence

- Frames: not captured (no live browser agent available — visual confidence from source CSS)
- Sampled curves: not captured (no live measurement — curve values taken directly from @keyframes definitions)
- Fit results: not applicable (no live sampling performed)

## 10. Gotchas

- The `--d` custom property is set as an inline style on each hero element; without it, animation-delay defaults to 0ms and everything fires at once
- `.hero-ready` must be present on `<body>` for the animation to run; welcome.js controls this
- `animation: forwards` ensures elements stay at final state (don't snap back to opacity 0)
- Reduced motion media query overrides all hero-anim transitions with `!important`

## 11. Low confidence or not captured

- Stagger timing between elements is measured from inline `--d` values (confident)
- Actual perceived timing after welcome overlay exit is inferred (welcome.js session logic not inspected live)
- `will-change: opacity, transform` present on `.hero-anim` — confirms GPU layer promotion intent

## 12. Never copy

- Proprietary: their text content, images, icons, fonts (Space Grotesk, Inter, JetBrains Mono, Pixemon, The Stone Tribes), markup class names, source code, color values beyond what's needed for motion spec
