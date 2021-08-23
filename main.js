//  Show Menu 
const toggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const close = document.getElementById('nav-close');

//Validate that variables exist
if (toggle) {
    //we add the show-menu class to the div tag with the nav_menu class
    toggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if (close) {
    close.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

//Remove menu mobile
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));