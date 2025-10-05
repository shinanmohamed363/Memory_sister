# Memory Gallery - A Story of Two Sisters 💖

A professional, emotional, story-based memory gallery web application for Nuha and Tharunya. This is a scroll-based storytelling website built with React, Three.js, and Tailwind CSS.

## ✨ Features

- **Hardcoded Authentication System** - Secure login for each sister
- **Scroll-Based Storytelling** - Beautiful parallax effects as you journey through memories
- **Three.js Animations** - Floating particles and 3D background effects
- **Password-Protected Galleries** - Special memories locked with passwords
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Emotional Design** - Sections crafted to evoke emotions and cherish memories
- **Photo Galleries** - Display and browse through precious moments
- **Lightbox Viewer** - Full-screen image viewing with navigation

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd memory
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit: `http://localhost:3000`

## 📁 Project Structure

```
memory/
├── public/
│   ├── index.html
│   ├── nuhathari_login_image/     # Login page images
│   ├── memory1/                    # Nuha's public photos
│   ├── memory2-lock/               # Nuha's protected photos
│   ├── memory3/                    # Nuha's additional photos
│   ├── tharu_memory1/              # Tharu's public photos
│   ├── tharu_memory2-lock/         # Tharu's protected photos
│   └── tharu_memory3/              # Tharu's additional photos
├── src/
│   ├── components/
│   │   ├── Login.jsx               # Login page with authentication
│   │   ├── NuhaStory.jsx          # Nuha's complete story
│   │   ├── TharuStory.jsx         # Tharu's complete story
│   │   ├── StoryCard.jsx          # Reusable story card component
│   │   ├── Gallery.jsx            # Photo gallery component
│   │   ├── LockedGallery.jsx      # Password-protected gallery
│   │   ├── PasswordModal.jsx      # Password entry modal
│   │   ├── Lightbox.jsx           # Full-screen image viewer
│   │   ├── ThreeBackground.jsx    # Three.js particle effects
│   │   └── ScrollProgress.jsx     # Scroll progress indicator
│   ├── App.jsx                    # Main app with routing
│   ├── index.js                   # Entry point
│   └── index.css                  # Global styles
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🔐 Login Credentials

### Nuha's Story
- **Username:** `nuha`
- **Password:** `nuhababa`

### Tharunya's Story
- **Username:** `tharu`
- **Password:** `littleprinces`

## 🔒 Gallery Passwords

### Nuha's Protected Gallery (memory2-lock)
- **Password:** `nuhasecret123`

### Tharu's Protected Gallery (tharu_memory2-lock)
- **Password:** `tharusecret123`

**Note:** You can change these passwords in the respective story component files:
- `src/components/NuhaStory.jsx` - Line with `<LockedGallery password="..."`
- `src/components/TharuStory.jsx` - Line with `<LockedGallery password="..."`

## 📸 Adding Images

To add images to the galleries:

1. **For Nuha's galleries:**
   - Add images to `public/memory1/` for public gallery
   - Add images to `public/memory2-lock/` for protected gallery
   - Add images to `public/memory3/` for additional gallery

2. **For Tharu's galleries:**
   - Add images to `public/tharu_memory1/` for public gallery
   - Add images to `public/tharu_memory2-lock/` for protected gallery
   - Add images to `public/tharu_memory3/` for additional gallery

3. **For login page:**
   - Add images to `public/nuhathari_login_image/`

**Supported formats:** `.jpg`, `.jpeg`, `.png`, `.svg`, `.gif`

## 🎨 Customization

### Colors

The app uses custom color schemes defined in `tailwind.config.js`:

- **Nuha's Theme:** Pink and rose tones
- **Tharu's Theme:** Purple and princess colors

### Story Content

All story content is in:
- `src/components/NuhaStory.jsx` - Edit Nuha's memories
- `src/components/TharuStory.jsx` - Edit Tharu's memories

### Three.js Effects

Particle effects can be customized in `src/components/ThreeBackground.jsx`:
- Particle count
- Colors
- Animation speed
- Mouse interaction sensitivity

## 🛠️ Build for Production

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `build/` folder, ready for deployment.

## 🌐 Deployment

You can deploy this application to:

- **Vercel:** `vercel deploy`
- **Netlify:** Drag and drop the `build` folder
- **GitHub Pages:** Use `gh-pages` package
- **Any static hosting service**

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## ⚡ Performance Tips

1. **Optimize Images:**
   - Compress images before adding them
   - Recommended max size: 2MB per image
   - Use `.jpg` for photos, `.png` for graphics

2. **Reduce Particle Count on Mobile:**
   - Already implemented in `ThreeBackground.jsx`
   - Mobile devices use 100 particles, desktop uses 200

3. **Lazy Loading:**
   - Images are lazy-loaded automatically
   - Galleries load only when scrolled into view

## 🎯 Features Breakdown

### Login Page
- Split-screen design
- Glassmorphism effects
- Floating particles background
- Animated login cards
- Real-time error handling

### Story Pages
- Scroll-based progression
- 15 unique memory sections each
- Emotional emphasis on key moments
- Smooth animations
- Scroll progress indicator
- Back to top button

### Galleries
- Grid layout with hover effects
- Lightbox full-screen viewer
- Keyboard navigation (← → Esc)
- Protected galleries with password
- Image counter

### Animations
- Fade-in on scroll
- Parallax effects
- Floating particles
- Heartbeat animations
- Unlock animations
- Smooth transitions

## 🐛 Troubleshooting

### Images not loading?
1. Make sure images are in the correct `public/` folders
2. Check file extensions are lowercase (`.jpg` not `.JPG`)
3. Clear browser cache and refresh

### Login not working?
1. Check you're using the exact credentials (case-sensitive)
2. Clear browser cache
3. Try incognito/private mode

### Particles not showing?
1. Check browser console for errors
2. Make sure WebGL is enabled in your browser
3. Try a different browser (Chrome recommended)

### Build errors?
1. Delete `node_modules` folder
2. Delete `package-lock.json`
3. Run `npm install` again
4. Run `npm start`

## 📝 Tech Stack

- **React** - UI framework
- **Three.js** - 3D graphics and animations
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **PostCSS** - CSS processing

## 💝 Credits

Made with love for Nuha and Tharunya by Shinan.

## 📄 License

This is a personal project. All rights reserved.

---

**Remember:** This is more than just code - it's a treasure chest of memories. Handle with care. 💖

*"Memories never die. When you miss me, just go through this—this is how I see you in my world."*
