import React from 'react';
import '../styles/Controls.css';

interface ControlsProps {
  isPlaying: boolean;
  onPlay: () => void;
  onStop: () => void;
  onNext: () => void;
  onRewind: () => void;
  onForward: () => void;
  volume: number;
  onVolumeChange: (volume: number) => void;
}

const Controls: React.FC<ControlsProps> = ({
  isPlaying,
  onPlay,
  onStop,
  onNext,
  onRewind,
  onForward,
  volume,
  onVolumeChange,
}) => {
  return (
    <div className='control-section'>
      {/* Control buttons */}
      <div className='controls'>
        <button className='btn btn-rewind' title='Rewind' onClick={onRewind}>
          <svg viewBox='0 0 24 24' fill='currentColor'>
            <path d='M6 6h2v12H6zm3.5 6l8.5 6V6z' />
          </svg>
        </button>
        <button className='btn btn-stop' title='Stop' onClick={onStop}>
          <svg viewBox='0 0 24 24' fill='currentColor'>
            <path d='M6 6h12v12H6z' />
          </svg>
        </button>
        <button
          className={`btn btn-play ${isPlaying ? 'active' : ''}`}
          title='Play/Pause'
          onClick={onPlay}
        >
          {!isPlaying ? (
            <svg viewBox='0 0 24 24' fill='currentColor'>
              <path d='M8 5v14l11-7z' />
            </svg>
          ) : (
            <svg viewBox='0 0 24 24' fill='currentColor'>
              <path d='M6 4h4v16H6V4zm8 0h4v16h-4V4z' />
            </svg>
          )}
        </button>
        {/* <button className='btn btn-forward' title='Forward' onClick={onForward}>
          <svg viewBox='0 0 24 24' fill='currentColor'>
            <path d='M16 18h2V6h-2zm-11-7l8.5-6v12z' />
          </svg>
        </button> */}
        <button className='btn btn-Next' title='Next Track' onClick={onNext}>
          <svg viewBox='0 0 24 24' fill='currentColor'>
            <path d='M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z' />
          </svg>
        </button>
      </div>

      {/* Volume control */}
      <div className='volume-container'>
        <label htmlFor='volumeSlider'>Volume:</label>
        <input
          type='range'
          id='volumeSlider'
          min='0'
          max='100'
          value={volume}
          onChange={(e) => onVolumeChange(parseInt(e.target.value))}
          className='volume-slider'
        />
      </div>
    </div>
  );
};

export default Controls;
