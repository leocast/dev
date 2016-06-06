function Song(title, artist, duration) {
//Song Properties
	//title
	this.title = title;
	//artist
	this.artist = artist;
	//duration
	this.duration = duration;
	//isPlaying
	this.isPlaying = false;
}

//Song Methods
	//play start 
Song.prototype.play = function() {
	this.isPlaying = true;
};
	//play stop
Song.prototype.stop = function() {
	this.isPlaying = false;
};
	//toHTML	
Song.prototype.toHTML = function() {
	var htmlString = '<li';
	if(this.isPlaying){
		htmlString += ' class="current"';
	}
	htmlString += '>';
	htmlString += this.title;
	htmlString += " - ";
	htmlString += this.artist;
	htmlString += '<span class="duration">';
	htmlString += this.duration;
	htmlString += '</span></li>';

	return htmlString;
};