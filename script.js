// Header scrolling effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const top = document.querySelector('.top');
  header.classList.toggle('sticky', scrollY > 0);
  top.classList.toggle('active',scrollY>10);
});

// Toggling menus
let menutoggle = document.querySelector('.toggle');
let navlink = document.querySelector('.navlink');

menutoggle.onclick = function()
{
  menutoggle.classList.toggle('active');
  navlink.classList.toggle('active');
}

document.onclick = function(e) {
  if (e.target.id !== 'navlink' && e.target.id !== 'toggle') {
    menutoggle.classList.remove('active');
    navlink.classList.remove('active');
  }
  else if (e.target.id !== 'theme' && e.target.id !== 'themecolors') {
    themecolors.classList.remove('active');
  } 
}

// Dark theme switcher
let darkbtn = document.querySelector('.darkmode');
let body = document.querySelector('body');
let i = document.querySelector('.darkmode i')
darkbtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (i.classList.contains('fa-sun')) {
    i.classList.replace('fa-sun', 'fa-moon');
  }
  else {
    i.classList.replace('fa-moon', 'fa-sun');

  }
})


// Theme changer
let themebtn = document.querySelector('.theme');
let themecolors = document.querySelector('.themecolors');
themebtn.addEventListener('click', () => {
  themecolors.classList.toggle('active');
})
window.addEventListener('scroll', () => {
  if (themecolors.classList.contains('active')) {
    themecolors.classList.remove('active');
  }
})

var theme = document.querySelectorAll('.color');
theme.forEach(color => {
  color.onclick = () => {
    let bg = color.style.background;
    document.querySelector(':root').style.setProperty('--primary-color', bg);
  }

})

// Owl carousel for slider
$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    margin: 20,
    loop: false,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      },
    }
  });
});

// AOS - Animation on Scolling
AOS.init({
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false,
});


var typed = new Typed('.autotype', {
  strings: ['Web Designer', 'Explorer', 'Web Developer', 'Coder'],
  typeSpeed: 70,
  backSpeed: 70,
  loop: true
});
var typed = new Typed('.autotype1', {
  strings: ['Web Designer', 'Explorer', 'Web Developer', 'Coder'],
  typeSpeed: 70,
  backSpeed: 70,
  loop: true,
});


const contactForm = document.getElementById('contact-form');
const contactMsg = document.getElementById('contact-msg');

const sendEmail = async (e) => {
  e.preventDefault();

  // serviceID, templateID, #form, publicKey
   emailjs.sendForm('service_311zlvq','template_la6x2kg','#contact-form','uRhnSCjhCpd8LObux').then(()=>{
    contactMsg.textContent = 'Message sent successfully'
    contactMsg.style.right = '10px';
    contactMsg.style.backgroundColor = '#4BB543';
    setTimeout(() => {
      contactMsg.textContent = ''
      contactMsg.style.right = '-300px';
    }, 4000);
    contactForm.reset()
  },()=>{
    contactMsg.textContent = 'Message not sent.'
    contactMsg.style.right = '10px';
    contactMsg.style.backgroundColor = '#f00';
  })
}

contactForm.addEventListener('submit',sendEmail)