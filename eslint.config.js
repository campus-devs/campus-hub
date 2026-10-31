/**
 * eslint.config.js — ESLint flat config (ESLint 9+)
 *
 * WHY "FLAT CONFIG":
 *   ESLint 9 replaced the old .eslintrc.* format with a single
 *   eslint.config.js file. The key differences:
 *
 *   Old format (.eslintrc.cjs):
 *     - Config files cascade up the directory tree
 *     - Plugins are referenced by string name ("plugin:react/recommended")
 *     - Implicit globals from "env: { browser: true }"
 *
 *   Flat config (this file):
 *     - One file, explicit array of config objects
 *     - Plugins imported as JavaScript objects (explicit, no magic strings)
 *     - Globals imported from the "globals" package
 *     - Easier to reason about — you can read the config top to bottom
 *       and understand exactly what applies to what files
 *
 * HOW FLAT CONFIG WORKS:
 *   The default export is an array of config objects. ESLint merges them
 *   in order. Later objects override earlier ones. Each object can specify:
 *     - files: which files this config applies to (glob patterns)
 *     - languageOptions: parser, globals, ecmaVersion, sourceType
 *     - plugins: linting plugins to enable
 *     - rules: specific rules and their severity
 *
 * READING THIS FILE:
 *   1. js.configs.recommended  — ESLint's built-in recommended rules
 *   2. Our custom globals       — browser built-ins (window, document, etc.)
 *   3. Our custom rules         — project-specific linting rules
 *   4. eslintConfigPrettier     — turns off formatting rules (Prettier handles those)
 */

import js from '@eslint/js'
import globals from 'globals'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  // ── 1. ESLint recommended rules ─────────────────────────────────────────
  // Catches real bugs: no-unused-vars, no-undef, no-unreachable, etc.
  // See https://eslint.org/docs/rules/ — the rules marked (✓) are included.
  js.configs.recommended,

  // ── 2. Project-wide settings ─────────────────────────────────────────────
  {
    files: ['src/**/*.js'],
    // Only lint files inside src/. This excludes:
    //   - eslint.config.js itself (config file, not app code)
    //   - package.json, .prettierrc (not JS)
    //   - any future build output or vendor files

    languageOptions: {
      ecmaVersion: 2022,
      // ES2022 enables: top-level await, class static blocks, Object.hasOwn(),
      // Array.at(), and the 'at' method on strings and TypedArrays.
      // Update this when you need newer syntax features.

      sourceType: 'module',
      // Tells ESLint that .js files use import/export (ES modules).
      // Matches "type": "module" in package.json.

      globals: {
        // Declare browser built-ins so ESLint doesn't flag them as undefined.
        // globals.browser includes: window, document, localStorage, fetch,
        // console, setTimeout, CustomEvent, etc.
        ...globals.browser,
      },
    },

    rules: {
      // ── Possible errors ─────────────────────────────────────────────────
      'no-console': 'warn',
      // console.log() left in production is almost always accidental.
      // 'warn' instead of 'error' because some intentional console calls
      // exist (e.g. the startup log in main.js, marked with eslint-disable).
      // Change to 'error' once the app is closer to production.

      // ── Best practices ───────────────────────────────────────────────────
      'no-var': 'error',
      // var is function-scoped and hoisted — both properties cause subtle
      // bugs. const and let are block-scoped. No exceptions.

      'prefer-const': 'error',
      // If you declare with let but never reassign, use const.
      // const communicates intent: "this binding doesn't change."

      eqeqeq: ['error', 'always'],
      // Always use === (strict equality). == does type coercion:
      //   0 == ""          → true
      //   null == undefined → true
      //   false == 0       → true
      // These are all bugs waiting to happen. === never coerces types.

      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      // Unused variables are dead code. The argsIgnorePattern allows
      // function parameters prefixed with _ to be unused — useful for
      // callback signatures where you need to accept an argument you
      // don't use:
      //   element.addEventListener('click', (_event) => { doThing(); });

      'no-shadow': 'error',
      // Prevents a variable in an inner scope from having the same name
      // as a variable in an outer scope. Shadowing causes confusing bugs:
      //   const theme = 'light';
      //   function applyTheme(theme) { ... }  // which 'theme' is this?
    },
  },

  // ── 3. Prettier compatibility ─────────────────────────────────────────────
  // Turns off all ESLint rules that would conflict with Prettier's formatting.
  // This must be the LAST item in the array so it overrides any formatting
  // rules set by configs above it.
  eslintConfigPrettier,
]
