import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import "./style.less";
import HorizontalScroll from "../HorizontalScroll";
import BigBusinessExplosion from "./BigBusinessExplosion";
import BigBusinessSlides from "./BigBusinessSlides";
import SharedBackground from "../SharedBackground";
import useDidUpdateEffect from "@helpers/useDidUpdateEffect";
import { useDispatch, useSelector } from "react-redux";
import { setBigBusinessDelayed } from "@store/about/aboutAction";

const BigBusiness = ({ videos }) => {
    const video = useRef();
    const dispatch = useDispatch();

    const [explosionVideoActive, setExplosionVideoActivity] = useState(false);
    const [slidesVideoActive, setSlidesVideoActivity] = useState(false);
    const [maxOffsetY, setMaxOffsetY] = useState(0);
    const [offsetY, setOffsetY] = useState(0);
    const delayed = useSelector((state) => state.about.bigBusinessDelayed);

    useLayoutEffect(() => {
        return () => {
            dispatch(setBigBusinessDelayed(false));
        };
    }, []);

    useLayoutEffect(() => {
        if (videos.cube2.normal) {
            video.current.load();
        }
    }, [videos.cube2.normal]);

    const [timerId, setTimerId] = useState();

    function onLoadedMetadata() {
        if (timerId !== undefined) {
            clearTimeout(timerId);
        }
        const id = setTimeout(() => {
            dispatch(setBigBusinessDelayed(true));
        }, 1000);
        setTimerId(id);
    }

    useEffect(() => {
        return () => {
            clearTimeout(timerId);
        };
    }, [timerId]);

    useDidUpdateEffect(() => {
        play();
    }, [maxOffsetY, offsetY]);

    const play = () => {
        if (
            delayed &&
            video.current &&
            !explosionVideoActive &&
            !slidesVideoActive
        ) {
            let time = (video.current.duration / maxOffsetY) * -offsetY;
            video.current.currentTime = time ? time : 0;
        }
    };

    function hideVideo() {
        if (video.current) {
            video.current.classList.add("hide-horizontal-video");
            video.current.classList.remove("show-horizontal-video");
        }
    }
    function showVideo() {
        if (video.current) {
            video.current.classList.add("show-horizontal-video");
            video.current.classList.remove("hide-horizontal-video");
        }
    }

    const onError = (e) => {
        if (e.target.error?.code) {
            // console.warn("❌🙃 ошибка в ⏩нормальном⏩ видео e.target.error:", e.target.error)
        } else {
            // console.warn("❌❌❌🙃 очень плохая ошибка в ⏩нормальном⏩ видео")
        }
    };

    // временный фикс наезжающего видео на айфонах
    function hideSecondPart() {
        if (video.current) {
            video.current.style.visibility = "hidden";
        }
    }
    function showSecondPart() {
        if (video.current) {
            video.current.style.visibility = "visible";
        }
    }

    function calcMaxOffsetY(value) {
        setMaxOffsetY(value);
    }
    function calcOffsetY(value) {
        setOffsetY(value);
    }

    return (
        <SharedBackground
            sendOffsetY={calcOffsetY}
            background={
                <div className="video-full-screen-container">
                    {videos.cube2.normal && (
                        <>
                            <video
                                muted
                                className="video"
                                ref={video}
                                onLoadedMetadata={onLoadedMetadata}
                                onError={onError}
                                playsInline
                            >
                                <source
                                    src={videos.cube2.normal}
                                    type="video/mp4"
                                ></source>
                            </video>
                        </>
                    )}
                </div>
            }
        >
            <BigBusinessExplosion
                showVideo={showVideo}
                hideVideo={hideVideo}
                videos={videos.cube1}
                setVideoActivity={setExplosionVideoActivity}
            />

            <HorizontalScroll sendMaxOffsetX={calcMaxOffsetY}>
                <div className="start-page__black">
                    <div className="start-page__name">
                        Мы помогаем крупным компаниям в технологической
                        трансформации
                    </div>
                </div>
            </HorizontalScroll>

            <BigBusinessSlides
                videos={videos.cube3}
                setVideoActivity={setSlidesVideoActivity}
                hideSecondPart={hideSecondPart}
                showSecondPart={showSecondPart}
            />
        </SharedBackground>
    );
};
export default BigBusiness;
