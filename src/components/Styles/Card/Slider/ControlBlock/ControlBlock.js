import React, {useState, useEffect} from 'react'
import { Swipeable } from 'react-swipeable'
import { Swiper, SwiperSlide } from "swiper/react";

import PropTypes from 'prop-types'

import LinkHeading from '../LinkHeading'
import LinkArrows from '../LinkArrows'
import LinkDots from '../LinkDots'
import Tags from '@components/Styles/Tags'


const ControlBlock = ({slides, currIndex, setIndex, onDotClick, prev, next, frontStyle}) => {

    const [ctrlSwipe, setCtrlSwipe] = useState(null);

    const controlSlidesList = slides.map((slide, index) => {

        const override = {
            title: slide.overrideTitle ? slide.overrideTitle : '',
            intro: slide.overrideIntro ? slide.overrideIntro : ''
        }

        const original = {

            title: slide.article.length ? slide.article[0].title : '',
            intro: slide.article.length ? slide.article[0].introText : ''
        }

        const tags = slide.article.length ? slide.article[0].tags : []

        return (
            <SwiperSlide
                className="card-slider__controls-slide"
                key={`${slide.heading}_${index}`}>

                <div className="card-slider__tags-wrapper">
                    <Tags size="small" tags={tags} className="card-slider__tag_white" />
                </div>

                <LinkHeading
                    original={override}
                    override={original}
                    link={slide.article[0]} />

            </SwiperSlide>
        )
    })

    const onPrev = () => {
        ctrlSwipe.slidePrev();
        prev()
    }

    const onNext = () => {
        ctrlSwipe.slideNext();
        next()
    }

    const onDotClickControl = (index) => {
        ctrlSwipe.slideTo(index)
        onDotClick(index);
    }

    useEffect(() => {
        if (ctrlSwipe) {
            ctrlSwipe.slideTo(currIndex)

            ctrlSwipe.on('slideChange', (swipe) => {
                setIndex(swipe.activeIndex)
            })

            return () => ctrlSwipe.off('sliderChange')
        }
    }, [ctrlSwipe, currIndex])

    return (
        <Swipeable onSwipedLeft={onNext} onSwipedRight={onPrev}>
            <div className="card-slider__controls" style={frontStyle}>
                <LinkDots currIndex={currIndex}
                          onDotClick={onDotClickControl}
                          slides={slides}   />

                <Swiper onSwiper={setCtrlSwipe} className="card-slider__control-container">
                    { ctrlSwipe ?
                        controlSlidesList : ''
                    }
                </Swiper>

                <LinkArrows next={onNext} prev={onPrev} slides={slides} />
            </div>
        </Swipeable>
    )
}

ControlBlock.propTypes = {
    slides: PropTypes.array.isRequired,
    currIndex: PropTypes.number.isRequired,
    setIndex : PropTypes.func,
    onDotClick: PropTypes.func.isRequired,
    prev: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
    frontStyle: PropTypes.object
}

export default ControlBlock