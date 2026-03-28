# Design System Strategy: The Architectural Curator

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Architectural Curator."** 

Unlike standard interior design interfaces that rely on generic grids, this system treats the digital screen as a physical gallery space. It is characterized by **intentional asymmetry, cinematic depth, and a "Vogue" editorial pace.** We reject the "template" look by utilizing extreme typographic contrast and structural layering. The interface does not just display content; it frames it through a lens of luxury and permanence. Expect wide-open gutters, overlapping elements that break the container, and a lighting model that mimics a 3000K high-end showroom.

---

## 2. Colors & Tonal Depth
The palette is rooted in the "void"—a deep, matte foundation that allows the "3000K light" (Gold/Amber) accents to feel like a spotlight in a darkened gallery.

### The "No-Line" Rule
**1px solid borders are strictly prohibited for sectioning.** 
Structural boundaries must be defined through background shifts. Use `surface_container_low` (#1c1b1b) against the base `surface` (#131313) to denote a change in context. If a line is required for an architectural detail, it must be a "Linear Light" element: a `primary` (#e9c176) gradient line that tapers to 0% opacity at both ends.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, high-end materials (Concrete, Stone, Glass). 
- **Base Level:** `surface` (#131313) – The primary floor.
- **In-set Details:** `surface_container_lowest` (#0e0e0e) – Use for recessed areas or negative space.
- **Elevated Layers:** `surface_container_high` (#2a2a2a) – Use for cards or modules that should feel "placed" onto the surface.

### The "Glass & Gradient" Rule
To achieve a "Vogue" aesthetic, floating elements (modals, navigation bars) must use **Glassmorphism**. Apply `surface_variant` (#353535) at 60% opacity with a 20px backdrop-blur. 
- **Signature Texture:** Primary CTAs should not be flat. Use a subtle linear gradient from `primary` (#e9c176) to `primary_container` (#c5a059) at a 45-degree angle to mimic the sheen of brushed brass.

---

## 3. Typography
Typography is our most powerful architectural tool. We pair the timeless authority of the Serif with the technical precision of the Sans-Serif.

- **Display & Headlines (Noto Serif):** Used sparingly to command attention. High-contrast sizing (e.g., `display-lg` at 3.5rem) should be used for hero statements. Increase letter-spacing slightly on headlines to evoke a premium, "spaced-out" editorial feel.
- **Titles & Body (Manrope):** Chosen for its geometric clarity. Use `title-lg` for section headers, always in Sentence case—never all caps, which feels too loud for this brand.
- **Labels (Inter):** Reserved for technical data, metadata, or "micro-copy." These should be set in `label-sm` with a 5% tracking (letter-spacing) boost to maintain legibility against dark backgrounds.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering** and light physics, not drop shadows.

- **The Layering Principle:** To lift a card, do not add a shadow. Instead, change the token from `surface` to `surface_container_low`. The contrast between #131313 and #1c1b1b creates a soft, sophisticated "lift."
- **Ambient Shadows:** Only use shadows for "Actionable Overlays" (e.g., a dropdown menu). Shadows must be `on_surface` color at 4% opacity, with a 32px blur and 16px Y-offset. This mimics a soft, ambient room light rather than a digital effect.
- **The "Ghost Border":** For input fields or buttons, use the `outline_variant` (#4e4639) at 20% opacity. This creates a "suggestion" of a boundary that only reveals itself upon closer inspection.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary_container`), `on_primary` text. `DEFAULT` roundedness (0.25rem).
- **Secondary:** Ghost style. Transparent fill with a `primary` "Ghost Border" (20% opacity). On hover, transition to 40% opacity.
- **Tertiary:** Text only in `primary`. No border. Underlined with a thin 1px primary line that expands from the center on hover.

### Cards & Lists
- **Prohibition:** No divider lines. Use `16` (5.5rem) or `20` (7rem) spacing tokens to create separation.
- **Visual Style:** Use `surface_container_low` backgrounds. Images within cards should have a subtle `0.5` (0.175rem) inner glow to make them feel "backlit."

### Input Fields
- **State:** Underline-only style. A `px` height line using `outline_variant`.
- **Focus:** The line transitions to `primary` (#e9c176) with a soft `surface_tint` outer glow. Labels use `label-md` and sit above the line.

### Architectural Details (Custom Component)
- **Linear Light:** A decorative element used to separate high-level editorial sections. A 100px wide, 1px tall line using the `primary` color, centered, with a `primary_fixed` glow.

---

## 6. Do's and Don'ts

### Do
- **Use Intentional Asymmetry:** Align a headline to the left (Grid Column 2) and the body text to the right (Grid Column 7). Large empty spaces are a luxury.
- **Embrace "Dark" Accessibility:** Ensure all `on_surface` text meets a 4.5:1 ratio against `surface`. Use `primary` for focus states to ensure high visibility.
- **Scale with Intent:** Use the `24` (8.5rem) spacing token for hero margins to create a cinematic widescreen feel.

### Don't
- **Don't use pure white (#FFFFFF) for body text.** Use `on_surface` (#e5e2e1) to reduce eye strain and maintain the matte atmosphere.
- **Don't use standard "Rounded" corners.** Stick to the `DEFAULT` (0.25rem) or `none` for a more architectural, sharp-edged look.
- **Don't use transitions faster than 300ms.** Luxury is slow and deliberate. All hovers and fades should feel cinematic and weighted.