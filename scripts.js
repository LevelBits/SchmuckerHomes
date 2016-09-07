$(function() {

  $(".slider > #slide:gt(0)").hide();

  var intervalId = setInterval(next, 3000);

  function next() {
    var iconCount = $('.icon-wrapper').length
    var currIdx = $('.icon-wrapper.active').index();
    var newIdx = (currIdx >= (iconCount - 1)) ? 0 : currIdx + 1;
    select(newIdx);
  }

  function select(idx) {
    $('.slider > div')
      .removeClass('active')
      .eq(idx)
      .addClass('active');

    $('.icon-wrapper')
      .removeClass('active')
      .eq(idx)
      .addClass('active');
  }

  $(".icon-wrapper").click(function (el) {
    clearInterval(intervalId);

    var el = $(this);
    var idx = el.parent().children().index(el);
    select(idx);
  })



});
