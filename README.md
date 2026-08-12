# LastPiXels (LPX) — Official BGMI Esports Club Website

<div align="center">

![LPX Logo](img/LPX-Logo.jpeg)

### **Dominating the Battlefield. One Pixel at a Time.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![BGMI](https://img.shields.io/badge/Game-BGMI-orange?style=for-the-badge)](https://www.battlegroundsmobileindia.com)

</div>

---

## 📌 Overview

This is the **official website** for **LastPiXels (LPX)**, a premier BGMI (Battlegrounds Mobile India) esports gaming club. The site serves as the club's digital home, showcasing the team roster, tournament achievements, official jersey, and a community join form.

The site features a modern **dark cyberpunk / esports aesthetic** with neon glow accents, glassmorphism UI cards, custom pixel-art typography, and smooth micro-animations — built entirely with **pure HTML, CSS, and vanilla JavaScript** (no frameworks or libraries).

---

## 🏆 Achievements

| # | Title | External Link |
|---|-------|---------------|
| 🥇 | Tekron 2.0 Champions | [tekronfest.com](https://tekronfest.com/competition) |
| 🥇 | 2x Time LAN Winners in ADYPU | — |
| 🥇 | College Rivals Season 4 ADYPU | [collegerivals.com](https://collegerivals.com) |
| 🥈 | UniPin Official Mumbai LAN Finalist | — |
| 🥈 | Damru'25 LAN Finalist | [damrufest.org](https://www.damrufest.org/newcompetition) |

---

## 👥 Team Roster

| IGN | Real Name | Role | Jersey # |
|-----|-----------|------|----------|
| **Blade** | Harshyamsinh Jadeja | Assaulter | #9 |
| **Dexy** | Jaimin Bhatt | IGL | #7 |
| **Starboii** | Pruthviraj Vala | Assaulter | #8 |
| **Lex** | Ashu Chaudhary | Assaulter | #21 |
| **Scorpio** | Yug Dhamecha | Support | #49 |
| **Phantom** | Param Bhalodiya | Manager | #20 |
| **Sarth** | Sarth Dhutt | Analyst | #44 |
| **Badmash** | Aniket Panara | All Rounder | #911 |
| **Alien** | Shyam Zala | Assaulter | #914 |

---

## 🗂 Project Structure

```
LPX/
├── index.html        # Main HTML — all sections and page structure
├── styles.css        # Full design system — dark theme, animations, layout
├── script.js         # Interactivity — nav toggle, form handling, scroll spy
└── img/
    ├── LPX-Logo.jpeg     # Club logo (header, favicon, footer)
    ├── IMG_0999.png      # Official jersey — Front View
    └── IMG_1001.png      # Official jersey — Back View
```

---

## 🎨 Design System

The site uses a custom dark cyberpunk / esports theme defined via CSS custom properties (`--variables`).

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-dark` | `#080a0f` | Page background |
| `--bg-card` | `rgba(16, 22, 34, 0.75)` | Glassmorphism cards |
| `--neon-cyan` | `#00f0ff` | Primary accent, glow effects |
| `--neon-purple` | `#9d4edd` | Secondary accent, gradients |
| `--neon-green` | `#00ff88` | Success states, jersey numbers |
| `--neon-gold` | `#ffb703` | Achievement highlights, IGL badge |
| `--text-main` | `#f0f4f8` | Body text |
| `--text-muted` | `#94a3b8` | Subtext, labels |

### Typography

| Font | Usage |
|------|-------|
| [Orbitron](https://fonts.google.com/specimen/Orbitron) | Headings, nav links, section titles |
| [Rajdhani](https://fonts.google.com/specimen/Rajdhani) | Body text, form labels, paragraphs |
| [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) | Hero pixel tag, jersey numbers |

---

## 🧱 Page Sections

### 1. `<header>` — Sticky Navigation Bar
- Glassmorphism blur navbar (sticks to top on scroll)
- LPX logo with 360° spin on hover
- Nav links with animated neon underline on hover/active
- **Scroll spy** — active section link highlights automatically
- Mobile responsive — hamburger `☰` toggle button

### 2. `.hero` — Landing Hero
- Full-screen dark hero with radial glow background
- Pixel-art game tag badge (`// OFFICIAL BGMI ESPORTS CLUB`)
- Gradient animated headline: **"DOMINATING THE BATTLEFIELD"**
- Two CTA buttons: _View Squad Roster_ & _Join Community_
- Three live stats cards: `5+ Major Titles` | `9 Roster Members` | `2x ADYPU Champions`

### 3. `#about` — About Section
- Two-column glassmorphism card with a neon accent left border
- Club description and mission
- Three highlight badge items (Tactical Ops / LAN Champions / Elite Talent)

### 4. `#achievements` — Achievements Section
- Responsive grid of trophy cards
- Hover effect: gold glow border + scale + card lift
- External tournament links open in new tab with 🔗 icon

### 5. `#team` — Team Roster
- Auto-fill responsive grid of player cards
- Each card: jersey-number avatar circle, IGN, real name
- Color-coded role badges: `Assaulter` (cyan) | `IGL` (gold) | `Support` (cyan) | `Manager` / `Analyst` (purple)
- Card hover: lifts with neon glow + bottom gradient bar reveal

### 6. `#jersey` — Official Jersey Showcase
- Dark-frame jersey image containers
- Hover: neon glow border + image scale zoom
- Front and back jersey images displayed side-by-side

### 7. `#join-us` — Community Join Form
- Input fields: Full Name, Title/Gender, IGN, BGMI UID
- Focus state: neon cyan glow ring on inputs
- On submit: animated green "Thank You" notification card appears
- Form does not reload the page (JavaScript `preventDefault`)

### 8. `<footer>` — Footer
- LPX branding (logo + name)
- Contact email
- Instagram social link button with glow hover

---

## ⚙️ JavaScript Features (`script.js`)

| Feature | Description |
|---------|-------------|
| **Mobile Menu Toggle** | Clicking ☰ opens/closes the nav on mobile |
| **Auto-close Nav** | Clicking any nav link closes the mobile menu |
| **Form Handler** | Intercepts submit, reads field values, displays personalized thank-you card |
| **Scroll Spy** | Watches scroll position and highlights the current section's nav link |

---

## 🚀 Running Locally

No build tools or dependencies required. Just serve the files with any static HTTP server.

### Option 1 — Python (Recommended)

```bash
# Navigate to the project folder
cd /path/to/LPX

# Start the server
python3 -m http.server 8000
```

Then open **[http://localhost:8000](http://localhost:8000)** in your browser.

### Option 2 — VS Code Live Server

Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, right-click `index.html` → **Open with Live Server**.

### Option 3 — Node.js `serve`

```bash
npx serve .
```

---

## 📱 Responsive Design

| Breakpoint | Behavior |
|------------|----------|
| `> 992px` | Full desktop layout, 2-column about, side-by-side jersey |
| `768px–992px` | About stacks to 1 column, jersey stacks vertically |
| `< 768px` | Hamburger nav, single-column stats grid, full-width form |

---

## 🔗 External Links

| Resource | URL |
|----------|-----|
| Instagram | [@lastpixelsgg](https://www.instagram.com/lastpixelsgg/) |
| Tekron Fest | [tekronfest.com/competition](https://tekronfest.com/competition) |
| College Rivals | [collegerivals.com](https://collegerivals.com) |
| Damru Fest | [damrufest.org/newcompetition](https://www.damrufest.org/newcompetition) |
| Contact | info.lastpixels@gmail.com |

---

## 📄 License

This project is the intellectual property of **LastPiXels Gaming Club**.  
All rights reserved © 2026 LastPiXels (LPX).
