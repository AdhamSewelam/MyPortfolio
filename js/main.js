particlesJS("particles-js", {
  particles: {
    number: { value: 350, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        },
        animateOut: 'fadeOut'
    });
});




var imgs = Array.from(document.getElementsByClassName("imgs"));
var lightboxContainer = document.getElementById("lightbox-container");
var lightboxItem = document.getElementById("lightbox-item");
var closeBtn = document.getElementById("close");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
var currentIndex = 0;

for(var i=0;i<imgs.length;i++)
{
    imgs[i].addEventListener("click",function(eventInfo)
    {
        lightboxContainer.style.display = "flex";
        var imgSrc = eventInfo.target.src;
        lightboxItem.style.backgroundImage =`url(${imgSrc})`;
        currentIndex = imgs.indexOf(eventInfo.target);
    })
}

closeBtn.addEventListener("click",closeSlider);
function closeSlider()
{
    lightboxContainer.style.display = "none";
}

nextBtn.addEventListener("click",getNextSlide)

function getNextSlide()
{
    currentIndex++;
    if(currentIndex == imgs.length)
    {
        currentIndex = 0;
    }
    var imgSrc = imgs[currentIndex].src;
    lightboxItem.style.backgroundImage =`url(${imgSrc})`;
}

prevBtn.addEventListener("click",getPrevSlide)

function getPrevSlide()
{
    currentIndex--;
    if(currentIndex < 0)
    {
        currentIndex = imgs.length-1;
    }
    var imgSrc = imgs[currentIndex].src;
    lightboxItem.style.backgroundImage =`url(${imgSrc})`;
}

document.addEventListener("keydown",function(e)
{
    if(e.key == "Escape")
    {
        closeSlider();
    }
    else if(e.key == "ArrowRight")
    {
        getNextSlide();
    }
    else if(e.key == "ArrowLeft")
    {
        getPrevSlide();
    }
})

lightboxContainer.addEventListener("click",function(e)
{
    if(e.target != lightboxItem && e.target !=prevBtn && e.target !=nextBtn)
    {
        closeSlider();
    }
})



ScrollReveal().reveal('.tile', {
	interval: 5,
	reset: true
});


$('.js-tilt').tilt({
    scale: 1.1
})

