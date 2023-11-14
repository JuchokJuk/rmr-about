import React from 'react'

import PropTypes from 'prop-types';
import Paragraph from '@components/Styles/Paragraph';

const Register = ({ text }) => {
    
    return (
        <div className="register">
            <div className="register__caption">
                <Paragraph.P2>
                    { text }
                </Paragraph.P2>
            </div>

            <div className="register__btn-wrapper">
                <button className="register__btn">
                    Зарегистрироваться
                </button>
            </div>
        </div>
    )
}

Register.propTypes = {
    text: PropTypes.string
}

export default Register;