import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Logo = ({ link }) => {

    return (<Link href={link} >
        <a href={link}>
            <div className="header-logo no_select">
                <span className="header-logo__text logo__text-red">red_mad_</span>
                <span className="header-logo__text">robot</span>

                <span className="header-logo__text logo__text-red logo-text_mobile">r_m_</span>
                <span className="header-logo__text logo-text_mobile">r</span>
            </div>
        </a>
    </Link>)
}

Logo.defaultProps = {
    link: '/'
}

Logo.propTypes = {
    link: PropTypes.string
}


export default Logo;