const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.links');
const links = document.querySelectorAll('.links li');
const toTop = document.querySelector('.to-top');

burger.addEventListener("click", () => {
    navLinks.classList.toggle('active');
    //the Links Fade
    links.forEach(link => {
        link.classList.toggle('fade');
    });
    //the X transition
    burger.classList.toggle('toggle');
});

// The Slider
var swiper = new Swiper(".mySwiper", {
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    loop: true,
});
//to top button

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add('go');
    } else {
        toTop.classList.remove('go');
    }
})
// banner slider
function switching(image) {
    document.querySelector('.pic1').src = image;
}
