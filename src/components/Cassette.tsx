import React from 'react';
import Reel from './Reel';
import '../styles/Cassette.css';

interface CassetteProps {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
}

const Cassette: React.FC<CassetteProps> = ({
  isPlaying,
  currentTime,
  duration,
}) => {
  const playheadPosition = (currentTime / (duration || 1)) * 100;

  return (
    <div className='cassette-outer'>
      {/* Screw holes */}
      <div className='screw screw-top-left'></div>
      <div className='screw screw-top-right'></div>

      {/* Label area */}
      <div className='label-area'>
        <div className='label-letter'>A</div>
        <div className='label-lines'>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
      </div>

      {/* Main cassette content */}
      <div className='cassette-content'>
        <Reel isPlaying={isPlaying} isLeft={true} />

        {/* Center tape section */}
        <div className='tape-section'>
          <div className='tape-window'>
            <div className='tape-strip'>
              <div
                className='playhead'
                style={{ left: `${playheadPosition}%` }}
              >
                ▶
              </div>
            </div>
          </div>
        </div>

        <Reel isPlaying={isPlaying} isLeft={false} />
      </div>

      {/* Bottom control area */}
      <div className='cassette-bottom'>
        <div className='speaker-dots'>
          <span className='dot'></span>
          <span className='dash'></span>
          <span className='dash'></span>
          <span className='dot'></span>
        </div>
        <div className='speaker-dots right'>
          <span className='dot'></span>
          <span className='dash'></span>
          <span className='dash'></span>
          <span className='dot'></span>
        </div>
      </div>

      {/* Bottom screw holes */}
      <div className='screw screw-bottom-left'></div>
      <div className='screw screw-bottom-right'></div>
    </div>
  );
};

export default Cassette;
