/**
 * Hamburger menu: 
 * mostrare / nascondere il menu principale 
 */

// referenze
var hamburger = $('header div > a');
var hamburgerMenu = $('.hamburger-menu');


// evento al click
hamburger.click( function() {

    hamburgerMenu.fadeToggle();

});