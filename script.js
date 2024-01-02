alert("this is a git test");

const bestsellersSlider = new Swiper(".swiper.best-sellers", {
  // Optional parameters
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  
  //Navigation arrows
  navigation: {
  	nextEl: ".swiper-btn-next.best-sellers",
    prevEl: ".swiper-btn-prev.best-sellers"
  }
});

const newinSlider = new Swiper(".swiper.newin", {
  // Optional parameters
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  
  //Navigation arrows
  navigation: {
  	nextEl: ".swiper-btn-next.newin",
    prevEl: ".swiper-btn-prev.newin"
  }
});

const leesfavsSlider = new Swiper(".swiper.leesfavs", {
  // Optional parameters
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  
  //Navigation arrows
  navigation: {
  	nextEl: ".swiper-btn-next.leesfavs",
    prevEl: ".swiper-btn-prev.leesfavs"
  }
});

const clearanceSlider = new Swiper(".swiper.clearance", {
  // Optional parameters
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  
  //Navigation arrows
  navigation: {
  	nextEl: ".swiper-btn-next.clearance",
    prevEl: ".swiper-btn-prev.clearance"
  }
});