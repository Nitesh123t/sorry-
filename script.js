// script.js
var heartContainer = document.getElementById("heart-container");

function generateHeart() {
  var heartImage = document.createElement("img");
  heartImage.src = "C:/Users/hp/Desktop/Nitesh file/GAMING/heart.png"; // Replace with your heart image path
  heartImage.className = "heart-image";

  var x = Math.random() * window.innerWidth;
  var y = 0;

  heartImage.style.left = x + "px";
  heartImage.style.top = y + "px";

  heartContainer.appendChild(heartImage);

  setTimeout(() => {
    heartImage.remove();
  }, 60000); // Increase the value for slower animation

  setTimeout(() => {
    heartImage.style.opacity = 0; // Start fading out before removing
  }, 40000); // Adjust timing as needed

  setTimeout(() => {
    heartImage.style.width = "100px"; // Set final width
  }, 100); // Adjust timing as needed
}

function showResponse() {
  // Show heart animation and response
  var responseDiv = document.getElementById("response");
  responseDiv.style.display = "block";

  var heartContainer = document.getElementById("heart-container");
  heartContainer.style.display = "block"; // Show the heart container

  for (var i = 0; i < 20; i++) {
    generateHeart();
  }

  var audio = new Audio("C:/Users/hp/Desktop/Nitesh file/GAMING/song.mp3");
  audio.loop = true;
  audio.play();
}

var button = document.getElementById("proposal-button");
button.addEventListener("click", showResponse);

// Call the showResponse function after the page loads, if needed
// showResponse();
