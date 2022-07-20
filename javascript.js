let slideIndex = 1;
showSlides(0,'ErstesJahr');
showSlides(0,'ZweitesJahr');
showSlides(0,'DrittesJahr');
showSlides(0,'ViertesJahr');
showSlides(0,'FuenftesJahr');
showSlides(0,'SechstesJahr');
showSlides(0,'SiebtesJahr');

// Next/previous controlsxyz
function plusSlides(n,Jahresauswahl) {
  showSlides(slideIndex += n,Jahresauswahl);
}

function showSlides(n,Jahresauswahl) {
  let i;
  let slides = document.querySelectorAll(`.slideshow-container.${Jahresauswahl} > .mySlides`);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 
  slides[slideIndex-1].style.display = "block";
}
