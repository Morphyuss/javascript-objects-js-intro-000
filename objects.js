var playlist = {artistName: "artistSong"};


function updatePlaylist(playlist, name, song) {
  return Playlist.assign({[Playlist]: name, song});
  
}
  