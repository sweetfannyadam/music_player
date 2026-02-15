import React from 'react';
import '../styles/SongInfo.css';

interface SongInfoProps {
  title: string;
  artist: string;
}

const SongInfo: React.FC<SongInfoProps> = ({ title, artist }) => {
  return (
    <div className='song-info'>
      <div className='song-title'>{title}</div>
      <div className='song-artist'>{artist}</div>
    </div>
  );
};

export default SongInfo;
