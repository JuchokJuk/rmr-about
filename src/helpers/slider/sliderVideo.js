import InterruptibleTimer from "./interruptibleTimer";
class SliderVideo {
    video;
    videoReverse;
    timestamps;
    timestampsReverse;
    currentSlide;
    slidePrevCallback;
    slideNextCallback;
    onPlayingChanged;
    playing = false;
    timer;
    name;

    hidden;
    visibilityChange;
    currentVideo;
    visibilityChangeHandler;

    hasVideoFrameCallback;

    constructor(
        slidePrevCallback,
        slideNextCallback,
        onPlayingChanged,
        videos,
        currentSlide,
        timestamps,
        name
    ) {
        this.slidePrevCallback = slidePrevCallback;
        this.slideNextCallback = slideNextCallback;
        this.onPlayingChanged = onPlayingChanged;
        this.video = videos[0];
        this.videoReverse = videos[1];
        this.name = name;

        this.timestamps = timestamps;
        this.timestampsReverse = [];
        for (let timestamp of this.timestamps) {
            this.timestampsReverse.push(
                this.timestamps[this.timestamps.length - 1] - timestamp
            );
        }

        this.currentSlide = currentSlide;
        this.setVideoToSlide(this.currentSlide);

        if (this.video.requestVideoFrameCallback) {
            this.hasVideoFrameCallback = true;
        } else {
            this.hasVideoFrameCallback = false;

            // tab leave fix

            // Set the name of the hidden property and the change event for visibility
            this.visibilityChangeHandler = this.tabLeaveFix.bind(this);

            if (typeof document.hidden !== "undefined") {
                // Opera 12.10 and Firefox 18 and later support
                this.hidden = "hidden";
                this.visibilityChange = "visibilitychange";
            } else if (typeof document.msHidden !== "undefined") {
                this.hidden = "msHidden";
                this.visibilityChange = "msvisibilitychange";
            } else if (typeof document.webkitHidden !== "undefined") {
                this.hidden = "webkitHidden";
                this.visibilityChange = "webkitvisibilitychange";
            }

            if (
                !(
                    typeof document.addEventListener === "undefined" ||
                    this.hidden === undefined
                )
            ) {
                document.removeEventListener(
                    this.visibilityChange,
                    this.visibilityChangeHandler,
                    false
                );
                // Handle page visibility change
                document.addEventListener(
                    this.visibilityChange,
                    this.visibilityChangeHandler,
                    false
                );
            }
        }
    }

    setVideoToSlide(slide) {
        try {
            this.timer?.destroy();
            this.video.pause();
            this.videoReverse.pause();
            this.playing = false;
            this.onPlayingChanged(this.playing);
            this.currentSlide = slide;
            this.video.currentTime = this.getTime(slide);
            this.videoReverse.currentTime = this.getTimeReverse(slide);
        } catch (e) {
            // console.error(e);
            // бывает такое: The provided double value is non-finite.
            // но всё работает
        }
    }

    getTime(slide) {
        return this.timestamps[slide];
    }

    getTimeReverse(slide) {
        return this.timestampsReverse[slide];
    }

    slideNext() {
        if (!this.playing && this.currentSlide < this.timestamps.length - 1) {
            this.videoReverse.style.visibility = "hidden";
            this.video.style.visibility = "visible";

            this.playVideo(
                this.video,
                this.video.currentTime,
                this.getTime(this.currentSlide + 1),
                1
            );
            this.currentSlide++;
            this.slideNextCallback();
        }
    }

    slidePrev() {
        if (!this.playing && this.currentSlide > 0) {
            this.video.style.visibility = "hidden";
            this.videoReverse.style.visibility = "visible";

            this.playVideo(
                this.videoReverse,
                this.videoReverse.currentTime,
                this.getTimeReverse(this.currentSlide - 1),
                -1
            );
            this.currentSlide--;
            this.slidePrevCallback();
        }
    }

    tabLeaveFix() {
        // chrome pauses video on tab leave
        // this fixes it

        if (document[this.hidden]) {
            if (this.currentVideo) {
                this.currentVideo.pause();
            }
            this.timer?.pause();
        } else {
            if (this.currentVideo && this.playing) {
                this.currentVideo.play();
            }
            this.timer?.resume();
        }
    }

    playVideo(video, starttime, endtime, direction) {
        // video.currentTime = starttime;
        video.play();

        if (this.hasVideoFrameCallback) {
            // браузеры с поддержкой VideoFrameCallback будут идеально попадать в стопкадры
            const videoEnded = () => {
                video.pause();
                if (direction === 1) {
                    this.videoReverse.currentTime = video.duration - video.currentTime;
                }
                if (direction === -1) {
                    this.video.currentTime = video.duration - video.currentTime;
                }
                this.playing = false;
                this.onPlayingChanged(this.playing);
            }
            video.addEventListener('ended', videoEnded.bind(this))
            
            let frameCounter = (time, metadata) => {
                // console.log(metadata.mediaTime, endtime)
                if (metadata.mediaTime >= endtime){
                    videoEnded();
                } else {
                    // console.log("tick videoframe");
                    video.requestVideoFrameCallback(frameCounter);
                }
            };
            video.requestVideoFrameCallback(frameCounter);

            this.playing = true;
            this.onPlayingChanged(this.playing);
        } else {
            // Если поддержки VideoFrameCallback нету, будет использоваться таймер
            this.currentVideo = video;

            this.timer?.destroy();
            this.timer = new InterruptibleTimer(() => {
                video.pause();
                if (direction === 1) {
                    this.videoReverse.currentTime =
                    video.duration - video.currentTime;
                }
                if (direction === -1) {
                    this.video.currentTime = video.duration - video.currentTime;
                }
                this.currentVideo = undefined;
                this.playing = false;
                this.onPlayingChanged(this.playing);
            }, (endtime - starttime) * 1000);

            this.playing = true;
            this.onPlayingChanged(this.playing);
            this.tabLeaveFix();
        }
    }

    destroy() {
        if (!this.hasVideoFrameCallback) {
            document.removeEventListener(
                this.visibilityChange,
                this.visibilityChangeHandler,
                false
            );
            this.timer?.destroy();
        }
    }
}

export default SliderVideo;
