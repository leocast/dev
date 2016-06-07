// function Movie(){
// 	Media.call(this, title, duration);
// 	this.year;
// }

function Movie(title, year, duration) {
//Song 
	//properties inherited from the Media object
	//"this" refers to Song object, so would read "song, title, duration"
	Media.call(this, title, duration);
	//artist
	this.year = year;
}
//create the portotype chain for Song ----> Media
Movie.prototype = Object.create(Media.prototype);

	//toHTML	
Movie.prototype.toHTML = function() {
	var htmlString = '<li';
	if(this.isPlaying){
		htmlString += ' class="current"';
	}
	htmlString += '>';
	htmlString += this.title;
	htmlString += " (";
	htmlString += this.year;
	htmlString += ") ";
	htmlString += '<span class="duration">';
	htmlString += this.duration;
	htmlString += '</span></li>';

	return htmlString;
};