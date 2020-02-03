var playlist = {artistName: "artistSong"};


function updatePlaylist(playlist, name, song) {
  return playlist({},playlist, {[name]: song})
  
}
