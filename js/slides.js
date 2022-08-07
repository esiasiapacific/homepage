let sIndex = 1;
let slides = document.getElementsByClassName("slide-slide");
let slideDots = document.getElementsByClassName("slide-dot");
//
showSlide(sIndex);
setInterval(incrementSlide, 7000);

function incrementSlide() {
    plusSlide(1);
}

function plusSlide(n) {
  showSlide(sIndex += n);
}

function currentSlide(n) {
  showSlide(sIndex = n);
}

function showSlide(n) {
  let i;
  if (n > slides.length) {
    sIndex = 1
  }
  if (n < 1) {
    sIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < slideDots.length; i++) {
      slideDots[i].className = slideDots[i].className.replace(" active", "");
  }

  slides[sIndex - 1].style.display = "inline-block";
  slideDots[sIndex - 1].className += " active";
}

