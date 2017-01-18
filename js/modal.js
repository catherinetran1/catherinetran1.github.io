// Get the modal
var modal1 = document.getElementById('petitchoux');
var modal2 = document.getElementById('132');
var modal3 = document.getElementById('143');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById('petit');
var img2 = document.getElementById('inf132');
var img3 = document.getElementById('inf143');
img1.onclick = function(){
    modal1.style.display = "block";
}
img2.onclick = function(){
    modal2.style.display = "block";
}
img3.onclick = function(){
    modal3.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal1.style.display = "none";
}
span.onlick = function(){
    modal2.style.display = "none";
}
span.onlick = function(){
    modal3.style.display = "none";
}

//slides 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}