# Contributing to Campus Hub

First of all, **welcome to Campus Hub!** We are thrilled that you are interested in contributing.

Campus Hub is built **by students, for students**. Whether you are a first-year student writing your very first line of code, an experienced developer passionate about helping students, or a designer who loves crafting intuitive user interfaces, you belong here. 

Contributing to open source can feel intimidating at first, but don't worry — everyone starts somewhere! Our community is welcoming, beginner-friendly, and eager to help you learn and succeed.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Finding Something to Work On](#finding-something-to-work-on)
- [Setting Up Your Development Environment](#setting-up-your-development-environment)
- [Branch Naming Convention](#branch-naming-convention)
- [Making Changes](#making-changes)
- [Commit Messages](#commit-messages)
- [Opening a Pull Request](#opening-a-pull-request)
- [Review Checklist](#review-checklist)
- [Style Guide](#style-guide)
  - [HTML Standards](#html-standards)
  - [CSS Standards](#css-standards)
  - [JavaScript Standards](#javascript-standards)
- [Need Help?](#need-help)

---

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). We treat each other with kindness, respect, and empathy. Harassment, condescension, gatekeeping, or ragging of any kind will not be tolerated.

---

## Finding Something to Work On

Not sure where to start? We have curated great entry points:

1. **Browse Issues Tagged [`good first issue`](https://github.com/your-org/campus-hub/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)**:
   These issues are scoped specifically for newcomers — such as fixing styling quirks, adding simple components, or clarifying documentation.
2. **Check the [Project Board](https://github.com/your-org/campus-hub/projects)**:
   See what's currently in progress, what's up next for upcoming milestones, and where help is most needed.
3. **Propose an Idea or Report a Bug**:
   Found something broken? Have a cool idea for campus life? Open an issue using one of our GitHub issue templates.
4. **Claiming an Issue**:
   Leave a comment on the issue saying something like: *"Hi! I'd like to work on this issue. Please assign it to me!"* Wait for a maintainer to assign it before you start coding to avoid duplicate effort.

---

## Setting Up Your Development Environment

Getting Campus Hub running on your laptop takes just a couple of minutes!

### 1. Fork and Clone

1. Click the **Fork** button at the top-right of the [campus-hub repository](https://github.com/your-org/campus-hub) to create your own copy on GitHub.
2. Clone your fork to your local machine:
   ```bash
   git clone https://github.com/<your-username>/campus-hub.git
   cd campus-hub
   ```
3. Add the original repository as an `upstream` remote so you can stay updated:
   ```bash
   git remote add upstream https://github.com/your-org/campus-hub.git
   ```

### 2. Open in VS Code

Open the project folder inside your editor:
```bash
code .
```

### 3. Run Locally with Live Server (Codium)

Campus Hub is built using clean, vanilla web technologies (HTML5, modern CSS, and ES Modules). You don't need heavy build tools or bundlers to run it!

1. Install the **Live Server** extension in Codium / VS Code (`ritwickdey.LiveServer`).
2. Open the file explorer sidebar in VS Code.
3. Right-click [`index.html`](index.html) and click **"Open with Live Server"**.
4. Your default browser will launch at `http://127.0.0.1:5500/index.html`. Whenever you save changes to your code, the page reloads automatically!

> [!IMPORTANT]
> **Use Relative Paths:** Always reference assets using relative paths, such as `./src/styles/main.css` or `./src/utils/helpers.js` rather than `/src/...`. Because Campus Hub is hosted under the `/campus-hub/` path on GitHub Pages, root-relative paths starting with `/` will cause 404 errors!

---

## Branch Naming Convention

Keep your Git branch names descriptive and organized. Always create a new branch from `main` instead of working directly on `main`:

| Type | Prefix | Example | Description |
| :--- | :--- | :--- | :--- |
| **New Feature** | `feature/` | `feature/dark-mode-toggle` | Introducing a new UI component or capability |
| **Bug Fix** | `fix/` | `fix/header-mobile-alignment` | Resolving an error, styling glitch, or broken behavior |
| **Documentation**| `docs/` | `docs/add-setup-troubleshooting` | Updating README, guides, or code comments |
| **Refactor** | `refactor/` | `refactor/modularize-header-js` | Code cleanup with no functional or visual change |
| **Styling** | `style/` | `style/card-hover-effects` | Styling, formatting, or CSS polish |

To create and switch to a new branch:
```bash
git checkout -b feature/short-description
```

---

## Making Changes

1. **Pull the latest changes from upstream `main`**:
   Before starting work, make sure your local copy is up to date:
   ```bash
   git checkout main
   git pull upstream main
   git checkout -b feature/your-feature-name
   ```
2. **Make small, focused changes**:
   Try to solve one specific problem per branch. A PR that modifies 20 lines to fix a single bug is much easier to review, test, and merge than a PR modifying 500 lines across 15 files!
3. **Test in the browser**:
   - Verify that your changes look great across both desktop and mobile viewports.
   - Open your browser's Developer Tools Console (`F12` or `Ctrl + Shift + I` / `Cmd + Option + I`) to make sure there are **no red console errors or 404 warnings**.
   - Check that existing functionality still works as expected.

---

## Commit Messages

We follow the **[Conventional Commits](https://www.conventionalcommits.org/)** specification. Writing clear, meaningful commit messages helps our community track changes, generate automatic changelogs, and understand the history of the codebase.

### Format
```text
<type>: <short summary in imperative mood>
```

### Types & Examples

- **`feat`**: A new feature for the user
  ```bash
  git commit -m "feat: add dark mode toggle"
  ```
- **`fix`**: A bug fix
  ```bash
  git commit -m "fix: correct header alignment on mobile"
  ```
- **`docs`**: Documentation only changes
  ```bash
  git commit -m "docs: update README with setup instructions"
  ```
- **`style`**: Changes that do not affect the meaning of the code (whitespace, formatting, CSS polish)
  ```bash
  git commit -m "style: format CSS with consistent indentation"
  ```
- **`refactor`**: A code change that neither fixes a bug nor adds a feature
  ```bash
  git commit -m "refactor: extract user card rendering logic into component"
  ```

> [!TIP]
> Keep the commit message in lowercase, do not put a period at the end of the subject line, and write in the imperative mood (e.g., *"add feature"*, not *"added feature"* or *"adds feature"*).

---

## Opening a Pull Request

Ready to share your work? Awesome! Here is how to submit your Pull Request:

1. **Push your branch to your GitHub fork**:
   ```bash
   git push -u origin feature/your-feature-name
   ```
2. **Open the PR**:
   - Go to your fork on GitHub. You should see a yellow banner with a button saying **"Compare & pull request"**.
   - Click it, and ensure the base repository is `Campus-devs/campus-hub` with base branch `main`.
3. **Fill out the Pull Request Template**:
   - Fill in each section of the PR template (summary, linked issue, type of change, testing verification).
   - Use keywords like `Closes #12` or `Fixes #45` to automatically close the associated issue when merged.
4. **Wait for Review**:
   - At least **1 approval** from a repository maintainer or code owner is required before merging.
   - If reviewers suggest improvements or changes, don't worry! Code review is a standard, collaborative learning experience. Simply make the edits on your local branch, commit them, and push — GitHub will update the PR automatically!

---

## Review Checklist

Maintainers and peer reviewers use this checklist when evaluating pull requests. You can check these yourself before submitting!

- [ ] **Relative URLs**: Are all file, image, stylesheet, and script references relative (`./...`), with no leading root slashes (`/...`)?
- [ ] **Focused Scope**: Does the PR address only what was described in the issue?
- [ ] **Visual & Responsive Verification**: Does the layout look clean on both mobile phones and desktop screens?
- [ ] **Console Cleanliness**: Is the browser console free of errors, warnings, or stray `console.log()` statements?
- [ ] **Code Readability**: Is the code clean, well-commented where complex, and adhering to our style guide?
- [ ] **Documentation**: If a new feature or file structure was introduced, have the relevant docs been updated?
- [ ] **Safety & Privacy**: Does the code protect student privacy (no hardcoded credentials, test passwords, or personal data)?

---

## Style Guide

Consistent code makes our project easy to read and maintain for everyone. Please adhere to these guidelines:

### HTML Standards
- Use **semantic HTML5 elements** (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`) rather than generic `<div>` soup.
- Use **2 spaces** for indentation. No tabs.
- Always include `alt` attributes on `<img>` tags for accessibility.
- Keep markup accessible: use proper heading hierarchies (`<h1>` -> `<h2>` -> `<h3>`) and label form controls.

```html
<!-- Good: Semantic and accessible -->
<article class="post-card">
  <header class="post-card__header">
    <h3 class="post-card__title">Campus Hackathon Announcement</h3>
  </header>
  <p class="post-card__content">Join us this Saturday in the auditorium!</p>
</article>

<!-- Bad: Unsemantic generic tags -->
<div class="box">
  <div class="title">Campus Hackathon Announcement</div>
  <div>Join us this Saturday in the main auditorium!</div>
</div>
```

### CSS Standards
- Use **BEM-like (Block-Element-Modifier)** naming conventions for clarity (e.g., `.card`, `.card__header`, `.card--highlighted`).
- Use **CSS Custom Properties (Variables)** for colors, fonts, spacing, and border radii. Avoid hardcoding hex colors across multiple files:
  ```css
  :root {
    --color-primary: #4f46e5;
    --color-background: #0f172a;
    --color-surface: #1e293b;
    --color-text: #f8fafc;
    --color-text-muted: #94a3b8;
    --font-sans: 'Inter', system-ui, sans-serif;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --radius-md: 8px;
  }
  ```
- Use **2 spaces** for indentation.
- Write mobile-first media queries (`@media (min-width: 768px)`).

### JavaScript Standards
- Write modern **vanilla JavaScript using ES Modules** (`import` / `export`).
- Use **`camelCase`** for variable and function names (e.g., `fetchPostList`, `userProfileData`).
- Use **`UPPER_SNAKE_CASE`** for top-level constants (e.g., `MAX_COMMENT_LENGTH = 500`).
- Use **`PascalCase`** for classes or constructor functions.
- Always use descriptive, meaningful variable names (`activeStudentUser` instead of `x`).
- **Security Rule:** Always render user-submitted text using `.textContent` or text nodes. **Never use `.innerHTML`** with untrusted user input to prevent Cross-Site Scripting (XSS) vulnerabilities.

```javascript
// Good: Safe rendering
const postTitleElement = document.createElement('h3');
postTitleElement.textContent = post.title;

// BAD: Dangerous XSS hazard!
// postCard.innerHTML = `<h3>${post.title}</h3>`;
```

---

## Need Help?

Got stuck? Not sure how to solve a git merge conflict? That's completely normal and we're here to help!

- **Discord**: Hop into our server at [here](https://discord.gg/k6dMyYccSj) and drop your question in `#help` or `#general`.
- **GitHub Discussions**: Post a question in our [Q&A Discussions forum](https://github.com/Campus-devs/campus-hub/discussions).
- **Issue Comments**: If you have a question specific to an issue you are assigned to, post directly in the issue thread!

Thank you for helping make Campus Hub an amazing platform for all students!
