import React from 'react';
import '../styles/Reel.css';

interface ReelProps {
  isPlaying: boolean;
  isLeft: boolean;
}

const Reel: React.FC<ReelProps> = ({ isPlaying, isLeft }) => {
  return (
    <div className={`reel-container ${isLeft ? 'reel-left' : 'reel-right'}`}>
      <div className={`reel ${isPlaying ? 'playing' : ''}`}>
        <div className='reel-center'></div>
        <div className='reel-ring ring-1'></div>
        <div className='reel-ring ring-2'></div>
        <div className='reel-ring ring-3'></div>
      </div>
    </div>
  );
};

export default Reel;
