let hoverText;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0); 
  canvas.style('z-index', '-1'); // Send the canvas to the background

  hoverText = select('#hover-text'); // Select hover text

  // Add hover listeners for the work page links and images
  let homeLink = select('#home-link');
  let aboutLink = select('#about-link');
  let images = selectAll('img'); // All images in the grid

  if (homeLink) {
    homeLink.mouseOver(() => updateHoverText("Return to Home"));
    homeLink.mouseOut(resetHoverText);
  }

  if (aboutLink) {
    aboutLink.mouseOver(() => updateHoverText("Click to learn more about me"));
    aboutLink.mouseOut(resetHoverText);
  }

  images.forEach((img, index) => {
    img.mouseOver(() => updateHoverText(`Project ${index + 1}`));
    img.mouseOut(resetHoverText);
  });
}

function draw() {
  if (hoverText) {
    hoverText.position(mouseX + 10, mouseY + 10); // Offset for visibility
  }
}

function updateHoverText(text) {
  hoverText.html(text); // Change hover text content
}

function resetHoverText() {
  hoverText.html("experiments in visual thinking"); // Reset to default text
}
