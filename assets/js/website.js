$(document).ready(function() {
  $(".center").slick({
    dots: false,
    arrows:false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
	  centerMode: true,
    centerPadding: '0px',
    autoplay: true,
  	autoplaySpeed: 2000,
    index: 1,
    focusOnSelect:true,
    responsive: [{
       breakpoint: 768,
       settings: {
         arrows: false,
         centerMode: true,
         centerPadding: '0px',
         slidesToShow: 3
       }
     }, {
       breakpoint: 667,
       settings: {
         arrows: false,
         centerMode: true,
         centerPadding: '0px',
         slidesToShow: 1
       }
     }]
  });
});