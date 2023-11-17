// document.querySelector("h1").innerHTML = "This is hi... from query selector..!";

// Now do same thing using jQuery

$("h1").text("exploring start jQuery with Anisul islam sir.....");

$(".my-div h2").text("Change inside text Using jAuery Selector...");

$("#p1").text("Change the pragraph text using jQuery id selector .....");

$(document).ready(function () {
  // New text to display
  var newText =
    "Change the paragraph text using jQuery id selector.....Barikoi Technologies Limited is a location data and mapping platform that started with a vision to enhance location experience for Bangladesh.";

  // Function to animate the text
  function animateText(index) {
    $("#p1,h3").text(newText.substring(0, index));
    if (index < newText.length) {
      setTimeout(function () {
        animateText(index + 1);
      }, 100); // Adjust the delay between each character
    }
  }

  // Call the function to start the animation
  animateText(0);
});
