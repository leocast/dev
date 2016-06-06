var playlist = new Playlist();

var naiveMelody = new Song("Naive Melody (This Must Be the Place)", "Talking Heads", "4:50");
var londonCalling = new Song("London Calling", "The Clash", "3:45");
var waitSoLong = new Song("Wait So Long", "Trampled By Turtles,", "3:26");

playlist.add(naiveMelody);
playlist.add(londonCalling);
playlist.add(waitSoLong);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function() {
	playlist.play();
	playlist.renderInElement(playlistElement);
}

var nextButton = document.getElementById("next");
nextButton.onclick = function() {
	playlist.next();
	playlist.renderInElement(playlistElement);
}

var stopButton = document.getElementById("stop");
stopButton.onclick = function() {
	playlist.stop();
	playlist.renderInElement(playlistElement);
}
