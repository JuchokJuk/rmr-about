import "./style.less";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Arrow from "@assets/IconPack/arrow.svg";

const Carousel = ({ children }) => {
    const [viewportRef, embla] = useEmblaCarousel({
        containScroll: "trimSnaps",
        dragFree: false,
        skipSnaps: false,
    });

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const scrollTo = useCallback(
        (index) => embla && embla.scrollTo(index),
        [embla]
    );

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla, setSelectedIndex]);

    const onScroll = useCallback(() => {
        if (!embla) return;
        const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
        setScrollProgress(progress * 100);
    }, [embla, setScrollProgress]);

    useEffect(() => {
        if (!embla) return;
        embla.reInit();
        onSelect();
        onScroll();
        setScrollSnaps(embla.scrollSnapList());
        embla.on("select", onSelect);
        embla.on("scroll", onScroll);
    }, [embla, onSelect, onScroll, setScrollSnaps, children]);

    return (
        <>
            <div className="carousel">
                <div className="carousel__viewport" ref={viewportRef}>
                    <div className="carousel__container">{children}</div>
                </div>
                <button
                    className="carousel__btnPrev"
                    onClick={scrollPrev}
                    disabled={!prevBtnEnabled}
                >
                    <Arrow />
                </button>
                <button
                    className="carousel__btnNext"
                    onClick={scrollNext}
                    disabled={!nextBtnEnabled}
                >
                    <Arrow />
                </button>
            </div>
            {/* <div className="carousel__progress">
                <div
                    className="carousel__progress__bar"
                    style={{ transform: `translateX(${scrollProgress}%)` }}
                />
            </div> */}
            
            <div className="carousel__dots">
                {scrollSnaps.map((_, index) => (
                    <div
                        key={index}
                        className={`carousel__dot ${
                            index === selectedIndex ? "is-selected" : ""
                        }`}
                        type="button"
                        onClick={() => scrollTo(index)}
                    />
                ))}
            </div>
        </>
    );
};

export default Carousel;
