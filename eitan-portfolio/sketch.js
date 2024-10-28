let titleText;
let hoverText;
let clickCounter = 0;

let originalFont = 'Impact, sans-serif'; // Main font
let fonts = [
  'Arial Black, sans-serif',
  'Courier New, monospace',
  'Bungee, sans-serif',
  'Rubik Mono One, sans-serif'
];

let textColors = ['#0000FF', '#FF0000', '#00FF00', '#FFFF00', '#FF69B4'];
let backgroundColors = ['#00BFFF', '#FF6347', '#32CD32', '#FFD700', '#FF1493'];

function setup() {
  noCanvas(); // No canvas needed

  // Select elements
  titleText = select('#main-text');
  hoverText = select('#hover-text'); // Select the hover text element

  let workLink = select('#work-link'); // Work link element
  let aboutLink = select('#about-link'); // About link element

  // Start landing animation
  landingAnimation();

  // Add event listeners for clicks and keydown
  document.addEventListener('click', handleClick);
  document.addEventListener('keydown', handleSpacebar);

  // Add hover listeners to update hover text
  workLink.mouseOver(() => updateHoverText("Click to view my work"));
  workLink.mouseOut(resetHoverText);
  
  aboutLink.mouseOver(() => updateHoverText("Click to learn more about me"));
  aboutLink.mouseOut(resetHoverText);
}

function draw() {
  // Make the hover text follow the mouse
  hoverText.position(mouseX + 10, mouseY + 10); // Slight offset for visibility
}

// Landing animation: Flash 5 styles in 1 second, then reveal links
function landingAnimation() {
  let flashInterval = 200; // 200ms per flash
  let flashes = 5; // 5 flashes

  for (let i = 0; i < flashes; i++) {
    setTimeout(() => {
      randomizeStyle(); // Apply a random style
    }, i * flashInterval);
  }

  // After animation, reset to original style and reveal links
  setTimeout(() => {
    resetStyle();
    revealLinks();
  }, flashes * flashInterval);
}

function revealLinks() {
  let workLink = select('#work-link');
  let aboutLink = select('#about-link');

  // Add 'visible' class to both links to make them appear
  workLink.addClass('visible');
  aboutLink.addClass('visible');
}

function handleClick() {
  clickCounter++;

  if (clickCounter % 5 === 0) {
    resetStyle(); // Reset every 5th click
  } else {
    randomizeStyle(); // Apply random styles on other clicks
  }
}

function handleSpacebar(event) {
  if (event.code === 'Space') {
    console.log('Spacebar pressed!');
    randomizeStyle(); // Trigger style change on spacebar
  }
}

// Reset to the original style
function resetStyle() {
  document.body.style.backgroundColor = '#F4F4F4';
  titleText.style('color', 'black');
  titleText.style('font-family', originalFont);
}

// Apply random styles to the title and background
function randomizeStyle() {
  let randomFont = random(fonts);
  let randomTextColor = random(textColors);
  let randomBackgroundColor = random(backgroundColors);

  titleText.style('font-family', randomFont);
  titleText.style('color', randomTextColor);
  document.body.style.backgroundColor = randomBackgroundColor;
}

// Update hover text dynamically
function updateHoverText(text) {
  hoverText.html(text); // Change the text content
}

// Reset the hover text to the original
function resetHoverText() {
  hoverText.html("experiments in visual thinking"); // Reset to default text
}
