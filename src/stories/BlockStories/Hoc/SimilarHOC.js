import React from 'react';

import SimilarArticles from '@components/StylePage/Blocks/SimilarArticlesBlock';
import { setSimilarMockup } from '../../../assets/SimilarData';
import PropTypes from 'prop-types'

const SimilarArticlesHOC = ({ 
    card1Title,
    card1DateTime,
    card2Title,
    card2DateTime,
    card3Title,
    card3Link
}) => {

    let args = setSimilarMockup({
                    card1Title,
                    card1DateTime,
                    card2Title,
                    card2DateTime,
                    card3Title,
                    card3Link
                })

    return <SimilarArticles items={args} />
}

SimilarArticlesHOC.propTypes = {
    card1Title : PropTypes.string,
    card1DateTime : PropTypes.string,
    card2Title : PropTypes.string,
    card2DateTime : PropTypes.string,
    card3Title : PropTypes.string,
    card3Link : PropTypes.string
}

export default SimilarArticlesHOC;