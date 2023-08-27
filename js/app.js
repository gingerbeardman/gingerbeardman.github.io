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

  $('.js-off-canvas-toggle').click(function(e) {
    e.preventDefault();
    $('.js-off-canvas-toggle').toggleClass('is-active');
    $('.js-off-canvas-container').toggleClass('is-active');
    if (!$('.js-off-canvas-toggle').hasClass('is-active')) {
      $('#query').focus();
    }
    if ($('.js-off-canvas-toggle').hasClass('is-active')) {
      $('#query').focus();
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