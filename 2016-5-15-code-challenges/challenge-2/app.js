//Hide Warning
//Show Warning Slowly

//this is valid jQuery, but the syntax  is more like javascript would look. jQuery best practices have evolved to use less code to achieve same result....

///start with the javascripty looking jQuery;
// var myCode = function() {
// 	$(".warning").hide().show("slow"); //here, "$" signifies script is calling jQuery library
// } 
// $(document).ready(myCode);


// same as saying this, using an anonymous function and calling it from the function...
// $(document).ready(function(){
// 	$(".warning").hide().show("slow"); 
// });

//...same as saying this...  using just the anonymous function as the handler... cool
// $(function(){
// 	$(".warning").hide().show("slow");
// });


//same as this, if you move the script tags with jquery and .js to the bottom of the html, you can call the function before the javascript loads , after the DOM tree has been built.
//see jQuery documentation
$(".warning").hide().show("slow");