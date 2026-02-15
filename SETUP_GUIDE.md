# 🚀 Setup Guide - Vintage Cassette Player React

## Prerequisites

Before you start, make sure you have installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** (optional, for version control)

Check your installation:

```bash
node --version
npm --version
```

## 📋 Installation Steps

### Step 1: Navigate to Project Directory

```bash
cd path/to/music_player
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages:

- React 18
- ReactDOM 18
- TypeScript
- React Scripts

### Step 3: Start Development Server

```bash
npm start
```

The browser will automatically open to `http://localhost:3000`

If it doesn't open automatically, manually visit: **http://localhost:3000**

## 🎮 Using the Player

Once the app is running:

1. **Play Music**: Click the play button (▶)
2. **Navigate Tracks**: Use Previous/Next buttons or click a song in the playlist
3. **Seek**: Drag the progress bar or click a position
4. **Adjust Volume**: Move the volume slider
5. **Keyboard Shortcuts**: See README_REACT.md for keyboard controls

## 🏗️ Project Structure

```
music_player/
├── src/
│   ├── components/        # React components
│   ├── data/             # Playlist data
│   ├── styles/           # CSS files
│   ├── utils/            # Utility functions
│   ├── types.ts          # TypeScript types
│   ├── App.tsx           # Main component
│   └── main.tsx          # Entry point
├── public/
│   └── index.html        # HTML template
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
└── README_REACT.md       # Full documentation
```

## 📦 Available Scripts

### Development Mode

```bash
npm start
```

Runs the app in development mode with hot reload.

### Build for Production

```bash
npm build
```

Creates an optimized production build in the `build/` folder.

### Test

```bash
npm test
```

Runs tests (if configured).

### Eject Configuration

```bash
npm eject
```

⚠️ **Warning**: This is a one-way operation. Once you eject, you can't go back!

## 🎨 Customizing the Player

### Add Your Own Playlist

Edit `src/data/playlist.ts`:

```typescript
export const playlist: Track[] = [
  {
    id: '1',
    title: 'My Song',
    artist: 'My Artist',
    duration: 240,
  },
];
```

### Change Colors

Edit the CSS files in `src/styles/`:

```css
/* Example: Change accent color */
.playhead {
  color: #e67e22; /* Change to your color */
}
```

### Modify Player Size

Edit `src/styles/Cassette.css`:

```css
.cassette-outer {
  width: 420px; /* Smaller: 350px, Larger: 500px */
  height: 290px;
}
```

## 🐛 Troubleshooting

### "npm: command not found"

- **Solution**: Install Node.js from https://nodejs.org/

### Port 3000 already in use

- **Option 1**: Close other apps using port 3000
- **Option 2**: Run on different port:
  ```bash
  PORT=3001 npm start
  ```

### Module not found errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### TypeScript errors

Ensure you're using TypeScript 4.9+:

```bash
npm install --save-dev typescript@latest
```

### Reels not spinning

- Check that songs are properly loaded in the playlist
- Make sure the Play button is active (orange glow)
- Verify browser console for errors (F12)

## 📱 Testing on Mobile

### Option 1: Local Network

```bash
npm start
```

Find your computer's IP (e.g., 192.168.1.x) and visit:
`http://192.168.x.x:3000`

### Option 2: Device Emulation

- Open Developer Tools (F12)
- Click Device Toolbar (Ctrl+Shift+M)
- Test responsive layout

## 🚀 Building for Production

### Create Optimized Build

```bash
npm build
```

### Deploy to Hosting

The `build/` folder contains static files ready for deployment to:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop `build/` folder
- **GitHub Pages**: Push to `gh-pages` branch
- **AWS S3**: Upload `build/` contents
- **Any static host**: Upload all files

## 📚 Learning Resources

- [React Official Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [React Hooks Guide](https://react.dev/reference/react)

## ✨ Adding Audio Playback

To add real audio playback, integrate with:

- **Web Audio API**: Native browser audio
- **Howler.js**: Audio library
- **Music API**: Spotify, SoundCloud, etc.

Example placeholder for audio integration:

```typescript
// src/hooks/useAudio.ts
const [audio] = useState(new Audio());

useEffect(() => {
  if (isPlaying) {
    audio.play();
  } else {
    audio.pause();
  }
}, [isPlaying]);
```

## 🤝 Contributing

To modify the player:

1. Create a new branch
2. Make changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

This project is open source and available for personal and commercial use.

## 🆘 Getting Help

- Check README_REACT.md for detailed documentation
- Review component JSDoc comments
- Check browser console (F12) for errors
- Visit Node.js/React documentation

---

**Happy Listening! 🎵**
