// Global variable
let animationCount = 0;

// Function with parameters & return
function calculateArea(width, height) {
  return width * height;
}

// Function with local vs global scope
function incrementAnimationCount() {
  let localCount = 1; // local variable
  animationCount++;   // modifies global
  return animationCount + localCount;
}

// Greeting function
function greetUser(name) {
  return `Hello, ${name}! Welcome to Somtech IT Hub 🎉`;
}
console.log(greetUser("Student"));

// Trigger Box Animation
function triggerBoxAnimation() {
  const box = document.getElementById("animate-box");
  box.classList.toggle("animate");
  console.log("Box animation triggered:", incrementAnimationCount());
}

// Flip Card
function flipCard(card) {
  card.classList.toggle("flipped");
}

// Modal
function toggleModal(show) {
  const modal = document.getElementById("modal");
  if (show) {
    modal.classList.add("show");
  } else {
    modal.classList.remove("show");
  }
}
