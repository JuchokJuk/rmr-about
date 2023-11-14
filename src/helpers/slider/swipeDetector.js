class SwipeDetector {
    // config
    maxLength = 8; // сколько прошлых значений берем чтоб считать среднее
    threshold = 20; // какое превышение регестрируем как пик
    pool = 40; // сколько маленьких перемещений в сумму дадут свайп
    slideTime = 1300; // раз в сколько мс можно свайпнуть
    stunTime = 2000; // сколько мс пул не отвечает после пика
    poolReducer = 0.975; // скорость опусташения пула

    deltaArr = new Array(this.maxLength).fill(0);
    deltaAvgArr = new Array(this.maxLength).fill(0);

    curAvg;
    curAvgAvg;

    sloving = false;

    canSlide = true;

    currentVolume = 0;

    canPool = true;

    downCallback;
    upCallback;

    wheelHandler;

    canPoolTimerId;
    canSlideTimerId;

    constructor(downCallback, upCallback) {
        this.downCallback = downCallback;
        this.upCallback = upCallback;

        this.wheelHandler = this.getSpeedByDeltaY.bind(this)

        window.addEventListener("wheel", this.wheelHandler, false);
    }

    getSpeedByDeltaY(event) {
        if (!event.ctrlKey) {
            this.getSpeed(event.deltaY);
        }
    }

    slowDown() {
        this.sloving = true;
        const animate = () => {
            this.getSpeed(0);
            this.currentVolume *= this.poolReducer;

            if (
                Math.abs(this.curAvg) === 0 &&
                Math.abs(this.curAvgAvg) === 0 &&
                Math.abs(this.currentVolume) < 0.1
            ) {
                this.sloving = false;
            } else {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }

    average(arr) {
        let sum = 0;
        for (let item of arr) {
            sum += item;
        }
        return sum / arr.length;
    }

    getSpeed(deltaY) {
        this.deltaArr.shift();
        this.deltaAvgArr.shift();

        this.deltaArr.push(deltaY);
        this.curAvg = this.average(this.deltaArr);
        this.deltaAvgArr.push(this.curAvg);
        this.curAvgAvg = this.average(this.deltaAvgArr);

        this.currentVolume += this.curAvgAvg;

        // spike
        if (
            this.canSlide &&
            (this.curAvg > this.curAvgAvg + this.threshold ||
                this.curAvg < this.curAvgAvg - this.threshold)
        ) {
            this.canSlide = false;
            this.canPool = false;
            if (
                this.curAvg > this.curAvgAvg + this.threshold &&
                this.curAvg > 0
            ) {
                // down (spike detector)
                this.downCallback();
            } else if (
                this.curAvg < this.curAvgAvg - this.threshold &&
                this.curAvg < 0
            ) {
                // up (spike detector)
                this.upCallback();
            }
            clearTimeout(this.canSlideTimerId);
            clearTimeout(this.canPoolTimerId);
            this.canSlideTimerId = setTimeout(() => {
                this.canSlide = true;
            }, this.slideTime);
            this.canPoolTimerId = setTimeout(() => {
                this.canPool = true;
            }, this.stunTime);
        }
        // pool
        if (
            this.canPool &&
            this.canSlide &&
            (this.currentVolume > this.pool || this.currentVolume < -this.pool)
        ) {
            //
            this.canSlide = false;
            if (this.currentVolume > this.pool) {
                // down (pool detector)
                this.downCallback();
                this.currentVolume = 0;
            } else if (this.currentVolume < -this.pool) {
                // up (pool detector)
                this.upCallback();
                this.currentVolume = 0;
            }
            //
            clearTimeout(this.canSlideTimerId);
            this.canSlideTimerId = setTimeout(() => {
                this.canSlide = true;
            }, this.slideTime);
        }
        if (this.currentVolume > this.pool) {
            this.currentVolume = 0;
        } else if (this.currentVolume < -this.pool) {
            this.currentVolume = 0;
        }

        if (
            Math.abs(this.curAvgAvg) !== 0 &&
            Math.abs(this.curAvg) &&
            Math.abs(this.currentVolume) > 0.1 &&
            !this.sloving
        ) {
            requestAnimationFrame(this.slowDown.bind(this));
        }
    }
    destroy() {
        window.removeEventListener("wheel", this.wheelHandler, false);
        clearTimeout(this.canSlideTimerId);
        clearTimeout(this.canPoolTimerId);
        // todo: тут бы петлю замедления разорвать
    }
}

export default SwipeDetector;
