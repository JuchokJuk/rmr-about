import React from 'react'
import PropTypes from 'prop-types'

import options from './options'
import CardCover from './CardCover';
import CardTagsContainer from './CardTagsContainer'
import CardHeadingContainer from './CardHeadingContainer'
import CardAuthorContainer from './CardAuthorContainer'
import CardPubDateContainer from './CardPubDateContainer'
import CardDescContainer from './CardDescContainer'
import CardLinkContainer from './CardLinkContainer'

import { useSelector } from 'react-redux'

const BaseCard = ({ heading, 
    timestamp, 
    tags, 
    author,
    cover, 
    cardSize, 
    headingSize, 
    isCase,
    gridSpan, 
    isColor, 
    desc, 
    caseSettings, 
    url, 
    urlX, 
    isPubdate,
    link, 
    scrollPosition }) => {

    const clCase = isCase ? 'card-home_case ' : ''
    const clColor = isColor ? 'card-home_gray' : ''
    const clCardSize = options.getSizeCl(cardSize);
    const tagsByUrl = useSelector((state) => state.tags.allTags.byUrl)
    const headingStyles = {}
    const tagStyles = {}
    const logoStyles = {}

    const hRef = urlX || url ? {
        props: {
            pathname: '/[tag]/[slug]',
            query: {
                tag: urlX.tag,
                slug: urlX.slug
            },
        },
        url: url
    } : null

    const cardStyles = {
        gridRowEnd: gridSpan,
    }


    if (caseSettings && isCase) {
        // Card Styles

        cardStyles.backgroundColor = caseSettings.backgroundColor
        cardStyles.backgroundImage = caseSettings.fullScreenImageUrl ? `url("${caseSettings.fullScreenImageUrl}")` : null;

        // Heading Styles
        headingStyles.color = caseSettings.headingColor;

        // Tag Styles
        tagStyles.color = caseSettings.tagsTextColor;
        tagStyles.backdropFilter = caseSettings.tagsBlur ? `blur(12px)` : '';
        tagStyles.WebkitBackdropFilter = caseSettings.tagsBlur ? `blur(12px)` : '';
        tagStyles.backgroundColor = caseSettings.tagsColorBackground
        tagStyles.boxShadow = `inset 0 0 0 1px ${caseSettings.tagsBorderColor}`;
        
        // Logo Styles
        logoStyles.backgroundImage = caseSettings.logoUrl ? `url("${caseSettings.logoUrl}")` : 'none';
    }
 
    if (cover && cover.length === 0) {
        cover = null;
    }

    return ( <div className={`base-card ${clCase} ${clCardSize.cl} ${clColor}`} style={cardStyles}>

                <div className="base-card__content-wrapper">
                    <CardCover  cover={cover} 
                                logoStyles={logoStyles}  
                                scrollPosition={scrollPosition} 
                                targets={clCardSize.targets}  
                                hRef={hRef} />

                    <CardTagsContainer      tags={tags}  
                                            tagsByUrl={tagsByUrl} 
                                            tagStyles={tagStyles}  />

                    <CardHeadingContainer   heading={heading} 
                                            headingSize={headingSize} 
                                            hRef={hRef}
                                            link={link}   />

                    <CardAuthorContainer    author={author}  />

                    <CardDescContainer      desc={desc}    />       

                    <CardPubDateContainer   isPubdate={isPubdate}  
                                            timestamp={timestamp} />     
                    
                    <CardLinkContainer link={link} />
                </div>

            </div>)
}

BaseCard.propTypes = {
    heading: PropTypes.string,
    timestamp: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    tags: PropTypes.array,
    isCase: PropTypes.bool,
    author: PropTypes.object,
    cover: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    cardSize: PropTypes.number,
    headingSize: PropTypes.number,
    gridSpan: PropTypes.string,
    isColor: PropTypes.bool,
    desc: PropTypes.string,
    url: PropTypes.string,
    caseSettings: PropTypes.any,
    urlX: PropTypes.object,
    isPubdate: PropTypes.bool,
    link: PropTypes.object,
    scrollPosition: PropTypes.any,
}

export default BaseCard;
