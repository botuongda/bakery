$(function(){
  $('.home-button').on('click',function(e){
    e.preventDefault();
    $('nav').toggleClass('nav-toggle');
  }); // responsive navigation bar 

  $('nav a').on('click',function(e){
    e.preventDefault();
    var elToScroll = $(this).attr('href');
    $('html,body').animate({
      scrollTop : $(elToScroll).offset().top
    },700);
  }); // scrollTo

  $(window).on('scroll',function(){
    var navPos = $('nav').offset().top;
    var cakesPos = $('.art-of-cakes').offset().top;
    var sandwich = document.querySelector('.sandwich').getBoundingClientRect();
    if (sandwich.top < 500) {
      $('.sandwich-stats').css('transform','scale(1)');
    }else {
      $('.sandwich-stats').css('transform','scale(.2)');
    }
    console.log(sandwich.top);

    if (navPos >= cakesPos) {
      $('nav').css('background','rgba(70, 71, 70, 1)');
    }else {
      $('nav').css('background','rgba(70, 71, 70, .6)');
    }
  }); //navbar backgground changing functionality



}); // end ready
