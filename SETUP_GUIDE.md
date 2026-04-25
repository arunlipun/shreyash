# 📋 Shreyash Portfolio — Complete Setup Guide
## React + Tailwind CSS + tsParticles + Framer Motion

---

## 📁 FINAL FILE STRUCTURE

```
shreyash-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── CustomCursor.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Works.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🔧 STEP 1 — Install Required Software

### A) Install Node.js
1. Go to https://nodejs.org
2. Download the **LTS version** (e.g. 20.x)
3. Run the installer — click Next → Next → Install
4. After install, open **Command Prompt** and type:
   ```
   node --version
   ```
   You should see something like `v20.x.x`

### B) Install VS Code
1. Go to https://code.visualstudio.com
2. Download and install it
3. Open VS Code

---

## 🗂️ STEP 2 — Create the Project Folder

1. Open **VS Code**
2. Press `Ctrl + ~` to open the **Terminal** inside VS Code
3. Navigate to where you want the project (e.g. Desktop):
   ```bash
   cd Desktop
   ```
4. Create a new folder:
   ```bash
   mkdir shreyash-portfolio
   cd shreyash-portfolio
   ```
5. Open this folder in VS Code:
   ```bash
   code .
   ```

---

## 📦 STEP 3 — Create All the Files

Copy every file from the `shreyash-portfolio/` folder you were given into your project folder. The structure should match exactly what is shown above.

> **TIP:** In VS Code, right-click in the Explorer panel on the left to create new files and folders.

---

## 📥 STEP 4 — Install All Packages

In the VS Code terminal, run:

```bash
npm install
```

This will download all libraries listed in `package.json`:
- **react** + **react-dom** — the main framework
- **framer-motion** — smooth animations
- **@tsparticles/react** + **@tsparticles/slim** — the infinity particles
- **lucide-react** — clean icons
- **tailwindcss** + **autoprefixer** + **postcss** — styling
- **vite** — fast development server

> ⏳ Wait for it to finish (about 1–2 minutes). You'll see a `node_modules/` folder appear.

---

## 🚀 STEP 5 — Start the Development Server

```bash
npm run dev
```

You'll see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
```

Open **http://localhost:5173** in your browser — your portfolio is live! 🎉

---

## ✏️ STEP 6 — Customise Your Portfolio

### Change your profile photo
1. Add your photo to the `public/` folder, e.g. `public/shreyash.jpg`
2. In `Hero.jsx`, add an `<img>` tag:
   ```jsx
   <img src="/shreyash.jpg" alt="Shreyash" className="w-32 h-32 rounded-full object-cover border-2 border-black" />
   ```

### Change your name / bio
- Open `src/components/Hero.jsx` and edit the text

### Add/remove skills
- Open `src/components/Skills.jsx` and edit the `skills` array

### Add your actual project works
- Open `src/components/Works.jsx` and edit the `works` array

### Update contact info
- Open `src/components/Contact.jsx`
- Change `PHONE` to your WhatsApp number with country code: `919938832283`
- Change `EMAIL` to your email address

---

## 📧 STEP 7 — How the Contact Form Works

When someone fills your contact form and clicks:

### "Send via Email" button:
- Opens their email app (Gmail, Outlook, etc.)
- Email is **pre-filled** with their name, email, and message
- They click Send — message arrives at **duduldehury56@gmail.com**

### "Send via WhatsApp" button:
- Opens WhatsApp Web or the app on their phone
- Message is **pre-filled** and ready to send
- One click — message arrives on **+91 99388 32283**

> No backend server needed! This works with `mailto:` and `wa.me` links.

---

## 🏗️ STEP 8 — Build for Production (to deploy online)

```bash
npm run build
```

This creates a `dist/` folder with optimized files ready to upload anywhere.

---

## 🌐 STEP 9 — Deploy Online (FREE)

### Option A — Netlify (easiest)
1. Go to https://netlify.com and sign up free
2. Drag and drop your `dist/` folder onto the Netlify dashboard
3. Your site is live at a URL like `shreyash.netlify.app`

### Option B — Vercel
1. Go to https://vercel.com
2. Connect your GitHub repo or drag `dist/`
3. Live instantly!

---

## 🐛 Common Errors & Fixes

| Error | Fix |
|-------|-----|
| `npm: command not found` | Install Node.js from nodejs.org |
| `Cannot find module '@tsparticles/react'` | Run `npm install` again |
| White screen in browser | Check terminal for errors, look at console (F12) |
| Particles not showing | Make sure `particlesInit` is in `App.jsx` |
| WhatsApp not opening | Check the phone number format: `91XXXXXXXXXX` |

---

## 📱 Features Built In

- ✅ **Infinite particles** — black dots floating on white background
- ✅ **Custom cursor** — dot + ring that follows mouse, grows on hover
- ✅ **Mouse interaction** — hover particles to grab them, click to burst more
- ✅ **Framer Motion** — smooth hero animations on page load
- ✅ **Scroll reveal** — sections animate in as you scroll down
- ✅ **Contact form** → sends directly to Email + WhatsApp
- ✅ **Responsive** — works on mobile and desktop
- ✅ **White background, black text** throughout
- ✅ **Hover effects** on all cards and buttons

---

*Made for Shreyash Dehury · Janta High School · Age 14*
