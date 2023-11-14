class SlidesAnimation {
    slides;
    slidesContainer;
    prevSlideIndex = 0;
    curSlideIndex;
    timeouts = [];
    animationDuration = 1000;

    constructor(slidesContainer, curSlideIndex) {
        this.slidesContainer = slidesContainer;
        this.curSlideIndex = curSlideIndex;
        this.slides = Array.from(this.slidesContainer.children);
        this.setupSlides(this.curSlideIndex);
    }

    setupSlides() {
        this.slide(true, false);
    }

    setSlide(slideIndex) {
        this.curSlideIndex = slideIndex;
        this.slide(true, true);
    }

    slide(forward, instant) {
        for (let i = 0; i < this.slides.length; i++) {
            if (i < this.curSlideIndex) {
                this.slides[i].classList.add("hiddenToTop");

                this.slides[i].classList.remove("hiddenToBottom");
                this.slides[i].classList.remove("openedFromTop");
                this.slides[i].classList.remove("openedFromBottom");

                if(instant){
                    this.slides[i].style.display = 'none'
                }else{
                    this.timeouts.push({
                        id: setTimeout(() => {
                            this.slides[i].style.display = 'none'
                        }, this.animationDuration), index: i
                    })
                }
            }
            if (i === this.curSlideIndex) {

                for (let timeout of this.timeouts) {
                    if (timeout.index === i) {
                        clearTimeout(timeout.id)
                    }
                }
                this.slides[i].style.display = 'flex';

                if (forward) {
                    this.slides[i].classList.add("openedFromBottom");
                    this.slides[i].classList.remove("openedFromTop");
                } else {
                    this.slides[i].classList.add("openedFromTop");
                    this.slides[i].classList.remove("openedFromBottom");
                }

                this.slides[i].classList.remove("hiddenToTop");
                this.slides[i].classList.remove("hiddenToBottom");
            }
            if (i > this.curSlideIndex) {
                this.slides[i].classList.add("hiddenToBottom");

                this.slides[i].classList.remove("hiddenToTop");
                this.slides[i].classList.remove("openedFromTop");
                this.slides[i].classList.remove("openedFromBottom");

                if(instant){
                    this.slides[i].style.display = 'none'
                }else{
                    this.timeouts.push({
                        id: setTimeout(() => {
                            this.slides[i].style.display = 'none'
                        }, this.animationDuration), index: i
                    })
                }
            }
        }
    }

    slidePrev() {
        if (this.curSlideIndex > 0) {
            this.curSlideIndex--;
            this.slide(false, false);
            this.prevSlideIndex = this.curSlideIndex;
        }
    }

    slideNext() {
        if (this.curSlideIndex < this.slides.length - 1) {
            this.curSlideIndex++;
            this.slide(true, false);
            this.prevSlideIndex = this.curSlideIndex;
        }
    }

    destroy() {
        for (let timeout of this.timeouts) {
            clearTimeout(timeout.id)
        }
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].classList.remove("openedFromTop");
            this.slides[i].classList.remove("openedFromBottom");
            this.slides[i].classList.remove("hiddenToTop");
            this.slides[i].classList.remove("hiddenToBottom");
            this.slides[i].style.display = 'none';
        }
    }
}
export default SlidesAnimation;
