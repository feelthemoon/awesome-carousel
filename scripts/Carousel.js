class Carousel {
  #imgs = null;
  #wrapper = null;
  #count = 0;
  constructor(carouselData) {
    this.#imgs = document.querySelectorAll(".carousel__img");
    this.#wrapper = document.querySelector(".carousel__wrapper");
    if (carouselData.dots) {
      this.#renderDots();
      this.dots = document.querySelectorAll(".dot");
    }
    if (carouselData.isDotsClickable && carouselData.dots) {
      const dotsWrapper = document.querySelector(".carousel__dots");
      dotsWrapper.addEventListener("click", this.#dotHandler.bind(this));
    }
  }

  next() {
    this.#count++;
    if (this.#count >= this.#imgs.length) {
      this.#count = 0;
    }
    this.#moveItems();
  }

  prev() {
    this.#count--;
    if (this.#count < 0) {
      this.#count = this.#imgs.length - 1;
    }
    this.#moveItems();
  }

  #dotHandler(event) {
    if (!event.target.classList.contains("carousel__dots")) {
      this.#count = [...this.dots].indexOf(event.target);
      this.#moveItems();
    }
  }

  #renderDots() {
    const dots = document.createElement("div");
    dots.classList.add("carousel__dots");
    for (let i = 0; i < this.#imgs.length; i++) {
      const dotItem = document.createElement("span");
      dotItem.classList.add("dot");
      if (i === 0) {
        dotItem.classList.add("active");
      }
      dots.appendChild(dotItem);
    }
    document.querySelector(".carousel").appendChild(dots);
  }

  #moveItems() {
    this.#imgs.forEach(
      (img) =>
        (img.style.transform = `translateX(-${
          this.#wrapper.offsetWidth * this.#count
        }px)`)
    );
    this.#setActiveDot();
  }

  #setActiveDot() {
    this.dots.forEach((dot) => dot.classList.remove("active"));
    this.dots[this.#count].classList.add("active");
  }
}

export default Carousel;
