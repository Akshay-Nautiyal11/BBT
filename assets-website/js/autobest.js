/* Desktop Side Navigation Bar*/
jQuery(window).load(function () {
  jQuery(".btn-nav").on("click tap", function () {
    jQuery(".nav-container")
      .toggleClass("showNav hideNav")
      .removeClass("hidden");
    jQuery(this).toggleClass("animated");
  });
});

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var minp = getParameterByName("min_price");
var maxp = getParameterByName("max_price");
var min_price = 1000000;
var max_price = 25000000;
if (minp != "" && minp != null) {
  min_price = minp;
}
if (maxp != "" && maxp != null) {
  max_price = maxp;
}

jQuery(function () {
  jQuery("#slider_range").flatslider({
    einheit: '<span class="range_s_price_sybmle">&#8377;</span>',
    min: 1000000,
    max: 40000000,
    step: 1000000,
    values: [min_price, max_price],
    //values: [1000000, 25000000],
    range: true,
    stop: function (event, ui) {
      $(".min_price").val(ui.values[0]);
      $(".max_price").val(ui.values[1]);
    },
  });
});

$(".testimonial").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 10,
  responsiveClass: true,
  autoplayTimeout: 8000,
  interval: 12000,
  pause: "hover",
  autoplayHoverPause: true,
  nav: false,
  dot: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      dot: true,
    },
    600: {
      items: 1,
      nav: false,
      dot: true,
    },
    1000: {
      items: 1,
      nav: false,
      loop: true,
      dot: true,
    },
  },
});

$(".our-partner").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 7000,
  interval: 12000,
  pause: "hover",
  autoplayHoverPause: true,
  nav: false,
  dot: false,
  items: 6,
  responsive: {
    0: {
      items: 2,
      nav: false,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 6,
      nav: false,
      loop: true,
    },
  },
});

/*iquick_prod */
var base_url = document.getElementById("myBase").href;
$(".quicklook_prod").owlCarousel({
  loop: false,
  margin: 25,
  responsiveClass: true,
  autoplay: false,
  nav: true,
  navText: [
    "<img class='car_d_arr arrw_left' src='../assets-website/image/left-arrow.png'>",
    "<img class='car_d_arr arrw_right' src='../assets-website/image/right-arrow.png'>",
  ],
  dot: false,
  items: 6,
  responsive: {
    0: {
      items: 1,
      nav: false,
      dot: false,
    },
    600: {
      items: 2,
      nav: true,
      dot: false,
    },
    1000: {
      items: 3,
      nav: true,
      dot: false,
      loop: false,
    },
  },
});

/*Car Details Slider */
var slider = $(".carousel-cardetails");
var thumbnailSlider = $(".car-details-thumbs");
var duration = 500;
var syncedSecondary = true;

setTimeout(function () {
  $(".cloned .item-slider-model a").attr("data-fancybox", "group-2");
}, 500);

// carousel function for main slider
slider
  .owlCarousel({
    loop: true,
    dots: false,
    video: true,
    nav: true,
    navText: [
      "<img class='car_d_arr arrw_left' src='../assets-website/image/left-arrow.png'>",
      "<img class='car_d_arr arrw_right' src='../assets-website/image/right-arrow.png'>",
    ],
    items: 1,
    lazyLoad: true,
    autoplay: false, //true,
    smartSpeed: 600,
    autoplayHoverPause: true,
  })
  .on("changed.owl.carousel", syncPosition);

// carousel function for thumbnail slider
thumbnailSlider
  .on("initialized.owl.carousel", function () {
    thumbnailSlider.find(".owl-item").eq(0).addClass("current");
  })
  .owlCarousel({
    loop: false,
    nav: false,
    dots: false,
    margin: 0,
    smartSpeed: 600,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 3,
      },
      1200: {
        items: 5,
        margin: 5,
      },
    },
  })
  .on("changed.owl.carousel", syncPosition2);

// on click thumbnails
thumbnailSlider.on("click", ".owl-item", function (e) {
  e.preventDefault();
  var number = $(this).index();
  slider.data("owl.carousel").to(number, 300, true);
});

function syncPosition(el) {
  var count = el.item.count - 1;
  var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

  if (current < 0) {
    current = count;
  }
  if (current > count) {
    current = 0;
  }

  thumbnailSlider
    .find(".owl-item")
    .removeClass("current")
    .eq(current)
    .addClass("current");
  var onscreen = thumbnailSlider.find(".owl-item.active").length - 1;
  var start = thumbnailSlider.find(".owl-item.active").first().index();
  var end = thumbnailSlider.find(".owl-item.active").last().index();

  if (current > end) {
    thumbnailSlider.data("owl.carousel").to(current, 100, true);
  }
  if (current < start) {
    thumbnailSlider.data("owl.carousel").to(current - onscreen, 100, true);
  }
}

function syncPosition2(el) {
  if (syncedSecondary) {
    var number = el.item.index;
    slider.data("owl.carousel").to(number, 100, true);
  }
}

/*nav lfix top*/
var $window = $(window);
var nav = $("#main-navigation");
$window.scroll(function () {
  if ($window.scrollTop() >= 50) {
    nav.addClass("fixed-header");
  } else {
    nav.removeClass("fixed-header");
  }
});

/*our team */

$(".our-team-slide").owlCarousel({
  loop: true,
  margin: 25,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 8000,
  interval: 12000,
  pause: "hover",
  autoplayHoverPause: true,
  items: 5,
  dot: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 5,
    },
  },
});
/*About Slider */

$(".abt_slider").owlCarousel({
  loop: true,
  margin: 0,
  responsiveClass: true,
  autoplay: true,
  items: 1,
  dots: false,
  nav: true,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

/*stockcar-slide Slider */

$(".searchb_slide").owlCarousel({
  loop: true,
  margin: 0,
  responsiveClass: true,
  autoplayHoverPause: true, // Stops autoplay
  autoplay: true,
  items: 8,
  dots: false,
  nav: true,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 6,
    },
    1000: {
      items: 8,
    },
  },
});

/*stockcar-slide Slider */

$(".searchb_slide2").owlCarousel({
  loop: true,
  margin: 0,
  responsiveClass: true,
  autoplayHoverPause: true, // Stops autoplay
  autoplay: false,
  items: 8,
  dots: false,
  nav: true,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 8,
    },
  },
});

/*navigation bar*/
$(".advantage_tab ul.nav li").on("click", function () {
  $(".advantage_tab ul.nav li").removeClass("active");
  $(this).addClass("active");
});

/*navigation bar*/

$("ul.nav li.boop").on("click", function () {
  $("ul.nav li.boop").toggleClass("arrowup");
});

$(".payment_check_bnox .radio").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
});

/*Loan */
/*
$(document).ready(function(){
			$("#la").bind(
				"slider:changed", function (event, data) {
					$("#la_value").html(data.value.toFixed(0));
					calculateEMI();
				}
			);

			$("#nm").bind(
				"slider:changed", function (event, data) {
					$("#nm_value").html(data.value.toFixed(0));
					calculateEMI();
				}
			);

			$("#roi").bind(
				"slider:changed", function (event, data) {
					$("#roi_value").html(data.value.toFixed(2));
					calculateEMI();
				}
			);

			function calculateEMI(){
				var loanAmount = $("#la_value").html();
				var numberOfMonths = $("#nm_value").html();
				var rateOfInterest = $("#roi_value").html();
				var monthlyInterestRatio = (rateOfInterest/100)/12;

				var top = Math.pow((1+monthlyInterestRatio),numberOfMonths);
				var bottom = top -1;
				var sp = top / bottom;
				var emi = ((loanAmount * monthlyInterestRatio) * sp);
				var full = numberOfMonths * emi;
				var interest = full - loanAmount;
				var int_pge =  (interest / full) * 100;
				$("#tbl_int_pge").html(int_pge.toFixed(2)+" %");
				//$("#tbl_loan_pge").html((100-int_pge.toFixed(2))+" %");

				var emi_str = emi.toFixed(2).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				var loanAmount_str = loanAmount.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				var full_str = full.toFixed(2).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				var int_str = interest.toFixed(2).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");

				$("#emi").html(emi_str);
				$("#tbl_emi").html(emi_str);
				$("#tbl_la").html(loanAmount_str);
				$("#tbl_nm").html(numberOfMonths);
				$("#tbl_roi").html(rateOfInterest);
				$("#tbl_full").html(full_str);
				$("#tbl_int").html(int_str);
				var detailDesc = "<thead><tr class='success'><th>Payment No.</th><th>Begining Balance</th><th>EMI</th><th>Principal</th><th>Interest</th><th>Ending Balance</th></thead><tbody>";
				var bb=parseInt(loanAmount);
				var int_dd =0;var pre_dd=0;var end_dd=0;
				for (var j=1;j<=numberOfMonths;j++){
					int_dd = bb * ((rateOfInterest/100)/12);
					pre_dd = emi.toFixed(2) - int_dd.toFixed(2);
					end_dd = bb - pre_dd.toFixed(2);
					detailDesc += "<tr><td>"+j+"</td><td>"+bb.toFixed(2)+"</td><td>"+emi.toFixed(2)+"</td><td>"+pre_dd.toFixed(2)+"</td><td>"+int_dd.toFixed(2)+"</td><td>"+end_dd.toFixed(2)+"</td></tr>";
					bb = bb - pre_dd.toFixed(2);
				}
					detailDesc += "</tbody>";
				$("#illustrate").html(detailDesc);
				 $('#chartss').highcharts({

						chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false,
                            type: 'pie'

						},

						tooltip: {
							pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
						},
						  plotOptions: {
                            pie: {
                              allowPointSelect: true,
                              cursor: 'pointer',
                              dataLabels: {
                                enabled: false
                              },
                              showInLegend: false
                            }
                          },
                     colors: ['#db2d2e', '#f28918'],
						series: [{
                            minPointSize: 10,
                            innerSize: '50%',
                            zMin: 0,
                            name: 'Brands',
                            colorByPoint: true,
							name: 'Amount',
							data: [
								['Loan',   eval(loanAmount)],
								['Interest', eval(interest.toFixed(2))]
							]
						}]
					});

			}
			calculateEMI();

		});
*/
/*tab slider*/
var tabCarousel = setInterval(function () {
  var tabs = $("#tab-carousels .nav-pills > li"),
    active = tabs.filter(".active"),
    next = active.next("li"),
    toClick = next.length ? next.find("a") : tabs.eq(0).find("a");
  toClick.trigger("click");
}, 7000);

/*
$("advantage_bodys").hover(function(){
    $( "#tab-carousels .nav-pills > li" ).click(function( event ) {
      event.stopPropagation();
    });
});*/

/* sitemap*/
$(".site-map-submenu").parent().prepend('<i class="fa fa-angle-left"></i>');

$("#vert-nav .site_map_top_menu a").click(function () {
  var $menu = $(this).next(".site-map-submenu");
  $menu.slideToggle("slow");
  $menu.parent().toggleClass("openmenu");
});

/*Jessor Slider */
jssor_1_slider_init = function () {
  var jssor_1_SlideshowTransitions = [
    { $Duration: 700, $Opacity: 2, $Brother: { $Duration: 700, $Opacity: 2 } },
  ];

  var jssor_1_SlideoTransitions = [
    [
      { b: 0, d: 560, x: -364, y: 98 },
      { b: 560, d: 940, x: -340, y: 84 },
      { b: 1500, d: 1400, x: -284, y: 60 },
      { b: 2900, d: 600, x: -6, y: 4 },
      { b: 3500, d: 200, x: -340, y: 1 },
      { b: 3700, d: 220, x: -684, y: -27 },
    ],
    [
      { b: 500, d: 1080, x: 220, y: 2 },
      { b: 3500, d: 420, x: 210, y: -4 },
    ],
    [
      { b: 500, d: 1080, x: 230, y: 5 },
      { b: 3500, d: 420, x: 263, y: -1 },
    ],
    [
      { b: 500, d: 1080, y: 195 },
      { b: 3500, d: 420, x: 1, y: 166 },
    ],
    [
      { b: 0, d: 560, x: -364, y: 98 },
      { b: 560, d: 940, x: -340, y: 84 },
      { b: 1500, d: 1400, x: -284, y: 60 },
      { b: 2900, d: 600, x: -6, y: 4 },
      { b: 3500, d: 200, x: -340, y: 1 },
      { b: 3700, d: 220, x: -684, y: -27 },
    ],
    [
      { b: 500, d: 1080, x: 220, y: 2 },
      { b: 3500, d: 420, x: 210, y: -4 },
    ],
    [
      { b: 500, d: 1080, x: 230, y: 5 },
      { b: 3500, d: 420, x: 263, y: -1 },
    ],
    [
      { b: 500, d: 1080, y: 195 },
      { b: 3500, d: 420, x: 1, y: 166 },
    ],
    [
      { b: 0, d: 560, x: -364, y: 98 },
      { b: 560, d: 940, x: -340, y: 84 },
      { b: 1500, d: 1400, x: -284, y: 60 },
      { b: 2900, d: 600, x: -6, y: 4 },
      { b: 3500, d: 200, x: -340, y: 1 },
      { b: 3700, d: 220, x: -684, y: -27 },
    ],
    [
      { b: 500, d: 1080, x: 220, y: 2 },
      { b: 3500, d: 420, x: 210, y: -4 },
    ],
    [
      { b: 500, d: 1080, x: 230, y: 5 },
      { b: 3500, d: 420, x: 263, y: -1 },
    ],
    [
      { b: 500, d: 1080, y: 195 },
      { b: 3500, d: 420, x: 1, y: 166 },
    ],
    [
      { b: 0, d: 560, x: -364, y: 98 },
      { b: 560, d: 940, x: -340, y: 84 },
      { b: 1500, d: 1400, x: -284, y: 60 },
      { b: 2900, d: 600, x: -6, y: 4 },
      { b: 3500, d: 200, x: -340, y: 1 },
      { b: 3700, d: 220, x: -684, y: -27 },
    ],
    [
      { b: 500, d: 1080, x: 220, y: 2 },
      { b: 3500, d: 420, x: 210, y: -4 },
    ],
    [
      { b: 500, d: 1080, x: 230, y: 5 },
      { b: 3500, d: 420, x: 263, y: -1 },
    ],
    [
      { b: 500, d: 1080, y: 195 },
      { b: 3500, d: 420, x: 1, y: 166 },
    ],
  ];

  var jssor_1_options = {
    $AutoPlay: 1,
    $Idle: 1,
    $SlideDuration: 1,
    $SlideEasing: $Jease$.$Early,
    $PauseOnHover: false,
    $SlideshowOptions: {
      $Class: false,
      $Transitions: jssor_1_SlideshowTransitions,
      $TransitionsOrder: false,
    },
    $CaptionSliderOptions: {
      $Class: $JssorCaptionSlideo$,
      $Transitions: jssor_1_SlideoTransitions,
    },
    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$,
    },
  };

  var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

  /*#region responsive code begin*/

  var MAX_WIDTH = 1920;

  function ScaleSlider() {
    var containerElement = jssor_1_slider.$Elmt.parentNode;
    var containerWidth = containerElement.clientWidth;

    if (containerWidth) {
      var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

      jssor_1_slider.$ScaleWidth(expectedWidth);
    } else {
      window.setTimeout(ScaleSlider, 30);
    }
  }

  ScaleSlider();

  $Jssor$.$AddEvent(window, "load", ScaleSlider);
  $Jssor$.$AddEvent(window, "resize", ScaleSlider);
  $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
  /*#endregion responsive code end*/
};
/*End Jessor Slider*/

/*menu add remove class*/
$(".btn-nav").click(function () {
  $("#main-navigation").toggleClass("swipe-logo");
});

/*animation */
new WOW().init();

$(".model-dropd").click(function () {
  $(".model-boxx").slideToggle();
});

$(document).on("click", 'a[href^="#scrollform"]', function (event) {
  event.preventDefault();
  $("html, body").animate(
    { scrollTop: $($.attr(this, "href")).offset().top - 160 },
    1000
  );
});

/*wol-with_tab*/
$(document).ready(function (ev) {
  $("#carouselExampleSlidesOnly").on("slide.bs.carousel", function (evt) {
    $("#carouselExampleSlidesOnly .controls li.active").removeClass("active");
    $(
      "#carouselExampleSlidesOnly .controls li:eq(" +
        $(evt.relatedTarget).index() +
        ")"
    ).addClass("active");
  });
});
