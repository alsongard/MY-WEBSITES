let slideIndexPosition = 1;
showSlide(slideIndexPosition);

function plusSlides(n){
    showSlide(slideIndexPosition += n);
}
function currentSlide(n){
    showSlide(slideIndexPosition =  n);
}

function showSlide(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot")

    if (n > slides.length){
        slideIndexPosition = 1;   
    }
    if (n < 1){
        slideIndexPosition = slides.length;
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexPosition -1].stype.display = "block";
    dots[slideIndexPosition -1].className += "active";
}