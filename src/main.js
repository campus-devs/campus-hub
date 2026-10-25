/**
 * main.js — Campus Hub client-side entry point
 *
 * HOW THIS FILE IS LOADED:
 *   index.html includes this as:
 *     <script type="module" src="./src/main.js"></script>
 *
 *   type="module" has four consequences worth knowing:
 *     1. DEFERRED: The script runs after the HTML is fully parsed.
 *        There's no risk of the script running before the DOM exists.
 *        This is why we can safely call document.getElementById()
 *        without waiting for a load event.
 *     2. STRICT MODE: Runs in strict mode automatically. Things like
 *        using an undeclared variable throw a ReferenceError instead of
 *        silently creating a global.
 *     3. SCOPED: Variables declared here are not on window. If you type
 *        `applyTheme` in the browser console it won't be defined. This
 *        is good — it prevents accidental globals from different scripts
 *        colliding.
 *     4. IMPORT/EXPORT: You can split code into separate files and
 *        import them. The browser handles the dependency resolution.
 *        No bundler (webpack, vite, etc.) required.
 *
 * STRUCTURE OF THIS FILE (right now, and intended growth):
 *
 *   1. Theme system  — already implemented. Manages light/dark mode.
 *
 *   2. (Future) Auth — when Supabase auth is added (Week 3-4 of the
 *      roadmap), the pattern will be:
 *
 *        import { initAuth, getSession } from './api/auth.js';
 *
 *      auth.js will contain the Supabase client initialisation and
 *      all auth-related calls. main.js calls initAuth() here and reacts
 *      to session changes (logged in → show feed, logged out → show
 *      landing page).
 *
 *   3. (Future) Page routing — this is a single-page app eventually.
 *      When we have multiple "views" (landing, feed, profile), we'll
 *      need to conditionally render them. Either:
 *        a) Separate HTML files per page (simpler, full reload on nav)
 *        b) A client-side router (complex, no reload, better UX)
 *      Decision not made yet. Start with (a).
 *
 *   4. (Future) Component init — each interactive component (post form,
 *      comment thread, vote button) will have its own JS file in
 *      src/components/. main.js will import and initialise them after
 *      checking that the user is logged in.
 */

// ─────────────────────────────────────────────────────────────────────────────
// THEME SYSTEM
// ─────────────────────────────────────────────────────────────────────────────
//
// HOW THE SYSTEM WORKS:
//
//   There's a three-way handshake between HTML, CSS, and JS:
//
//   HTML  →  <html data-theme="light"> is the initial state. Setting it
//            in HTML means the browser applies the correct CSS variables
//            before any JS runs, preventing a flash of the wrong theme.
//
//   CSS   →  [data-theme="dark"] { --color-bg: #0f172a; ... }
//            The stylesheet listens to this attribute and re-declares
//            color tokens. Every component picks up the new values
//            automatically because they reference the tokens, not
//            hard-coded hex values.
//
//   JS    →  main.js reads localStorage to find the user's saved
//            preference, then sets the attribute on document.documentElement
//            (which is <html>). It also updates it when the user clicks
//            the toggle button.
//
// WHY localStorage AND NOT A COOKIE:
//   localStorage is synchronous and available before the first paint.
//   Cookies require an HTTP round-trip when server-side rendering is
//   involved. Since this is a static site (no server), localStorage is
//   the right choice.
//
//   CAVEAT: If we ever move to server-side rendering (e.g. with SvelteKit
//   or Next.js), localStorage won't work for the initial render — the
//   server doesn't have access to it. We'd switch to a cookie that the
//   server reads. Keep this in mind if the framework ever changes.
//
// WHY A CONSTANT FOR THE KEY:
//   'campus-hub-theme' as a string literal typed in two places is a bug
//   waiting to happen (a typo would silently break persistence). The
//   constant ensures both the read and the write use the same string.
//   If you ever need to rename the key (e.g. to avoid collisions with
//   another app on the same domain), change it in one place.

const THEME_KEY = 'campus-hub-theme'

/**
 * Apply a theme and persist it.
 *
 * This is the single place in the codebase that mutates the theme.
 * Everything else (toggle button, initial load) calls this function.
 * Having one mutation point makes it easy to add side-effects later
 * (e.g. updating a database preference once auth exists).
 *
 * @param {'light' | 'dark'} theme
 */
function applyTheme(theme) {
  // Set the attribute that CSS is watching.
  // document.documentElement === the <html> element.
  document.documentElement.setAttribute('data-theme', theme)

  // Persist so the preference survives a page reload.
  localStorage.setItem(THEME_KEY, theme)

  // Update the button icon to reflect the CURRENT state.
  // Show ☀️ in dark mode (click to go light) and 🌙 in light mode
  // (click to go dark). The icon represents the current state,
  // not the action — this matches what macOS and most OS toggle
  // switches do.
  const icon = document.getElementById('theme-icon')
  if (icon) {
    icon.textContent = theme === 'dark' ? '☀️' : '🌙'
  }
}

/**
 * Initialise the theme on page load.
 *
 * Priority order:
 *   1. localStorage — the user has explicitly chosen a theme before.
 *   2. OS preference — no saved choice, but OS is set to dark mode.
 *   3. Default 'light' — no preference anywhere.
 *
 * WHY THIS ORDER:
 *   The user's explicit choice (localStorage) should always win over
 *   the OS default. If someone has their OS in dark mode but wants
 *   this specific site in light mode, their choice should stick.
 *
 * NOTE: The CSS also has a @media (prefers-color-scheme: dark) rule
 * that activates dark tokens before JS runs. initTheme() will
 * immediately call applyTheme() which sets data-theme, at which point
 * the CSS attribute selector takes over and the media query is no
 * longer needed. The media query is purely a "before JS runs" safety net.
 */
function initTheme() {
  const saved = localStorage.getItem(THEME_KEY)

  // Strict equality check: if the saved value is anything other than
  // 'light' or 'dark' (e.g. null, undefined, or a corrupted value),
  // fall through to the OS preference check.
  if (saved === 'light' || saved === 'dark') {
    applyTheme(saved)
    return
  }

  // window.matchMedia returns a MediaQueryList. .matches is a boolean.
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  applyTheme(prefersDark ? 'dark' : 'light')
}

/**
 * Toggle between light and dark.
 *
 * Exported so it could be called from other modules if needed
 * (e.g. a keyboard shortcut handler in a future utils/shortcuts.js).
 * Right now nothing imports it — but the export costs nothing and
 * makes the architecture more flexible.
 */
export function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme')
  // If somehow data-theme is missing or wrong, default to going light.
  applyTheme(current === 'dark' ? 'light' : 'dark')
}

// ─────────────────────────────────────────────────────────────────────────────
// BOOTSTRAP
// ─────────────────────────────────────────────────────────────────────────────
//
// DOMContentLoaded fires when the HTML is parsed and the DOM is ready,
// but before images and stylesheets have finished loading.
//
// WHY WE STILL USE DOMContentLoaded EVEN THOUGH type="module" ALREADY DEFERS:
//   Explicitness. A future developer reading this file knows that this
//   code runs after the DOM is ready — they don't have to remember that
//   modules are deferred. The extra millisecond of delay is negligible.
//
// IF THIS FILE GROWS:
//   The DOMContentLoaded callback becomes the orchestrator:
//
//   document.addEventListener('DOMContentLoaded', async () => {
//     initTheme();
//
//     const session = await initAuth();   // from ./api/auth.js
//     if (session) {
//       await renderFeed(session.user);   // from ./components/feed.js
//     } else {
//       showLandingPage();
//     }
//   });
//
//   The async/await pattern works naturally here because module scripts
//   support top-level await and async callbacks.

document.addEventListener('DOMContentLoaded', () => {
  initTheme()

  const toggleBtn = document.getElementById('theme-toggle')
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleTheme)
    // The null-check (if toggleBtn) means this won't crash on pages
    // that don't have the toggle button — e.g. a future login page
    // that uses a different header layout. Defensive programming.
  }

  // Proof that ES modules work end-to-end in production.
  // Remove this once the app has real functionality.
  console.log('Campus Hub loaded. 🎓') // eslint-disable-line no-console
})
