# Security Policy

## Reporting a Vulnerability

**Please do NOT report security vulnerabilities through public GitHub issues.**

If you discover a security vulnerability in Campus Hub, we appreciate your responsible disclosure. Please use **GitHub's private vulnerability reporting** feature:

👉 [Report a vulnerability](https://github.com/campus-devs/campus-hub/security/advisories/new)

This keeps the report private between you and the maintainers until a fix is ready.

### What to include in your report

- A description of the vulnerability
- Steps to reproduce the issue
- The potential impact (e.g., data exposure, account takeover)
- Any suggested fixes, if you have them

### Response timeline

| Step                              | Expected timeframe        |
| --------------------------------- | ------------------------- |
| Acknowledgement of your report    | Within 48 hours           |
| Initial assessment                | Within 1 week             |
| Fix developed and tested          | Within 2 weeks            |
| Public disclosure (if applicable) | After the fix is deployed |

We will keep you informed throughout the process.

---

## What Counts as a Security Issue

- **Authentication bypass**: accessing the platform without a valid college email
- **Authorisation flaws**: accessing or modifying another user's data
- **Row Level Security (RLS) bypass**: client-side code that circumvents database policies
- **Cross-Site Scripting (XSS)**: injecting scripts through user-generated content
- **SQL Injection**: crafting inputs that manipulate database queries
- **Data exposure**: leaking student emails, personal info, or private posts
- **CSRF or session issues**: forging requests on behalf of other users

---

## What Is NOT in Scope

- Bugs that only affect the reporter's own account with no broader impact
- Issues in third-party services (e.g., GitHub, Supabase) — report those to the respective vendor
- Social engineering attacks against team members
- Denial-of-service attacks against our GitHub Pages site
- The GitHub organization settings themselves (that's GitHub's responsibility)

---

## Student Data Privacy

Campus Hub takes student privacy seriously. We follow these principles:

- **Collect minimum data**: only what's needed for authentication and community features.
- **No real names required**: usernames are chosen by the user.
- **Email addresses are private**: never displayed publicly. Used only for authentication.
- **Comply with applicable regulations**: including India's Digital Personal Data Protection (DPDP) Act.
- **No data sold or shared**: we will never sell user data or share it with third parties.

---

## Supported Versions

| Version                | Supported                                     |
| ---------------------- | --------------------------------------------- |
| `main` branch (latest) | ✅ Yes                                        |
| Older commits          | ❌ No — please test against the latest `main` |

---

## Recognition

We appreciate security researchers who help keep Campus Hub safe. With your permission, we'll credit you in our release notes and on our contributors page.

Thank you for helping protect our campus community! 🛡️
