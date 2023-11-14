import React, {useState, useEffect} from 'react'
import { Swipeable } from 'react-swipeable'
import { Swiper, SwiperSlide } from "swiper/react";

import PropTypes from 'prop-types'

import LinkHeading from '../LinkHeading'
import LinkArrows from '../LinkArrows'
import LinkDots from '../LinkDots'
import LinkContent from '../LinkContent'
import Tags from '@components/Styles/Tags'

const ControlBlock = ({slides, currIndex, setIndex, onDotClick, prev, next }) => {

    const [ctrlSwipe, setCtrlSwipe] = useState(null);

    const controlSlidesList = slides.map((slide, index) => {

        return (
            <SwiperSlide
                className="link-slider__controls-slide"
                key={`${slide._id}_${index}`}>

                {  slide.article[0] && slide.article[0].tags.length !== 0 ?
                    <div className="link-slider__tags">
                        <Tags size="small" tags={slide.article[0].tags} />
                    </div> : null
                }

                <LinkHeading
                    original={{
                        title: slide.article[0] && slide.article[0].title
                    }}
                    override={{
                        title: slide.overrideTitle
                    }}
                    link={slide.article[0]}
                />

                <LinkContent
                    original={{
                        intro: slide.article[0] && slide.article[0].introText
                    }}
                    override={{
                        intro: slide.overrideIntro
                    }}
                />

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
            <div className="link-slider__controls" style={{"backgroundColor": "#D0DBD7"}}>
                <LinkDots currIndex={currIndex}
                          onDotClick={onDotClickControl}
                          slides={slides}   />

                <Swiper onSwiper={setCtrlSwipe}>
                    { ctrlSwipe ?
                        controlSlidesList : ''
                    }
                </Swiper>

                <LinkArrows next={onNext} prev={onPrev} />
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
    frontColor: PropTypes.string
}

export default ControlBlock