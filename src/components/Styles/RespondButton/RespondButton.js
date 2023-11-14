import React from 'react';
import { Link } from 'react-scroll';

const RespondButton = () => {

    return (
        <Link activeClass="active"
              to="contact-window"
              spy={true}
              smooth={'easeOutCubic'}
              delay={0}
              offset={-100}
              duration={500} >
            
            <div className={'respond-button'}>
                Откликнуться
            </div>
            
        </Link>
    )
}

export default RespondButton;