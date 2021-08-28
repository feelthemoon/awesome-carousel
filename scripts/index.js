import Carousel from "./Carousel.js";
const next = document.querySelectorAll(".btn")[1];
const prev = document.querySelectorAll(".btn")[0];

const carousel = new Carousel({ dots: true, isDotsClickable: true });

next.addEventListener("click", carousel.next.bind(carousel));
prev.addEventListener("click", carousel.prev.bind(carousel));
