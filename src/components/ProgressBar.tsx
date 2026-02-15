import React, { useState } from 'react';
import { secondsToTime } from '../utils/time';
import '../styles/ProgressBar.css';

interface ProgressBarProps {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentTime,
  duration,
  onSeek,
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = x / rect.width;
    onSeek(percentage * duration);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleBarClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    onSeek(percentage * duration);
  };

  const percentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className='progress-container'>
      <div
        className='progress-bar'
        onClick={handleBarClick}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          className='progress-fill'
          style={{ width: `${percentage}%` }}
        ></div>
        <div
          className='progress-handle'
          style={{ left: `${percentage}%` }}
          onMouseDown={handleMouseDown}
        ></div>
      </div>
      <div className='time-display'>
        <span className='current-time'>{secondsToTime(currentTime)}</span>
        <span className='total-time'>{secondsToTime(duration)}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
