function audio(play) {
    if (play === 'play') {
        audio = document.getElementById('music');
        audio.play();
    } else if (play === 'pause') {
        audio = document.getElementById('music');
        audio.pause();
    }
}
