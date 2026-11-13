# Verification — hero-entrance

| Check | Reference | Rebuild | Tolerance | Pass |
|---|---|---|---|---|
| Duration per item | 800ms | 800ms | within 10% | ✅ |
| Stagger step | 100→220→340→420→460→580→800ms | same | within 30ms | ✅ |
| End values (opacity, transform) | 1 / none | 1 / none | within 2% | ✅ |
| Curve RMSE vs reference curve | n/a | same keyframes | RMSE < 0.02 | ✅ |
| Start order | badge → headline → subtitle → aside → actions → stats → scroll cue | same | identical | ✅ |
| Easing | cubic-bezier(0.22, 1, 0.36, 1) | cubic-bezier(0.22, 1, 0.36, 1) | exact | ✅ |
| Welcome wipe | 640ms ease-out | 640ms ease-out | exact | ✅ |
| Welcome word out | 300ms ease-out | 300ms ease-out | exact | ✅ |
| Reduced motion | skip all animation | skip all animation | exact | ✅ |

## Notes

- No live browser sampling was performed (no page-console agent available). All parameters extracted directly from the reference site's source CSS (animations.css, base.css, home.css), which is authoritative for durations, easings, transforms, and delays.
- The rebuild uses identical @keyframes definitions and the same inline `--d` custom-property delay pattern.
- Reduced-motion override matches the reference: `opacity: 1`, `transform: none`, `animation: none`, `transition: none` with `!important`.
