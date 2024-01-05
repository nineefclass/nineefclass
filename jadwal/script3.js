var dayButtons = document.getElementsByClassName('day-button');
var daySchedules = document.getElementsByClassName('day-schedule');

for (var i = 0; i < dayButtons.length; i++) {
  dayButtons[i].addEventListener('click', function(event) {
    var scheduleId = event.target.id.replace('-button', '-schedule');
    for (var j = 0; j < daySchedules.length; j++) {
  if (daySchedules[j].id !== scheduleId) {
    daySchedules[j].classList.remove('fadeIn');
    daySchedules[j].classList.add('fadeOut');
    setTimeout(function(j) {
      return function() {
        daySchedules[j].classList.add('hidden');
      }
    }(j), 500); // Delay 
  } else {
    daySchedules[j].classList.remove('hidden', 'fadeOut');
    daySchedules[j].classList.add('fadeIn');
  }
}

    // Hapus class 'clicked' dari semua button
    for (var k = 0; k < dayButtons.length; k++) {
      dayButtons[k].classList.remove('clicked');
    }

    // Tambahkan class 'clicked' ke button yang diklik
    event.target.classList.add('clicked');
  });
}

document.querySelector(".back-button").addEventListener("click", function() {
  window.location.href = "../";
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
  window.location.href = '../';
});
