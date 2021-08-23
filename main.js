//  Show Menu 
const toggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const close = document.getElementById('close');
//Validate that variables exist
if (toggle) {
    //we add the show-menu class to the div tag with the nav_menu class
    toggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        toggle.classList.add('hide-toggle');
        close.classList.add('show-close');
    })
}

if (close) {
    close.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        toggle.classList.remove('hide-toggle');
        close.classList.remove('show-close');
    })
}

//Remove menu mobile
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));