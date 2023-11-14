import React from 'react';

import PropTypes from 'prop-types';
import { logEvent } from '@helpers/metrics'
import Paragraph from '@components/Styles/Paragraph';


const ContactBlock = ({contact, description, email}) => {

    const contactClick = (email, contact) => {
        if (email) {
            logEvent('EmailClickContacts', {
                Email: contact
            })
        } else {
            logEvent('PhoneClickContacts')
        }
    }
    
    return (
        <div className="contactBlock">
            <a href={`${email ? 'mailto:' : 'tel:'}${contact}`} 
                onClick={() => contactClick(email, contact)} >
                <div className={`contactBlock__contact ${email ? 'footer_link' : ''}`}>
                    <Paragraph.P2>
                        {contact}
                    </Paragraph.P2>
                    
                </div>
            </a>
            <div className="contactBlock__description">
                <Paragraph.P3>
                    {description}
                </Paragraph.P3>
            </div>
        </div>
    );
};

ContactBlock.propTypes = {
    contact: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    email: PropTypes.bool,
};

ContactBlock.defaultProps = {
    contact: '',
    description: '',
    email: false
};

export default ContactBlock;