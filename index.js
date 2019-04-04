function listenToHamburger() {
    $('.hamburger').on('click', () => {
        toggleNav();
    });
}

function listenToMenuClicks() {
    $('.nav-bar').find('li').find('a').on('click', () => {
        closeNav();
    });
}

function toggleNav() {
    $('.nav-bar').toggleClass('active');
}

function closeNav() {
    $('.nav-bar').removeClass('active');
}

$(document).ready(() => {
    listenToHamburger();
    listenToMenuClicks();
})



