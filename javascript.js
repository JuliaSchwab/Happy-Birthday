let slideIndex = 1;
showSlides(1,'ErstesJahr');
showSlides(1,'ZweitesJahr');
showSlides(1,'DrittesJahr');
showSlides(1,'ViertesJahr');
showSlides(1,'FuenftesJahr');
showSlides(1,'SechstesJahr');
showSlides(1,'SiebtesJahr');

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
