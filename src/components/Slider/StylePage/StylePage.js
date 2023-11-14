import React, { useState, useEffect} from "react";

import Controls from './Controls'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade } from 'swiper';
import BaseImage from '@components/BaseImage';
import PropTypes from 'prop-types'
import Description from "@components/Styles/Description";


SwiperCore.use([EffectFade]);

const StyleSlider = ({ slides, caption }) => {
    // Swipe instance
    const [ctrlSwipe, setCtrlSwipe] = useState(null);
    // Current Slide Index
    const [currIndex, setCurrIndex] = useState(0)

    const onNext = () => {
        ctrlSwipe.slideNext();
        setCurrIndex(ctrlSwipe.activeIndex)
    };
  
    const onPrev = () => {
        ctrlSwipe.slidePrev();
        setCurrIndex(ctrlSwipe.activeIndex)
    };

    const onDotClick = (index) => {
        ctrlSwipe.slideTo(index)
        setCurrIndex(index)
    }

    useEffect(() => {
        if (ctrlSwipe) {
            // Handle slide change
            ctrlSwipe.on('slideChange', (swipe) => {
                setCurrIndex(swipe.activeIndex)
            })
        }
    }, [ctrlSwipe])

    return (
        <React.Fragment>
            <div className="grid-row slider_padd">
                <div className="grid-col-6">
                    <div className="stylepage-slider">
                        <Swiper onSwiper={setCtrlSwipe} effect="fade">
                            {
                                slides.map((slide) => {

                                    return (<SwiperSlide 
                                            key={slide.id}
                                            className="stylepage-slider__slide">
                                                <BaseImage
                                                    formats={slide}
                                                    alt={slide.caption}
                                                    type="photo"
                                                    targets={[1248, 888, 672, 680, 328]} />

                                            </SwiperSlide>)
                                })
                            }
                        </Swiper>
                
                        { ctrlSwipe ? (
                        <Controls next={onNext} 
                                prev={onPrev} 
                                onDotClick={onDotClick} 
                                dots={slides}
                                currIndex={currIndex} />) : '' }
                    </div>
                </div>
                <div className="grid-col-6">
                    <div className="stylepage-slider__caption">
                        <Description.D2>
                            {caption}
                        </Description.D2>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

StyleSlider.propTypes = {
    slides : PropTypes.array,
    caption: PropTypes.string,
}


export default StyleSlider;