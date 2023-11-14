class SwipeDetectorMobile {
    xDown = null;
    yDown = null;
    // config
    touchscreenTreshold = 150; // порог свайпа на сенсорном экране

    downCallback;
    upCallback;

    touchStartHandler;
    touchMoveHandler;

    constructor(downCallback, upCallback) {
        this.downCallback = downCallback;
        this.upCallback = upCallback;

        this.touchStartHandler = this.touchStart.bind(this);
        this.touchMoveHandler = this.touchMove.bind(this)

        window.addEventListener("touchstart", this.touchStartHandler, false);
        window.addEventListener("touchmove", this.touchMoveHandler, false);
    }
    touchStart(event) {
        this.xDown = event.touches[0].clientX;
        this.yDown = event.touches[0].clientY;
    }
    touchMove(event) {
        let xUp = event.touches[0].clientX;
        let yUp = event.touches[0].clientY;

        let xDiff = this.xDown - xUp;
        let yDiff = this.yDown - yUp;

        // ?
        if (!this.xDown || !this.yDown) {
            return;
        }

        if (Math.abs(xDiff) + Math.abs(yDiff) > this.touchscreenTreshold) {
            if (Math.abs(xDiff) < Math.abs(yDiff)) {
                if (yDiff > 0) {
                    // up (touch)
                    this.downCallback();
                } else {
                    // down (touch)
                    this.upCallback();
                }
            }
            this.xDown = null;
            this.yDown = null;
        }
    }
    destroy(){
        window.removeEventListener("touchstart", this.touchStartHandler, false);
        window.removeEventListener("touchmove", this.touchMoveHandler, false);
    }
}

export default SwipeDetectorMobile;
