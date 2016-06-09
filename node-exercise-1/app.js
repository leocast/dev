var profile = require("./profile");//make sure you use"./filename" when requiring your own modules
//require("./profile.js") and require("./profile") are both valid ways to include this file

var users = process.argv.slice(2);

users.forEach(profile.get);

// users.forEach(function(userName){
// 	profile.get(userName);
// });

// profile.get("leoosborne");
// profile.get("chalkers");

