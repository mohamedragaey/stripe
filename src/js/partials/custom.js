/* global $ */

$(document).ready(function () {
  $('.custom-select').on('click keyup keypress blur change', function (e) {
    e.stopPropagation()
    e.preventDefault()
    let content = $(this).parent('.block-body').find('.custom-select-content')
    content.each(function () {
      if (e.target.value === $(this).attr('data-dropdown')) {
        $(this).removeClass('hidden')
      } else {
        $(this).addClass('hidden')
      }
    })
  })
})
