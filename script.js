function audio(play) {
    if (play === 'play') {
        audio = document.getElementById('music');
        audio.play();
    } else if (play === 'pause') {
        audio = document.getElementById('music');
        audio.pause();
    }
}

var voices = speechSynthesis.getVoices();
var utterance = new SpeechSynthesisUtterance('Пацан, который говорил всё на JS');
utterance.voice = voices[15];
speechSynthesis.speak(utterance);