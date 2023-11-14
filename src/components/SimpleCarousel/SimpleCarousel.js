import "./style.less";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";

const Carousel = ({ children }) => {
    const [viewportRef, embla] = useEmblaCarousel({
        containScroll: "trimSnaps",
        dragFree: true,
    });

    return (
        <div className="carousel">
            <div className="carousel__viewport" ref={viewportRef}>
                <div className="carousel__container">{children}</div>
            </div>
        </div>
    );
};

export default Carousel;
