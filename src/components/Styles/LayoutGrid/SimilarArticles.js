import React from 'react'
import PropTypes from 'prop-types'
import Card from '@components/Styles/Card'
import { useSelector } from 'react-redux';
import { trackWindowScroll } from 'react-lazy-load-image-component';

const SimilarArticles = ({ cards, scrollPosition }) => {

    let breakpoint = useSelector(state => state.breakpoint.breakpoint);

    return (
        <div className={`layout-grid layout-grid_similar`}>
            {
                cards.length ? cards.map(card => {
                    let height = card.height.mainPage ? card.height.mainPage : card.height
                    const gridSpan = ' span ' + (Math.ceil((height[breakpoint === 'max' ? 0 : breakpoint]) / 10));

                    if (card.isCase) {
                        return null
                    } else {
                        card.type = 2
                    }

                    return (
                        <Card
                            key={card.id}
                            timestamp={card.timestamp}
                            cover={card.cover}
                            author={card.author}
                            heading={card.heading}
                            tags={card.tags}
                            cardSize={2}
                            headingSize={card.headingSize}
                            gridSpan={gridSpan}
                            isCase={card.isCase}
                            caseSettings={card.caseSettings}
                            desc={card.desc}
                            url={card.url}
                            urlX={card.urlX}
                            isPubdate={card.isPubdate}
                            scrollPosition={scrollPosition}
                        />
                    )
                }) : ''
            }
        </div>
    )
}

SimilarArticles.propTypes = {
    cards: PropTypes.array.isRequired,
    scrollPosition: PropTypes.any,
    page: PropTypes.string,
    pageId: PropTypes.string
}

SimilarArticles.defaultProps = {
    cards: [],
    page: '',
    pageId: ''
}

export default trackWindowScroll(SimilarArticles);