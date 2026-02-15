# Vintage Cassette Tape Music Player 🎙️

A high-fidelity digital music player design inspired by 1980s cassette tape aesthetics with modern interactive features.

## Features

### 🎨 Design Elements

- **Kraft Paper Aesthetic**: Warm kraft paper brown (#D2B48C) as the dominant color
- **Vintage Color Palette**:
  - Kraft Paper Brown: #D2B48C
  - Retro Muted Orange: #E67E22 (Glowing accent)
  - Off-White: #F5F5DC (Label background)
  - Charcoal Grey: #333333 (Reels and text)

### 🎛️ Interactive Components

**Mechanical Reels**

- Two realistic black internal reels that rotate smoothly during playback
- Each reel has visible spindle rings for authentic vintage look
- Left reel rotates clockwise, right reel rotates counter-clockwise
- Brushed metal texture with depth shadows

**Cassette Window**

- Clear transparent viewing area showing brown magnetic tape
- Digital playhead with glowing orange accent
- Pulsing glow effect on the playhead during playback
- Authentic tape strip visualization

**Tactile 3D Buttons**

- **Play/Pause**: Toggle playback with active state glow
- **Rewind**: Jump back 15 seconds
- **Forward**: Skip forward 15 seconds
- Brushed metal texture with 3D depth
- Glowing orange accent when active
- Smooth hover and click animations

**Progress Bar**

- Glowing orange progress fill with gradient
- Interactive progress handle for scrubbing
- Click anywhere on the bar to seek
- Drag handle to precise control
- Touch support for mobile devices

**Handwritten Label**

- "My Mixtape 2024" in authentic handwritten font (Caveat)
- Positioned on kraft paper label area
- Orange text with subtle shadow

### 🎮 Controls

**Mouse/Keyboard:**

- **Spacebar**: Play/Pause
- **Left Arrow**: Rewind 15 seconds
- **Right Arrow**: Forward 15 seconds
- **Click Progress Bar**: Seek to position
- **Drag Progress Handle**: Scrub through track

**Mobile:**

- **Tap Play Button**: Toggle playback
- **Tap Rewind/Forward**: Jump in time
- **Drag Progress Handle**: Scrub on touch devices
- **Volume Slider**: Adjust volume (0-100%)

### ✨ Special Effects

- **Dynamic Glowing**: Orange accent (#E67E22) with multiple glow layers
- **Pulsing Animation**: Playhead and active buttons pulse with intensity
- **3D Perspective**: Subtle 3D transform on player hover
- **Brushed Metal**: Realistic button textures with gradient overlays
- **Shadow Depth**: Inset shadows for realistic physical appearance
- **Smooth Transitions**: All interactions have fluid animations

### 📊 Technical Features

- Responsive design for desktop and mobile
- High-fidelity graphics using CSS gradients and shadows
- Smooth 60fps animations using requestAnimationFrame
- Touch and mouse input support
- Clean, semantic HTML structure
- No external audio library required (ready for audio API integration)
- Accessibility support with proper button titles

## Usage

1. Open `index.html` in a web browser
2. Click the Play button or press Spacebar to start playback
3. Use buttons or keyboard shortcuts to control playback
4. Drag the progress handle to seek through the track
5. Adjust volume with the volume slider

## File Structure

```
music_player/
├── index.html      # HTML structure and markup
├── styles.css      # All styling, animations, and effects
├── script.js       # Interactive functionality and controls
└── README.md       # Documentation (this file)
```

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full touch support

## Color Palette Reference

| Element               | Color         | Hex Code |
| --------------------- | ------------- | -------- |
| Primary (Kraft Paper) | Brown         | #D2B48C  |
| Accent (Glowing)      | Muted Orange  | #E67E22  |
| Label Background      | Off-White     | #F5F5DC  |
| Text/Reels            | Charcoal Grey | #333333  |

## Customization

### Change Track Duration

Edit `script.js` line 6:

```javascript
let duration = 180; // Change to desired seconds
```

### Modify Colors

Edit `styles.css` to replace color values:

- `#D2B48C` - Kraft paper background
- `#E67E22` - Orange glow accent
- `#F5F5DC` - Label background
- `#333333` - Text/reels color

### Adjust Animation Speeds

Edit keyframes in `styles.css`:

- `spin-reel` animation: Change `2s` to desired duration
- `pulse-glow` animation: Adjust timing for playhead glow
- Button transitions: Modify `.btn` transition duration

## Future Enhancements

- Audio API integration for real music playback
- Playlist support
- Equalizer controls
- Cassette label editor
- Album artwork display
- Time range selection
- Loop and shuffle modes

## License

Free to use and modify for personal and commercial projects.
