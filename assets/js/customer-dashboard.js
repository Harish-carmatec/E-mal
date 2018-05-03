
function setActive (){
  $(".tab_content").hide();
  $('.side-body .tab_container').each(function(){
		$(this).children('.tab_content:first').show()
  });
  $('.side-body ul.tabs li').removeClass('active')
  $('.side-body ul.tabs li:first-child').addClass("active");
}


$(document).ready(function() {
   // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp

 setActive();


	$('.side-menu-container ul li a').click(function(){
		setActive()
	})
  /* if in tab mode */
    $("ul.tabs li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.tabs li").removeClass("active");
	  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */

	$('.side-body ul.tabs li:last-child').addClass("tab_last");

$(function () {
    $('.side-menu .navbar-toggle').click(function () {
        $('.navbar-nav').toggleClass('slide-in');
        $('.side-body').toggleClass('body-slide-in');

        /// uncomment code for absolute positioning tweek see top comment in css
        //$('.absolute-wrapper').toggleClass('slide-in');
        
    });
});
/* file upload */
jQuery(".trigger").click(function(){
   jQuery("#inputFile").trigger("click");
});
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#image_upload_preview').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#inputFile").change(function () {
    readURL(this);
});
$(document).ready(function() {
    $('#startdate , #enddate').datepicker();
});

});
$(document).ready(function(){
  $(".kyc-clone").on('click' ,function(){
   $('.clone-kyc').first().clone().appendTo( ".cloned-kyc" );
     $('.clo-del-kyc button').on('click',function(){
      //alert();
      $(this).closest('.clone-kyc').remove();
    });
  });
jQuery(".idproof span").click(function(){
   jQuery(".idproof #idproof").trigger("click");
});

$('.ar').on('click',function(){
$('body').addClass('arabic');
$('body').attr('dir','rtl');
$('html').attr('lang','ar');
});
$('.en').on('click',function(){
$('body').removeClass('arabic');
$('body').attr('dir','ltr');
$('html').attr('lang','en');
});
$(function() {
      $( 'ul.select-payment-method li' ).on( 'click', function() {
            $( this ).parent().find( 'li.active' ).removeClass( 'active' );
            $( this ).addClass( 'active' );
      });
});
});
