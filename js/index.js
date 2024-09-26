// $(document).ready(function () {
//   $("html,body").animate({ scrollTop: 0 }, 100); //100ms for example
// });
// Function to initialize GSAP and ScrollTrigger

function initScrollAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // Smooth scrolling behavior for mouse scroll
  function smoothScroll(event) {
    event.preventDefault();
    const delta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
    const scrollStep = 20;
    const scrollDistance = 100;

    window.scrollBy({
      top: scrollStep * delta,
      left: 0,
      behavior: "smooth",
    });
  }

  // GSAP animations and ScrollTrigger configurations
  let workInfoItems = document.querySelectorAll(".get-started-img");
  workInfoItems.forEach(function (item, index) {
    item.style.zIndex = workInfoItems.length - index;
  });

  gsap.set(".get-started-img", {
    clipPath: function () {
      return "inset(0 0 0 0)";
    },
  });

  const animation = gsap.to(".get-started-img:not(:last-child)", {
    clipPath: function () {
      return "inset(0 0 100% 0)";
    },
    stagger: 0.5,
    ease: "none",
  });

  ScrollTrigger.create({
    trigger: ".get-start-sec",
    start: "top top",
    end: "bottom bottom",
    animation: animation,
    scrub: 1,
  });

  // Add event listeners for smooth scrolling
  // window.addEventListener("mousewheel", smoothScroll);
  // window.addEventListener("DOMMouseScroll", smoothScroll);
}

// Call the initialization function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", initScrollAnimations);

// Additionally, call the initialization function again after a page reload
window.addEventListener("load", initScrollAnimations);

/* -----------------------------------------
      Get started progress bar animation JS 
  --------------------------------------------*/
// JavaScript to fill up progress bar on scroll
document.addEventListener("DOMContentLoaded", function () {
  var progressBar = document.querySelector(".progress-fill");
  var section = document.querySelector(".get-start-sec");

  if (progressBar) {
    window.addEventListener("scroll", function () {
      var viewportHeight = window.innerHeight;
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight - 200;
      var scrollPosition = window.scrollY;

      // Calculate the percentage of the section in view
      var sectionInView = Math.max(
        0,
        Math.min(
          1,
          (viewportHeight - sectionTop + scrollPosition) /
            (viewportHeight + sectionHeight)
        )
      );

      // Adjust gradient stops based on progress bar height and scroll position
      var gradientStopStart = -2.06 + sectionInView * 113.39; // 111.33 - (-2.06)
      var gradientStopEnd = 111.33 + sectionInView * 43.39; // 111.33 - (-2.06)

      // Set the gradient background with adjusted stops
      progressBar.style.background =
        "linear-gradient(180deg, #54D8FC " +
        gradientStopStart +
        "%, #0058B3 " +
        gradientStopEnd +
        "%)";
      // Update the height of the progress fill
      progressBar.style.height = sectionInView * 100 + "%";
    });
  }
});

$("body").removeClass("modal-open");
function checkHeight() {
  var headers = $(".faq__accordion-header");
  var maxHeight = 0;
  headers.each(function () {
    var height = $(this).height();
    if (height > maxHeight) {
      maxHeight = height;
    }
  });
  headers.height(maxHeight);
}
checkHeight();
$(window).on("resize", function () {
  if ($(window).width() > 992) {
    checkHeight();
  } else {
    $(".faq__accordion-header").height("auto");
  }
});

$(".faq__accordion-header").click(function () {
  var accordionItem = $(this).closest(".faq__accordion-item");
  var accordionContent = accordionItem.find(".faq__accordion-content");
  var arrow = $(this).find(".faq__accordion-arrow");

  // $('.faq__accordion-item').not(accordionItem).find('.faq__accordion-content').slideUp(300);
  // $('.faq__accordion-item').not(accordionItem).find('.faq__accordion-arrow').removeClass('rotate180');

  accordionContent.slideToggle(300);
  arrow.toggleClass("rotate180");
});

$(".show__form").on("click", function () {
  $("#feedback").fadeIn(300).css("display", "flex");
  $("body").addClass("modal-open");
});
$(".feedback__close").on("click", function () {
  $("#feedback").fadeOut(300);

  $("body").removeClass("modal-open");
});
$(".burger__open").on("click", function () {
  $(".burger").addClass("active").css("display", "flex");
  $("body").addClass("modal-open");
});
$(".burger__close").on("click", function () {
  $(".burger").removeClass("active");
  $("body").removeClass("modal-open");
});
