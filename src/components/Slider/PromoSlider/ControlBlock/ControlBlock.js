import React, { useState, useEffect } from 'react'
import './index.less'

import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from "swiper/react";

import PromoDots from './PromoDots'
import PromoContent from './PromoContent'
import PromoArrows from './PromoArrows'

import Link from 'next/link'

const ControlBlock = ({currIndex, onDotClick, slides, setIndex, next, prev}) => {

    const [ctrlSwipe, setCtrlSwipe] = useState(null);
    const [isHideControls, setIsControls ] = useState(false);

    useEffect(() => {

        if (slides.length === 1) {
            setIsControls(true);
        }

        if(ctrlSwipe) {
            ctrlSwipe.slideTo(currIndex)
            ctrlSwipe.on('slideChange', (swipe) => {
                setIndex(swipe.activeIndex)
            })
            return () => {
                ctrlSwipe.off('sliderChange');
            };
        }
    }, [currIndex, slides, ctrlSwipe])

    const slideList = slides.map((slide, index) => {
        return (
            <SwiperSlide key={index+"swipeslider"} >
                <Link href={{
                    pathname: '/[tag]/[slug]',
                    query: {
                        tag: slide.urlX.tag,
                        slug: slide.urlX.slug
                    },
                }}
                      as={`/${slide.linkUrl}`} passHref >
                    <a>
                        <PromoContent slideContent={slide} />
                    </a>
                </Link>
            </SwiperSlide>
        )
    })

    return (
        <div className="p-block-slider__controls">

            { !isHideControls && <PromoDots
                onDotClick={onDotClick}
                currIndex={currIndex}
                slides={slides} /> }

            <div className="promo__content-wrapper">
                <Swiper onSwiper={setCtrlSwipe} effect="slide" autoHeight>
                    {ctrlSwipe ? slideList : ''}
                </Swiper>
            </div>

            { !isHideControls && <PromoArrows
                next={next}
                prev={prev} /> }

        </div>
    )
}

ControlBlock.propTypes = {
    next : PropTypes.func.isRequired,
    prev : PropTypes.func.isRequired,
    onDotClick : PropTypes.func.isRequired,
    slides: PropTypes.array.isRequired,
    currIndex: PropTypes.number.isRequired,
    setIndex : PropTypes.func.isRequired
}

export default ControlBlock