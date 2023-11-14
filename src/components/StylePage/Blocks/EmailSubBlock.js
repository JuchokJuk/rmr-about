import React from 'react';
import EmailSub from '@components/EmailSub/EmailSub'
import PropTypes from 'prop-types'

const EmailSubBlock = ({ content, articleId, file }) => {

    return (
        <div className="grid-row forms_padd">
            <div className="grid-col-6">
                <EmailSub content={content} articleId={articleId} file={file} />
            </div>
        </div>)
}

EmailSubBlock.propTypes = {
    content : PropTypes.string,
    articleId: PropTypes.string,
    file: PropTypes.bool
}

export default EmailSubBlock;