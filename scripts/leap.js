const slider = document.getElementById("circular-slider");
const handle = document.getElementById("slider-handle");
const topUpValue = document.getElementById("top-up-value");
const currentBalanceElement = document.getElementById("current-balance");
const powerStrideBtn = document.getElementById("powerstride-btn");

let angle = 0;
let balance = 12;
let hasClaimedPrize = false;

function updateTopUpValue() {
  const value = Math.floor(angle / 30) * 5;
  topUpValue.textContent = `€${value.toFixed(2)}`;
}

function updateHandlePosition() {
  const radius = 90; // Radius of the circular path (half the slider's diameter minus handle size)
  const centerX = slider.offsetWidth / 2;
  const centerY = slider.offsetHeight / 2;

  // Calculate the handle's position on the circle
  const handleX = centerX + radius * Math.cos((angle - 90) * (Math.PI / 180));
  const handleY = centerY + radius * Math.sin((angle - 90) * (Math.PI / 180));

  // Set the handle's position
  handle.style.left = `${handleX}px`;
  handle.style.top = `${handleY}px`;
}

function rotateSlider(event) {
  const rect = slider.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // Calculate the angle based on mouse position
  const x = event.clientX - centerX;
  const y = event.clientY - centerY;
  angle = Math.atan2(y, x) * (180 / Math.PI) + 90;

  if (angle < 0) {
    angle += 360;
  }

  updateHandlePosition();
  updateTopUpValue();
}

handle.addEventListener("mousedown", () => {
  document.addEventListener("mousemove", rotateSlider);
});

document.addEventListener("mouseup", () => {
  document.removeEventListener("mousemove", rotateSlider);
});

powerStrideBtn.addEventListener("click", () => {
  if (!hasClaimedPrize) {
    balance += 10;
    currentBalanceElement.textContent = `${balance.toFixed(2)}`;
    hasClaimedPrize = true;
    alert("Congratulations! You are the recipient to the 10 Euros this time!");
  } else {
    alert("You have claimed your prize! Logout and try later!");
  }
});

// Initialize handle position on page load
document.addEventListener("DOMContentLoaded", () => {
  updateHandlePosition();
  updateTopUpValue();
});
