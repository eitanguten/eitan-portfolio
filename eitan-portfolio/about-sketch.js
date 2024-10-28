let hoverText;
let popups = [];
let maxPopups = 5;
let popupImg;

function preload() {
  popupImg = loadImage('assets/popup.png'); // Load the image
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1'); // Send canvas to the background

  hoverText = select('#hover-text'); // Select hover text

  // Add hover listeners for links
  let homeLink = select('#home-link');
  let workLink = select('#work-link');

  if (homeLink) {
    homeLink.mouseOver(() => updateHoverText("Return to Home"));
    homeLink.mouseOut(resetHoverText);
  }

  if (workLink) {
    workLink.mouseOver(() => updateHoverText("Click to view my work"));
    workLink.mouseOut(resetHoverText);
  }
}

function draw() {
  if (hoverText) {
    hoverText.position(mouseX + 10, mouseY + 10); // Offset for visibility
  }

  for (let i = 0; i < popups.length; i++) {
    image(popupImg, popups[i].x, popups[i].y, 100, 100); // Draw pop-ups
  }
}

function mousePressed() {
  let newPopup = { x: mouseX, y: mouseY };
  if (popups.length >= maxPopups) {
    popups.shift(); // Remove the oldest pop-up
  }
  popups.push(newPopup);
}

function updateHoverText(text) {
  hoverText.html(text); // Update the hover text content
}

function resetHoverText() {
  hoverText.html("experiments in visual thinking"); // Reset to default text
}
