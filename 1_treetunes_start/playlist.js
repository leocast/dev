
function Playlist() {
//Playlist Properties		
	//songs
	this.songsArray = [];
	//nowPlayingIndex
	this.nowPlayingIndex = 0;
}
//Playlist Methods
	//add songs to the "songs" array	
Playlist.prototype.add = function(song) {
	this.songsArray.push(song);
};
	//play; 
Playlist.prototype.play = function() {
	//get the current song
	var currentSong = this.songsArray[this.nowPlayingIndex];
	currentSong.play();
};
	//next
Playlist.prototype.stop = function(){
	//get the current song
	var currentSong = this.songsArray[this.nowPlayingIndex];
	currentSong.stop();
};
	//stop
Playlist.prototype.next = function() {
	this.stop();
	this.nowPlayingIndex++;
	if(this.nowPlayingIndex === this.songsArray.length){
		this.nowPlayingIndex = 0;
	}
	this.play();
};
	//renderInElement
Playlist.prototype.renderInElement = function(list){
	list.innerHTML = "";
	for (var i = 0; i <this.songsArray.length; i++){
		list.innerHTML += this.songsArray[i].toHTML();
	}
};