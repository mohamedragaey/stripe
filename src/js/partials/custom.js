/**
 * @file
 * The primary JS file for WFP theme.
 */

/* eslint-disable space-before-function-paren */
/* eslint-disable brace-style */
/* eslint no-multi-str: 2 */
/* global jQuery */
(function ($) {
  // const $language = (drupalSettings) ? drupalSettings.path.currentLanguage : 'en'
  // const $rtl = ($language === 'ar')
  $(document).ready(function () {
    $('.search-btn').on('click', function () {
      $('.search-box').toggleClass('full')
      $(this).toggleClass('open')
    })
    $(window).scroll(function () {
      // When scroll change size of header.
      if ($(window).scrollTop() > 0) {
        $('.main-header').addClass('shrink-header')
      } else {
        $('.main-header').removeClass('shrink-header')
      }
    })
  })
}(jQuery))

