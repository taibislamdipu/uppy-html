// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   // centeredSlides: true,
//   // autoplay: {
//   //   delay: 2500,
//   //   disableOnInteraction: false,
//   // },
//   loop: true,

//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

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
