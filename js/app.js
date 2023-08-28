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

  let menuVisible = false;
  $('.js-off-canvas-toggle').click(function(e) {
    e.preventDefault();
    $('.js-off-canvas-toggle').toggleClass('is-active');
    $('.js-off-canvas-container').toggleClass('is-active');
    if ($('.js-off-canvas-container').hasClass('is-active')) {
      $('#query').focus();
      setTimeout(function(b){
          menuVisible = b;
      },400,true);
    } else {
      menuVisible = false;
    }
  });

  // body click to hide menu
  $('.js-off-canvas-container').click(function(e) {
    console.log("HIDE");
    if (menuVisible == true) {
      $('.js-off-canvas-toggle').removeClass('is-active');
      $('.js-off-canvas-container').removeClass('is-active');
      menuVisible = false;
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

});