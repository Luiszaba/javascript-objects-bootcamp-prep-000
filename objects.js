var playlist = {
  'Machine Head': 'Impirium',
  'Dimmu Borgir': 'Purtania'
<<<<<<< HEAD
}

function updatePlaylist (playlist, artist, song){
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist (playlist, artist) {
  delete playlist[artist];
  return playlist;
=======
};

function updatePlaylist (playlist, artist, song){
  playlist[artist] = song;
  
}

function removeFromPlaylist (playlist, artist) {
  delete artist.playlist;
>>>>>>> c235e1af88a6c4d70feb0063ae5edf084d49ae6b
}