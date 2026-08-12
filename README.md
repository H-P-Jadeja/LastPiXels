# LastPiXels (LPX) — Official BGMI Esports Club Website

<div align="center">

<img src="img/LPX-Logo.jpeg" alt="LastPiXels Logo" width="120" style="border-radius: 50%;">

### **Dominating the Battlefield. One Pixel at a Time.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![BGMI](https://img.shields.io/badge/Game-BGMI-FF6B35?style=for-the-badge)](https://www.battlegroundsmobileindia.com)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-222?style=for-the-badge&logo=github)](https://h-p-jadeja.github.io/LastPiXels/)

</div>

---

## 🌐 Live Demo

> **🔴 Website is live and deployed via GitHub Pages**

<div align="center">

### 👉 [https://h-p-jadeja.github.io/LastPiXels/](https://h-p-jadeja.github.io/LastPiXels/)

</div>

To enable GitHub Pages for this repo:
1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select `Deploy from a branch`
3. Select **`main`** branch and **`/ (root)`** folder
4. Click **Save** — your site will be live in ~60 seconds at the URL above

---

## 📌 Overview

This is the **official website** for **LastPiXels (LPX)**, a premier BGMI (Battlegrounds Mobile India) esports gaming club. The site serves as the club's digital home — showcasing the team roster, tournament achievements, official jersey, and a community join form.

Built entirely with **pure HTML, CSS, and vanilla JavaScript** — no frameworks, no build tools, no dependencies. It features a modern **dark cyberpunk / esports aesthetic** with neon glow accents, glassmorphism UI cards, custom pixel-art typography, and smooth micro-animations.

---

## 🏆 Achievements

| # | Title | Reference |
|---|-------|-----------|
| 🥇 | Tekron 2.0 Champions | [tekronfest.com/competition](https://tekronfest.com/competition) |
| 🥇 | 2x Time LAN Winners in ADYPU | — |
| 🥇 | College Rivals Season 4 ADYPU | [collegerivals.com](https://collegerivals.com) |
| 🥈 | UniPin Official Mumbai LAN Finalist | — |
| 🥈 | Damru'25 LAN Finalist | [damrufest.org/newcompetition](https://www.damrufest.org/newcompetition) |

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
LastPiXels/
├── index.html        # Main HTML — all sections and page structure
├── styles.css        # Full design system — dark theme, animations, layout
├── script.js         # Interactivity — nav toggle, form handling, scroll spy
├── README.md         # This file
└── img/
    ├── LPX-Logo.jpeg     # Club logo (header, favicon, footer)
    ├── IMG_0999.png      # Official jersey — Front View
    └── IMG_1001.png      # Official jersey — Back View
```

---

## 🎨 Design System

The site uses a custom dark cyberpunk / esports theme defined entirely via CSS custom properties.

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-dark` | `#080a0f` | Page background |
| `--bg-card` | `rgba(16,22,34,0.75)` | Glassmorphism cards |
| `--neon-cyan` | `#00f0ff` | Primary accent, glow, active nav |
| `--neon-purple` | `#9d4edd` | Secondary accent, gradients |
| `--neon-green` | `#00ff88` | Success states, jersey numbers |
| `--neon-gold` | `#ffb703` | Achievement cards, IGL role badge |
| `--text-main` | `#f0f4f8` | Body text |
| `--text-muted` | `#94a3b8` | Labels, subtext |

### Typography (Google Fonts)

| Font | Usage |
|------|-------|
| [Orbitron](https://fonts.google.com/specimen/Orbitron) | Headings, nav links, section titles |
| [Rajdhani](https://fonts.google.com/specimen/Rajdhani) | Body text, form labels, paragraphs |
| [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) | Hero pixel tag, jersey numbers |

---

## 🧱 Page Sections

| Section | Description |
|---------|-------------|
| **Header** | Sticky glassmorphism navbar, glowing logo, scroll-spy nav, mobile hamburger |
| **Hero** | Full-screen landing with gradient headline, CTA buttons, and live stat cards |
| **About** | Two-column card with neon accent border and club highlight badges |
| **Achievements** | Glowing trophy grid cards with external tournament links |
| **Team** | 9 player cards with avatar, IGN, real name, color-coded role badges |
| **Jersey** | Dark-frame jersey showcase with hover zoom (front & back) |
| **Join Us** | High-tech form with focus glow inputs and animated green thank-you response |
| **Footer** | LPX branding, contact email, Instagram social button |

---

## ⚙️ JavaScript Features

| Feature | Description |
|---------|-------------|
| **Mobile Menu Toggle** | ☰ button opens/closes nav on small screens |
| **Auto-close Nav** | Clicking any nav link closes the mobile menu automatically |
| **Form Handler** | Intercepts submit, reads fields, shows personalized thank-you card (no page reload) |
| **Scroll Spy** | Highlights the active section's nav link as the user scrolls |

---

## 🚀 Running Locally

No build tools or dependencies required.

```bash
# Clone the repository
git clone https://github.com/H-P-Jadeja/LastPiXels.git
cd LastPiXels

# Start a local server (Python 3)
python3 -m http.server 8000
```

Then open **[http://localhost:8000](http://localhost:8000)** in your browser.

> **Alternatives:** VS Code [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) or `npx serve .`

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| `> 992px` | Full desktop — 2-column about, side-by-side jersey grid |
| `768px – 992px` | About stacks to 1 column, jersey stacks vertically |
| `< 768px` | Hamburger nav, single-column stats, full-width form |

---

## 🔗 Links

| Resource | URL |
|----------|-----|
| 🌐 **Live Site** | [h-p-jadeja.github.io/LastPiXels](https://h-p-jadeja.github.io/LastPiXels/) |
| 📁 **Repository** | [github.com/H-P-Jadeja/LastPiXels](https://github.com/H-P-Jadeja/LastPiXels) |
| 📸 **Instagram** | [@lastpixelsgg](https://www.instagram.com/lastpixelsgg/) |
| 📧 **Email** | info.lastpixels@gmail.com |
| 🏆 Tekron Fest | [tekronfest.com/competition](https://tekronfest.com/competition) |
| 🏆 College Rivals | [collegerivals.com](https://collegerivals.com) |
| 🏆 Damru Fest | [damrufest.org/newcompetition](https://www.damrufest.org/newcompetition) |

---

## 📄 License

This project is the intellectual property of **LastPiXels Gaming Club**.  
All rights reserved © 2026 LastPiXels (LPX).
