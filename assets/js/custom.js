!function(a) {
  a(window).load(function() {
    a("#status").fadeOut(), a("#preloader").delay(350).fadeOut("slow")
  }), a(document).ready(function() {
    function d(a) {
      var b = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
      return b.test(a)
    }
    a("body").scrollspy({
      target: ".navbar-custom",
      offset: 50
    }), a("a[href*=#]").bind("click", function(b) {
      var c = a(this);
      a("html, body").stop().animate({
        scrollTop: a(c.attr("href")).offset().top
      }, 1e3), b.preventDefault()
    }), a("#intro").backstretch([
      "assets/images/bao.jpg",
      "assets/images/sablino.jpg",
      "assets/images/brest1.jpg"
      // "assets/images/brest2.jpg"
    ], {
      duration: 3e3,
      fade: 750
    });
    var b = a(".navbar"),
      c = b.height();
    a(window).scroll(function() {
      a(this).scrollTop() >= c ? b.addClass("navbar-color") : b.removeClass("navbar-color")
    }), a(window).width() <= 767 && b.addClass("custom-collapse"), a(window).resize(function() {
      a(this).width() <= 767 ? b.addClass("custom-collapse") : b.removeClass("custom-collapse")
    }), a("#stats").waypoint(function() {
      a(".timer").each(function() {
        counter = a(this).attr("data-count"), a(this).delay(6e3).countTo({
          from: 0,
          to: counter,
          speed: 3e3,
          refreshInterval: 50
        })
      })
    }, {
      offset: "70%",
      triggerOnce: !0
    }), wow = new WOW({
      mobile: !1
    }), wow.init(), a("#owl-clients").owlCarousel({
      items: 4,
      slideSpeed: 300,
      paginationSpeed: 400,
      autoPlay: 5e3
    }), a(".rotate").textrotator({
      animation: "dissolve",
      separator: "|",
      speed: 3e3
    }), a("#portfolio").magnificPopup({
      delegate: "a.pop-up",
      type: "image",
      gallery: {
        enabled: !0,
        navigateByImgClick: !0,
        preload: [0, 1]
      },
      image: {
        tError: "The image could not be loaded.",
        titleSrc: function(a) {
          return a.el.find(".ptitle").text()
        }
      }
    }), a("#contact-form").submit(function(b) {
      b.preventDefault();
      var c = a("#c_name").val(),
        e = a("#c_email").val(),
        f = a("#c_message ").val(),
        g = a(".ajax-response");
      return "" != c && "" != e && "" != f && d(e) ? a.ajax({
        type: "POST",
        url: "assets/php/contactForm.php",
        dataType: "json",
        data: {
          c_email: e,
          c_name: c,
          c_message: f
        },
        beforeSend: function() {
          a("#contact-form button").empty(), a("#contact-form button").append('<i class="fa fa-cog fa-spin"></i> Wait...')
        },
        success: function(b) {
          1 == b.sendstatus ? (g.html(b.message), g.fadeIn(500), a("#contact-form").fadeOut(500)) : (a("#contact-form button").empty(), a("#contact-form button").append('<i class="fa fa-retweet"></i> Try again.'), g.html(b.message), g.fadeIn(1e3)), a("#ajax-status").removeClass("as-active")
        }
      }) : (g.fadeIn(500), g.html('<i class="fa fa-warning"></i> Check all fields.')), !1
    })
  })
}(jQuery);
