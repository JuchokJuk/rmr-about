import React from 'react'
import PropTypes from 'prop-types'

import X from '@components/Styles/X';
import Description from "@components/Styles/Description";
import { logEvent } from '@helpers/metrics';
import { useSelector } from 'react-redux';

const Download = ({ title, size, caption, url, isSticky }) => {

    let article = useSelector(state => state.articles)
    let eventData = {}

    if (article.isFulfilled && !article.isRejected) {
        eventData = {
            Author: article.data.author ? article.data.author.fullname : '',
            Tags: article.data.tags,
            ArticleName: article.data.header ? article.data.header.title : '',
        }
    }

    const downloadHander = () => {
        logEvent('DownloadFile', eventData)
        window.open(url)
    }

    return (
        <div className={`quote-block ${isSticky ? 'quote_sticky no-top-padd' : ''}`}>
            <div className="download-quote">
                <X.X2 caption={title} />

                {size ? 
                <div className="file-size-title">
                    <Description.D2>
                        {size}kb
                    </Description.D2>
                </div> : null }

                <button
                    onClick={downloadHander}
                    className="quote-download-btn"> {caption || "Скачать" } </button>
            </div>
        </div>
    )
}

Download.propTypes = {
    title: PropTypes.string,
    size: PropTypes.number,
    caption: PropTypes.string,
    url: PropTypes.string,
    isSticky: PropTypes.bool
}

export default Download;