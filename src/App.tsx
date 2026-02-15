import React, { useState, useEffect, useRef } from 'react';
import AboutSection from './components/About';
import Cassette from './components/Cassette';
import SongInfo from './components/SongInfo';
import ProgressBar from './components/ProgressBar';
import Controls from './components/Controls';
import Playlist from './components/Playlist';
import { playlist } from './data/playlist';
// import CanvaEmbed from './components/CanvaEmbed';
import './styles/App.css';

const App: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [volume, setVolume] = useState(70);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentTrack = playlist[currentTrackIndex];
  const songPath = `${import.meta.env.BASE_URL}songs/${currentTrack.filename}`;

  // Update audio source when track changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = songPath;
      audioRef.current.load();
      console.log('Loading track:', songPath);
      if (isPlaying) {
        audioRef.current
          .play()
          .catch((err) => console.error('Play error:', err));
      }
    }
  }, [currentTrackIndex, songPath]);

  // Handle play/pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => console.error('Play error:', err));
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  // Update current time from audio
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // Handle song end
  const handleSongEnd = () => {
    nextTrack();
  };

  // Update duration when metadata loads
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      setIsPlaying(false);
    }
  };

  const handleRewind = () => {
    if (audioRef.current) {
      if (audioRef.current.currentTime > 3) {
        audioRef.current.currentTime = 0;
        setCurrentTime(0);
      } else {
        prevTrack();
      }
    }
  };

  const handleForward = () => {
    if (audioRef.current) {
      if (audioRef.current.currentTime < duration - 3) {
        audioRef.current.currentTime = Math.min(
          duration,
          audioRef.current.currentTime + 15,
        );
      } else {
        nextTrack();
      }
    }
  };

  const handleSeek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const loadTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setCurrentTime(0);
    setIsPlaying(true); // Add this line so it plays immediately on click
  };

  const nextTrack = () => {
    const nextIndex =
      currentTrackIndex < playlist.length - 1 ? currentTrackIndex + 1 : 0;
    loadTrack(nextIndex);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    const prevIndex =
      currentTrackIndex > 0 ? currentTrackIndex - 1 : playlist.length - 1;
    loadTrack(prevIndex);
    setIsPlaying(true);
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'Space':
          e.preventDefault();
          handlePlay();
          break;
        case 'ArrowLeft':
          handleRewind();
          break;
        case 'ArrowRight':
          handleForward();
          break;
        case 'ArrowUp':
          e.preventDefault();
          prevTrack();
          break;
        case 'ArrowDown':
          e.preventDefault();
          nextTrack();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentTrackIndex, isPlaying]);

  // return (
  //   <div className='app'>
  //     <audio
  //       ref={audioRef}
  //       onTimeUpdate={handleTimeUpdate}
  //       onEnded={handleSongEnd}
  //       onLoadedMetadata={handleLoadedMetadata}
  //       onError={(e) => {
  //         console.error('Audio error:', e);
  //         console.error('Failed to load:', songPath);
  //       }}
  //       onCanPlay={() => console.log('Audio ready to play:', songPath)}
  //       crossOrigin='anonymous'
  //       preload='auto'
  //       style={{ width: '100%', marginTop: '20px' }}
  //     />
  //     <div className='player-container'>
  //       <div className='cassette-body'>
  //         <Cassette
  //           isPlaying={isPlaying}
  //           currentTime={currentTime}
  //           duration={duration}
  //         />

  //         <SongInfo title={currentTrack.title} artist={currentTrack.artist} />

  //         <div className='control-panel'>
  //           <ProgressBar
  //             currentTime={currentTime}
  //             duration={duration}
  //             onSeek={handleSeek}
  //           />

  //           <Controls
  //             isPlaying={isPlaying}
  //             onPlay={handlePlay}
  //             onStop={handleStop}
  //             onNext={nextTrack}
  //             onRewind={handleRewind}
  //             onForward={handleForward}
  //             volume={volume}
  //             onVolumeChange={setVolume}
  //           />
  //         </div>
  //       </div>

  //       <Playlist
  //         tracks={playlist}
  //         currentTrackIndex={currentTrackIndex}
  //         onTrackSelect={loadTrack}
  //       />
  //     </div>

  //     <AboutSection />
  //     <CanvaEmbed />
  //   </div>
  // );

  return (
    <div className='app'>
      <audio
        ref={audioRef}
        key={currentTrack.filename} // This resets the element when the song changes
        src={songPath}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleSongEnd}
        onLoadedMetadata={handleLoadedMetadata}
        style={{ display: 'none' }}
      />

      <div className='main-layout'>
        {/* TOP ROW: Player on left, Playlist on right */}
        <div className='top-row'>
          {/* LEFT COLUMN: The Player UI */}
          <div className='player-column'>
            <div className='cassette-container'>
              <Cassette
                isPlaying={isPlaying}
                currentTime={currentTime}
                duration={duration}
              />
              <SongInfo
                title={currentTrack.title}
                artist={currentTrack.artist}
              />
              <ProgressBar
                currentTime={currentTime}
                duration={duration}
                onSeek={handleSeek}
              />
              <Controls
                isPlaying={isPlaying}
                onPlay={handlePlay}
                onStop={handleStop}
                onNext={nextTrack}
                onRewind={handleRewind}
                onForward={handleForward}
                volume={volume}
                onVolumeChange={setVolume}
              />
            </div>
          </div>

          {/* RIGHT COLUMN: The Playlist */}
          <div className='playlist-column'>
            <Playlist
              tracks={playlist}
              currentTrackIndex={currentTrackIndex}
              onTrackSelect={loadTrack}
            />
          </div>
        </div>

        {/* MIDDLE ROW: Full Width Canva */}
        {/* <div className='canva-row'>
          <CanvaEmbed />
        </div> */}

        {/* BOTTOM ROW: About Section */}
        <div className='about-row'>
          <AboutSection />
        </div>
      </div>
    </div>
  );
};

export default App;
