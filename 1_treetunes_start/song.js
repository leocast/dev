function Song(title, artist, duration) {
//Song 
	//properties inherited from the Media object
	//"this" refers to Song object, so would read "song, title, duration"
	Media.call(this, title, duration);
	//artist
	this.artist = artist;
}
//create the portotype chain for Song ----> Media
Song.prototype = Object.create(Media.prototype);

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