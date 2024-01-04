document.querySelector(".back-button").addEventListener("click", function() {
  window.location.href = "24IXF-spero.netlify.app";
});
const backButton = document.querySelector('.back-button');

backButton.addEventListener('mouseover', function() {
  this.style.transform = 'scale(1.1)';
});

backButton.addEventListener('mouseout', function() {
  this.style.transform = 'scale(1.0)';
});
backButton.addEventListener('click', function() {
  this.style.transform = 'scale(0.9)';
  window.location.href = '24IXF-spero.netlify.app';
});
