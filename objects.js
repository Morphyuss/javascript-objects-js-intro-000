var playlist = {artistName: "artistSong"};



function updatePlaylist(playlist, name, song) {
  playlist[name] = song ;
        return playlist
}

function removeFromPlaylist(playlist, name) {
  delete playlist.artistSong;
    return playlist;
    
}

   