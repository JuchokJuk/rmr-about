import React, { useState } from 'react'

import PropTypes from 'prop-types';
import Description from "@components/Styles/Description"
import BaseImage from '@components/BaseImage'
import PopupZoom from '@components/PopupZoom';

const Picture = ({ image, desc, scrollPosition }) => {

    const description = desc ? (
        <div className='article-image__description'>
            <Description.Cap>
                { desc }
            </Description.Cap>
        </div>
    ) : '';

    const [isClicked, setClicked] = useState(false);


    return (<React.Fragment>
        <div className="article-image__cover" onClick={() => setClicked(true)}>
            <BaseImage  
                lazyLoad={false}
                formats={image}
                alt={desc}
                type="photo"
                targets={[1248, 888, 672, 680, 328]} 
                scrollPosition={scrollPosition} 
            />
        </div>

        {description}

        <PopupZoom
                isClicked={isClicked}
                images={[image]}
                desc={desc}
                currentIndex={0}
                closeModal={() => setClicked(false)}
                setIndex={() => {}}
                next={() => {}}
                prev={() => {}} />


    </React.Fragment>)
}

Picture.propTypes = {
    image: PropTypes.object,
    desc: PropTypes.string,
    scrollPosition: PropTypes.any
}

export default Picture