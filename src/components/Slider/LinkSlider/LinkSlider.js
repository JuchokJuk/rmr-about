import React, {useState, useEffect} from 'react'
import ControlBlock from './ControlBlock'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade } from 'swiper';
import BaseImage from '@components/BaseImage';
import PropTypes from 'prop-types'

SwiperCore.use([EffectFade]);

const LinkSlider = ({ gridSpan, slides, backColor, frontColor, logo }) => {
    // Swipe instance
    const [ctrlSwipe, setCtrlSwipe] = useState(null);

    // Current Slide Index
    const [currIndex, setCurrIndex] = useState(0)

    const gridStyles = {
        gridRowEnd: gridSpan
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
        <div className="link-slider-field link-slider-wraper" style={gridStyles}>
            <div className="link-slider">
                <Swiper onSwiper={setCtrlSwipe} effect="fade" noSwiping>
                    {
                        slides.map((slide) => {

                            const styles = {}

                            if ( logo && logo.url ) {
                                styles.backgroundColor = backColor
                            }
                            else {
                                if (slide.article.length !== 0 && slide.article[0].imgMain && slide.article[0].imgMain.url) {
                                    styles.backgroundImage = `url("${slide.article[0].imgMain.url}")`
                                }
                            }

                            return (<SwiperSlide
                                key={slide._id}
                                className={`link-slider__slide ${logo && logo.url ? "logo_active" : "" }`}>

                                <div className="link-slider__place" style={styles}>

                                    { logo && logo.url ?
                                        <div className="link-slide__slide-logo">
                                            <div className="link-slide__logo-width-locker">
                                                <BaseImage
                                                    defaultUrl={logo.url}
                                                    formats={logo}
                                                    type="photo"
                                                    targets={[1248, 888, 672, 680, 328]} />
                                            </div>
                                        </div> : null }

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
                              frontColor={frontColor} />) : '' }
        </div>)
}

LinkSlider.propTypes = {
    gridSpan: PropTypes.string,
    slides: PropTypes.array,
    backColor: PropTypes.string,
    frontColor: PropTypes.string,
    logo: PropTypes.object,
}

export default LinkSlider