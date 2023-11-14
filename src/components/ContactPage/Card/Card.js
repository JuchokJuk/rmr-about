import React from 'react';
import PropTypes from 'prop-types';

import { logEvent } from '@helpers/metrics'
import Heading from '@components/Styles/Heading';
import Description from '@components/Styles/Description';
import Paragraph from '@components/Styles/Paragraph';


const Card = ({department, small}) => {
    const trackEmail = (email, e) => {
        logEvent('EmailClickContacts', {
            Email: email
        })
        e.stopPropagation()
        window.open(`mailto:${department.email}`)
    }

    const emailBlock = (email) => {
        if (small) {
            return <Description.D1>
                { email }
            </Description.D1>
        } else {
            return <Paragraph.P1>
                {email}
            </Paragraph.P1>
        }
    }

    return (
        department &&
        <div className={`card ${small ? 'card--small' : ''}`}>
            <div className="card__header">
                {
                    small ? <Heading.H3>
                        {department.header}
                    </Heading.H3> : <Heading.H2>
                        {department.header}
                    </Heading.H2>
                }
                
            </div>
            {
                department.tags.length ? <div className="card__tags tags">
                    {
                        department.tags.map((tag, i) => (
                            <Description.D1 key={i} className="card__tag">
                                {tag}
                            </Description.D1>
                        ))
                    }
                </div> : null
            }
            <div className="card__content">
                <Description.D1>
                    {department.text}
                </Description.D1>
            </div>

            {
                department.email && 
                <div className="card__email" 
                    onClick={(e) => trackEmail(department.email, e)}>
                        { emailBlock(department.email) }
                </div>
            }
        </div>
    );
};

Card.propTypes = {
    department: PropTypes.shape({
        header: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        customStyle: PropTypes.string,
        email: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
    }),
    small: PropTypes.bool,
};

Card.defaultProps = {
    department: {
        header: '',
        text: '',
        tags: [],
    }
};

export default Card;