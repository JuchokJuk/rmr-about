import React from 'react'
import PropTypes from 'prop-types'

import PubDate from '@components/Styles/PubDate'
import Heading from '@components/Styles/Heading/'
import Author from '@components/Styles/Author'
import CardTags from '../CardTagsContainer'
import options from '../options'
import Description from '@components/Styles/Description';
import BaseImage from '@components/BaseImage'
import Link from 'next/link'

const Home = ({ heading, timestamp, tags, author,
    image, cardSize, headingSize, isCase,
    gridSpan, color, desc, caseSettings, url, urlX, isPubdate, scrollPosition }) => {

    const clCardSize = options.getSizeCl(cardSize);
    const HeadingTag = options.getHeadingTag(headingSize, Heading)

    const clCase = isCase ? 'card-home_case ' : ''
    const clColor = color ? 'card-home_gray' : ''

    const cardStyles = {
        gridRowEnd: gridSpan,
    }
    const headingStyles = {}
    const tagStyles = {}
    const logoStyles = {}

    if (caseSettings && isCase) {
        cardStyles.backgroundColor = caseSettings.backgroundColor
        cardStyles.backgroundImage = caseSettings.fullScreenImageUrl ? `url("${caseSettings.fullScreenImageUrl}")` : null;

        headingStyles.color = caseSettings.headingColor;

        tagStyles.color = caseSettings.tagsTextColor;
        tagStyles.backdropFilter = caseSettings.tagsBlur ? `blur(12px)` : '';
        tagStyles.WebkitBackdropFilter = caseSettings.tagsBlur ? `blur(12px)` : '';
        tagStyles.backgroundColor = caseSettings.tagsColorBackground
        tagStyles.boxShadow = `inset 0 0 0 1px ${caseSettings.tagsBorderColor}`;

        logoStyles.backgroundImage = caseSettings.logoUrl ? `url("${caseSettings.logoUrl}")` : 'none';
    }

    if (image && image.length === 0) {
        image = null;
    }

    return (
        <div className={`card-home ${clCase} ${clCardSize.cl} ${clColor}`} style={cardStyles}>
            <div className="card__content-wrapper">
                {image ? (
                    <div className={`card-home__field ${logoStyles.backgroundImage ? "card-home__logo" : "card-home__cover"}`}
                        style={logoStyles}>
                        {
                            image.url !== undefined ?
                                (
                                    <Link href={{
                                        pathname: '/[tag]/[slug]',
                                        query: {
                                            tag: urlX.tag,
                                            slug: urlX.slug
                                        },
                                    }}
                                        as={`/${url}`} passHref >
                                        <a>
                                            <BaseImage
                                                formats={image}
                                                alt={heading}
                                                type="card" 
                                                scrollPosition={scrollPosition}
                                                targets={clCardSize.targets} />
                                        </a>
                                    </Link>
                                )
                                : null
                        }
                    </div>
                ) : null}

                {logoStyles.backgroundImage ? (
                    <div className={`card-home__field ${logoStyles.backgroundImage ? "card-home__logo" : "card-home__cover"}`}
                        style={logoStyles}>
                    </div>
                ) : null}

                {tags.length !== 0 ? (
                    <div className="card-home__field card-home__tags-wrapper">
                        <CardTags tags={tags} tagStyles={tagStyles} />
                    </div>) : ''}

                <div className="card-home__field card-home__heading"
                    style={headingStyles}>
                    <Link href={{
                        pathname: '/[tag]/[slug]',
                        query: {
                            tag: urlX.tag,
                            slug: urlX.slug
                        },
                    }} as={`/${url}`} passHref>
                        <a>
                            <HeadingTag hover content={heading} />
                        </a>
                    </Link>
                </div>

                {author && author.isAuthor && author.image && author.image.formats !== undefined ? (
                    <div className="card-home__field card-home__author">
                        <Author.Card
                            name={author.name}
                            position={author.position}
                            image={author.image} />
                    </div>) : ' '}

                {desc ? (
                    <div className="card-home__field card-home__description">
                        <Description.D1>
                            {desc}
                        </Description.D1>
                    </div>) : ''}

                {isPubdate && timestamp ? (
                    <div className="card-home__field card-home__pubdate">
                        <PubDate.Card timestamp={timestamp} />
                    </div>) : ''}
            </div>
        </div>
    )
}

Home.propTypes = {
    heading: PropTypes.string.isRequired,
    timestamp: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    tags: PropTypes.array.isRequired,
    isCase: PropTypes.bool,
    author: PropTypes.object,
    image: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    cardSize: PropTypes.number.isRequired,
    headingSize: PropTypes.number.isRequired,
    gridSpan: PropTypes.string.isRequired,
    color: PropTypes.bool,
    desc: PropTypes.string,
    url: PropTypes.string,
    caseSettings: PropTypes.any,
    urlX: PropTypes.object,
    isPubdate: PropTypes.any,
    scrollPosition: PropTypes.any
}

export default Home;