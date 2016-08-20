window.onscroll = function() {
  var el = document.getElementsByClassName('header')[0];
  var className = 'small';
  if (el.classList) {
    if (window.scrollY > 10)
      el.classList.add(className);
    else
      el.classList.remove(className);
  }
};


/*
 EXAMPLE
function checkWindowSize() {
    if ( jQuery(window).width() >= 1200 ) {
        $('.truncate').succinct({
            size: 400
        });
    }
    else if ( jQuery(window).width() >= 992 ) {
        $('.truncate').succinct({
            size: 200
        });
    }
    else if ( jQuery(window).width() >= 768 ) {
        $('.truncate').succinct({
            size: 80
        });
    }
    else if ( jQuery(window).width() >= 480 ) {
        $('.truncate').succinct({
            size: 120
        });
    }
    else if ( jQuery(window).width() >= 320 ) {
        $('.truncate').succinct({
            size: 80
        });
    }
    else {
        $('.truncate').succinct({
            size: 55
        });
    }
}

jQuery(document).ready(function(){
    jQuery(window).resize(checkWindowSize);
    checkWindowSize();
});

*/

$(document).ready(function() {

  $('#products .pagination li a').click(function(){
      //e.preventDefault();
       //event.preventDefault();
       return false;
  })

  $('#products .pagination li a[onclick]').click(function(e) {
    e.preventDefault();
  });

    /*
   # var a = 5,
   #    b = 10;

   #  if(a > b) {
   #    $("body").html("<p>A is larger than B</p>");
   #  }
   #  else if(a == b) {
   #    $("body").html("<p>A is equal to B</p>");
   #  }
   #  else {
   #    $("body").html("<p>B is larger than A</p>");
   #  }
  */
  /*  if ($(this).scrollTop() == 0) {
      $('#header').css({
        'box-shadow': 'none',
        '-moz-box-shadow' : 'none',
        '-webkit-box-shadow' : 'none' });
    }
    else {
      $('#header').css({
        'box-shadow': '0px 5px 5px #888',
        '-moz-box-shadow' : '0px 5px 5px #888',
        '-webkit-box-shadow' : '0px 5px 5px #888' });
    }*/


       /* var height = $(window).scrollTop();
        var a = 5,
         li= $('.nav li'),
         c = 5,
         d = 5,
         f = 5,
         g = 5,
         l = 5,
         b = 10;

        console.log(height);
        if(height  >= 480) {
            $('.m-model').addClass('m-active');
        }
        else if (height  >= 1300) {
          $('li').removeClass('m-active');
          $('.m-adv').addClass('m-active');
        }
        else if (height  >= 2280) {
          $('li').removeClass('m-active');
          $('.m-color').addClass('m-active');
        }*/

     /*   $(window).scroll(function() {
            var scroll = $(window).scrollTop(),
                li     = $('.nav li');
                console.log(scroll);
            if (scroll >= 0) {
               $('.m-main').addClass('m-active');
            }else if (scroll >= 500) {
                li.removeClass('m-active');
                $('.m-model').addClass('m-active');
            }else if (scroll >= 1300) {
                li.removeClass('m-active');
                $('.m-adv').addClass('m-active');
            }else if (scroll >= 2300) {
                li.removeClass('m-active');
                $('.m-color').addClass('m-active');
            }
        });
*/



  $(".fancybox").fancybox({
     openEffect : 'fade', /* none, fade, elastic */
     closeEffect : 'fade',
     openSpeed :  1000, /* ms, "slow", "normal", "fast"*/
     closeSpeed : 1000
     /* mouseWheel : false,*/
     // helpers : {
     //   /*title : null */
     //   title : {
     //     type : 'inside' / 'float', 'inside', 'outside', 'over', 'null' /
     //   }
     // }
   });

  $('button#order-it').click(function(){
    $('#item_name').val($(this).parent().find('.name-item').text());
    $('#item_price').val($(this).parent().find('.new-price').text().replace(/руб./, '').trim());
  });

  $('.btn-order').click(function(){
    $('#item_name').val($('.car-model').text().replace('Коврики для ', '').trim());    
  });
  /***********************
  * DROPDOWN MENU
  ***********************/




  $(function() {
    var Accordion = function(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;

      // Variables privadas
      var links = this.el.find('.link');
      // Evento
      links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el;
        $this = $(this),
        $next = $this.next();

      $next.slideToggle();
      $this.parent().toggleClass('open');

      if (!e.data.multiple) {
        $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
      };
    }

    var accordion = new Accordion($('#accordion'), false);
  });


  var $body = $('body'),
      $popup = $('.mypopup');

  $('.fadePopup').click(function() {
    $body.addClass('popup-active');
    $popup.fadeIn();
    return false;
  });

  $('.mypopup-close').add('.mypopup-overlay').click(function() {
    $body.removeClass('popup-active');
    $popup.fadeOut();
    return  false;
  });

  $('#tel, #telef2, .telephone').mask('+0(000)-000-00-00');

  /***********************************
  * SLICK SLIDER INIT  REVIEWS SLIDER
  ***********************************/
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

/*
  var owl = $("#owl-demo");
  owl.owlCarousel({
    items : 10, //10 items above 1000px browser width
    itemsDesktop : [1000,5], //5 items between 1000px and 901px
    itemsDesktopSmall : [900,3], // 3 items betweem 900px and 601px
    itemsTablet: [600,2], //2 items between 600 and 0;
    itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });*/
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play',5000);
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })

  scrollNav();

  $('.mypopup-res .new').click(function(){
    $('.mypopup-res').hide();
    $('.mypopup-close').click();
  });
  $('.mypopup-res .mypopup-close').click(function(){
      $('.mypopup-res').hide();
    });

  $('#order-btn').click(function(){
    $('#item_name').val('');
  });


    $('#req').click(function(){
        //alert('go');
        var error = "";
        //if($(this).attr('id') == 'send_feed') var that = '#get_it';

        var that = '.feed-form';
        var name  = $(that).find('#name').val();
        var email  = $(that).find('#name_email').val();
        var tel  = $(that).find('#tel').val();
        var comment  = $(that).find('#comment').val();
        var item_name = $(that).find('#item_name').val();
        var color_kovrik = $('.select-color').find(".color-kovrik :selected").html();
        var color_kont   = $('.select-color').find(".color-kont :selected").html();
        var price   = parseInt($('div.price').text().replace(/ руб./,''))||$(that).find('#item_price').val();

        if(name ==""){ error += "Не заполнено поле Имя. \n";}
        //if(text ==""){ error += "Не заполнено поле Сообщение.";}
        if(error !=="")
            alert(error);
        else{
            $.post('./q1.php',{name: name, mail:email, tel:tel, comment:comment, item_name: item_name, color_kovrik:color_kovrik, color_kont:color_kont,pricer:price},
                function(data){
                    if (data!=0) {
                        $(that).find('#name').val("");
                        $(that).find('#name_email').val("");
                        $(that).find('#tel').val("");
                        $(that).find('#comment').val("");
                        $(that).find('#item_name').val('');
                        $('.select-color').find(".color-kovrik :selected").html();
                        $('.select-color').find(".color-kont :selected").html();
                        //alert(data);
                        $('.mypopup-res').show();
                    }
                });
        }
        $(that).find('#item_name').val('');
        return false;
    });

      // console.log(item_name );
     // console.log(color_kont);

      $('.query').click(function(){
        //alert('go');
        var error = "";
        //if($(this).attr('id') == 'send_feed') var that = '#get_it';

        var that = '.form-bottom';
        var name1  = $(that).find('#name1').val();
        var telef1  = $(that).find('#telef1').val();

        if(telef1 ==""){ error += "Не заполнено поле Имя. \n";}
        //if(text ==""){ error += "Не заполнено поле Сообщение.";}
        if(error !=="")
            alert(error);
        else{
            $.post('./q2.php',{name1: name1, telef1:telef1},
                function(data){
                    if (data!=0) {
                        $(that).find('#name1').val("");
                        $(that).find('#telef1').val("");
                        //alert(data);
                        $('.mypopup-res').show();
                    }
                });
        }
        return false;
    });


        $('#get-discount').click(function(){
          //alert('go');
          var error = "";
          //if($(this).attr('id') == 'send_feed') var that = '#get_it';

          var that = '.discount-rorm';
          var name2  = $(that).find('#name2').val();
          var telef2  = $(that).find('#telef2').val();

          if(telef2 ==""){ error += "Не заполнено поле Телефон. \n";}
          //if(text ==""){ error += "Не заполнено поле Сообщение.";}
          if(error !=="")
              alert(error);
          else{
              $.post('./q3.php',{name2: name2, telef2:telef2},
                  function(data){
                      if (data!=0) {
                          $(that).find('#name2').val("");
                          $(that).find('#telef2').val("");
                          //alert(data);
                          $('.mypopup-res').show();
                      }
                  });
          }
          return false;
      });


        /*АНИМИРУЕМ ВЫСОТУ ВЫБОРА МОДЕЛИ - БЛОК*/
        // $(function(){
        //   var nav = $('.get-model ul'),
        //       animateTime = 500,
        //       navLink = $('#toggle');
        //   navLink.click(function(){
        //     if(nav.height() === 0){
        //       autoHeightAnimate(nav, animateTime);
        //     } else {
        //       nav.stop().animate({ height: '0' }, animateTime);
        //     }
        //   });
        // })

        //  Function to animate height: auto
        // function autoHeightAnimate(element, time){
        //     var curHeight = element.height(), // Get Default Height
        //         autoHeight = element.css('height', 'auto').height(); // Get Auto Height
        //         element.height(curHeight); // Reset to Default Height
        //         element.stop().animate({ height: autoHeight }, parseInt(time)); // Animate to Auto Height
        // }


     // $('.tab-content article').css({height: '220'});
       $('#toggle').click(function(){

           if ($(this).hasClass('active-show')) {
                   $(this).parent().find('ul').css({height: '90'}, 500);
                   $(this).removeClass('active-show');
                 }
           else {
                   $(this).parent().find('ul').css({height: 'auto'}, 500);
                   $(this).addClass('active-show');

           }
           return false;
       });



          var target_date = new Date().getTime() + (1000*3600*48); // set the countdown date
          var days, hours, minutes, seconds; // variables for time units
          var countdown = document.getElementById("tiles"); // get tag element
          getCountdown();
          setInterval(function () { getCountdown(); }, 1000);
          function getCountdown(){
            // find the amount of "seconds" between now and target
            var current_date = new Date().getTime();
            var seconds_left = (target_date - current_date) / 1000;

            days = pad( parseInt(seconds_left / 86400) );
            seconds_left = seconds_left % 86400;

            hours = pad( parseInt(seconds_left / 3600) );
            seconds_left = seconds_left % 3600;

            minutes = pad( parseInt(seconds_left / 60) );
            seconds = pad( parseInt( seconds_left % 60 ) );

            // format countdown string + set tag value
            /*countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>";*/
          }

          function pad(n) {
            return (n < 10 ? '0' : '') + n;
          }


          /*GALLERY*/

          $(function(){
                $('#products').slides({
                  preload: true,
                  preloadImage: 'img/loading.gif',
                  effect: 'slide, fade',
                  crossfade: true,
                  slideSpeed: 200,
                  fadeSpeed: 500,
                  generateNextPrev: true,
                  generatePagination: false
                });
              });


          // Variables
          var colorButton = $(".colors li");
          colorButton.on("click", function(){
            // Remove class from currently active button
            $(".colors > li").removeClass("active-color");
            // Add class active to clicked button
            $(this).addClass("active-color");
            // Get background color of clicked
            var newColor = $(this).attr("data-color");
            // Change background of everything with class .bg-color
            $(".select-color").css("background-color", newColor);
            // Change color of everything with class .text-color
            $(".text-color").css("color", newColor);

          });


}); // /.document-ready


  function scrollNav() {
    var numeric = $("1");
    $('.nav a').click(function(){
      //Toggle Class
      $(".nav .active").removeClass("active");
      $(this).closest('li').addClass("active");
      var theClass = $(this).attr("class");
      $('.'+theClass).parent('li').addClass('active');
      //Animate
      $('html, body').stop().animate({
           scrollTop: $( $(this).attr('href') ).offset().top - numeric
      }, 400);
      return false;
    });
    $('.scrollTop a').scrollTop();
  }
var Tabs = {

  init: function() {
    this.bindUIfunctions();
    this.pageLoadCorrectTab();
  },

  bindUIfunctions: function() {

    // Delegation
    $(document)
      .on("click", ".transformer-tabs a[href^='#']:not('.active')", function(event) {
      Tabs.changeTab(this.hash);
      event.preventDefault();
    })
      .on("click", ".transformer-tabs a.active", function(event) {
      Tabs.toggleMobileMenu(event, this);
      event.preventDefault();
    });

  },

  changeTab: function(hash) {

    var anchor = $("[href=" + hash + "]");
    var div = $(hash);

    // activate correct anchor (visually)
    anchor.addClass("active").parent().siblings().find("a").removeClass("active");

    // activate correct div (visually)
    div.addClass("active").siblings().removeClass("active");

    // update URL, no history addition
    // You'd have this active in a real situation, but it causes issues in an <iframe> (like here on CodePen) in Firefox. So commenting out.
    // window.history.replaceState("", "", hash);

    // Close menu, in case mobile
    anchor.closest("ul").removeClass("open");

  },

  // If the page has a hash on load, go to that tab
  pageLoadCorrectTab: function() {
    this.changeTab(document.location.hash);
  },

  toggleMobileMenu: function(event, el) {
    $(el).closest("ul").toggleClass("open");
  }

}

Tabs.init();



