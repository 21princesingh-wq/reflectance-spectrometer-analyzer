# Reflectance Spectrophotometer — Portfolio Website

> B.E. Project · Electronics & Telecommunication Engineering  
> GES's R.H. Sapat College of Engineering, Nashik-5 · 2025–26

---

## 🚀 Live Demo (GitHub Pages)

After deploying, your site will be live at:  
`https://<your-username>.github.io/<repo-name>/`

---

## 📁 File Structure

```
├── index.html      ← Complete 9-page portfolio (real photos embedded)
├── style.css       ← All CSS styles & responsive rules
├── script.js       ← Page routing, animations, contact form
└── README.md       ← This file
```

> **Important:** Keep all 4 files in the **same folder / root of the repo.**

---

## 🖥️ Pages Included

| # | Page | Content |
|---|------|---------|
| 1 | **Home** | Hero with real hardware photo, stats, animated ticker |
| 2 | **Introduction** | Motivation, system pipeline, keywords, institution |
| 3 | **Related Work** | All 14 research papers + survey outcomes |
| 4 | **Objectives** | 9 objectives grid + full hardware/software stack |
| 5 | **Outcomes** | Key metrics, 6 outcome cards |
| 6 | **Results** | **Real project photos**, spectrum chart, challenges |
| 7 | **Future Scope** | Roadmap timeline, progress bars, 6 applications |
| 8 | **Conclusion** | Key achievements, Phase I summary |
| 9 | **Contact** | Team cards (Prince, Harsh, Atharva), phone, form |

---

## 📸 Real Photos Included

All 5 actual project photographs are **embedded directly** in `index.html` as base64:
- Hardware prototype (dark chamber enclosure)  
- Full RGB spectrum capture (blue + green + red combined)  
- Blue LED dispersion test (~450nm)  
- Green LED spectrum test 1 (~530nm)  
- Green LED spectrum test 2 (angle calibration)

---

## 🚀 How to Deploy on GitHub Pages

### Step 1 — Create a GitHub Repository
1. Go to [github.com](https://github.com) → **New repository**
2. Name it (e.g., `spectro-portfolio`)
3. Set to **Public**
4. Click **Create repository**

### Step 2 — Upload Files
**Option A — Via GitHub Website (Easiest):**
1. In your new repo, click **Add file → Upload files**
2. Drag and drop all 4 files: `index.html`, `style.css`, `script.js`, `README.md`
3. Click **Commit changes**

**Option B — Via Git CLI:**
```bash
git init
git add .
git commit -m "Initial portfolio deployment"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to your repo → **Settings**
2. Scroll to **Pages** (left sidebar)
3. Under **Source**, select: **Deploy from a branch**
4. Branch: **main** / Folder: **/ (root)**
5. Click **Save**
6. Wait 1–2 minutes → your site is live! ✅

---

## 👥 Team

| Member | Role |
|--------|------|
| **Prince Randhir Singh** | Team Member |
| **Harsh Dhansing Girase** | Team Member |
| **Atharva Santosh Jadhav** | Team Member |

**Contact:** +91 97678 94567  
**Project Guide:** Mr. P.D. Lokhande  
**Institution:** GES's R.H. Sapat College of Engineering, Nashik-5

---

## 🛠️ Tech Stack (Portfolio)
- HTML5, CSS3 (Grid, Flexbox, CSS Variables, Animations)
- Vanilla JavaScript (zero dependencies)
- Google Fonts: Playfair Display, DM Sans, Space Mono
- All project images embedded as base64 (no CDN needed)
- 100% works offline — no server required
