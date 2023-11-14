import React from 'react';

import PropTypes from 'prop-types';

import Icon from '../Icon'

//import './PersonalCard.less';

const PersonalCard = ({name, post, alt, src}) => {
    return (
        <div className="personalCard">
            <Icon src={src} alt={alt}/>
            <div className="personalInfo">
                <div>{name}</div>
                <div className="personalInfo__post">{post}</div>
            </div>
        </div>
    );
};

PersonalCard.propTypes = {
    name: PropTypes.string.isRequired,
    post: PropTypes.string.isRequired,
    src: PropTypes.string,
    alt: PropTypes.string,
};

PersonalCard.defaultProps = {
    name: '',
    post: '',
}

export default PersonalCard;