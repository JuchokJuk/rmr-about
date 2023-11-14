import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import "./style.less";
import SwipeDetector from "@helpers/slider/swipeDetector";
import SwipeDetectorMobile from "@helpers/slider/swipeDetectorMobile";
import Slider from "@helpers/slider/slider";
import SliderVideo from "@helpers/slider/sliderVideo";
import Layout from "@components/Layouts/Layout";
import { H2Big } from "@components/fontSystem/Heading/Heading";
import { useDispatch } from "react-redux";
import { pushSliderObject } from "@store/scrollBlocker/scrollBlockerAction";
import SlidesAnimation from "@helpers/slider/slidesAnimation";
import { setExplosionDelayed } from "@store/about/aboutAction";

const BigBusinessExplosion = (props) => {
    const dispatch = useDispatch();

    const sliderContainer = useRef();
    const video = useRef();
    const videoReverse = useRef();
    const slidesContainer = useRef();

    let sliderVideo = useRef();
    let slidesAnimation = useRef();
    let slider = useRef();
    let swipeDetector = useRef();
    let swipeDetectorMobile = useRef();
    let sliderControls = useRef();

    let [videoLoaded, setVideoLoaded] = useState(false);
    let [reversedLoaded, setReversedLoaded] = useState(false);

    const toggleVideoVisibility = (active, currentSlideIndex) => {
        if (video.current && videoReverse.current) {
            if (!active && currentSlideIndex === 1) {
                video.current.style.opacity = 0;
                videoReverse.current.style.opacity = 0;
                props.setVideoActivity(false);
            } else {
                video.current.style.opacity = 1;
                videoReverse.current.style.opacity = 1;
                props.setVideoActivity(true);
            }
        }

    }

    const onLoadedVideo = () => {
        setVideoLoaded(true)
    };

    const onLoadedReversed = () => {
        setReversedLoaded(true)
    };

    const [timerId, setTimerId] = useState();

    useEffect(() => {
        if (videoLoaded && reversedLoaded && video.current && videoReverse.current) {
            if (timerId !== undefined) {
                clearTimeout(timerId)
            }
            const id = setTimeout(() => {
                setupVideo();
                dispatch(setExplosionDelayed(true));
            }, 1000)
            setTimerId(id);
        }
    }, [videoLoaded, reversedLoaded, video.current, videoReverse.current])

    function setupVideo() {
        destroy();

        slidesAnimation.current = new SlidesAnimation(slidesContainer.current, 0);

        sliderVideo.current = new SliderVideo(
            slidesAnimation.current.slidePrev.bind(slidesAnimation.current),
            slidesAnimation.current.slideNext.bind(slidesAnimation.current),
            (playing) => {
                if (slider.current) {
                    slider.current.slideNextGuard = !playing;
                    slider.current.slidePrevGuard = !playing;
                }
            },
            [video.current, videoReverse.current],
            0,
            [0, 51/30],
            "explosion"
        );

        slider.current = new Slider({
            name: "explosion",
            playOnEnter: true,
            slidePrevCallback: sliderVideo.current.slidePrev.bind(sliderVideo.current),
            slideNextCallback: sliderVideo.current.slideNext.bind(sliderVideo.current),
            slidePrevGuard: true,
            slideNextGuard: true,
            sliderContainer: sliderContainer.current,
            slidesCount: 2,
            onCurrentSlideInited: (slide) => {
                sliderVideo.current.setVideoToSlide(slide);
                slidesAnimation.current.setSlide(slide);
            },
            onActiveChanged: (value) => {
                if (slider.current) {
                    toggleVideoVisibility(value, slider.current.currentSlide);
                }
            },
            onCurrentSlideChanged: (slide) => {
                if (slider.current) {
                    toggleVideoVisibility(slider.current.active, slide);
                }
            },
            onStartScrollBlocking: props.showVideo,
            onStopScrollBlocking: props.hideVideo
        });

        swipeDetector.current = new SwipeDetector(
            slider.current.slideNext.bind(slider.current),
            slider.current.slidePrev.bind(slider.current)
        );

        swipeDetectorMobile.current = new SwipeDetectorMobile(
            slider.current.slideNext.bind(slider.current),
            slider.current.slidePrev.bind(slider.current)
        );

        dispatch(pushSliderObject(slider.current));
        toggleVideoVisibility(false, slider.current.currentSlide);
    }

    useLayoutEffect(() => {
        reloadVideos();
        if ((props.videos.normal && props.videos.reversed)) {
            video.current.load();
            videoReverse.current.load();
        }
    }, [props.videos.normal, props.videos.reversed]);


    function destroy() {
        slidesAnimation.current?.destroy();
        sliderVideo.current?.destroy();
        slider.current?.destroy();
        swipeDetector.current?.destroy();
        swipeDetectorMobile.current?.destroy();
        sliderControls.current?.destroy();
    }

    useLayoutEffect(() => {
        return () => {
            destroy();
            dispatch(setExplosionDelayed(false));
        }
    }, [])

    useEffect(() => {
        return () => {
            clearTimeout(timerId)
        }
    }, [timerId])

    function reloadVideos() {
        setVideoLoaded(false);
        setReversedLoaded(false);
        dispatch(setExplosionDelayed(false));
    }

    const onErrorNormal = (e) => {
        if (e.target.error?.code) {
            console.warn("❌💣 ошибка в ⏩нормальном⏩ видео e.target.error:", e.target.error)
        } else {
            console.warn("❌❌❌💣 очень плохая ошибка в ⏩нормальном⏩ видео")
        }
    }

    const onErrorReversed = (e) => {
        if (e.target.error?.code) {
            console.warn("❌💣 ошибка в ⏪реверснутом⏪ видео e.target.error:", e.target.error)
        } else {
            console.warn("❌❌❌💣 очень плохая ошибка в ⏪реверснутом⏪ видео")
        }
    }

    return (
        <div className="sliderContainer" ref={sliderContainer}>
            <div className="slider">
                <div className="video-full-screen-container">
                    {
                        (props.videos.normal && props.videos.reversed) &&
                        <>
                            <video muted
                                id="v"
                                className="video"
                                ref={video}
                                onLoadedMetadata={onLoadedVideo}

                                onError={onErrorNormal}
                                playsInline>
                                <source src={props.videos.normal} type="video/mp4"></source>
                            </video>
                            <video muted
                                id="vr"
                                className="video"
                                ref={videoReverse}
                                onLoadedMetadata={onLoadedReversed}

                                onError={onErrorReversed}
                                playsInline>
                                <source src={props.videos.reversed} type="video/mp4"></source>
                            </video>
                        </>
                    }


                </div>

                <div className="content">
                    <Layout verticalCentered={true}>
                        <div
                            className="slidesContainer"
                            ref={slidesContainer}
                        >
                            <div></div>
                            <div className="big-business">
                                <div className="header-container">
                                    <H2Big>
                                        Большому бизнесу{" "}
                                        <span className="red pixelated">
                                            сложно внедрять инновации
                                        </span>
                                    </H2Big>
                                </div>
                            </div>
                        </div>
                    </Layout>
                </div>
            </div>
        </div>
    );
};
export default BigBusinessExplosion;

