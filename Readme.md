# 🔬 pixel-lab

Welcome to my personal web development sandbox. This repository contains my current live projects, focused on clean layout design, responsiveness, and interactive workflows.

---

## 🚀 Live Projects

You can test and review my active projects instantly in your browser:


### Workflow automation for hackathon 
* 👥 **[Teamfinder](automations/low-code-hackathon)** (Case study)
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
  * **What it is:** A non-commercial portfolio project on AI-driven delivery management: I own the scope, decisions and quality gates; Claude drafts specifications, and Claude Code works as the engineering team.
  * **The Brief:** A clickable landing-page prototype for an AI-stylist app that helps women aged 20–35 discover outfits from fashion brands. Built to collect a waitlist and attract partner brands ahead of a stakeholder review (no backend, mocked data).
  * **Tech Stack:** HTML5, CSS3, JavaScript (ES6+), Cloudflare Pages, Claude Code.
  * **My Role & Implementation:**
    * **Product Governance:** Turned an informal brief into a versioned specification (v7.0 → v10.3) with user flows, edge cases, legal requirements and 28 testable acceptance criteria.
    * **Scope Management & Triage:** Guarded against scope creep: triaged engineering reviews, approved critical demo fixes (modal layout, double-submit protection, scroll lock) and cut non-essential features (Blog tab, header CTA).
    * **Agentic Workflow Management:** Wrote a governance framework for the AI coding agent: staged delivery, one commit per stage, no push without manual approval.
    * **Quality Assurance:** Owned all quality gates, rejected builds that missed criteria (e.g. a broken RU/EN switcher) and managed post-build changes (consent forms, layout).
  * **Highlights:** Fully responsive layout, deployed on Cloudflare's global CDN.


### 🎮 Pixel-Games (experiments)
You can play the live games directly in your browser:

* 🕹️ **[Dog-cat-game](https://dog-cat-game.pages.dev)** 
* 🕹️ **[Dog-adventure-game](https://dog-adventure.pages.dev/)**


---

## 📁 Repository Structure
* **`/automations/teamfinder-hackathon`** — case study.
* **`/landings/fashion-app`** — Source code for the Mylook landing page.
* **`/games`** — Source files and assets for my browser mini-games.

---

## 🛠 Tech Stack

* **Frontend:** Semantic HTML5, CSS3 (Flexbox/Grid), JavaScript (ES6)
* **Hosting & Tools:** Git, Cloudflare Pages

---
*© 2026. Built with a focus on clean code and great mobile UX.*
