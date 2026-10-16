# 🔬 pixel-lab

Welcome to my personal web development sandbox. This repository contains my current live projects, focused on clean layout design, responsiveness, and interactive workflows.

---

## 🚀 Live Projects

You can test and review my active projects instantly in your browser:


### Workflow automation for hackathon 
* 👥 **[Teamfinder](<link to the public repository>)** (Case study)
  * **What it is:** An independent low-code tool for team formation at the Ostrovok hackathon. I own the scope, decisions and quality gates; Claude drafts the specification, and Claude Code implements it.
  * **The Brief:** Help solo participants and teams find each other before team formation closes, with no backend or hosting and on a phone without VPN.
  * **Tech Stack:** Google Forms, Google Sheets, Google Apps Script, Node.js tests, Claude, Claude Code.
  * **My Role & Implementation:**
    * **Product Governance:** Versioned specification (v1.0 → v3.26) with a risk register, RACI, acceptance criteria and authorship labels for every decision.
    * **Scope Management:** Chose Forms + Sheets over four alternatives; kept a web catalogue and a Telegram Mini App on the roadmap.
    * **Agentic Workflow Management:** Governance file for the coding agent: "don't invent – stop and ask", no commits without approval.
    * **Quality Assurance:** Documentation review before hand-over: shared glossary, contradictions resolved, live forms checked against the specification.
  * **Highlights:** No Google sign-in; the public table never shows raw responses; deploys in about 40 minutes; 47 automated tests pass.

### 📱 Web Applications & Landings
* 👗 **[Mylook365]([https://mylook365.de](https://www.mylook365.de/)** (Live Site)
  * **What it is:** A non-commercial portfolio project demonstrating modern AI-driven delivery management. The project showcases a workflow where a human owner drives the scope, decisions, and quality gates, while Claude drafts specifications and Claude Code operates as the engineering team.
  * **The Brief:** A clickable landing-page prototype for an AI-stylist app targeting women aged 20–35 to discover outfits from fashion brands. Designed to build a waitlist and attract partner brands ahead of a stakeholder review (no backend, fully mocked data).
  * **Tech Stack:** HTML5, CSS3, JavaScript (ES6+), Cloudflare Pages, Claude Code (AI Engineering).
  * **My Role & Implementation:**
    * **Product Governance:** Transformed the initial informal brief into a rigorous, versioned technical specification (v7.0 → v10.3), detailing user flows, edge cases, legal compliance, and 28 testable acceptance criteria.
    * **Scope Management & Triage:** Acted as the gatekeeper against scope creep; triaged lead-engineer reviews, implementing critical demo fixes (modals layout, double-submit protection, scroll locks) while ruthlessly cutting non-essential features (Blog tab, header CTA).
    * **Agentic Workflow Management:** Wrote a custom governance framework for the AI coding agent to enforce staged delivery, strict one-commit-per-stage rules, and zero-push permissions without manual approval.
    * **Quality Assurance:** Handled all quality gates personally, rejecting builds that missed criteria (such as a broken RU/EN language switcher) and managing critical post-build changes (consent forms, layout adjustments).
  * **Highlights:** Fully responsive layout built under rigorous engineering constraints, deployed via Cloudflare CDN for lightning-fast worldwide delivery.


### 🎮 Pixel-Games (experiments)
You can play the live games directly in your browser:

* 🕹️ **[Dog-cat-game](https://dog-cat-game.pages.dev)** 
* 🕹️ **[Dog-adventure-game](https://dog-adventure.pages.dev/)**


---

## 📁 Repository Structure

* **`/landings/fashion-app`** — Source code for the Mylook landing page.
* **`/games`** — Source files and assets for my browser mini-games.

---

## 🛠 Tech Stack

* **Frontend:** Semantic HTML5, CSS3 (Flexbox/Grid), JavaScript (ES6)
* **Hosting & Tools:** Git, Cloudflare Pages

---
*© 2026. Built with a focus on clean code and great mobile UX.*
