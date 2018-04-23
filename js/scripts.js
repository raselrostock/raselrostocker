(function ($) {
    'use strict';

    jQuery(document).ready(function () {
       
        setTimeout(function(){
        $('body').addClass('loaded');
        },1000);
    	
    	/* Smooth Scroll */

        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });
		

       

       /* Scroll Naviagation Background Change with Sticky Navigation */
		 
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.header-top-area').addClass('navigation-background');
            } else {
                $('.header-top-area').removeClass('navigation-background');
            }
        });

        /* Mobile Navigation Hide or Collapse on Click */
		
        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        
		 });
		 
		
		
		
        /* Scroll To Top */
		
        $(window).scroll(function(){
        if ($(this).scrollTop() >= 500) {
            $('.scroll-to-top').fadeIn();
         } else {
            $('.scroll-to-top').fadeOut();
         }
	   });
	
	
	    $('.scroll-to-top').click(function(){
		  $('html, body').animate({scrollTop : 0},800);
		  return false;
	    });
		

        /* Typed.js */
		
        $(window).load(function(){
        $(".typing").typed({
            strings: ["Hello, my name is Md. Mostofa kamal.<br/> <span class='fancy'> I am a <b>Full-Stack Web Developer</b><i class='fa fa-code color-3'></i>.</span><br/><span class='fancy'>Feel free to take a look at my portfolio section. </span><br/><span class='fancy'>Also you can stop and say hello at raselrostock@yahoo.com..</span>"],    /* You can change the home section typing text from here and do not use "&" use "and" */
            typeSpeed: 50
          });
         });
        
        
	});
})(jQuery);