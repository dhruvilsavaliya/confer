$(document).ready(function(){
     // $('.mobile_sub_menu').hide();

     $('.dropdown-toggle').click(function(){
          $('.dropdown-toggle').toggleClass('black green');

     });
     $('.mobile_main_menu > li > a').click(function(){
          $(this).next('mobile_main_menu').sideToggle();
     });
     $('.navbar-toggler').click(function(){
        $(this).find('span').toggleClass('bi-x bi-list')
     })
     
     $('#welcome').owlCarousel({
          loop:true,
          margin:-1,
          dots:false,
          nav:true,
          navText:false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
      });
      $('#client').owlCarousel({
        loop:true,
        margin:50,
        stagePadding:20,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })
})
