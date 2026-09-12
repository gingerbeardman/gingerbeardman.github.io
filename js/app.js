$(document).ready(function() {

  'use strict';

  // =================
  // Localhost → production banner
  // =================

  (function showLocalhostBanner() {
    var host = window.location.hostname;
    var isLocal = host === 'localhost'
      || host === '127.0.0.1'
      || host === '0.0.0.0'
      || host === '[::1]'
      || host.endsWith('.local');

    if (!isLocal) {
      return;
    }

    var productionOrigin = 'https://blog.gingerbeardman.com';
    var productionUrl = productionOrigin
      + window.location.pathname
      + window.location.search
      + window.location.hash;

    var banner = document.createElement('a');
    banner.className = 'c-localhost-banner';
    banner.href = productionUrl;
    banner.target = '_blank';
    banner.rel = 'noopener noreferrer';
    banner.title = 'Open this page on ' + productionOrigin.replace(/^https?:\/\//, '');
    banner.textContent = 'localhost — open production version';

    document.body.insertBefore(banner, document.body.firstChild);
  })();

  // =================
  // Off Canvas menu
  // =================

  let menuVisible = false;
  let menuFocusTimer;
  let menuVisibleTimer;

  function closeMenu() {
    clearTimeout(menuFocusTimer);
    clearTimeout(menuVisibleTimer);
    $('.js-off-canvas-toggle').removeClass('is-active');
    $('.js-off-canvas-container').removeClass('is-active');
    $('#query').blur();
    menuVisible = false;
  }

  function doMenu(e) {
    e.preventDefault();
    $('.js-off-canvas-toggle').toggleClass('is-active');
    $('.js-off-canvas-container').toggleClass('is-active');
    if ($('.js-off-canvas-container').hasClass('is-active')) {
      menuFocusTimer = setTimeout(function(){
        $('#query').focus();
      }, 200);
      menuVisibleTimer = setTimeout(function(){
        menuVisible = true;
      }, 400);
    } else {
      closeMenu();
    }
  }

  $('.js-off-canvas-toggle').click(function(e) {
    doMenu(e);
  });
  
  // body click to hide menu, excluding sidebar
  let containingElement = document.querySelector('#sidebar');
  $('header,.o-wrapper').click(function(e) {
    if ( !containingElement.contains( e.target ) ) {
      if (menuVisible == true) {
        closeMenu();
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
  $('.tofigure').find('img').each(function() {
      var caption;
      caption = $(this).attr('title');
      $(this).after('<figcaption class="caption">' + caption + '</figcaption>');
  });

  // =================
  // Focus search
  // =================

  document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && $('.js-off-canvas-container').hasClass('is-active')) {
          e.preventDefault();
          closeMenu();
          return;
      }

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
