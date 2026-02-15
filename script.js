// // Playlist data
// const playlist = [
//   { title: 'Cariño', artist: 'The Marías', duration: 275 },
//   { title: 'calla', artist: 'wave to earth', duration: 259 },
//   { title: 'EVERYTHING', artist: 'The Black Skirts', duration: 294 },
//   { title: 'Deeper', artist: 'Pamungkas', duration: 279 },
//   { title: 'Monolog', artist: 'Pamungkas', duration: 303 },
//   { title: 'Wahai Kau', artist: 'Danilla', duration: 255 },
// ];

// // Player state
// let isPlaying = false;
// let currentTime = 0;
// let currentTrackIndex = 0;
// let duration = playlist[0].duration;
// let volume = 70;

// // DOM elements
// const playBtn = document.getElementById('playBtn');
// const rewindBtn = document.getElementById('rewindBtn');
// const forwardBtn = document.getElementById('forwardBtn');
// const volumeSlider = document.getElementById('volumeSlider');
// const progressFill = document.getElementById('progressFill');
// const progressHandle = document.getElementById('progressHandle');
// const progressBar = document.querySelector('.progress-bar');
// const currentTimeEl = document.getElementById('currentTime');
// const totalTimeEl = document.getElementById('totalTime');
// const playIcon = document.getElementById('playIcon');
// const pauseIcon = document.getElementById('pauseIcon');
// const playhead = document.getElementById('playhead');
// const reelLeft = document.getElementById('reelLeft');
// const reelRight = document.getElementById('reelRight');
// const songTitle = document.getElementById('songTitle');
// const songArtist = document.getElementById('songArtist');

// // Initialize
// document.addEventListener('DOMContentLoaded', () => {
//   loadTrack(0);
//   formatTime();
//   volumeSlider.value = volume;
//   createPlaylistDisplay();
// });

// // Play/Pause
// playBtn.addEventListener('click', () => {
//   isPlaying = !isPlaying;
//   playBtn.classList.toggle('active', isPlaying);

//   if (isPlaying) {
//     playIcon.style.display = 'none';
//     pauseIcon.style.display = 'block';
//     reelLeft.classList.add('playing');
//     reelRight.classList.add('playing');
//     startPlayback();
//   } else {
//     playIcon.style.display = 'block';
//     pauseIcon.style.display = 'none';
//     reelLeft.classList.remove('playing');
//     reelRight.classList.remove('playing');
//     stopPlayback();
//   }
// });

// // Rewind
// rewindBtn.addEventListener('click', () => {
//   if (currentTime > 3) {
//     currentTime = 0;
//   } else {
//     // Go to previous track
//     prevTrack();
//   }
//   updateProgress();
// });

// // Forward
// forwardBtn.addEventListener('click', () => {
//   if (currentTime < duration - 3) {
//     currentTime = Math.min(duration, currentTime + 15);
//   } else {
//     // Go to next track
//     nextTrack();
//   }
//   updateProgress();
// });

// // Volume control
// volumeSlider.addEventListener('input', (e) => {
//   volume = parseInt(e.target.value);
// });

// // Progress bar click
// progressBar.addEventListener('click', (e) => {
//   const rect = progressBar.getBoundingClientRect();
//   const x = e.clientX - rect.left;
//   const percentage = x / rect.width;
//   currentTime = percentage * duration;
//   updateProgress();
// });

// // Progress handle drag
// let isDragging = false;

// progressHandle.addEventListener('mousedown', () => {
//   isDragging = true;
// });

// document.addEventListener('mousemove', (e) => {
//   if (!isDragging) return;

//   const rect = progressBar.getBoundingClientRect();
//   const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
//   const percentage = x / rect.width;
//   currentTime = percentage * duration;
//   updateProgress();
// });

// document.addEventListener('mouseup', () => {
//   isDragging = false;
// });

// // Playback loop
// let animationFrameId;

// function startPlayback() {
//   const frameFunction = () => {
//     if (isPlaying && !isDragging) {
//       currentTime += 0.016; // ~60fps
//       if (currentTime >= duration) {
//         currentTime = 0;
//         nextTrack(); // Auto-play next track
//         return;
//       }
//       updateProgress();
//     }
//     if (isPlaying) {
//       animationFrameId = requestAnimationFrame(frameFunction);
//     }
//   };
//   animationFrameId = requestAnimationFrame(frameFunction);
// }

// function stopPlayback() {
//   cancelAnimationFrame(animationFrameId);
// }

// // Track management
// function loadTrack(index) {
//   currentTrackIndex = index;
//   const track = playlist[index];
//   duration = track.duration;
//   currentTime = 0;
//   songTitle.textContent = track.title;
//   songArtist.textContent = track.artist;
//   updateProgress();
//   updatePlaylistHighlight();
// }

// function nextTrack() {
//   if (currentTrackIndex < playlist.length - 1) {
//     loadTrack(currentTrackIndex + 1);
//   } else {
//     loadTrack(0); // Loop back to first track
//   }
//   if (isPlaying) {
//     startPlayback();
//   }
// }

// function prevTrack() {
//   if (currentTrackIndex > 0) {
//     loadTrack(currentTrackIndex - 1);
//   } else {
//     loadTrack(playlist.length - 1); // Loop to last track
//   }
//   if (isPlaying) {
//     startPlayback();
//   }
// }

// // Create playlist display
// function createPlaylistDisplay() {
//   const playlistContainer =
//     document.querySelector('.cassette-body') || document.body;
//   const playlistEl = document.createElement('div');
//   playlistEl.className = 'playlist-container';
//   playlistEl.id = 'playlistContainer';

//   const playlistTitle = document.createElement('div');
//   playlistTitle.className = 'playlist-title';
//   playlistTitle.textContent = 'Playlist';
//   playlistEl.appendChild(playlistTitle);

//   const playlistList = document.createElement('div');
//   playlistList.className = 'playlist-list';
//   playlistList.id = 'playlistList';

//   playlist.forEach((track, index) => {
//     const trackEl = document.createElement('div');
//     trackEl.className = 'playlist-track';
//     if (index === 0) trackEl.classList.add('active');
//     trackEl.setAttribute('data-index', index);

//     const trackNum = document.createElement('span');
//     trackNum.className = 'track-num';
//     trackNum.textContent = `${index + 1}.`;

//     const trackInfo = document.createElement('div');
//     trackInfo.className = 'track-info';

//     const trackTitle = document.createElement('div');
//     trackTitle.className = 'track-title';
//     trackTitle.textContent = track.title;

//     const trackArtist = document.createElement('div');
//     trackArtist.className = 'track-artist';
//     trackArtist.textContent = track.artist;

//     trackInfo.appendChild(trackTitle);
//     trackInfo.appendChild(trackArtist);

//     const trackDuration = document.createElement('span');
//     trackDuration.className = 'track-duration';
//     trackDuration.textContent = secondsToTime(track.duration);

//     trackEl.appendChild(trackNum);
//     trackEl.appendChild(trackInfo);
//     trackEl.appendChild(trackDuration);

//     trackEl.addEventListener('click', () => {
//       loadTrack(index);
//       if (isPlaying) {
//         startPlayback();
//       }
//     });

//     playlistList.appendChild(trackEl);
//   });

//   playlistEl.appendChild(playlistList);

//   // Insert playlist after the cassette body
//   const cassette = document.querySelector('.cassette-body');
//   cassette.parentNode.insertBefore(playlistEl, cassette.nextSibling);
// }

// function updatePlaylistHighlight() {
//   const tracks = document.querySelectorAll('.playlist-track');
//   tracks.forEach((track, index) => {
//     if (index === currentTrackIndex) {
//       track.classList.add('active');
//     } else {
//       track.classList.remove('active');
//     }
//   });
// }

// // Update progress bar and time
// function updateProgress() {
//   const percentage = (currentTime / duration) * 100;
//   progressFill.style.width = percentage + '%';
//   progressHandle.style.left = percentage + '%';
//   formatTime();
// }

// // Format and display time
// function formatTime() {
//   currentTimeEl.textContent = secondsToTime(currentTime);
//   totalTimeEl.textContent = secondsToTime(duration);
// }

// // Convert seconds to MM:SS format
// function secondsToTime(seconds) {
//   const mins = Math.floor(seconds / 60);
//   const secs = Math.floor(seconds % 60);
//   return `${mins}:${secs.toString().padStart(2, '0')}`;
// }

// // Keyboard shortcuts
// document.addEventListener('keydown', (e) => {
//   switch (e.code) {
//     case 'Space':
//       e.preventDefault();
//       playBtn.click();
//       break;
//     case 'ArrowLeft':
//       rewindBtn.click();
//       break;
//     case 'ArrowRight':
//       forwardBtn.click();
//       break;
//     case 'ArrowUp':
//       e.preventDefault();
//       prevTrack();
//       break;
//     case 'ArrowDown':
//       e.preventDefault();
//       nextTrack();
//       break;
//   }
// });

// // Touch support for mobile
// let touchStartX = 0;

// progressHandle.addEventListener('touchstart', (e) => {
//   isDragging = true;
//   touchStartX = e.touches[0].clientX;
// });

// document.addEventListener('touchmove', (e) => {
//   if (!isDragging) return;

//   const rect = progressBar.getBoundingClientRect();
//   const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
//   const percentage = x / rect.width;
//   currentTime = percentage * duration;
//   updateProgress();
// });

// document.addEventListener('touchend', () => {
//   isDragging = false;
// });

// progressBar.addEventListener('touchstart', (e) => {
//   const rect = progressBar.getBoundingClientRect();
//   const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
//   const percentage = x / rect.width;
//   currentTime = percentage * duration;
//   updateProgress();
// });
