import React, { useState, useEffect } from 'react'
import BaseImage from '@components/BaseImage';

import ControlBlock from './ControlBlock'

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade } from 'swiper';
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

SwiperCore.use([EffectFade]);

const PromoSlider = ({ slides }) => {
    // Swipe instance
    const [ctrlSwipe, setCtrlSwipe] = useState(null);

    // Current Slide Index
    const [currIndex, setCurrIndex] = useState(0)

    const router = useRouter();


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

        return () => {
            if(ctrlSwipe) {
                ctrlSwipe.off('sliderChange');
            }
        };
    }, [currIndex, ctrlSwipe])

    const toLinkHandler = (slide) => {
        router.push({
            pathname: '/[tag]/[slug]',
            query: {
                tag: slide.urlX.tag,
                slug: slide.urlX.slug
            }
        }, `/${slide.linkUrl}`)
    }

    return (
        <div className="promoslider">
            <div className="p-block-slider">
                <Swiper onSwiper={setCtrlSwipe} effect="fade" >
                    {
                        slides.map((val) => {
                            return <SwiperSlide
                                key={val.id}
                                className="p-slider__slide"
                                onClick={() => toLinkHandler(val)} >
                                <BaseImage
                                    formats={val.image}
                                    alt={val.caption}
                                    type="photo"
                                    targets={[1248, 888, 672, 680, 328]} />

                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>

            {ctrlSwipe ? (
                <ControlBlock
                    prev={onPrev}
                    next={onNext}
                    setIndex={setCurrIndex}
                    onDotClick={onDotClick}
                    currIndex={currIndex}
                    slides={slides} />) : ''}
        </div>)
}

PromoSlider.propTypes = {
    slides: PropTypes.array,
}

export default PromoSlider;