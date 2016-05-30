var url ='/employees.php';
var data = {
	firstName : "Leo",
	lastName : "Osborne"
};
var callback = function (response) {
	//callback function here - do something with the returned JSON string
};
$.get(url, data, callback);


///////same thing by putting it all inside the .get() method like below...
var callback = ;
$.get('/employees.php', {
	firstname : "Leo",
	lastName : "Osborne"
}, function (response) {
	//callback function here - do something with the returned JSON string
});