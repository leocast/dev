//student reports
var message = '';
var student;
var search;

function print( message ) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

function getStudentReport ( student ){
	var report = '<h2> Student: ' + student.name + ' </h2>';
	report += '<p> Track: ' + student.track + '</p>';
	report += '<p> Achievements: ' + student.achievements + '</p>';
	report += '<p> Points: ' + student.points + '</p>';
	return report; 
}

while (true){
	search = prompt("type a students name into database to see that student's records. Type 'quit' to exit serach.");
	if ( search === null || search.toLowerCase() === 'quit' ){
		break;
	}
	for (var i = 0; i < students.length; i += 1){
		student = students[i];
		if (student.name === search){
			message = getStudentReport(student);
			print(message);
		}
	}
}

