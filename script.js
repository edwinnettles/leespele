//alert("this is a git test");

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

const leesfavsSlider = new Swiper(".swiper.lees-favs", {
  // Optional parameters
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  
  //Navigation arrows
  navigation: {
  	nextEl: ".swiper-btn-next.lees-favs",
    prevEl: ".swiper-btn-prev.lees-favs"
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

const categorySlider = new Swiper(".swiper.category", {
  // Optional parameters
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  
  //Navigation arrows
  navigation: {
    nextEl: ".swiper-btn-next.category",
    prevEl: ".swiper-btn-prev.category"
  }
});

const prodimgSlider = new Swiper(".swiper.add-prod-imgs", {
  // Optional parameters
  loop: true,
  slidesPerView: "3",
  spaceBetween: 16,

  //Responsive Breakpoints
  breakpoints: {
    // when window width is >= 360px
    360: {
      slidesPerView: 1,
      spaceBetween: 16,
    }
  }
  
  //Navigation arrows
  navigation: {
    nextEl: ".swiper-btn-next.add-prod-imgs",
    prevEl: ".swiper-btn-prev.add-prod-imgs"
  }
});