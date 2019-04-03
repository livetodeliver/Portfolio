<<<<<<< HEAD
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



=======
$(document).ready(() => {
    $('.hamburger').on('click', () => {
        $('.nav-bar').toggleClass('active');
    });
    console.log('whatever');
})
>>>>>>> 97c056d2035198be35cb9e9f7fd23b5a70ba18a3
