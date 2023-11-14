import React from 'react'
import PropTypes from 'prop-types'
import Card from '@components/Styles/Card'
import CaseSlider from '@components/Styles/Card/Slider'
import { useSelector } from 'react-redux';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import LinkSlider from "@components/Slider/LinkSlider"
import { useRouter } from 'next/router'
import {chooseHeight} from '@helpers/functions';

const LayoutGrid = ({ cards, scrollPosition, filters, className, isSkipFilter, pageId, page }) => {
    let breakpoint = useSelector(state => state.breakpoint.breakpoint);
    let router = useRouter();

    const filterTags = (cardTags) => {
        if (router.pathname === '/') {
            if (filters.length === 0) return cardTags.slice(0, 4)
        }
        else if (router.pathname === '/tags/[subtag]') {
            return cardTags.filter((cardTag) => !filters.some((filter) => filter._id === cardTag._id)).slice(0, 4)
        } else {
            if (!filters.length) {
                return []
            } else {
                return cardTags.filter((cardTag) => filters.some((filter) => filter._id === cardTag._id))
            }   
        }
    }

    return (
        <div className={`layout-grid ${className}`}>
            {
                cards.map(card => {
                    let height = chooseHeight(page, card.height, pageId);
                    const gridSpan = ' span ' + (Math.ceil((height[breakpoint === 'max' ? 0 : breakpoint]) / 10));

                    switch(card.cardType) {
                        case 'card' :
                            return <Card key={card.id}
                                        timestamp={card.timestamp}
                                        cover={card.cover}
                                        author={card.author}
                                        heading={card.heading}
                                        tags={isSkipFilter ? card.tags : filterTags(card.tags)}
                                        cardSize={card.cardSize}
                                        headingSize={card.headingSize}
                                        gridSpan={gridSpan}
                                        isCase={card.isCase}
                                        caseSettings={card.caseSettings}
                                        desc={card.desc}
                                        url={card.url}
                                        urlX={card.urlX}
                                        isPubdate={card.isPubdate}
                                        scrollPosition={scrollPosition} />

                        case 'caseSlider':
                            return <CaseSlider
                                        key={card.id}
                                        gridSpan={gridSpan}
                                        slides={card.slides}
                                        backColor={card.backColor}
                                        frontColor={card.frontColor}
                                        logo={card.logo} />

                        case 'simpleSlider':
                            return <LinkSlider 
                                        key={card.id}
                                        slides={card.slides}
                                        gridSpan={gridSpan}
                                        backColor={card.backColor}
                                        frontColor={card.frontColor}
                                        tags={card.tags}
                                        logo={card.logo} />           
                    }
                })
            }
        </div>)
}

LayoutGrid.propTypes = {
    cards: PropTypes.array.isRequired,
    filters: PropTypes.array,
    scrollPosition: PropTypes.any,
    className: PropTypes.string,
    isSkipFilter: PropTypes.bool,
    pageId: PropTypes.string,
    page: PropTypes.string
}

LayoutGrid.defaultProps = {
    cards : [],
    filters: [],
    scrollPosition: null,
    className: '',
    isSkipFilter: false,
    pageId: '',
    page: ''
}

export default trackWindowScroll(LayoutGrid);