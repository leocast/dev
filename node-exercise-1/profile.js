// PROBLEM: need a simple way to look at the user's badge count and javascript points.
//how to access the student profile json
//SOULTION: USENODE.js to connect to treehouse API to get profile info of user
var https = require("https");
var http = require("http");

//Print out messages
function printMessage(userName, badgeCount, points){
	var message = userName + " has " + badgeCount + " total badges and " + points + " points in JavaScript";
	console.log(message);
};

//Print error messages
function printError(error) {
	console.error(error.message);
};
//get help from Anthony with this.... 
//try to add a second argument subject to the get Method
// function get(subject, userName) {

// 	//connect to API URL (http://teamtreehouse.com/leoosborne.json)
// 	var request = https.get("https://teamtreehouse.com/" + userName + ".json", function(response){
// 		var responseBody = "";
// 		// var whichSubject = subject;
// 		//read the data
// 		response.on('data', function(dataChunk) {
// 	    responseBody += dataChunk;
// 	  });
// 		response.on("end", function(){
// 			if (response.statusCode === 200) {//if http request was successful, 	
// 			//run the try statement to see if the data parses correctly
// 			try {
// 				//parse the data
// 				var profile = JSON.parse(responseBody);
// 				//print out data 
// 				printMessage(subject, userName, profile.badges.length, profile.points.HTML);
// 			} catch(error) {
// 				//parse error here
// 				printError(error);
// 				}
// 			} else {
// 				//status code error
// 				printError({message: "there was an error getting the profile for " + userName + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
// 			}
// 		});
// 	});

// 	//Connection Error
// 	request.on('error', printError);
// }

function get(userName) {
	//connect to API URL (http://teamtreehouse.com/leoosborne.json)
	var request = https.get("https://teamtreehouse.com/" + userName + ".json", function(response){
		var responseBody = "";
		//read the data
		response.on('data', function(dataChunk) {
	    responseBody += dataChunk;
	  });
		response.on("end", function(){
			if (response.statusCode === 200) {//if http request was successful, 	
			//run the try statement to see if the data parses correctly
			try {
				//parse the data
				var profile = JSON.parse(responseBody);
				//print out data 
				printMessage(userName, profile.badges.length, profile.points.JavaScript);
			} catch(error) {
				//parse error here
				printError(error);
				}
			} else {
				//status code error
				printError({message: "there was an error getting the profile for " + userName + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
			}
		});
	});

	//Connection Error
	request.on('error', printError);
}
//must explicitly state what methods the Object has available to other code. else throws an error: “Object has no method ‘get’”
module.exports.get = get;