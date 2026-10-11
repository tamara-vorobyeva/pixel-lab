<!--
HOW TO USE THIS TEMPLATE
- Copy this file into a new landing-page repo as README.md.
- Replace every [bracketed] placeholder with real project details.
- Delete this comment block before publishing — it is not meant to render on GitHub.
- Keep the "What I Did Myself vs What I Did With AI" section accurate and specific:
  it is the section recruiters and tech leads will read most closely.
- Never fill a placeholder with an invented number or claim — leave it as [X] until
  you have the real figure, or remove the line.
-->

# 🎨 [Landing Page Project Name] — Landing Page Specification & AI-Orchestrated Prototype

**📌 Business Case Overview**
* The client, **[Client / Product Name]**, needed a [landing page / interactive prototype] to [business goal — e.g., validate a new product concept, generate a waitlist, attract B2B partners] ahead of [milestone — e.g., a stakeholder review, an investment decision, full development].
* [Optional second bullet — market context: e.g., "No working application exists yet; this prototype lets stakeholders evaluate the intended user experience before engineering resources are committed."]

**🎯 Project Objectives**
* Translate an informal business brief into a build-ready technical specification covering user flows, edge cases, data requirements, and legal/compliance constraints.
* Validate the feasibility of [feature set], including AI-powered features such as [X], within a static front-end prototype with no backend.
* Produce a working, presentable prototype for [internal stakeholder review / usability testing / investor demo] within [X] specification iterations.

**🔗 Quick Links**
🛠 **[View the full specification](docs/spec.md)**
🖥 **[Live prototype](#)** — *replace with the published link once the prototype is hosted*
📋 **[AI implementation guide](CLAUDE.md)** — the governance file used to direct the coding agent

---
**🧰 Tools & AI Stack**
* **Requirements & specification:** Claude (chat) — iterative requirements discovery, structuring an informal brief into a versioned technical specification, surfacing edge cases and legal/compliance gaps before implementation.
* **Implementation:** Claude Code — staged, reviewable code generation (HTML5, CSS3, vanilla JavaScript — no frameworks) against the approved specification and a project-level governance file (`CLAUDE.md`).
* **Design system:** [e.g., a Pantone-derived colour palette, WCAG AA contrast verification, a defined typeface and spacing scale].
* **Version control:** Git — one commit per implementation stage, tagged before each stakeholder review.
---

**🧭 Workflow: From Business Brief to Working Prototype**
* **Requirements discovery.** Reviewed the initial brief against the real user flow and surfaced [X] missing edge cases, technical-feasibility risks, and legal gaps (e.g., consent requirements, ad disclosure) before any code was written.
* **Iterative specification.** Ran [X] rounds of structured Q&A to close every open question; every decision was versioned and traceable in a single document (`docs/spec.md`), with a changelog recording what changed and why.
* **Engineering review triage.** Took a technical lead's review and sorted every comment into **Must have / Nice to have / Drop**, with a stated business rationale for each — rather than implementing every suggestion by default.
* **Governed implementation.** Defined a project-level instruction file (`CLAUDE.md`) so the coding agent builds strictly against the approved specification, in [X] reviewable stages, with a commit after each one.
* **Acceptance criteria.** Defined [X] measurable, testable acceptance criteria (accessibility, performance, responsive behaviour, legal disclosures) *before* implementation began, not after.

---

**👩‍💼 What I Did Myself**
* Defined the business goal, target audience, and success criteria for the landing page.
* Reviewed every AI-drafted section of the specification critically — challenged ambiguous or conflicting requirements and made the final call on trade-offs (e.g., [scoped out a feature / changed a user flow] to keep the prototype realistic for a first review).
* Triaged the technical lead's review comments into Must have / Nice to have / Drop, with a business rationale for each decision.
* Supplied the inputs no AI can invent: brand assets, partner terms, legal copy, and final sign-off on every open question before implementation started.
* Directed the overall workflow — sequencing, versioning discipline, commit cadence, and when to move from specification to implementation.

**🤖 What I Did With AI**
* Drafted and iteratively revised the technical specification (user flows, data schemas, acceptance criteria) from an informal brief.
* Generated the front-end prototype (HTML/CSS/JS) stage by stage, strictly scoped to the approved specification.
* Checked the colour system against WCAG AA contrast requirements and resolved accessibility details (focus states, modal behaviour, keyboard navigation).
* Surfaced technical-feasibility risks (e.g., what a static prototype can and cannot simulate for AI-powered features) and legal/compliance flags for my review.
* Produced supporting project artefacts: a sitemap diagram, the `CLAUDE.md` governance file, and a triaged review backlog.

---

**📐 Key Decisions & Trade-offs**
* **[Decision 1 — e.g., "Scoped the prototype down from an interactive catalogue to a conversion-focused landing page"]** — rationale: [business reason].
* **[Decision 2 — e.g., "Deferred the blog section to a backlog instead of shipping it with placeholder content"]** — rationale: [reason].
* **[Decision 3 — e.g., "Kept the primary CTA out of the sticky header on mobile"]** — rationale: [reason]; flagged for validation in usability testing.

**✅ Outcomes**
* A build-ready specification covering [X] user flows, [X] documented edge cases, and [X] acceptance criteria.
* A working static prototype meeting [e.g., Lighthouse Accessibility ≥ 90, Performance ≥ 80] *(fill in once measured)*.
* [X] open items logged explicitly for the client rather than silently assumed.

---

**📁 Repository Structure**
* `README.md` — Project overview and executive summary *(this file)*.
* `docs/spec.md` — Full technical specification, versioned with a changelog.
* `CLAUDE.md` — Governance file directing the AI coding agent's implementation.
* `/img` — Brand and placeholder image assets.
* `index.html`, `style.css`, `script.js` — Prototype source.
* `[review-backlog.md]` — Triaged technical-review comments *(optional)*.

**🖼 Preview**
*Add a screenshot or short GIF of the live prototype here once available, e.g.:*
`![Landing page preview](docs/preview.png)`

---

*This README documents the orchestration process behind the prototype, not only its output — it reflects a PMO / AI-enabled delivery workflow rather than a software-engineering one.*
