import React from 'react'
import PropTypes from 'prop-types';
import BaseImage from '@components/BaseImage';
import Description from '@components/Styles/Description';

const SlideContent = ({ logo, override, original }) => {

    return (
        <div className="case-slide__content">

            { logo && logo.url ?
                <div className="case-slide__logo">
                    <div className="case-slide__logo-width-locker">
                        <BaseImage
                            targets={[1248, 888, 680, 450, 450]}
                            type="photo"
                            formats={logo}
                            className="case-slide__logo-image" />
                    </div>
                </div> : null }

            <div className="case-slide__desc">
                <Description.D1>
                    {original.intro || override.intro}
                </Description.D1>
            </div>
        </div>
    )

}

SlideContent.propTypes = {
    logo: PropTypes.object,
    content: PropTypes.object,
    override: PropTypes.object,
    original: PropTypes.object
}

export default SlideContent;