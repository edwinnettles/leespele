alert("this is a git test");

const bestsellersSlider = new Swiper(".swiper.best-sellers", {
  // Optional parameters
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  
  //Navigation arrows
  navigation: {
  	nextEl: ".best-sellers-btn-next",
    prevEl: ".best-sellers-btn-prev"
  }
});