let slideIndex = 1;
let slideIncides = {
  ErstesJahr : 1,
  ZweitesJahr : 1,
  DrittesJahr : 1,
  ViertesJahr : 1,
  FuenftesJahr : 1,
  SechstesJahr : 1,
  SiebtesJahr : 1,
}
showSlides(1,'ErstesJahr');
showSlides(1,'ZweitesJahr');
showSlides(1,'DrittesJahr');
showSlides(1,'ViertesJahr');
showSlides(1,'FuenftesJahr');
showSlides(1,'SechstesJahr');
showSlides(1,'SiebtesJahr');

// Next/previous controlsxyz
function plusSlides(n,Jahresauswahl) {
  slideIncides[Jahresauswahl] = slideIncides[Jahresauswahl] + n;
  showSlides(slideIncides[Jahresauswahl],Jahresauswahl);
}

function showSlides(n,Jahresauswahl) {
  let i;
  let slides = document.querySelectorAll(`.slideshow-container.${Jahresauswahl} > .mySlides`);
  if (n > slides.length) {slideIncides[Jahresauswahl] = 1}
  if (n < 1) {slideIncides[Jahresauswahl] = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 
  slides[slideIncides[Jahresauswahl]-1].style.display = "block";
}
