import React from 'react';
import EmailSubBlock from '@components/StylePage/Blocks/EmailSubBlock'
import PropTypes from 'prop-types'

const EmailSubHOC = ( props ) => <EmailSubBlock {...props} />

EmailSubHOC.propTypes = {
    content : PropTypes.string,
    articleId: PropTypes.string,
    file: PropTypes.bool
}

export default EmailSubHOC;