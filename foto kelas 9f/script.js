var slideIndex1 = 0;
var slideIndex2 = 0;

function changeSlide1(n) {
  var slides = document.querySelectorAll('#album1 .slide');
  slideIndex1 = (slideIndex1 + n + slides.length) % slides.length;
  slides.forEach(function(slide, index) {
    slide.style.display = index === slideIndex1 ? 'block' : 'none';
  });
}
function changeSlide2(n) {
  var slides = document.querySelectorAll('#album2 .slide');
  slideIndex2 = (slideIndex2 + n + slides.length) % slides.length;
  slides.forEach(function(slide, index) {
    slide.style.display = index === slideIndex2 ? 'block' : 'none';
  });
}
var slideIndex = 0;
var isAnimating = false;

window.onload = function() {
  changeSlide1(0);
  changeSlide2(0);
  changeSlide3(0);
  changeSlide4(0);
  changeSlide5(0);
  changeSlide6(0);
  changeSlide7(0);
}
var slideIndex3 = 0;

function changeSlide3(n) {
  var slides = document.querySelectorAll('#album3 .slide');
  slideIndex3 = (slideIndex3 + n + slides.length) % slides.length;
  slides.forEach(function(slide, index) {
    slide.style.display = index === slideIndex3 ? 'block' : 'none';
  });
}
var slideIndex4 = 0;

function changeSlide4(n) {
  var slides = document.querySelectorAll('#album4 .slide');
  slideIndex4 = (slideIndex4 + n + slides.length) % slides.length;
  slides.forEach(function (slide, index) {
    slide.style.display = index === slideIndex4 ? 'block' : 'none';
  });
}
var slideIndex5 = 0;

function changeSlide5(n) {
  var slides = document.querySelectorAll('#album5 .slide');
  slideIndex5 = (slideIndex5 + n + slides.length) % slides.length;
  slides.forEach(function (slide, index) {
    slide.style.display = index === slideIndex5 ? 'block' : 'none';
  });
}
var slideIndex6 = 0;

function changeSlide6(n) {
  var slides = document.querySelectorAll('#album6 .slide');
  slideIndex6 = (slideIndex6 + n + slides.length) % slides.length;
  slides.forEach(function (slide, index) {
    slide.style.display = index === slideIndex6 ? 'block' : 'none';
  });
}
var slideIndex7 = 0;

function changeSlide7(n) {
  var slides = document.querySelectorAll('#album7 .slide');
  slideIndex6 = (slideIndex7 + n + slides.length) % slides.length;
  slides.forEach(function (slide, index) {
    slide.style.display = index === slideIndex6 ? 'block' : 'none';
  });
}

function changeSlide(step) {
  if (isAnimating) return;
  isAnimating = true;
  slideIndex += step;
  showSlide(slideIndex);
  setTimeout(function() {
    isAnimating = false;
  }, 500); // Jeda 500ms setelah perubahan slide
}
function showSlide(index) {
  var slides = document.querySelectorAll('.slide');
  slides.forEach(function(slide) {
    slide.style.display = 'none';
  });
  slideIndex = (index + slides.length) % slides.length;
  slides[slideIndex].style.display = 'block';
}
function openImage(imageSrc) {
  var modal = document.getElementById('myModal');
  var img = document.getElementById('img01');
  modal.style.display = "block";
  img.src = imageSrc;
}

function closeModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = "none";
}
document.querySelector(".back-button").addEventListener("click", function() {
  window.location.href = "../index.html";
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
  window.location.href = '../index.html';
});
window.addEventListener('mousemove', function() {
  var audioElement = document.getElementById('myAudio');
  audioElement.play();
  // Hapus event listener setelah audio dimulai
  this.removeEventListener('mousemove', arguments.callee, true);
}, true);
