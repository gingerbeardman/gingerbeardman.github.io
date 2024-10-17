$(document).ready(function() {

  'use strict';

  // =================
  // Responsive videos
  // =================

  $('.o-wrapper').fitVids({
    'customSelector': ['iframe[src*="ted.com"]']
  });

  // =================
  // Off Canvas menu
  // =================

  function doMenu(e) {
    e.preventDefault();
    $('.js-off-canvas-toggle').toggleClass('is-active');
    $('.js-off-canvas-container').toggleClass('is-active');
    if ($('.js-off-canvas-container').hasClass('is-active')) {
      setTimeout(function(b){
        $('#query').focus();
      },200,true);
      setTimeout(function(b){
          menuVisible = b;
      },400,true);
    } else {
      $('#query').blur();
      menuVisible = false;
    }
  }

  let menuVisible = false;
  $('.js-off-canvas-toggle').click(function(e) {
    doMenu(e);
  });
  
  // body click to hide menu, excluding sidebar
  let containingElement = document.querySelector('#sidebar');
  $('header,.o-wrapper').click(function(e) {
    if ( !containingElement.contains( e.target ) ) {
      if (menuVisible == true) {
        $('.js-off-canvas-toggle').removeClass('is-active');
        $('.js-off-canvas-container').removeClass('is-active');
        menuVisible = false;
      }
    }
  });

  // =================
  // Sortable Tables
  // =================

  $("table:not(.donotsort)").tablesorter();

  // =================
  // Figure Caption
  // =================

  $('.tofigure').each(function() {
      $(this).replaceWith($('<figure class="img-with-caption tofigure">' + this.innerHTML + '</figure>'));
  });
  $('.tofigure').children('img').each(function() {
      var caption;
      caption = $(this).attr('title');
      $(this).after('<figcaption class="caption">' + caption + '</figcaption>');
  });

  // =================
  // Focus search
  // =================

  document.addEventListener('keydown', function(e) {
      // Check if the pressed key is 's' or 'S'
      if ((e.key === 's' || e.key === 'S') && (e.metaKey || e.ctrlKey)) {
          // Scroll to the top of the page
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
          
          // Open menu
          doMenu(e);
      }
  });
});