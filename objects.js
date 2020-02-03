var playlist = {artistName: "artistSong"};


function updatePlaylist(playlist, name, song) {
  return Playlist.assign({[playlist]: name, song});
  
}
  