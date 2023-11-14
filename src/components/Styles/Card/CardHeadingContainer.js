import React from 'react';
import PropType from 'prop-types'
import options from './options'
import Heading from '@components/Styles/Heading'
import Link from 'next/link'

const CardHeadingContainer = ({ headingSize, headingStyles, heading, hRef, link }) => {

    const HeadingTag = options.getHeadingTag(headingSize, Heading)
    const headingChoose =  hRef ? 
        (
            <Link href={hRef.props} as={`/${hRef.url}`} passHref>
                <a>
                    <HeadingTag hover content={heading} />
                </a>
            </Link>
        ) 
        :
        (
           link ? <a href={`http://${link.url}/`} alt={link.caption} rel="noreferrer" target="_blank">
                <HeadingTag hover content={heading} />
            </a> : null   
        )

    return <React.Fragment>
                <div className="card-base__field base-card__heading"
                     style={headingStyles}>
                    
                    {headingChoose}
                    
                </div>
            </React.Fragment>
}

CardHeadingContainer.propTypes = {
    headingSize: PropType.number,
    headingStyles: PropType.object,
    heading: PropType.string,
    hRef: PropType.shape({
        props : PropType.object,
        url: PropType.string
    }),
    link: PropType.shape({
        url : PropType.string,
        caption: PropType.string
    })
}

export default CardHeadingContainer;