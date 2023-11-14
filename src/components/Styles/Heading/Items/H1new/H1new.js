import React from 'react';

import PropTypes from 'prop-types';
import Interweave from 'interweave';
import { useParsingBB } from '@helpers/useParsingBB';
import { cHTML } from '@helpers/functions';
import './H1new.less'
import Typographer from '@components/Typographer/Typographer';

const H1new = ({ content, hover, children, className = '' }) => {
    let text = useParsingBB(content || children)

    return (
        <h1 lang="ru" className={`heading H1new ${className} ${hover ? 'heading_hover' : ''}`}>
            <Typographer>

            <Interweave content={cHTML(text)} noWrap />
            </Typographer>
        </h1>
    )
}

H1new.propTypes = {
    content: PropTypes.string,
    children: PropTypes.node,
    hover: PropTypes.bool,
    className: PropTypes.string,
}

export default H1new