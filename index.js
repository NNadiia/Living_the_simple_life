'use strict';
// scroll

const header = document.querySelector( '.header' );

window.onscroll = () => {
  if (window.pageYOffset > 1) {
      header.classList.add("header__reduce");
  } else {
      header.classList.remove("header__reduce");
  }
 };
