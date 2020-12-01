var block_show = null;
var foriterval;
var Curslide = 0;

function scrollTracking() {
  var wt = $(window).scrollTop();
  var wh = $(window).height();
  var et = $(".comment_slider-main_wrapper-main_info-main_text-comment_author-line").offset().top;
  var eh = $(".comment_slider-main_wrapper-main_info-main_text-comment_author-line").outerHeight();

  if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
    if (block_show == null || block_show == false) {
      $(".comment_slider-main_wrapper-main_info-main_text-comment_author-line").animate({
        width: "0vw",
        // ширина элемента
        opacity: 1 // прозрачность элемента

      }, 2000).animate({
        width: "3vw",
        // ширина элемента
        opacity: 1 // прозрачность элемента

      }, 2000);
      foriterval = setInterval(async () => {
        $(".comment_slider-main_wrapper-main_info-main_text-comment_author-line").animate({
          width: "0vw",
          // ширина элемента
          opacity: 1 // прозрачность элемента

        }, 2000).animate({
          width: "3vw",
          // ширина элемента
          opacity: 1 // прозрачность элемента

        }, 2000);
      }, 4500);
    }

    block_show = true;
  } else {
    if (block_show == null || block_show == true) {
      if (foriterval) {
        clearInterval(foriterval);
      }
    }

    block_show = false;
  }
}

$(window).scroll(function () {
  scrollTracking();
});
$(function () {
  scrollTracking();
  $(".whatservice-main_wrapper-interactive-accordion-item").click(function () {
    $(".whatservice-main_wrapper-interactive-accordion-item").toArray().map(item => $(item).removeClass("active"));
    $(this).addClass("active");
  });
  $(".intro-slider_item").click(function () {
    if (this.classList[1] == "off") {
      $(".intro-slider_item").toArray().map(item => {
        $(item).addClass("off");
      });
      $(this).removeClass("off");

      if (this.children[1].children[0].textContent.match(/[1-9]/g)[0] == 1) {
        $(".intro_background_eagle").finish();
        $(".intro_background_tiger").finish();
        $(".intro_background_giraffe").finish();
        $(".intro_background_shark").finish();
        $(".intro_background_tiger").fadeTo("fast", 0);
        $(".intro_background_shark").fadeTo("fast", 0);
        $(".intro_background_giraffe").fadeTo("fast", 0);
        $(".intro_background_eagle").fadeTo("fast", 100);
      } else if (this.children[1].children[0].textContent.match(/[1-9]/g)[0] == 2) {
        $(".intro_background_eagle").finish();
        $(".intro_background_tiger").finish();
        $(".intro_background_giraffe").finish();
        $(".intro_background_shark").finish();
        $(".intro_background_eagle").fadeTo("fast", 0);
        $(".intro_background_shark").fadeTo("fast", 0);
        $(".intro_background_giraffe").fadeTo("fast", 0);
        $(".intro_background_tiger").fadeTo("fast", 100);
      } else if (this.children[1].children[0].textContent.match(/[1-9]/g)[0] == 3) {
        $(".intro_background_eagle").finish();
        $(".intro_background_tiger").finish();
        $(".intro_background_giraffe").finish();
        $(".intro_background_shark").finish();
        $(".intro_background_eagle").fadeTo("fast", 0);
        $(".intro_background_tiger").fadeTo("fast", 0);
        $(".intro_background_giraffe").fadeTo("fast", 0);
        $(".intro_background_shark").fadeTo("fast", 100);
      } else if (this.children[1].children[0].textContent.match(/[1-9]/g)[0] == 4) {
        $(".intro_background_eagle").finish();
        $(".intro_background_tiger").finish();
        $(".intro_background_giraffe").finish();
        $(".intro_background_shark").finish();
        $(".intro_background_eagle").fadeTo("fast", 0);
        $(".intro_background_tiger").fadeTo("fast", 0);
        $(".intro_background_shark").fadeTo("fast", 0);
        $(".intro_background_giraffe").fadeTo("fast", 100);
      }
    } else $(this).addClass("off");

    if ($(".intro-slider_item.off").toArray().length == 4) {
      $($(".intro-slider_item.off")[0]).removeClass("off");
      $(".intro_background_eagle").finish();
      $(".intro_background_tiger").finish();
      $(".intro_background_giraffe").finish();
      $(".intro_background_shark").finish();
      $(".intro_background_tiger").fadeTo("fast", 0);
      $(".intro_background_shark").fadeTo("fast", 0);
      $(".intro_background_giraffe").fadeTo("fast", 0);
      $(".intro_background_eagle").fadeTo("fast", 100);
    }
  });
  $(".icofont-thin-down.right").click(function clickkak() {
    if (Curslide == 2) {
      $(".icofont-thin-down.right").off();
      $($(".comment_slider-main_wrapper-main_info")[Curslide]).removeClass('active').css('transform', 'translateX(100px)');
      $($(".comment_slider-nav_slider-item")[Curslide]).removeClass('active');
      Curslide = 0;
      $($(".comment_slider-main_wrapper-main_info")[Curslide]).css('transform', 'translateX(-100px)');
      setTimeout(() => {
        $($(".comment_slider-main_wrapper-main_info")[Curslide]).addClass('active').css('transform', 'translateX(0px)');
        $(".icofont-thin-down.right").click(clickkak);
      }, 1300);
      $($(".comment_slider-nav_slider-item")[Curslide]).addClass('active');
    } else {
      $(".icofont-thin-down.right").off();
      $($(".comment_slider-main_wrapper-main_info")[Curslide]).removeClass('active').css('transform', 'translateX(100px)');
      $($(".comment_slider-nav_slider-item")[Curslide]).removeClass('active');
      Curslide += 1;
      $($(".comment_slider-main_wrapper-main_info")[Curslide]).css({
        transform: 'translateX(-100px)'
      });
      setTimeout(() => {
        $($(".comment_slider-main_wrapper-main_info")[Curslide]).addClass('active').css('transform', 'translateX(0px)');
        $(".icofont-thin-down.right").click(clickkak);
      }, 1300);
      $($(".comment_slider-nav_slider-item")[Curslide]).addClass('active');
    }
  });
  $(".icofont-thin-down.left").click(function clickkek() {
    if (Curslide == 0) {
      $(".icofont-thin-down.left").off();
      $($(".comment_slider-main_wrapper-main_info")[Curslide]).removeClass('active').css('transform', 'translateX(-100px)');
      $($(".comment_slider-nav_slider-item")[Curslide]).removeClass('active');
      Curslide = 2;
      $($(".comment_slider-main_wrapper-main_info")[Curslide]).css('transform', 'translateX(100px)');
      setTimeout(() => {
        $($(".comment_slider-main_wrapper-main_info")[Curslide]).addClass('active').css('transform', 'translateX(0px)');
        $(".icofont-thin-down.left").click(clickkek);
      }, 1300);
      $($(".comment_slider-nav_slider-item")[Curslide]).addClass('active');
    } else {
      $(".icofont-thin-down.left").off();
      $($(".comment_slider-main_wrapper-main_info")[Curslide]).removeClass('active').css('transform', 'translateX(-100px)');
      $($(".comment_slider-nav_slider-item")[Curslide]).removeClass('active');
      Curslide -= 1;
      $($(".comment_slider-main_wrapper-main_info")[Curslide]).css({
        transform: 'translateX(100px)'
      });
      setTimeout(() => {
        $($(".comment_slider-main_wrapper-main_info")[Curslide]).addClass('active').css('transform', 'translateX(0px)');
        $(".icofont-thin-down.left").click(clickkek);
      }, 1300);
      $($(".comment_slider-nav_slider-item")[Curslide]).addClass('active');
    }
  });
  $(".header-nav_burger").click(function () {
    if ($(".header-nav_burger").hasClass("active")) {
      $(".header-nav_burger").removeClass("active");
      $(".header-nav_links-burger").removeClass("active");
    } else {
      $(".header-nav_burger").addClass("active");
      $(".header-nav_links-burger").addClass("active");
    }
  });

  function checkMediaQuery() {
    if (window.innerWidth > 1080) {
      $(".header-nav_burger").removeClass("active");
      $(".header-nav_links-burger").removeClass("active");
    }
  }

  window.addEventListener('resize', checkMediaQuery);
});