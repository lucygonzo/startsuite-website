# **Website Brief**

*Every change needed to start-suite.com for launch. Organized by ticket so you can paste each into a Claude Code session and execute via SFTP. All tickets include copy, placement, acceptance criteria, and ID reference for the Master Deliverables List.*

*Last updated: April 22, 2026*

---

## **How to Use This Brief**

Each ticket below is self-contained. Copy the ticket into Claude Code, execute the changes, test locally, push via SFTP. Reagan or Lucy does a visual QA pass before marking done in the Master Deliverables List.

**Repo:** lucygonzo/startsuite-website **Stack:** React, TypeScript **Deploy:** SFTP to production after local test **Brand tokens:** Purple \#7B2FBE, Dark \#1A1A2E, Light Purple \#F3EAFC, White \#FFFFFF, Grey \#666666 **Primary typeface:** Inter

**Three kinds of tickets:**

* **Ship before launch (Tuesday April 28):** W-01 through W-17. These make up launch-day readiness.  
* **Ship in Week 2:** W-18 through W-26. Case studies, Journal, Operator's List.  
* **Ongoing maintenance:** W-27 and W-28. Catching drift as it emerges.

**If a ticket references copy, use the copy in the ticket verbatim unless Reagan or Lucy approves a change.** Copy is locked.

---

## **Tickets That Ship Before Launch (Due April 27 EOD)**

### W-01 · Hero Headline and Subhead

* **Page:** Homepage  
* **Current state:** Previous hero copy no longer matches positioning.  
* **Target state:** Hero displays the launch positioning.  
* **Copy:**  
  * Headline: Taste is your moat. Now act like it.  
  * Subhead: StartSuite is the brand operating system for founders and teams who don't have time to wing it. We built what this moment needs.  
* **Acceptance:** Have the “now act like it” written like it’s handwritten but classy. Hero section renders above the fold on desktop and mobile. Typography uses Inter Bold for headline at 72pt desktop / 40pt mobile, Inter Regular for subhead at 20pt desktop / 16pt mobile. Subhead is positioned below headline with 24px gap.

---

### W-02 · Tagline Label Above Hero

**Page:** Homepage

**Current state:** Label reads "VC-BACKED INSIGHT" or similar.

**Target state:** Label reads BRAND OPERATING SYSTEM · POWERED BY 46 CAPITAL

**Acceptance:** Label renders above headline in Inter Medium 12pt, uppercase, letter-spacing 0.1em, color purple \#7B2FBE. Centered with hero text. 16px bottom margin before headline.

---

### W-03 · "46Capital" Spacing Fix

**Pages:** Global grep

**Current state:** Some instances of the company name render as 46Capital without space.

**Target state:** Every instance renders as 46 Capital with space.

**Acceptance:** Grep confirms no occurrences of 46Capital (no space) across the repo. Manual spot-check of homepage, About, Services, footer.

---

### W-04 · Pricing Visibility Line on Homepage

**Page:** Homepage

**Target state:** One dedicated pricing line visible on the homepage, positioned between the hero section and the Brand HQ explainer section.

**Copy:** Foundations starts at $3K/month. Additional program options exist for startups and lean teams through partner networks. Full transparency on the intro call.

**Acceptance:** Line renders as a horizontal pill or bar on purple background \#7B2FBE with white text. 18pt Inter Medium on desktop. Centered. Full-width section with 80px top and bottom padding. Must be visible without scrolling past the fold on desktop. On mobile, allowed to sit just below the fold if necessary.

---

### W-05 · Timeline Visualization

**Deadline:** Today Wed 4/22 EOD or carry to Thu AM. Paired with Sarah's G-08. **Owner:** Lucy, Sarah produces the visual **Page:** Services or dedicated section on Homepage

**Target state:** Horizontal timeline showing the first 30 days of a StartSuite engagement with milestones at Day 1, Day 3, Day 7, Day 14, and Day 30\.

**Copy for milestones:**

* Day 1: Intake call, scope confirmation  
* Day 3: Brand HQ foundation stood up  
* Day 7: First competitive intelligence briefing  
* Day 14: Complete brand system live and shareable  
* Day 30: Full operating rhythm, dogfooding, first monthly review

**Section header:** What the first 30 days look like. **Section subhead:** Brand work stops being episodic. It starts compounding from Day 1\.

**Acceptance:** Timeline renders horizontally on desktop (1200px+), stacks vertically on mobile. Each milestone is a node with date label and description. Purple line connects nodes. Section header uses Inter Bold at 40pt, subhead Inter Regular at 18pt. Section sits on light purple \#F3EAFC background with 120px top and bottom padding.

---

### W-06 · Brand HQ Explainer Section

**Deadline:** Today Wed 4/22 or Thu AM. **Owner:** Lucy **Page:** Homepage

**Target state:** Three-panel section introducing Brand HQ.

**Section header:** Brand HQ is infrastructure, not a deliverable. **Section subhead:** One place for your identity, your competitive landscape, your audience, your creative context. Updating as your business evolves.

**Panel 1:**

* Title: Your identity in one place  
* Body: Your brand lives where your team can actually use it. Structured, queryable, always current. No more 80-page PDFs sitting unopened on a shared drive.

**Panel 2:**

* Title: Your competitive landscape, updated continuously  
* Body: Daily intelligence with the "so what" built in. Signal instead of noise. Every piece routes back to your brand strategy.

**Panel 3:**

* Title: Your creative, pulling from your own context  
* Body: PRD to dev-ready prototype in days, not months. Content briefs generated from your actual brand voice, not a generic template.

**Acceptance:** Three panels render in a row on desktop, stack on mobile. Each panel has a purple icon at top (icons to come from Sarah in G-06), then bold title in Inter Bold 24pt, then body in Inter Regular 16pt. Panels sit on white with light border. 40px internal padding. Section full-width with 120px top and bottom padding.

---

### W-07 · Testimonial Band

**Deadline:** Thu 4/23. Depends on G-10, G-11, G-12 from Sarah. **Owner:** Lucy, Sarah produces the three graphic panels **Page:** Homepage

**Target state:** Three-panel testimonial band with anonymized quotes.

**Panel 1 copy (Matt Lee anonymized):**

"I'm blown away. This is way beyond what I could have thought. Just how in depth it is, how well thought out it is, how there's such organization to it."

*— Co-founder, direct-to-consumer wellness brand*

**Panel 2 copy (Nicole anonymized):**

"I wish I had this on day one. We spent months doing interviews, competitive analysis, and brand background work that could have all been in one spot."

*— CMO, national industrial company*

**Panel 3 copy (Tracy):**

"Once everything is in one place, you don't need to learn new AI tools. You turn an agent loose on your own data and it just works."

*— Tracy Poole, Managing Partner, 46 Capital*

**Acceptance:** Three panels in a row on desktop, stack on mobile. Each panel has the quote in Inter Regular 18pt italic, followed by attribution in Inter Medium 14pt non-italic below. Attribution color is grey \#666666. Quote color is dark \#1A1A2E. Panels use the G-10, G-11, G-12 treatment graphics as backgrounds. Section has purple accent bar at top. 80px padding.

---

### W-08 · Services Page Rewrite

**Deadline:** Thu 4/23. **Owner:** Lucy **Page:** /services

**Target state:** Services page restructured around Brand HQ and the ongoing rhythm, not around traditional agency service categories.

**Page header:** Services **Page subhead:** Brand HQ is the product. Foundations is how we deliver it.

**Section 1: Foundations Tier**

* Header: Foundations  
* Subhead: $3,000 per month. The core offering.  
* Body: Brand HQ built for your company, maintained by our team. Weekly intelligence briefings. Monthly strategic reviews. Creative outputs pulled from your own context. Onboarded in under two weeks. Infinite revisions included.

**Section 2: Program Options**

* Header: Program Options  
* Body: Additional options exist for startups and lean teams through partner networks, accelerators, and ecosystem programs. If you're a founder on a tight budget but high-signal velocity, reach out and we'll find the right fit.

**Section 3: What happens in the first 30 days**

* Embed the W-05 timeline visualization here as well.

**Section 4: Who we work with**

* Header: Who we work with  
* Body: Founders who've outgrown DIY brand work but haven't yet built their first in-house team. CMOs inheriting brand chaos they didn't create. Operations leaders running teams that need infrastructure, not another retainer. Professional services firms and agencies are also welcome.

**Section 5: How to start**

* Header: How to start  
* Body: Tell us what you're building. If we're the right fit, Reagan reaches out within 24 hours with a calendar link. No pitch. No slide deck. Just a conversation.  
* CTA button: Tell us what you're building (routes to intake form)

**Acceptance:** Page structure is section-based. Each section has clear header, subhead if needed, body copy, and optional CTA. No sidebar. Mobile-first. Intake form CTA visible at top (sticky header) and bottom of page.

---

### W-09 · Primary CTA Routing

**Deadline:** Thu 4/23. **Owner:** Lucy \+ dev **Pages:** Global

**Target state:** Every primary CTA across the site routes to the Typeform intake form.

**CTA copy variants (use contextually):**

* Standard: Tell us what you're building  
* High-intent: Start your Brand HQ  
* Reagan-forward: Book a call with Reagan

**Intake form destination:** start-suite.com/intake (which redirects to the Typeform URL, or embeds it natively)

**Acceptance:** Every button labeled with one of the three CTA variants above routes correctly to the intake form. Footer link "Contact" routes to intake form. No "Book a Demo" buttons anywhere that route to Calendly directly (Calendly is a fallback, not a primary path).

---

### W-10 · Em-Dash Removal Sweep

**Deadline:** Fri 4/24. **Owner:** Lucy **Pages:** Global

**Target state:** No em-dashes anywhere on the site.

**Method:** Grep the codebase for em-dash character. Replace each instance with a period, comma, or semicolon based on context. Where a sentence with an em-dash becomes two sentences, that's usually the right move.

**Acceptance:** Grep returns zero matches for em-dash. Spot-check visual pass on homepage, About, Services, and any page with long-form copy.

---

### W-11 · About Page Founder Bios

**Deadline:** Fri 4/24. Depends on Saturday lock of B-01, B-02, B-03 (in Overall tab). **Owner:** Lucy \+ dev **Page:** /about

**Target state:** About page displays Reagan, Lucy, Tracy bios in order. Sarah is not on the public About page (internal only).

**Bio order and source:**

1. Reagan Renfroe (medium bio, 100 words, from Founder Bios \+ Boilerplate in Overall tab)  
2. Lucy Gonzalez (medium bio, 100 words, from Founder Bios \+ Boilerplate in Overall tab)  
3. Tracy Poole (medium bio, 80 words, from Founder Bios \+ Boilerplate in Overall tab)

**Layout:** Each founder has a photo (B-07 delivers these Saturday), name as Inter Bold 28pt, role as Inter Medium 18pt grey, bio below in Inter Regular 16pt.

**Tracy's framing note:** Include a small separator label above Tracy's bio reading INVESTOR in Inter Medium 12pt, letter-spacing 0.1em, purple \#7B2FBE. This clarifies he's not a co-founder.

**Acceptance:** Bios match Founder Bios \+ Boilerplate verbatim. Founder order is correct. Tracy is clearly labeled as investor. No mention of any advisor or fourth person.

---

### W-12 · One-Page PDF

**Deadline:** Fri 4/24. Paired with Sarah's G-14. **Owner:** Lucy writes, Sarah designs **Page:** Downloadable from Services page

**Target state:** One-page PDF at start-suite.com/assets/startsuite-overview.pdf that a prospect can forward to their team for internal justification.

**Content structure:**

* Top: StartSuite wordmark, purple bar, tagline Brand operating system for founders and teams  
* Section 1 (one paragraph): What StartSuite is and what Brand HQ does  
* Section 2 (bulleted): What Brand HQ delivers (5 bullets, from press release proof points)  
* Section 3 (one paragraph): Who we work with and how we're structured  
* Section 4 (one line \+ CTA): Pricing and how to start  
* Footer: Contact, start-suite.com, 46 Capital credit

**Acceptance:** PDF is downloadable from Services page with a Download overview PDF link. File is one page, US Letter portrait orientation, 300 DPI print-safe. Uses the brand palette. Sarah designs, Lucy approves content.

---

### W-13 · Meta Descriptions and OG Tags

**Deadline:** Sat 4/25. Depends on Sarah's G-15, G-16, G-17. **Owner:** Lucy \+ dev **Pages:** Every page, especially Homepage, Brand HQ, Services, About

**Target state:** Every page has accurate meta description and OG tags for social sharing.

**Meta descriptions by page:**

* Homepage: StartSuite is the brand operating system for founders and growing teams. Brand HQ centralizes identity, competitive intelligence, audience, and creative in one structured system. Foundations $3K/month. Backed by 46 Capital.  
* Brand HQ: Brand HQ is infrastructure for your brand. Structured, queryable, always current. Replaces the scattered decks, Slack threads, and stale brand guides with one living system.  
* Services: Foundations tier at $3K/month includes Brand HQ built for your company, weekly intelligence, and monthly strategic reviews. Program options for lean teams available through partner networks.  
* About: StartSuite is co-founded by Reagan Renfroe and Lucy Gonzalez. Reagan leads commercial from Tulsa. Lucy leads product from Nashville after relocating from San Francisco. 46 Capital is the lead investor.

**OG images:** Sarah delivers three purple-branded OG images (G-15 homepage, G-16 Brand HQ, G-17 Services). Each is 1200x630px.

**OG tags:** Each page has og:title, og:description, og:image, og:url, og:type (website), and Twitter card equivalents.

**Acceptance:** Link preview tested on LinkedIn, Twitter/X, and Slack for homepage, Brand HQ, Services, About. All render correctly with the right image and description.

---

### W-14 · Intake Form Build and Funnel Test

**Deadline:** Sat 4/25. Critical path. **Owner:** Lucy **Destination:** start-suite.com/intake or embedded on multiple pages

**Target state:** Typeform intake form built with seven fields, routing submissions to Reagan via email, connected to confirmation screen.

**Fields (seven, in order):**

1. Name (required, short text)  
2. Company (required, short text)  
3. Role (required, short text)  
4. Stage (required, dropdown: Pre-seed / Seed / Series A / Series B+ / Not raised / Established)  
5. What are you building? (required, one sentence, long text)  
6. Top 1-2 creative or brand challenges (required, long text)  
7. How did you hear about StartSuite? (optional, short text)

**Confirmation screen copy:**

Thanks for reaching out. Reagan will review within 24 hours and send you a calendar link if we're a fit. On the call, we'll walk through where your brand is today and what StartSuite would actually look like for you. No pitch. No slide deck. Just a conversation.

**Email routing:** Every submission sends an email to Reagan's inbox with all field values. Subject line format: \[Intake\] {Company} — {Role} — {Name}

**End-to-end test:** Submit a real form with test data. Verify Reagan receives the email within 2 minutes. Verify confirmation screen displays correctly on mobile and desktop. Verify the form is accessible (keyboard navigation, screen reader labels).

**Acceptance:** Form submits successfully. Email arrives at Reagan's inbox. Confirmation screen displays correctly. Mobile responsive. No broken validation. The funnel has been tested end-to-end at least once before launch day.

---

### W-15 · Operator's List Email Capture

**Deadline:** Sat 4/25. **Owner:** Lucy \+ dev **Pages:** Homepage footer, bottom of Journal section (in Week 2\)

**Target state:** Secondary CTA on the homepage footer and select other pages captures email addresses for founders who want StartSuite's thinking without committing to an intake call.

**Label copy above the field:** The Operator's Brief **Description copy:** Monthly. Thinking from the StartSuite team. Client intelligence patterns, brand decisions we're working through, what we're learning in public. No pitch. Unsubscribe anytime. **Field placeholder:** Your email **Button copy:** Get the Operator's Brief **Confirmation message:** You're on the list. First issue hits in May.

**Storage:** Email addresses captured to Mailchimp, ConvertKit, or whatever email tool Lucy picks. Backend confirmed working before launch.

**Acceptance:** Form captures email, triggers confirmation message, email is added to the list backend. Tested end-to-end with a real email address.

---

### W-16 · "Currently Accepting Limited Engagements" Language

**Deadline:** Sat 4/25. **Owner:** Lucy **Pages:** Homepage, Services page

**Target state:** One line on the homepage and the Services page establishes posture of intentional scarcity without creating friction.

**Copy (place on homepage between testimonial band and footer, and on Services page above the CTA):**

Currently accepting a limited number of founder engagements. If StartSuite is the right fit, Reagan will reach out within 24 hours of your intake.

**Acceptance:** Line renders in Inter Regular 16pt, dark color, centered on full-width section with purple accent or light purple background. Appears in the exact copy above on homepage and Services page.

---

### W-17 · Footer Update

**Deadline:** Sat 4/25. **Owner:** Lucy **Pages:** Global

**Target state:** Footer includes the Operator's Brief email capture (W-15), correct company information, social links, contact link, and a BACKED BY 46 CAPITAL label.

**Footer structure:**

* Column 1: StartSuite wordmark, one-line tagline (Brand operating system for founders and teams), small BACKED BY 46 CAPITAL label in purple  
* Column 2: Quick links (Homepage, Brand HQ, Services, About, Journal, Case Studies)  
* Column 3: Contact (intake form CTA, Reagan's email for press inquiries, link to press kit)  
* Column 4: The Operator's Brief email capture (W-15)  
* Bottom bar: Copyright line, social links (LinkedIn, Twitter/X, YouTube), privacy policy, terms

**Acceptance:** Footer renders consistently across all pages. Links all work. Email capture functional. Social links go to the right accounts.

---

## **Tickets That Ship In Week 2 (Thursday May 7 or Friday May 8\)**

The goal here is to give launch follow-up a second news moment. Case studies and the Journal ship together as "Week 2 expansion" — this is the new angle for Tier 3 journalist follow-ups.

### W-18 · Case Studies Section Structure

**Deadline:** Wed 5/6 (for Thu 5/7 ship). **Owner:** Lucy \+ dev **Pages:** New section at /case-studies

**Target state:** New section of the site holding three case study pages plus an index page.

**Index page at /case-studies:**

* Header: Case Studies  
* Subhead: Real work, real clients, real results. Anonymized to protect commercial context.  
* Three cards, each linking to an individual case study page. Each card has a hero image (Sarah produces), client archetype label, key metric, and read-time estimate.

**Individual case study pages at /case-studies/\[slug\]:**

* URL slugs: /case-studies/industrial-cmo, /case-studies/wellness-founder, /case-studies/operations-lead  
* Each page: hero image, client archetype as title, 3-5 minute read, structured as Problem / The Work / The Trajectory / Pull Quote / What Brand HQ Did

**Acceptance:** Section renders. Three case studies linked from index. Each individual page loads correctly. Pull quotes use approved anonymized language from the Client Roster.

---

### W-19 · Case Study: Industrial CMO

**Deadline:** Wed 5/6 (content). Thu 5/7 visual polish. **Owner:** Lucy writes, Reagan approves, Sarah designs hero **Client:** Nicole, anonymized as "CMO, national industrial company"

**Problem (150 words):** A CMO inherits a sprawling brand that exists in fragments. Multiple business units, each with their own messaging. A brand guide no team uses. Competitive intelligence happens manually when it happens at all. Deliverables from her existing agency arrive stale. She needs infrastructure, not another retainer.

**The Work (200 words):** Over a six-day foundation sprint, StartSuite built Brand HQ with unified brand strategy across business units. Competitive landscape was documented and automated weekly updates set up. Messaging pillars locked. Voice tested against real customer conversations. The system went live with her team on Day 7\.

**The Trajectory (150 words):** What took previous teams months now takes days. Her team queries Brand HQ instead of asking her. Weekly competitive briefings arrive with the "so what" built in. She's replaced three vendor relationships and freed up approximately $40K/year in ad hoc creative spend that was going to fragmented freelancers.

**Pull Quote:**

"I wish I had this on day one. We spent months doing interviews, competitive analysis, and brand background work that could have all been in one spot."

**What Brand HQ Did (short):** Unified identity. Weekly competitive intelligence. Single source of truth queried by the whole team. Replaced multiple scattered vendor relationships. Foundations tier, six-day onboarding.

**Acceptance:** Page reads in 3-5 minutes. Tone is factual, not boastful. No identification of Duininck by name. Pull quote uses approved language verbatim. Reagan reviews and approves before publish.

---

### W-20 · Case Study: DTC Wellness Co-Founder

**Deadline:** Wed 5/6 (content). Thu 5/7 visual polish. **Owner:** Lucy writes, Reagan approves, Sarah designs hero **Client:** Matt Lee, anonymized as "Co-founder, direct-to-consumer wellness brand"

**Problem (150 words):** A wellness brand co-founder cares deeply about brand but has a tiny team and can't justify an agency retainer. The brand voice lives in his head. New hires get trained through conversation rather than documentation. Creative work is produced by freelancers, each of whom needs a fresh onboarding every engagement.

**The Work (200 words):** StartSuite captured the brand in structured form over two weeks. Voice, values, audience definitions, messaging pillars, competitive landscape. Brand HQ made the co-founder's thinking queryable by his team and future hires. Creative briefs now generate from Brand HQ context, so freelancers no longer need a 30-minute intro call for every engagement.

**The Trajectory (150 words):** What was in his head is now in the system. His team references Brand HQ without asking him. New creative engagements spin up in a fraction of the time. He's been able to stay focused on the product and the business without brand being the constant interruption.

**Pull Quote:**

"I'm blown away. This is way beyond what I could have thought. Just how in depth it is, how well thought out it is, how there's such organization to it."

**What Brand HQ Did (short):** Captured founder voice in structured form. Replaced repeated freelancer onboarding. Made the brand queryable by the whole team. Foundations tier.

**Acceptance:** Page reads in 3-5 minutes. No identification of Steadwell by name. Mike's approval received before publish.

---

### W-21 · Case Study: Operations Lead

**Deadline:** Wed 5/6 (content). Thu 5/7 visual polish. **Owner:** Lucy writes, Reagan approves, Sarah designs hero **Client:** Nicholane, anonymized as "Operations lead, consumer brand"

**Problem (150 words):** A three-person operations team needed to rebrand a live product serving an active user base. No budget for an agency. Previous brand guide was an 80-page PDF that nobody referenced. Each team member had a different mental model of the brand. Shipping anything creative took 10x longer than it should.

**The Work (200 words):** StartSuite captured the brand foundations in Brand HQ over a week. Then the team used Brand HQ as the single source of truth to execute a full rebrand in under two weeks. One design engineer shipped a dev-ready prototype from PRD in a matter of days, with the brand context already queryable. What would have required a five-person agency team and months of meetings ran through three internal operators in 14 days.

**The Trajectory (150 words):** The rebrand shipped on time. The team works from Brand HQ, not from the old PDF. New team members onboard by reading the system rather than sitting through 90-minute brand orientations. Shipping speed has increased across the entire creative function.

**Pull Quote:**

"I've been waiting years for a team member to willingly share and reference a brand guide."

**What Brand HQ Did (short):** Enabled a three-person team to rebrand a live product in under two weeks. PRD to dev-ready prototype in days. Replaced an 80-page PDF nobody read with a system the team actually uses.

**Acceptance:** Page reads in 3-5 minutes. No identification of Grouped by name. No mention of user count. Nicholane's approval received before publish.

---

### W-22 · Journal Section Structure

**Deadline:** Wed 5/6. **Owner:** Lucy \+ dev **Pages:** New section at /journal

**Target state:** Journal section with an index page and individual post pages.

**Index page at /journal:**

* Header: Journal  
* Subhead: Thinking from the StartSuite team. Client patterns, brand decisions, the work we're doing in public.  
* Post cards in reverse chronological order: title, author (Reagan or Lucy), date, read-time estimate, first 20 words of body.

**Individual post pages at /journal/\[slug\]:**

* Each page: title, author, date, hero image (optional), body in long-form prose, share buttons, "Back to Journal" link at bottom, Join the Operator's Brief CTA at bottom

**Acceptance:** Section renders. Index page lists posts in reverse chronological order. Individual pages load correctly. Markdown or MDX supported for post content.

---

### W-23 · Journal Launch Post

**Deadline:** Thu 5/7. **Owner:** Reagan writes, Lucy edits **Post:** /journal/why-we-built-startsuite

**Title:** Why we built StartSuite **Subhead:** The gap between what agencies sell and what founders need has gotten wider every year. This is what we built for it. **Author:** Reagan Renfroe **Date:** May 7, 2026

**Body (800-1000 words):** Long-form version of the Day 0 launch post. Walks through Reagan's decade in agencies, the pattern he kept seeing, why he and Lucy built Brand HQ, and what launch week has already revealed. This is the first Journal post, and it sets the tone for how Journal content should read: personal, specific, grounded in real observation, no corporate voice.

**Acceptance:** Post reads in 4-6 minutes. Voice matches Reagan's voice across LinkedIn and the press release. No em-dashes. Published Thursday May 7\.

---

### W-24 · Journal Post: Lucy's Taste Manifesto

**Deadline:** Thu 5/7. **Owner:** Lucy writes **Post:** /journal/taste-is-the-moat

**Title:** Taste is the moat **Subhead:** In a market where AI makes surface-level creative free, the differentiator is the sensibility of the team applying the tools. **Author:** Lucy Gonzalez **Date:** May 7, 2026

**Body (700-900 words):** Long-form version of Lucy's taste thesis. Why she left agency work to build Brand HQ. What taste actually means in a product context. How Brand HQ is designed to let taste compound instead of leak. The argument for human craft in an AI-accelerated world.

**Acceptance:** Post reads in 4-5 minutes. Voice matches Lucy's voice. No em-dashes. Published Thursday May 7\.

---

### W-25 · Homepage Updates for Case Studies and Journal Launch

**Deadline:** Thu 5/7. **Owner:** Lucy \+ dev **Pages:** Homepage

**Target state:** Homepage adds two new sections reflecting Week 2 additions.

**Section 1: Case Studies teaser** (above the testimonial band)

* Header: See it in the work.  
* Subhead: Three case studies showing what Brand HQ actually delivers.  
* CTA: Browse case studies routing to /case-studies

**Section 2: Journal teaser** (below the testimonial band, above the footer)

* Header: Thinking from the team.  
* Subhead: How we think about brand, business, and building in public.  
* Two or three most recent Journal post cards  
* CTA: Read the Journal routing to /journal

**Acceptance:** Both sections render on homepage. Links work. CTAs match the design system.

---

### W-26 · Press Kit Page

**Deadline:** Thu 5/7. **Owner:** Lucy \+ Sarah **Page:** /press

**Target state:** Simple press kit page with downloadable assets for journalists.

**Contents:**

* Press release (PDF, live link)  
* Founder photos (Reagan, Lucy) at high resolution  
* StartSuite logo pack (wordmark, icon, various colors)  
* Boilerplate (one-line, one-paragraph, one-page versions)  
* Case study summaries linked  
* Contact: Kate Lynn at 46 Capital for press inquiries

**Acceptance:** Every asset downloadable. Contact clearly displayed. Page accessible from footer.

---

## **Tickets That Are Ongoing Maintenance**

### W-27 · Biweekly Em-Dash Sweep

**Deadline:** Ongoing, every other Friday starting May 8\. **Owner:** Lucy

**Process:** Grep the codebase for em-dash character. Replace each instance. 20 minutes every two weeks. Catches drift from new content additions.

---

### W-28 · Journal Publishing Cadence

**Deadline:** Ongoing, starting May 14\. **Owner:** Lucy schedules, Reagan or Lucy writes

**Cadence:** One Journal post per week during Weeks 2 and 3 of each month. Additional posts as real work produces them. No posts per the "capture don't invent" rule from the Philosophy. Skipping a week is better than publishing something hollow.

**Backlog source:** Founder video sessions (monthly) produce 1-2 long-form drafts per session. Guest Series episodes produce at least one Journal-worthy post each. Real client decisions and patterns, anonymized, produce the Decision Log series.

---

## **Dependencies Summary**

Tickets that block other tickets. Track these in the Master Deliverables List.

| Blocked By | Blocks |
| :---- | :---- |
| G-10, G-11, G-12 | W-07 testimonial band |
| G-08 | W-05 timeline visualization |
| G-15, G-16, G-17 | W-13 meta/OG tags |
| G-14 | W-12 one-page PDF |
| B-01, B-02, B-03 | W-11 About page bios |
| B-07 photography | W-11 About page |
| Client approvals | W-19, W-20, W-21 case studies |

---

## **Testing Checklist Before Launch**

Before Monday April 27 EOD, Lucy (or the developer) verifies all of the following.

**Core functional:**

* Homepage loads under 2 seconds  
* Intake form submits and routes to Reagan  
* Operator's Brief email capture works  
* All primary CTAs route correctly  
* Mobile responsive on iPhone and Android  
* Desktop responsive at 1280px, 1440px, 1920px

**Copy check:**

* Zero em-dashes anywhere on the site  
* All 46Capital instances are now 46 Capital  
* Pricing line displays correctly  
* Testimonial band uses approved anonymized language  
* About page bios match Overall tab Founder Bios \+ Boilerplate verbatim

**Visual check:**

* All purple colors match \#7B2FBE  
* Inter typeface loading correctly on all pages  
* Sarah's graphics display at correct resolutions  
* Logo renders correctly on light and dark backgrounds

**Launch-day readiness:**

* /news URL ready for press release (can be hidden until 6 AM CT Tuesday)  
* Meta/OG tags tested on LinkedIn, Twitter/X, Slack  
* Press kit page ready (even if not linked yet)  
* Analytics (if any) running

