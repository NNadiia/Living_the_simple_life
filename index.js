'use strict';
// scroll

const header = document.querySelector( '.header' );

window.onscroll = () => {
    if (window.innerWidth > 950) {
        if (window.pageYOffset > 265) {
            if (!header.classList.contains('header__reduce')) {
                header.classList.add('header__reduce');
            }
        }
        else if (window.pageYOffset < 60) {
            if (header.classList.contains('header__reduce')) {
                header.classList.remove('header__reduce');
            }
        }
        else {
            return header;
        }
    }
    else {
        if (window.pageYOffset > 330) {
            if (!header.classList.contains('header__reduce')) {
                header.classList.add('header__reduce');
            }
        }
        else if (window.pageYOffset < 250) {
            if (header.classList.contains('header__reduce')) {
                header.classList.remove('header__reduce');
            }
        }
        else {
            return header;
        }
    }
};