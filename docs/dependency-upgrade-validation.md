# Dependency upgrade validation

Verified 2026-10-21 with Bun 1.4.3. Scope: this app's router, compatible build
tooling, and loopback-only admin middleware from the dependency upgrade plan.

## Versions and migration

| Dependency | Before | After |
| --- | --- | --- |
| react-router-dom | 6.30.3 | 7.18.4 |
| React / ReactDOM | 18.3.1 | 18.3.1 |
| Vite | 6.4.1 | 6.4.4 |
| Express | 4.22.1 | 4.22.3 |
| Multer | 1.4.5-lts.2 | 2.4.0 |
| body-parser (via Express) | 1.20.4 | 1.20.8 |
| qs (via Express and body-parser) | 6.14.2 | 6.16.1 |

Checked package metadata against npm before installing. Router 7.18.4 supports
React 18 and declares Node >=20; Bun compatibility was checked by actually
installing, building, and running the app. Vite 6.4 still receives
[security fixes](https://vite.dev/releases).

Followed the [official staged router upgrade](https://reactrouter.com/7.18.4/upgrading/v6):
first 6.30.6 with `v7_startTransition` and `v7_relativeSplatPath`, then 7.18.4,
removing the now-obsolete flags. BrowserRouter, absolute links, and the static
route tree are preserved. No React major upgrade or server framework migration.
The app has no lazy components, relative multi-segment splats, data-router
loaders/actions, fetchers, or SSR requiring the other migration flags.

Reviewed the audit-fix dry run before applying compatible transitive updates:
Babel core 7.29.6, baseline-browser-mapping 2.11.0, browserslist 4.28.7,
lodash 4.18.0, nanoid 3.3.18, path-to-regexp 0.1.13, picomatch 4.0.4,
PostCSS 8.5.23, proxy-addr 2.0.8, Rollup 4.59.0, source-map-js 1.2.2.
No overrides or esbuild downgrade were needed. The initial body-parser refresh
to 1.20.6 still constrained qs to 6.15.x; updating its resolution to 1.20.8
within Express's existing range allowed the patched qs 6.16.1.

Selected Multer 2.4.0 after checking its
[maintainer changelog](https://github.com/expressjs/multer/blob/main/CHANGELOG.md).
The admin continues using memory storage and binds to `127.0.0.1:3333` only.
Exporting the Express app and guarding its listener allows HTTP tests on an
ephemeral loopback port; `bun run admin` retains its existing behavior.

## Audits and remaining advisories

| Command | Before | Final |
| --- | --- | --- |
| `bun audit --json` | 35 advisories across 17 packages: 1 critical, 15 high, 17 moderate, 2 low | `{}`; exit 0 |
| `bun audit --prod --json` | Not recorded separately | `{}`; exit 0 |

**No remaining reported dependency advisories or deferred audit exceptions.**
This is a dated audit result, not a guarantee against future disclosures.
The full audit includes development/build tools and the local admin; the
production-only audit excludes those dependencies. The deployed site serves
static assets and does not run Express or Multer.

Router 7.18.4 is above the patched ranges for the
[untrusted navigation path advisory](https://github.com/remix-run/react-router/security/advisories/GHSA-wrjc-x8rr-h8h6)
and [open redirect/XSS advisory](https://github.com/remix-run/react-router/security/advisories/GHSA-jjmj-jmhj-qwj2).
The original SSR hydration and `redirect()` findings did not apply to this
BrowserRouter app without SSR. They are also absent from the final audit.

## Validation

- `bun install --frozen-lockfile` passed after each update batch.
- `bun run build` passed for the v6 preparation, v7 migration, tooling update,
  and final middleware batch. Final output: 52 modules, ~402 kB JS / ~97 kB gzip.
- `bun run test`: 12 passing HTTP integration tests exercise real Express and
  Multer. Only Cloudinary is mocked: uploads preserve buffers, folder/public-ID
  conventions, raw audio type, waveform/avatar fields, and multiple images.
  Tests also cover invalid slugs, unexpected/excess files, truncated multipart,
  Cloudinary errors, server responsiveness, and JSON validation. No real uploads
  or canonical track-database writes occur.
- `bun run admin` starts successfully on its existing loopback address.
- There were no existing tests, lint script, or type-check script in this JS app.

Browser checks used the built app via `bun run preview --host 127.0.0.1`:

- Home and its Listen link; direct sound info/photos/map URLs.
- Info/photos/map menu navigation, photo rendering, search results and list
  selection, retained search across sound changes, browser back/forward, Home.
- Unknown sound and unmatched route redirect home on the same origin.
- Encoded backslash and slash parameters (`/%5c%5cexample.com/info` and
  `/%2f%2fexample.com/info`) stay on origin and redirect home.
- Marker selection was checked in a temporary Vite harness that replaces only
  the Google Maps SDK components with buttons. The actual `Mapa`, search, route,
  and sound-layout code ran unchanged; selecting a filtered marker navigated to
  `/pkp-parowoz-wesolek/map` and updated the player/menu/info metadata.

### Browser limitations and follow-up

The configured Google Maps key rejects localhost/127.0.0.1 referrers with
`RefererNotAllowedMapError` / `AuthFailure`. The same restriction reproduces in
an isolated v6 baseline. A Maps `getRootNode` error also appeared during the v7
localhost attempt. Live tiles and real Google marker interaction remain
unverified; the temporary marker double checks app routing, not Google Maps.
Verify those on an already-authorized development origin before release.

An invalid UTF-8 escape (`/%E0%A4%A/info`) hits Vite preview's existing URI
decoder error before the app loads and stays on origin. This is a preview
server response, not evidence of the deployed nginx behavior or a successful
router redirect. No hosting configuration was changed.

Build/preview logs include the runtime's `module.register()` deprecation warning;
it does not fail the build. Maps also emits existing map-style/Pin deprecation
warnings. These are not dependency-audit exceptions.

The pre-existing `.env.example` comment remains uncommitted and unchanged.
The pre-existing lockfile pin alignment is retained in the router-preparation
commit, so the committed manifest and lockfile agree. No credentials or built
assets are committed. No merge or deployment was performed; publishing updated
static assets requires a separate authorized release.
