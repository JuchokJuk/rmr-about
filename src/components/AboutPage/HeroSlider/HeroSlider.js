import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./style.less";
import SwipeDetector from "@helpers/slider/swipeDetector";
import SwipeDetectorMobile from "@helpers/slider/swipeDetectorMobile";
import Slider from "@helpers/slider/slider";
import SliderVideo from "@helpers/slider/sliderVideo";
import Layout from "@components/Layouts/Layout";
import { useDispatch } from "react-redux";
import { pushSliderObject } from "@store/scrollBlocker/scrollBlockerAction";
import VideoArrow from "@assets/videoArrow.svg";
import SlidesAnimation from "@helpers/slider/slidesAnimation";
import { useBreakpoint } from "@helpers/useBreakpoint";
import ListItem from "@components/AboutPage/ListItem";
import SliderControls from "@helpers/slider/sliderControls";
import { setHeroSliderDelayed } from "@store/about/aboutAction";

const HeroSlider = (props) => {
    const dispatch = useDispatch();

    const sliderContainer = useRef();
    const video = useRef();
    const videoReverse = useRef();
    const slidesContainer = useRef();
    const arrowButtonRef = useRef();
    const [freezeFrameIndex, setFreezeFrameIndex] = useState(0);

    let sliderVideo = useRef();
    let slidesAnimation = useRef();
    let slider = useRef();
    let swipeDetector = useRef();
    let swipeDetectorMobile = useRef();
    let sliderControls = useRef();

    let [videoLoaded, setVideoLoaded] = useState(false);
    let [reversedLoaded, setReversedLoaded] = useState(false);

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
                dispatch(setHeroSliderDelayed(true));
            }, 1000)
            setTimerId(id);
        }
    }, [videoLoaded, reversedLoaded, video.current, videoReverse.current])

    let slideIndex;
    let prevSlideIndex;

    function callSlidesAnimation() {
        setFreezeFrameIndex(sliderVideo.current.currentSlide);
        slideIndex = calcSlideIndex(sliderVideo.current.currentSlide);

        if (slideIndex !== prevSlideIndex) {
            if (prevSlideIndex < slideIndex) {
                slidesAnimation.current.slideNext();
            }
            if (prevSlideIndex > slideIndex) {
                slidesAnimation.current.slidePrev();
            }
        }

        prevSlideIndex = slideIndex;
    }

    const calcSlideIndex = (freezeFrameIndex) => {
        let index;

        if (freezeFrameIndex < 1) {
            index = freezeFrameIndex;
        }
        if (freezeFrameIndex === 1 || freezeFrameIndex === 2) {
            index = 1;
        }
        if (freezeFrameIndex > 2) {
            index = freezeFrameIndex - 1;
        }

        return index;
    }


    function setupVideo() {
        destroy();

        slidesAnimation.current = new SlidesAnimation(slidesContainer.current, 0);

        sliderVideo.current = new SliderVideo(
            callSlidesAnimation,
            callSlidesAnimation,
            (playing) => {
                if (slider.current) {
                    slider.current.slideNextGuard = !playing;
                    slider.current.slidePrevGuard = !playing && slider.current.currentSlide !== 1;
                }
            },
            [video.current, videoReverse.current],
            0,
            [0, 50/25, 100/25, 150/25, 200/25, 263/25],
            "hero"
        );

        slider.current = new Slider({
            name: "hero",
            autoPlay: true,
            slidePrevCallback: sliderVideo.current.slidePrev.bind(sliderVideo.current),
            slideNextCallback: sliderVideo.current.slideNext.bind(sliderVideo.current),
            slidePrevGuard: true,
            slideNextGuard: true,
            sliderContainer: sliderContainer.current,
            slidesCount: 6,
            onCurrentSlideInited: (slide) => {
                slideIndex = slide;
                prevSlideIndex = slide;
                sliderVideo.current.setVideoToSlide(slide);
                setFreezeFrameIndex(slide);
                slidesAnimation.current.setSlide(calcSlideIndex(slide));
            },
            onCurrentSlideChanged: () => {
                if (slider.current) {
                    slider.current.slidePrevGuard =
                        !sliderVideo.current.playing && slider.current.currentSlide !== 1;
                }
            },
        });

        dispatch(pushSliderObject(slider.current));

        swipeDetector.current = new SwipeDetector(
            slider.current.slideNext.bind(slider.current),
            slider.current.slidePrev.bind(slider.current)
        );

        swipeDetectorMobile.current = new SwipeDetectorMobile(
            slider.current.slideNext.bind(slider.current),
            slider.current.slidePrev.bind(slider.current)
        );

        sliderControls.current = new SliderControls({
            slideNextButton: arrowButtonRef.current,
            slideNextCallback: slider.current.slideNext.bind(slider.current),
        });
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
            dispatch(setHeroSliderDelayed(false));
            destroy();
        }
    }, [])

    useEffect(() => {
        return () => {
            // console.log('timer cleared')
            clearTimeout(timerId)
        }
    }, [timerId])

    function reloadVideos() {
        setVideoLoaded(false);
        setReversedLoaded(false);
        dispatch(setHeroSliderDelayed(false));
    }

    const onErrorNormal = (e) => {
        if (e.target.error?.code) {
            console.warn("❌🌍 ошибка в ⏩нормальном⏩ видео e.target.error:", e.target.error)
        } else {
            console.warn("❌❌❌🌍 очень плохая ошибка в ⏩нормальном⏩ видео")
        }
    }

    const onErrorReversed = (e) => {
        if (e.target.error?.code) {
            console.warn("❌🌍 ошибка в ⏪реверснутом⏪ видео e.target.error:", e.target.error)
        } else {
            console.warn("❌❌❌🌍 очень плохая ошибка в ⏪реверснутом⏪ видео")
        }
    }

    const breakpoint = useBreakpoint();
    const maxXl = breakpoint === "max" ? <br /> : "";
    const xl = breakpoint === 0 ? <br /> : "";
    const lg = breakpoint === 1 ? <br /> : "";
    const md = breakpoint === 2 ? <br /> : "";
    const sm = breakpoint >= 3 ? <br /> : "";

    return (
        <React.Fragment>
            <div className="sliderContainer hero-slider" ref={sliderContainer}>
                <div className="slider">
                    <div className="video-full-screen-container">
                        {
                            (props.videos.normal && props.videos.reversed) &&
                            <>
                                <video muted
                                    className="video"
                                    ref={video}
                                    onLoadedMetadata={onLoadedVideo}
                                    onError={onErrorNormal}
                                    playsInline>
                                    <source
                                        src={props.videos.normal}
                                        type="video/mp4"></source>
                                </video>

                                <video muted
                                    className="video"
                                    ref={videoReverse}
                                    onError={onErrorReversed}
                                    onLoadedMetadata={onLoadedReversed}
                                    playsInline>
                                    <source
                                        src={props.videos.reversed}
                                        type="video/mp4"></source>
                                </video>
                            </>

                        }
                    </div>

                    <div className="content">
                        <div
                            className={
                                freezeFrameIndex === 1
                                    ?
                                    "arrow-container"
                                    : "arrow-container hidden"
                            }
                        >
                            <div className="video-arrow" ref={arrowButtonRef}>
                                <VideoArrow />
                            </div>
                        </div>
                        <Layout verticalCentered={true}>
                            <div
                                className="slide-content-wrapper slidesContainer"
                                ref={slidesContainer}
                            >
                                <div className="slide"></div>
                                <div className="slide">
                                    <h1 className="hero-header">
                                        Придумываем {md} стратегии развития
                                        цифровых сервисов
                                        <span
                                            className={
                                                "red-text" +
                                                " " +
                                                (freezeFrameIndex === 2
                                                    ? ""
                                                    : "red-text_hidden")
                                            }
                                        >
                                            &nbsp;{maxXl}
                                            {md}
                                            {sm}и помогаем {xl}
                                            {lg} их реализовать
                                        </span>
                                    </h1>
                                </div>

                                <div className="slide">
                                    <ListItem number={"1_"}>
                                        Делаем цифровые продукты {maxXl}для миллионов
                                        людей
                                    </ListItem>
                                </div>
                                <div className="slide">
                                    <ListItem number={"2_"}>
                                        Помогаем компаниям
                                        <br />в технологической трансформации
                                    </ListItem>
                                </div>
                                <div className="slide">
                                    <ListItem number={"3_"}>
                                        Запускаем {md}{sm} и поддерживаем {md}{" "}
                                        стартапы, которые создают будущее
                                    </ListItem>
                                </div>
                            </div>
                        </Layout>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default HeroSlider;
