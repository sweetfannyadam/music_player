import React from 'react';
import { Track } from '../types';
import { secondsToTime } from '../utils/time';
import '../styles/Playlist.css';

interface PlaylistProps {
  tracks: Track[];
  currentTrackIndex: number;
  onTrackSelect: (index: number) => void;
}

const Playlist: React.FC<PlaylistProps> = ({
  tracks,
  currentTrackIndex,
  onTrackSelect,
}) => {
  return (
    <div className='playlist-container'>
      <div className='playlist-title'>Playlist</div>
      <div className='playlist-list'>
        {tracks.map((track, index) => (
          <div
            key={track.id}
            className={`playlist-track ${index === currentTrackIndex ? 'active' : ''}`}
            onClick={() => onTrackSelect(index)}
          >
            <span className='track-num'>{index + 1}.</span>
            <div className='track-info'>
              <div className='track-title'>{track.title}</div>
              <div className='track-artist'>{track.artist}</div>
            </div>
            <span className='track-duration'>
              {secondsToTime(track.duration)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
