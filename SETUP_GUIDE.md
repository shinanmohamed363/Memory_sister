# Complete Setup Guide 🚀

This guide will walk you through setting up and running the Memory Gallery application.

## Step 1: Prerequisites

Make sure you have the following installed on your computer:

1. **Node.js** (version 14 or higher)
   - Download from: https://nodejs.org/
   - To check if installed, run: `node --version`

2. **npm** (comes with Node.js)
   - To check if installed, run: `npm --version`

## Step 2: Install Dependencies

Open your terminal/command prompt and navigate to the project folder:

```bash
cd C:\Users\chan-shinan\Documents\memory
```

Then install all required packages:

```bash
npm install
```

This will install:
- React 19.2.0
- React Router DOM 7.9.3
- Three.js 0.170.0
- Tailwind CSS 3.4.18
- And all other dependencies

Wait for the installation to complete (this may take a few minutes).

## Step 3: Add Your Images

Before running the app, add your images to the appropriate folders:

### For Login Page:
- Add images to: `public/nuhathari_login_image/`
- Suggested names: `nuha.jpg`, `tharu.jpg`

### For Nuha's Galleries:
- **Public Gallery:** Add images to `public/memory1/`
- **Protected Gallery:** Add images to `public/memory2-lock/`
- **Additional Gallery:** Add images to `public/memory3/`

### For Tharu's Galleries:
- **Public Gallery:** Add images to `public/tharu_memory1/`
- **Protected Gallery:** Add images to `public/tharu_memory2-lock/`
- **Additional Gallery:** Add images to `public/tharu_memory3/`

**Supported formats:** `.jpg`, `.jpeg`, `.png`, `.svg`, `.gif`

**Tips:**
- Optimize images before adding (recommended max size: 2MB)
- Use descriptive filenames
- Use lowercase file extensions

## Step 4: Start the Development Server

Run the following command:

```bash
npm start
```

The application will:
1. Compile the code
2. Open automatically in your default browser at `http://localhost:3000`
3. Show the login page

If it doesn't open automatically, manually open your browser and go to: `http://localhost:3000`

## Step 5: Test the Application

### Test Login:

**For Nuha's Story:**
- Username: `nuha`
- Password: `nuhababa`

**For Tharu's Story:**
- Username: `tharu`
- Password: `littleprinces`

### Test Protected Galleries:

**Nuha's Protected Gallery:**
- Password: `nuhasecret123`

**Tharu's Protected Gallery:**
- Password: `tharusecret123`

## Step 6: Customization (Optional)

### Change Login Passwords:

Edit `src/App.jsx` and modify the `handleLogin` function:

```javascript
if (username === 'nuha' && password === 'YOUR_NEW_PASSWORD') {
  // ...
}
```

### Change Gallery Passwords:

Edit the respective story files:
- `src/components/NuhaStory.jsx` - Find `<LockedGallery password="..."`
- `src/components/TharuStory.jsx` - Find `<LockedGallery password="..."`

### Modify Story Content:

All story text is in the story component files:
- `src/components/NuhaStory.jsx`
- `src/components/TharuStory.jsx`

Edit the `content={...}` prop in each `<StoryCard>` component.

### Change Colors:

Edit `tailwind.config.js` to modify the color schemes:

```javascript
colors: {
  nuha: {
    primary: '#ff6b9d',  // Change these
    secondary: '#c44569',
    // ...
  },
  tharu: {
    primary: '#ff6bcb',  // Change these
    secondary: '#bd10e0',
    // ...
  }
}
```

## Step 7: Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Common Issues & Solutions

### Issue: "npm is not recognized"
**Solution:** Install Node.js from https://nodejs.org/

### Issue: Images not showing
**Solution:**
1. Check images are in correct folders under `public/`
2. Use lowercase file extensions (`.jpg` not `.JPG`)
3. Refresh browser with Ctrl+F5

### Issue: Login not working
**Solution:**
1. Credentials are case-sensitive
2. Make sure no extra spaces
3. Try clearing browser cache

### Issue: Three.js particles not showing
**Solution:**
1. Use a modern browser (Chrome, Firefox, Edge)
2. Make sure WebGL is enabled
3. Check browser console for errors (F12)

### Issue: Port 3000 already in use
**Solution:**
1. Close other React apps running
2. Or change port: `PORT=3001 npm start` (Mac/Linux)
3. Or set PORT environment variable to 3001 (Windows)

## Development Tips

### Hot Reload:
The app automatically reloads when you save changes to files.

### Browser Console:
Press F12 to open developer tools and check for errors.

### Responsive Testing:
In Chrome DevTools (F12), click the device icon to test mobile/tablet views.

### Performance:
- Keep images under 2MB
- Use .jpg for photos, .png for graphics with transparency
- The app automatically lazy-loads images

## Folder Structure Quick Reference

```
memory/
├── public/                          # Static files
│   ├── index.html                   # Main HTML
│   ├── nuhathari_login_image/       # Login images
│   ├── memory1/                     # Nuha gallery 1
│   ├── memory2-lock/                # Nuha protected
│   ├── memory3/                     # Nuha gallery 2
│   ├── tharu_memory1/               # Tharu gallery 1
│   ├── tharu_memory2-lock/          # Tharu protected
│   └── tharu_memory3/               # Tharu gallery 2
├── src/                             # Source code
│   ├── components/                  # React components
│   │   ├── Login.jsx
│   │   ├── NuhaStory.jsx
│   │   ├── TharuStory.jsx
│   │   └── ... (other components)
│   ├── App.jsx                      # Main app
│   ├── index.js                     # Entry point
│   └── index.css                    # Global styles
├── package.json                     # Dependencies
├── tailwind.config.js               # Tailwind config
└── README.md                        # Documentation
```

## Deployment

### Deploy to Vercel (Recommended):
1. Create account at https://vercel.com
2. Install Vercel CLI: `npm i -g vercel`
3. Run: `vercel`
4. Follow prompts

### Deploy to Netlify:
1. Build the app: `npm run build`
2. Go to https://netlify.com
3. Drag and drop the `build` folder

### Deploy to GitHub Pages:
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
3. Run: `npm run deploy`

## Getting Help

If you encounter issues:

1. Check this guide first
2. Check the main README.md
3. Look at browser console errors (F12)
4. Make sure all dependencies are installed
5. Try deleting `node_modules` and running `npm install` again

## Next Steps

1. ✅ Install dependencies
2. ✅ Add your images
3. ✅ Test the application
4. ✅ Customize as needed
5. ✅ Build for production
6. ✅ Deploy online

---

**Made with 💖**

*Remember: This is more than just code - it's a treasure chest of memories!*
