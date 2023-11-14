import React from 'react'

import PropTypes from 'prop-types';
import Heading from '@components/Styles/Heading';
import Paragraph from '@components/Styles/Paragraph';
import BaseImage from '@components/BaseImage';

const AboutTeam = ({ image, header, desc, scrollPosition}) => {

    return (<React.Fragment>
        <div className="grid-container">
            <div className="about-team grid-col-6">
                <div className="about-team__content">

                    <div className="about-team__content__image">
                        <BaseImage 
                            formats={image}
                            type="photo"
                            targets={[1248, 888, 672, 680, 328]}
                            scrollPosition={scrollPosition} />

                    </div>

                    <div className="about-team__content__text">
                        <Heading.H4 className="about-team__header">
                            {header}
                        </Heading.H4>
                        <Paragraph.P1>
                            {desc}
                        </Paragraph.P1>
                    </div>

                </div>
            </div>
        </div>
        
    </React.Fragment>)
}

AboutTeam.propTypes = {
    image: PropTypes.object,
    header: PropTypes.string,
    desc: PropTypes.string,
    scrollPosition: PropTypes.any
}

export default AboutTeam