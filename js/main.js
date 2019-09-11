$(document).ready(function() {
	
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        }
    } 
})

    

function navmenu(){
    $('.js-btn-menu').on("click",function(){
      $('.js-menu').toggleClass('active');
      $('.js-background-overlay').toggleClass('active');
      $('.js-nav-menu').toggleClass('active');
    });

    $('.js-background-overlay').on('click', function() {
      $(this).removeClass('active');
      $('.js-menu').removeClass('active');
      $('.js-nav-menu').removeClass('active');
    });

    $(".js-btn-search").click(function(){
        $(".js-nav").slideToggle("slow");
        $(".js-seach").slideToggle("slow");
    });

  }
  
navmenu();


});