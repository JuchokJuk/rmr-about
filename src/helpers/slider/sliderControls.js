class SliderControls {
    slidePrevButton;
    slideNextButton;
    slidePrevCallback;
    slideNextCallback;

    constructor(config) {
        this.slidePrevButton = config?.slidePrevButton;
        this.slideNextButton = config?.slideNextButton;

        this.slidePrevCallback = config?.slidePrevCallback;
        this.slideNextCallback = config?.slideNextCallback;

        this.addListeners();
    }

    addListeners() {
        this.slideNextButton?.addEventListener("click", this.slideNextCallback, false);
        this.slidePrevButton?.addEventListener("click", this.slidePrevCallback, false);
    }

    destroy() {
        this.slideNextButton?.removeEventListener("click", this.slideNextCallback, false);
        this.slidePrevButton?.removeEventListener("click", this.slidePrevCallback, false);
    }
}

export default SliderControls;
