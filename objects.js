var playlist = {artistName: "artistSong"};


function updatePlaylist(playlist, name, song) {
  return playlist.assign({},playlist, {[name]: song})
  
}
