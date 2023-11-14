import React, { useState, useEffect } from 'react'
import ControlBlock from './ControlBlock'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade } from 'swiper';
import PropTypes from 'prop-types';
import SlideContent from './SlideContent'

SwiperCore.use([EffectFade]);

const CaseSlider = ({ gridSpan, backColor, frontColor, slides, logo }) => {

    // Swipe instance
    const [ctrlSwipe, setCtrlSwipe] = useState(null);

    // Current Slide Index
    const [currIndex, setCurrIndex] = useState(0)

    const cardStyles = {
        gridRowEnd: gridSpan
    }

    const slideStyle = {
        backgroundColor: backColor
    }

    const frontStyle = {
        backgroundColor: frontColor
    }

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
            ctrlSwipe.slideTo(currIndex)

            ctrlSwipe.on('slideChange', (swipe) => {
                setCurrIndex(swipe.activeIndex)
            })
        }

        return () => ctrlSwipe ? ctrlSwipe.off('sliderChange') : null
    }, [ctrlSwipe, currIndex])

    return (
        <div className="card-slider-wraper card-slider-field" style={cardStyles}>
            <div className="card-slider">
                <Swiper onSwiper={setCtrlSwipe} effect="fade" >
                    {
                        slides.filter(item => item.article.length !== 0 ).map((slide) => {

                            const override = {
                                title: slide.overrideTitle ? slide.overrideTitle : '',
                                intro: slide.overrideIntro ? slide.overrideIntro : ''
                            }

                            const original = {
                                
                                title: slide.article.length ? slide.article[0].title : '',
                                intro: slide.article.length ? slide.article[0].introText : ''
                            }

                            return (<SwiperSlide
                                key={slide._id}
                                className="card-slider__slide">
                                    <div className="card-slider__place" style={slideStyle}>
                                        <SlideContent
                                            logo={logo}
                                            override={override}
                                            original={original} />
                                    </div>
                            </SwiperSlide>)
                        })
                    }
                </Swiper>
            </div>

            { ctrlSwipe ? (
                <ControlBlock next={onNext}
                    prev={onPrev}
                    onDotClick={onDotClick}
                    currIndex={currIndex}
                    setIndex={setCurrIndex}
                    slides={slides}
                    frontStyle={frontStyle} />)
                : ''}
        </div>)
}

CaseSlider.propTypes = {
    gridSpan: PropTypes.string,
    slides: PropTypes.array,
    backColor: PropTypes.string,
    frontColor: PropTypes.string,
    logo: PropTypes.object,
}

export default CaseSlider