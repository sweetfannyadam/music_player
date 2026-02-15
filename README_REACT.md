# 🎙️ Vintage Cassette Tape Music Player - React

A high-fidelity digital music player design inspired by 1980s cassette tapes, built with **React** and **TypeScript**.

## 🎨 Design Features

### **Authentic Cassette Form Factor**

- **Black Outer Casing**: Realistic plastic cassette body with rounded corners
- **Screw Holes**: Four decorative screw holes in the corners
- **Cream Label Area**: Beige label at the top with "A" and ruled lines
- **Orange Tape Section**: Prominent orange middle section with magnetic tape
- **White Reels**: Two realistic white circular reels with concentric rings
- **Speaker Dots**: Decorative speaker-like elements at the bottom

### **Color Palette**

- Kraft Paper Brown: `#D2B48C`
- Retro Muted Orange (Accent): `#E67E22`
- Off-White (Label): `#F5F5DC`
- Charcoal Grey (Reels/Text): `#333333`

### **Visual Effects**

- ✨ Dynamic pulsing glow on playhead and active elements
- 🔄 Rotating reels that spin in opposite directions during playback
- 🎛️ Smooth 3D perspective transforms
- 💫 Realistic inset shadows and metallic textures
- 🌊 Responsive design for all screen sizes

## 🎵 Features

### **Playlist Management**

- 5 sample songs with titles, artists, and durations
- Click any song to play immediately
- Auto-advance to next track when current ends
- Loop back to first track after the last one

### **Playback Controls**

- **Play/Pause**: Toggle playback with glowing active state
- **Rewind**: Skip back or go to previous track
- **Forward**: Skip ahead or go to next track
- **Progress Bar**: Drag to seek or click to jump to a position
- **Volume Slider**: Control playback volume (0-100%)

### **Keyboard Shortcuts**

- **Space**: Play/Pause
- **Left Arrow**: Rewind
- **Right Arrow**: Forward
- **Up Arrow**: Previous track
- **Down Arrow**: Next track

### **Interactive Playlist**

- Visual list of all songs
- Click to select and play any track
- Active track highlighted with orange glow
- Smooth hover effects and transitions
- Scrollable for better UX

## 🛠️ Tech Stack

- **React 18**: Modern UI library with hooks
- **TypeScript**: Type-safe development
- **CSS3**: Custom styling with animations
- **React Hooks**: State management (useState, useEffect, useRef)

## 📁 Project Structure

```
src/
├── components/
│   ├── Cassette.tsx          # Main cassette display
│   ├── Reel.tsx              # Rotating reel component
│   ├── SongInfo.tsx          # Song title and artist
│   ├── ProgressBar.tsx       # Playback progress control
│   ├── Controls.tsx          # Play, rewind, forward buttons
│   └── Playlist.tsx          # Song list
├── data/
│   └── playlist.ts           # Playlist data
├── utils/
│   └── time.ts              # Time formatting utilities
├── styles/
│   ├── index.css            # Global styles
│   ├── App.css              # App layout
│   ├── Cassette.css         # Cassette styling
│   ├── Reel.css             # Reel animations
│   ├── SongInfo.css         # Song info styling
│   ├── ProgressBar.css      # Progress bar styling
│   ├── Controls.css         # Button styling
│   └── Playlist.css         # Playlist styling
├── types.ts                 # TypeScript interfaces
├── App.tsx                  # Main app component
└── main.tsx                 # React entry point
```

## 🚀 Getting Started

### **Installation**

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm build
```

### **Development Server**

The app will run at `http://localhost:3000`

### **Adding Custom Songs**

Edit `src/data/playlist.ts`:

```typescript
export const playlist: Track[] = [
  {
    id: '1',
    title: 'Your Song Title',
    artist: 'Artist Name',
    duration: 180, // in seconds
  },
  // Add more tracks...
];
```

## 🎮 How to Use

1. **Play Music**: Click the play button or press Space
2. **Navigate**: Use arrow keys or buttons to move between tracks
3. **Seek**: Click on the progress bar or drag the handle
4. **Select Track**: Click any song in the playlist to play it
5. **Adjust Volume**: Use the volume slider

## 📱 Responsive Design

The player is fully responsive and works great on:

- 💻 Desktop (1200px+)
- 📱 Tablet (768px - 1199px)
- 📲 Mobile (< 768px)

## 🎨 Customization

### **Change Colors**

Edit color variables in CSS files:

- `#E67E22` - Orange accent
- `#D2B48C` - Kraft paper
- `#F5F5DC` - Label background

### **Adjust Animation Speed**

Edit `@keyframes` in CSS files:

```css
@keyframes spin-reel {
  /* Change 1.5s to desired duration */
  animation: spin-reel 1.5s linear infinite;
}
```

### **Modify Player Dimensions**

Edit `.cassette-outer` in `src/styles/Cassette.css`:

```css
.cassette-outer {
  width: 420px; /* Adjust width */
  height: 290px; /* Adjust height */
}
```

## 📦 Component API

### **Cassette**

```tsx
<Cassette isPlaying={boolean} currentTime={number} duration={number} />
```

### **ProgressBar**

```tsx
<ProgressBar
  currentTime={number}
  duration={number}
  onSeek={(time: number) => void}
/>
```

### **Controls**

```tsx
<Controls
  isPlaying={boolean}
  onPlay={() => void}
  onRewind={() => void}
  onForward={() => void}
  volume={number}
  onVolumeChange={(volume: number) => void}
/>
```

### **Playlist**

```tsx
<Playlist
  tracks={Track[]}
  currentTrackIndex={number}
  onTrackSelect={(index: number) => void}
/>
```

## 🔄 State Management

The app uses React hooks for state:

- `isPlaying`: Current playback state
- `currentTime`: Current playback position
- `currentTrackIndex`: Currently playing track
- `volume`: Master volume level
- `animationFrameId`: Reference for requestAnimationFrame

## 🎬 Animation Details

- **Playhead Pulse**: Glows brighter at 50% of animation cycle
- **Reel Spin**: 1.5s rotation for smooth appearance
- **Button Pulse**: Active buttons scale up to 105% at 50%
- **Track Hover**: 4px translate with opacity change

## 🐛 Troubleshooting

### **Reels not spinning**

Check that `isPlaying` prop is correctly passed to `<Cassette />`

### **Progress bar not responding**

Ensure `onSeek` callback is properly implemented in parent component

### **Scroll issues on mobile**

CSS prevents default scroll on progress bar - use touch events for better mobile experience

## 📄 License

Free to use and modify for personal and commercial projects.

## 🙏 Credits

Vintage cassette design inspired by 1980s music media aesthetics.
