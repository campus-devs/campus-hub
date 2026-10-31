# Campus Hub

> **Your campus, your community, your voice.**

[![License: GNU A](https://img.shields.io/badge/License-GNUA-yellow.svg)](LICENSE)
[![Vanilla HTML+CSS+JS](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Beginner-Friendly](https://img.shields.io/badge/good%20first%20issue-friendly-blue.svg)](https://github.com/campus-devs/campus-hub/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)

Campus Hub is an open-source, student-first community platform designed specifically for college campuses. It provides a safe, vibrant digital space where students can connect using college-verified accounts, discover campus clubs and academic groups, share peer-to-peer advice and notes, and engage in meaningful discussions. Built in the open by students for students, Campus Hub makes everyday college life more connected, collaborative, and transparent.

Whether you are looking to fix your very first typo in open source, build responsive UI components, or design scalable backend schema and policies, Campus Hub is built to be a friendly sandbox where any student can learn and grow.

---

## Features (Planned)

Here is a glimpse of what we are building together:

- **🎓 College-Verified Accounts**: Safe and trusted access restricted to genuine students via official campus email verification (`@yourcollege.ac.in`).
- **🏛️ Communities**: Dedicated spaces for academic branches (e.g., Computer Science, Electrical, Mechanical), student clubs, hostel blocks, placement preparation, and general campus chatter.
- **📝 Posts & Comments**: Rich discussion threads, campus announcements, event notifications, and peer resource-sharing with deep comment nesting.
- **🗳️ Voting System**: Transparent upvoting and downvoting to highlight high-value answers, useful notes, and timely campus updates.
- **🛡️ Moderation Tools**: Student-led moderation dashboards, community reporting tools, and guardrails to ensure campus conversations remain respectful, inclusive, and ragging-free.
- **🎭 Anonymous Posting**: Safe, moderated options to seek sensitive advice, mental health guidance, or ask candid questions without social anxiety.

---

## Getting Started

You do **not** need years of coding experience or a complex tech stack setup to run Campus Hub. Everything is kept lightweight and accessible!

### Prerequisites

Before you begin, make sure you have:

1. **A modern web browser**: Google Chrome, Mozilla Firefox, Microsoft Edge, Brave, or Safari.
2. **A text editor**: We highly recommend [Zed](https://zed.dev/) or [VSCodium](https://vscodium.com/) for its extensions and built-in terminal.
3. **Git**: Installed on your computer ([Download Git](https://git-scm.com/)).

### Running Locally

Follow these quick steps to get a local copy running on your machine:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/campus-devs/campus-hub.git
   cd campus-hub
   ```

2. **Open the project in VS Codium**:

   ```bash
   codium .
   ```

   for vscode crowd

   ```bash
   code .
   ```

3. **Launch the web application**:
   - **Option A (Recommended — Live Server Extension)**:
     1. Install the **Live Server** extension by Ritwick Dey in VS Code (`ext install ritwickdey.LiveServer`).
     2. Right-click on `index.html` in the VS Code file explorer.
     3. Select **"Open with Live Server"**.
     4. Your browser will automatically open `http://127.0.0.1:5500/index.html` and hot-reload whenever you save changes!
   - **Option B (Direct Browser Open)**:
     - Simply double-click the `index.html` file in your file explorer, or drag and drop it into any open browser window.

---

## 🏗️ Project Structure

Campus Hub follows a clean, modular structure that keeps frontend components, styling, and upcoming API layers organized:

```text
campus-hub/
├── .github/                      # GitHub configurations
│   ├── ISSUE_TEMPLATE/           # Standard issue templates
│   │   ├── bug_report.md         # Template for reporting bugs
│   │   └── feature_request.md    # Template for suggesting new ideas
│   └── PULL_REQUEST_TEMPLATE.md  # Checklist for pull requests
├── docs/                         # Extended project guides & specifications
├── src/                          # Application source code
│   ├── api/                      # Backend client & database integration
│   ├── components/               # Reusable modular UI components
│   ├── styles/                   # Style sheets
│   │   └── main.css              # Global styles & CSS custom properties
│   └── utils/                    # Helper functions & client-side utilities
├── .env.example                  # Example environment variable file
├── .gitignore                    # Files and folders ignored by Git
├── .nojekyll                     # Ensures GitHub Pages bypasses Jekyll
├── CODE_OF_CONDUCT.md            # Community behavior standards
├── CONTRIBUTING.md               # Guide for new contributors
├── index.html                    # Main application landing page & entry
├── LICENSE                       # MIT Open Source License
├── README.md                     # Project documentation & overview
└── SECURITY.md                   # Vulnerability reporting and security policy
```

---

## Contributing

We love contributions from everyone, especially first-time open-source contributors!

- Never submitted a Git pull request before? No problem! Check out our friendly, step-by-step guide in [CONTRIBUTING.md](CONTRIBUTING.md).
- Browse our issue tracker for issues tagged with [`good first issue`](https://github.com/campus-devs/campus-hub/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) — these are specially designed to help you get your feet wet.
- Feel free to ask questions anytime in our discussions or chat channels. Every question is a valid question!

---

## Code of Conduct

To foster an inclusive, encouraging, and safe campus environment, all contributors, maintainers, and community members are expected to follow our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). We practice zero tolerance for harassment, bullying, gatekeeping, or ragging.

## Security

Student privacy and data safety are top priorities for Campus Hub. If you discover a security vulnerability, please review our [SECURITY.md](SECURITY.md) for instructions on how to responsibly disclose it. **Please do not report security issues via public GitHub issues.**

---

## License

This project is licensed under the open-source **GNU A License** — see the [LICENSE](LICENSE) file for complete details. You are free to explore, learn from, and adapt this project.

---

## Community & Discussion

Have ideas, questions, or just want to hang out with fellow student developers?

- **Discord**: Join our friendly community on Discord at [discord](https://discord.gg/k6dMyYccSj) to chat in `#general`, `#help`.
- **GitHub Discussions**: Visit [GitHub Discussions](https://github.com/campus-devs/campus-hub/discussions) to propose feature RFCs, ask technical questions, or brainstorm ideas.

---

<p align="center">
  Made with ❤️ by students, for students.
</p>
