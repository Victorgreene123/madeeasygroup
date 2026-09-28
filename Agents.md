# Made Easy Homes & Properties

## Website Revamp — Design & Engineering Brief

### 1. Project Overview

We are redesigning and rebuilding the website for **Made Easy Homes & Properties**, the real-estate division of Made Easy Group.

The existing website contains useful business information, but the UX/UI is dated and the information is not presented in a strong modern property-buying experience.

The objective is to create a **clean, premium, trustworthy and conversion-focused real-estate website** that:

* Clearly communicates what Made Easy Homes & Properties does
* Makes the available estates easy to discover
* Makes property information easy to understand
* Highlights flexible payment plans
* Builds trust around the company and its properties
* Encourages users to book inspections and contact the company
* Works exceptionally well on mobile
* Has a strong foundation for SEO
* Can later be connected to real production data/CMS/admin functionality

### Important

This is the **first presentation-ready version** of the redesign.

Do not wait for additional information from the company before building.

Use the real information extracted from the current website wherever available.

Where information is missing, use clearly identifiable placeholder/demo data. **Do not invent factual claims about properties.**

---

# 2. Business Information

## Company

**Made Easy Homes & Properties**

Positioning from the existing website:

> Your trusted partner in affordable and secured property ownership.

The company provides land and property solutions across Lagos State and specializes in gated and fenced estates in strategic locations.

The existing website states:

* 10+ years of experience
* 1,000+ happy clients
* 10+ estate locations
* 4 cities
* 100% client satisfaction

The company describes its properties as:

* Gated
* Fenced
* Strategically located
* Government approved/documented
* Available with flexible payment plans

Existing stated services:

* Land Sales
* Property Development
* Real Estate Brokerage
* Property Consultation
* Estate Management

---

# 3. Brand Positioning

The website should communicate:

**Trust**

Users are considering a significant financial/property purchase. The interface should feel established and credible.

**Accessibility**

The company emphasizes making property ownership easier and more accessible.

**Security**

Gated/fenced estates and documentation are important parts of the existing positioning.

**Professionalism**

The new design should feel like a modern property developer rather than a generic local business website.

**Aspiration**

The website should sell the feeling of owning property while remaining grounded and trustworthy.

---

# 4. Target User

Primary users are prospective property buyers looking for:

* Land
* Estate properties
* Affordable property options
* Flexible payment plans
* Investment opportunities
* Strategically located properties around Lagos

The website should accommodate both:

### Users who already know what they want

They should be able to quickly find an estate and contact the company.

### Users who are still researching

They should be able to understand:

* Why Made Easy
* Available estates
* Locations
* Payment options
* Buying process
* Company credibility
* How to contact/book an inspection

---

# 5. Design Direction

The design should be:

* Modern
* Premium
* Clean
* Spacious
* Editorial
* Trustworthy
* Photography-driven
* Mobile-first
* Conversion-focused

Avoid the typical cluttered Nigerian real-estate aesthetic:

* Excessive gradients
* Too many colors
* Excessive icons
* Huge amounts of text
* Too many competing CTAs
* Cheap-looking cards
* Excessive animations
* Generic stock imagery where real imagery is available

The design should feel closer to a **modern property developer / real-estate investment company**.

---

# 6. Brand Colors

Use the following extracted brand palette.

## Primary

```css
--color-primary: #0E6F3B;
```

Forest Green.

Use for:

* Primary CTA buttons
* Brand elements
* Important highlights
* Navigation accents
* Links
* Property UI accents

## Accent

```css
--color-accent: #22C55E;
```

Use sparingly for:

* Active states
* Small highlights
* Indicators
* Selected controls
* Success states

Do NOT allow this bright green to dominate the interface.

## Deep Green

```css
--color-deep-green: #164E48;
```

Use for:

* Dark sections
* Footer
* Secondary CTA sections
* Large brand sections

## Teal Overlay

```css
--color-overlay: #1F7A72;
```

Use primarily for:

* Image overlays
* Hero treatments
* Subtle gradients

## Main Text

```css
--color-text: #111827;
```

## Secondary Text

```css
--color-text-muted: #4B5563;
```

## Border

```css
--color-border: #E2E8F0;
```

## Light Background

```css
--color-background: #F8FAFC;
```

## White

```css
--color-white: #FFFFFF;
```

---

# 7. Typography

Use a modern sans-serif typeface.

Recommended:

* Inter
* Manrope
* Plus Jakarta Sans

Typography should have:

* Strong large headlines
* Comfortable body text
* Clear hierarchy
* Generous line-height

Avoid overly decorative fonts.

Suggested hierarchy:

```text
Display
64–72px desktop

H1
48–56px

H2
36–44px

H3
24–30px

Body
16–18px

Small
14px
```

Adjust responsively for mobile.

---

# 8. Navigation

Desktop navigation:

```text
MADE EASY
Homes & Properties

Properties
Estates
Why Made Easy
About
Gallery
Contact

                     [ Book Inspection ]
```

The logo should use the actual Made Easy logo.

Navigation should be:

* Clean
* Sticky or intelligently persistent
* White/light background
* Clear active state
* Strong mobile menu

Primary navigation CTA:

**Book Inspection**

Secondary navigation CTA can be:

**Explore Estates**

---

# 9. Homepage

## Section 1 — Hero

The hero should immediately communicate:

### Suggested headline

**Own Property. Build Your Future.**

Supporting text:

> Secure, strategically located estates across Lagos with flexible payment plans designed to make property ownership easier.

Primary CTA:

**Explore Estates**

Secondary CTA:

**Calculate Your Plan**

Use a high-quality real estate/property image.

Use a subtle dark/teal overlay when necessary to maintain text readability.

The hero should NOT be overcrowded.

---

# 10. Trust Statistics

Immediately after the hero:

```text
10+
Estate Locations

1,000+
Happy Clients

10+
Years Experience

4
Cities
```

Use clean typography rather than excessive graphical decoration.

---

# 11. Featured Estates

Section heading:

**Find a Place That Fits Your Plans**

Supporting copy:

> Explore our estates across strategic locations and discover a property option that works for you.

Display property cards.

Each card should support:

* Image
* Estate name
* Location
* Short description
* Key property feature
* Payment-plan indicator
* CTA

Example:

```text
CITY OF JOY ESTATE

📍 Magboro

Flexible payment plans
Gated & fenced

[ View Estate ]
```

Do not invent price information if it has not been extracted.

Use:

**Price available on enquiry**

or omit pricing until actual estate data is available.

---

# 12. Current Estate Data

The existing website provides the following estate names:

1. City of Joy Estate — Magboro (Between Berger and Prayer City)
2. Goshen Estate — Iju - Atan
3. Divine Estate — Atan / Iju
4. Fountain of Glory Estate Lagos — Agbowa, Ikorodu Phase 1
5. Fountain of Glory Estate Lagos — Agbowa, Ikorodu Phase 2
6. Beulah Estate — Atan / Obere
7. City of David Phase 1 — Atan (Akoore)
8. City of David Phase 2 — Atan (Akoore)
9. Canaan Garden Estate Lagos — Itokin, Epe
10. Grace Land Estate — Akinde Town, Atan-Ota

Create these as structured data rather than hardcoding them directly into UI components.

Example conceptual structure:

```ts
type Estate = {
  id: string
  name: string
  location: string
  description?: string
  image?: string
  plotTypes?: string[]
  paymentPlans?: string[]
  features?: string[]
  price?: number
}
```

Missing fields should remain optional.

---

# 13. Why Made Easy

Section heading:

**Why Made Easy?**

Six feature cards:

### Secure Ownership

Government approval and property documentation.

### Flexible Payment

Outright, 12-month and 24-month installment options.

### Strategic Locations

Properties in developing locations around Lagos.

### 10+ Years Experience

A decade of experience in property solutions.

### Professional Service

Dedicated customer support.

### After-Sales Support

Support continues after purchase.

Use subtle icons.

Avoid excessive iconography.

---

# 14. Payment Calculator

This is one of the key interactive features.

The existing website already has a calculator concept.

Build a significantly cleaner version.

Heading:

**Find a Payment Plan That Works for You**

Fields:

### Estate

Dropdown.

Populate initially with the known estates.

### Plot Type

* Full Plot
* Half Plot

### Payment Plan

* 12 Months
* 24 Months

### Down Payment

Currency input.

Then display:

```text
Estimated Balance

₦XXX,XXX

Estimated Monthly Payment

₦XXX,XXX
```

CTA:

**Get Started**

Secondary:

**Reset**

### Important

If actual property prices are not available, the calculator should be implemented as a UI component with placeholder/demo values clearly separated from production data.

Do not present invented prices as factual Made Easy prices.

Structure the calculation logic so that actual estate pricing can later be loaded from an API/CMS.

---

# 15. How It Works

Create a simple four-step journey.

### 01 — Explore

Find an estate that fits your plans.

### 02 — Inspect

Visit the property and understand the location.

### 03 — Choose Your Plan

Select an available payment option.

### 04 — Own

Complete the purchase and required documentation.

Keep this section visually simple.

---

# 16. About Preview

Homepage should contain a short version of the About section.

Heading:

**Making Property Ownership Easier**

Content based on existing website:

> Made Easy Homes & Properties is a real estate company in Lagos State with over 10 years of experience providing affordable and quality land and property solutions. The company specializes in gated and fenced estates in strategic locations with flexible payment plans.

CTA:

**Learn About Made Easy**

---

# 17. Locations

Create a visual section showing the company's geographic reach.

Possible heading:

**Strategically Located Across Lagos**

Use the known locations:

* Magboro
* Iju / Atan
* Agbowa / Ikorodu
* Epe
* Atan / Obere
* Akinde Town / Atan-Ota

Do not fabricate exact coordinates.

If a map is implemented before coordinates are confirmed, use a visual location treatment rather than a misleading map.

---

# 18. Gallery

Create a visual gallery section.

Heading:

**Life at Made Easy**

Content categories:

* Estate development
* Property allocation
* Site visits
* Customer events
* Estate layouts
* Property images

Use existing images wherever available.

If image assets are unavailable, use temporary high-quality property images clearly treated as demo content.

Do not imply stock images are photographs of Made Easy properties.

---

# 19. Final CTA

Large CTA section.

Suggested heading:

**Your Property Journey Starts Here.**

Supporting text:

> Explore our estates, find a payment plan that works for you, and take the next step toward property ownership.

Buttons:

**Explore Estates**

**Book an Inspection**

---

# 20. Footer

Footer should contain:

### Brand

Made Easy Homes & Properties

> Your trusted partner in affordable and secured property ownership.

### Explore

* Estates
* About
* Gallery
* Contact

### Services

* Land Sales
* Property Development
* Real Estate Brokerage
* Property Consultation
* Estate Management

### Contact

Phone:

08086188318
08060441161
09042943116

Email:

[info@madeasygroup.net](mailto:info@madeasygroup.net)

Address:

Suite 1621, 1st Floor Yemosa Plaza,
26/28 Egbeda Akowonjo Road,
Egbeda, Lagos.

Footer:

© 2026 Made Easy Homes & Properties. All rights reserved.

Privacy Policy
Terms of Service

---

# 21. Estate Listing Page

Route:

```text
/estates
```

Purpose:

Create a modern property catalogue.

Hero:

**Find Your Next Property**

Supporting text:

> Explore Made Easy estates across strategic locations.

Controls:

* Search
* Location filter
* Plot type
* Payment plan

Grid of estate cards.

Desktop:

3-column grid where appropriate.

Tablet:

2-column.

Mobile:

1-column.

---

# 22. Estate Details Page

Route:

```text
/estates/[slug]
```

Example:

```text
/estates/city-of-joy
```

Page structure:

```text
Hero image/gallery

Estate name
Location

About this estate

Property details

Available plot types

Payment options

Estate features

Location information

Gallery

Payment calculator

FAQ

Book inspection CTA
```

Primary CTA:

**Book an Inspection**

Secondary:

**Talk to an Agent**

The page should be designed to accommodate additional real estate information once the client supplies it.

---

# 23. About Page

Route:

```text
/about
```

Use the actual content supplied by Made Easy.

Include:

* Who We Are
* Mission
* Vision
* Core Values
* Company statistics
* Why Choose Made Easy

Core values:

1. Integrity
2. Transparency
3. Excellence
4. Customer Focus

Additional selling points:

* Government Approved
* Flexible Payment
* Strategic Locations
* Gated & Fenced
* Professional Service
* After-Sales Support

---

# 24. Contact Page

Route:

```text
/contact
```

Include:

### Contact information

Phone:

08086188318
08060441161
09042943116

Email:

[info@madeasygroup.net](mailto:info@madeasygroup.net)

Head Office:

Suite 1621, 1st Floor Yemosa Plaza,
26/28, Egbeda Akowonjo Road,
Egbeda, Lagos.

Other locations listed by the existing website:

* Block A2, Suite 9, Olujubede Model Market, Oja B/stop, Egbeda
* Block 3, Igando Multipurpose Market, Igando
* Meboruko Plaza Beside Oja Market, Oja Bus Stop Igolo/Ayobo Road

Contact form:

* Full Name
* Email
* Phone Number
* Subject
* Message

CTA:

**Send Message**

Also provide:

**Call Now**

**Send Email**

**Book an Inspection**

---

# 25. Mobile Experience

Mobile is extremely important.

Design mobile-first.

The following must be easy to access:

* Explore Estates
* Book Inspection
* Call
* WhatsApp/contact option where implemented
* Payment calculator
* Estate information

Avoid:

* Horizontal overflow
* Tiny buttons
* Dense property cards
* Huge desktop-only hero sections
* Excessive animations

---

# 26. Component Architecture

Build reusable components rather than one huge page component.

Suggested structure:

```text
components/
  layout/
    Header
    Footer
    MobileNav

  home/
    Hero
    Stats
    FeaturedEstates
    WhyMadeEasy
    PaymentCalculator
    HowItWorks
    AboutPreview
    Locations
    GalleryPreview
    FinalCTA

  estates/
    EstateCard
    EstateGrid
    EstateFilters
    EstateHero
    EstateGallery
    EstateDetails
    EstateFeatures

  ui/
    Button
    Input
    Select
    Badge
    SectionHeading
    Container
```

---

# 27. Data Architecture

Do not hardcode property information inside visual components.

Create a central data layer.

For the first version this can be:

```text
/data/estates.ts
/data/site.ts
/data/navigation.ts
```

Later this can be replaced with:

* CMS
* Database
* API
* Admin dashboard

without rewriting the UI.

---

# 28. Technical Direction

Recommended stack:

### Frontend

Next.js

TypeScript

React

Tailwind CSS

### UI

Use a small component system.

Avoid installing unnecessary UI libraries.

### Animation

Use Framer Motion only where it improves the experience.

Animations should be subtle:

* Fade
* Slide
* Image reveal
* Card hover
* Navigation transitions

Do not animate everything.

### Images

Use Next.js image optimization.

Use appropriate:

* width
* height
* sizes
* priority loading for hero images
* lazy loading for below-the-fold imagery

---

# 29. SEO

The new site should be built with SEO in mind.

Every estate should have:

* Unique title
* Description
* URL slug
* Open Graph image
* Structured content

Example:

```text
/estates/city-of-joy-estate
```

Not:

```text
/property?id=123
```

Implement:

* Metadata
* Open Graph
* Sitemap
* robots.txt
* Semantic headings
* Image alt text
* Internal linking
* Clean URLs

Potential search themes include:

* Land for sale in Lagos
* Gated estates in Lagos
* Land with flexible payment plans
* Property in Lagos
* Estates in Magboro
* Estates in Atan
* Land in Epe

Do not keyword-stuff pages.

---

# 30. Accessibility

Implement:

* Semantic HTML
* Keyboard navigation
* Accessible buttons
* Proper form labels
* Focus states
* Sufficient color contrast
* Alt text
* Reduced-motion support where appropriate

Do not use color alone to communicate important information.

---

# 31. Performance

The website should feel fast.

Priorities:

* Optimized images
* Responsive images
* Lazy loading
* Minimal JavaScript
* Server rendering where appropriate
* Avoid unnecessary client components
* Avoid large animation libraries unless needed
* Optimize fonts
* Minimize layout shift

---

# 32. Conversion Strategy

Primary conversion:

**Book an Inspection**

Secondary conversions:

**Explore Estates**

**Calculate Payment**

**Call**

**Email**

Potential future conversion:

**WhatsApp**

The design should not have five competing primary buttons.

The main CTA should remain visually consistent throughout the site.

---

# 33. Content Rules

### Use real information where available.

The following information has been extracted from the existing website and can be used.

### Do not invent:

* Estate prices
* Exact plot dimensions
* Government titles
* Specific infrastructure
* Distances
* Appreciation percentages
* Testimonials
* Customer names
* Exact development status
* Exact coordinates
* Legal claims

If information is missing, use:

```text
Information coming soon
```

or structure the UI so the field can easily be populated later.

---

# 34. Important Existing Claims

The current website makes the following claims:

* 10+ years experience
* 1,000+ happy clients
* 10+ estate locations
* 4 cities
* 100% client satisfaction
* Government-approved estates
* Gated and fenced estates
* Strategic locations
* Flexible 12/24-month plans
* After-sales support

These are **client-provided/existing-site claims**.

Do not independently strengthen these claims.

For example, do not change:

> "100% client satisfaction"

into:

> "The most trusted real estate company in Lagos."

unless the client specifically provides substantiation for that claim.

---

# 35. What NOT to Do

Do not:

* Copy the existing UI
* Simply change colors
* Create a generic template
* Use excessive green
* Use excessive gradients
* Use fake testimonials
* Invent property prices
* Invent property features
* Make unsupported legal claims
* Use Lorem Ipsum in the final presentation
* Create unnecessary dashboards/admin systems during the first UI phase
* Over-engineer the application before the design is approved

---

# 36. First Milestone

The first milestone is **NOT backend development**.

Build a polished frontend prototype containing:

1. Homepage
2. Estate listing page
3. Estate details page
4. About page
5. Contact page
6. Responsive navigation
7. Payment calculator UI
8. Responsive mobile experience

Use local/static data for now.

The prototype should look sufficiently complete that it can be presented to the founder as:

> **Proposed New Made Easy Homes & Properties Website**

---

# 37. Definition of Done — First Version

The first version is complete when:

* The website looks significantly more modern than the existing site
* All major pages are connected
* The homepage has a clear conversion flow
* Estate browsing works
* Estate details work
* Payment calculator UI works with demo/static values
* Mobile layout is polished
* Desktop layout is polished
* Existing verified content has been incorporated
* Missing information is clearly separated from real data
* No fake claims are presented as company facts
* SEO foundations are present
* Components are reusable
* Estate data is separated from presentation
* The website can later accept real API/CMS data without major UI restructuring

---

# 38. Overall Design Principle

The website should communicate one simple idea:

**Made Easy makes property ownership easier to understand, explore and act on.**

The experience should move the user naturally through:

```text
DISCOVER
   ↓
TRUST
   ↓
EXPLORE
   ↓
UNDERSTAND
   ↓
CALCULATE
   ↓
INSPECT
   ↓
CONTACT
```

The redesign should feel like a **real estate product**, not simply a company brochure.

The final result should be clean, premium, trustworthy, fast, mobile-friendly and conversion-focused.
