window.addEventListener('scroll', function () {
  var element = document.querySelector('.slide-in-from-left');
  var positionFromTop = element.getBoundingClientRect().top;

  if (positionFromTop - window.innerHeight < 0) {
    element.classList.add('slide-in-active');
  }
});

window.addEventListener('scroll', function () {
  var element = document.getElementById('contact');
  var positionFromTop = element.getBoundingClientRect().top;

  if (positionFromTop - window.innerHeight < 0) {
    element.classList.add('slide-in-from-right');
  }
});


// PROJECTS
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


function animateProjectCards() {
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    if (isInViewport(card)) {
      card.classList.add('fade-in');
    }
  });
}


document.addEventListener('scroll', animateProjectCards);


animateProjectCards();

// PROJECTS

// TESTIMONIALS

document.addEventListener('DOMContentLoaded', function () {
  const testimonials = document.querySelectorAll('.testimonial');
  let currentTestimonial = 0;

  testimonials[currentTestimonial].classList.add('active');

  function showNextTestimonial() {
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].classList.add('active');
  }

  function showPrevTestimonial() {
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    testimonials[currentTestimonial].classList.add('active');
  }

  document.getElementById('nextButton').addEventListener('click', showNextTestimonial);
  document.getElementById('prevButton').addEventListener('click', showPrevTestimonial);
});
// TESTIMONIALS


// MYNAME
var text = "Patrick Louis Sagutin";
var index = 0;


function typeText() {
  if (index < text.length) {
    document.getElementById("typed-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 250);
  } else {

    document.getElementById("typed-text").innerHTML += '<i class="fas fa-user-slash fa-xs"></i>';
    setTimeout(resetText, 2000);
  }
}


function resetText() {
  document.getElementById("typed-text").innerHTML = "";
  index = 0;
  setTimeout(typeText, 1000);
}


window.onload = function () {
  typeText();
};
// MYNAME


function showDetails(projectNumber) {

  var allDetails = document.querySelectorAll('.project-details');
  allDetails.forEach(function (detail) {
    detail.classList.remove('active');
  });


  var clickedDetails = document.getElementById('details' + projectNumber);
  clickedDetails.classList.add('active');
}

