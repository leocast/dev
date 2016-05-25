$(".animsition").animsition({
  inClass: 'fade-in-right-lg',
  outClass: 'fade-out-right-lg',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500
});

$(".header").sticky({
  getWidthFrom   : ".container",
  responsiveWidth: true
});

$(".header").on("sticky-start", function() {
  $(".description").html("We Build <em>Great</em> Apps");
});

$(".header").on("sticky-end", function() {
  $(".description").text("We Build Aligators");
});

//$('.header').on('sticky-end', function() { console.log("end"); });

//task 1: stick the "want us to work on your project?" text element to work.html header
$(".stickThis").sticky({
  topSpacing     : 60,
  getWidthFrom   : ".container",
  responsiveWidth: true
});


//task 2: append an email link to the end of the text when sticky
$(".stickThis").on("sticky-start", function() {
  $(".stickThis").append(" <a class='emailText' href='mailto:someone@example.com?Subject=Hello%20again'>Send Mail</a>");
});

$(".stickThis").on("sticky-end", function() {
  $(".emailText").remove();
});
