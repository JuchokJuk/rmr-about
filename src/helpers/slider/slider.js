class Slider {
    slidePrevCallback;
    slideNextCallback;
    sliderContainer;
    active = false;
    slidePrevGuard;
    slideNextGuard;
    currentSlide;
    slidesCount;

    prevPositionX;

    prevPositionY;
    curPositionY;

    lastScrollPosition;

    globalOffsetTop;

    onActiveChanged;

    canCatch = true;

    onCurrentSlideChanged;
    autoPlay = false;
    name = 'noname'
    playOnEnter = false;

    scrollHandler;

    onStartScrollBlocking;
    onStopScrollBlocking;
    showSliderTimeoutId;

    constructor(config) {
        this.playOnEnter = config?.playOnEnter;
        this.name = config?.name;
        this.autoPlay = config?.autoPlay;
        this.slidePrevCallback = config?.slidePrevCallback;
        this.slideNextCallback = config?.slideNextCallback;
        this.slidePrevGuard = config?.slidePrevGuard;
        this.slideNextGuard = config?.slideNextGuard;
        this.lastScrollPosition = window.scrollY;
        this.sliderContainer = config?.sliderContainer;
        this.slidesCount = config?.slidesCount;
        this.onCurrentSlideInited = config?.onCurrentSlideInited;
        this.globalOffsetTop = config?.globalOffsetTop;
        this.onActiveChanged = config?.onActiveChanged;
        this.onCurrentSlideChanged = config?.onCurrentSlideChanged;
        this.onStartScrollBlocking = config?.onStartScrollBlocking;
        this.onStopScrollBlocking = config?.onStopScrollBlocking;

        this.prevPositionX = this.sliderContainer.getBoundingClientRect().left;
        this.prevPositionY = this.sliderContainer.getBoundingClientRect().top;

        if (this.prevPositionY === 0) {
            this.active = true
            this.hideScrollBar();
            if (this.onActiveChanged) {
                this.onActiveChanged(this.active);
            }
            this.scrollToContainer();
            this.fixContainer();
        }
        this.cathcSlider(true);

        this.initCurrentSlide(true);

        this.scrollHandler = () => { this.cathcSlider(false) }

        window.addEventListener("scroll", this.scrollHandler, false);
        window.addEventListener("resize", this.scrollHandler, false);

        if (this.autoPlay) {
            this.slideNext();
        }
    }

    fixContainer() {
        this.sliderContainer.firstElementChild.classList.add("fixJump");
    }

    unfixContainer() {
        this.sliderContainer.firstElementChild.classList.remove("fixJump");
    }

    scrollToContainer() {
        if (this.globalOffsetTop !== undefined) {
            window.scrollTo(0, this.globalOffsetTop);
        } else {
            this.sliderContainer.scrollIntoView();
        }
    }

    initCurrentSlide(fullRecalc) {
        if (this.round10(this.curPositionY) >= 0) {
            this.currentSlide = !fullRecalc && this.autoPlay ? 1 : 0;
        } else {
            this.currentSlide = this.slidesCount - 1;
        }
        if (this.onCurrentSlideChanged) {
            this.onCurrentSlideChanged(this.currentSlide);
        }
        if (this.onCurrentSlideInited) {
            this.onCurrentSlideInited(this.currentSlide);
        }
    }

    scrollBlockCounter = 0; // чтоб случайно не вызвать startScrollBlocking дважды

    stopScrollBlocking() {
        this.scrollBlockCounter++
        this.releaseSlider();
        this.canCatch = false;

        this.hideSlider();
        if (this.onStopScrollBlocking) {
            this.onStopScrollBlocking();
        }
    }

    startScrollBlocking() {
        this.scrollBlockCounter--
        if (this.scrollBlockCounter === 0) {
            this.canCatch = true;
            this.initCurrentSlide(false);
            this.cathcSlider(true);
            clearTimeout(this.showSliderTimeoutId)
            this.showSliderTimeoutId = setTimeout(() => {
                this.showSlider();
                if (this.onStartScrollBlocking) {
                    this.onStartScrollBlocking();
                }
            }, 400)
        }
    }

    hideSlider() {
        this.sliderContainer.classList.remove("show-slider");
        this.sliderContainer.classList.add("hide-slider");
    }

    showSlider() {
        this.sliderContainer.classList.remove("hide-slider");
        this.sliderContainer.classList.add("show-slider");
    }

    slidePrev() {
        if(this.currentSlide === 1 && this.autoPlay){
            return
        }
        
        if (this.currentSlide > 0 && this.active && this.slidePrevGuard) {
            this.currentSlide--;
            if (this.onCurrentSlideChanged) {
                this.onCurrentSlideChanged(this.currentSlide);
            }
            if (this.slidePrevCallback) {
                this.slidePrevCallback();
            }
        }
    }

    slideNext() {
        if (
            this.currentSlide < this.slidesCount - 1 &&
            this.active &&
            this.slideNextGuard
        ) {
            this.currentSlide++;
            if (this.onCurrentSlideChanged) {
                this.onCurrentSlideChanged(this.currentSlide);
            }
            if (this.slideNextCallback) {
                this.slideNextCallback();
            }
        }
    }

    releaseSlider() {
        this.unfixContainer();
        this.active = false;
        this.showScrollBar();
        if (this.onActiveChanged) {
            this.onActiveChanged(this.active);
        }
    }

    round10(val) {
        return Math.round(val / 10) * 10;
    }

    cathcSlider(cathcAtNoMovement) {
        this.curPositionY = this.sliderContainer.getBoundingClientRect().top;

        let goingDown = window.scrollY - this.lastScrollPosition > 0;
        let goingUp = window.scrollY - this.lastScrollPosition < 0;


        if (this.canCatch) {
            if (
                // release slider logic
                (
                    (goingUp && this.currentSlide === 0)
                    ||
                    (goingDown && this.currentSlide === this.slidesCount - 1)
                )
                &&
                this.slideNextGuard
                &&
                this.slidePrevGuard
                &&
                this.active
            ) {
                this.releaseSlider();
            } else if (this.active) {
                this.scrollToContainer();
            } else if (
                // catch slider logic
                (
                    !cathcAtNoMovement
                    &&
                    (
                        (this.curPositionY >= 0 && this.prevPositionY < 0)
                        ||
                        (this.curPositionY <= 0 && this.prevPositionY > 0)
                    )
                )
                ||
                (cathcAtNoMovement && this.round10(this.curPositionY) === 0)
            ) {

                this.active = true;
                this.hideScrollBar();

                if (this.playOnEnter) {
                    this.slideNext();
                }

                if (this.onActiveChanged) {
                    this.onActiveChanged(this.active);
                }
                this.scrollToContainer();
                this.fixContainer();

            }
        }
        this.prevPositionY = this.curPositionY;
        this.lastScrollPosition = window.scrollY;
    }

    hideScrollBar(){
        document.body.classList.add('hide_scrollbar')
        document.documentElement.classList.add('hide_scrollbar')
    }
    showScrollBar(){
        document.body.classList.remove('hide_scrollbar')
        document.documentElement.classList.remove('hide_scrollbar')
    }

    destroy() {
        this.sliderContainer.firstElementChild.classList.remove("fixJump");
        this.sliderContainer.classList.remove("hide-slider");
        this.sliderContainer.classList.remove("show-slider");
        document.body.classList.remove('hide_scrollbar');
        document.documentElement.classList.remove('hide_scrollbar');

        clearTimeout(this.showSliderTimeoutId)
        window.removeEventListener("scroll", this.scrollHandler, false);
        window.removeEventListener("resize", this.scrollHandler, false);
    }
}

export default Slider;
