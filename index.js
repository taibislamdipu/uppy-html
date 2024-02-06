var swiper = new Swiper("#swiperContainer", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Add other Swiper configurations as needed
});

function updateCursorIcon(swiper, container, mouseX) {
  var containerWidth = container.offsetWidth;
  var mouseXPercentage = (mouseX / containerWidth) * 100;

  if (mouseXPercentage <= 30) {
    container.classList.remove("right-cursor");
    container.classList.add("left-cursor");
    document.getElementById("leftIcon").style.display = "block";
    document.getElementById("rightIcon").style.display = "none";
  } else if (mouseXPercentage >= 70) {
    container.classList.remove("left-cursor");
    container.classList.add("right-cursor");
    document.getElementById("leftIcon").style.display = "none";
    document.getElementById("rightIcon").style.display = "block";
  } else {
    container.classList.remove("left-cursor", "right-cursor");
    document.getElementById("leftIcon").style.display = "none";
    document.getElementById("rightIcon").style.display = "none";
  }
}

var container = document.getElementById("swiperContainer");

container.addEventListener("mousemove", function (e) {
  var mouseX = e.clientX;

  updateCursorIcon(swiper, container, mouseX);
});

container.addEventListener("click", function (e) {
  // Change slide on click
  var mouseXPercentage = (e.clientX / container.offsetWidth) * 100;
  if (mouseXPercentage <= 30) {
    swiper.slidePrev();
  } else if (mouseXPercentage >= 70) {
    swiper.slideNext();
  }
});

container.addEventListener("mouseleave", function () {
  // Reset cursor when mouse leaves the container
  container.classList.remove("left-cursor", "right-cursor");
  document.getElementById("leftIcon").style.display = "none";
  document.getElementById("rightIcon").style.display = "none";
});

// Smooth scrolling between two divs
document.addEventListener("DOMContentLoaded", function () {
  const div1 = document.getElementById("div1");
  const div2 = document.getElementById("div2");

  window.addEventListener("wheel", function (event) {
    if (event.deltaY > 0) {
      // Scrolling down
      smoothScrollTo(div2);
    } else {
      // Scrolling up
      smoothScrollTo(div1);
    }
  });
});

function smoothScrollTo(element) {
  window.scrollTo({
    top: element.offsetTop,
    behavior: "smooth",
  });
}
