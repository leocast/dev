var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = '<p>Hello. My name is ' + person.name + '.</p>';
message += '<p>I live in the ' + person.country + '.</p>';
person.name = 'Rainbow Dash';
message += '<p> but, i wish my name was ' + person.name + ',</p>';
person.country = 'the Moon';
message += '<p> and that i lived on ' + person.country +  '!</p>';
person.age += 1;
message += '<p>My age is now ' + person.age + '</p>';
message += '<p>I have ' + person.skills.length + ' skills:'
message += ' they are ' + person.skills.join(', ') + ' .</p>'

print(message);