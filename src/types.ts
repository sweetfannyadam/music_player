export interface Track {
  id: string;
  title: string;
  artist: string;
  duration: number;
  filename: string;
}

export interface PlayerState {
  isPlaying: boolean;
  currentTime: number;
  currentTrackIndex: number;
  volume: number;
}
