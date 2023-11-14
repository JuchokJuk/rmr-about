import React from 'react';

import PropTypes from 'prop-types';
import Interweave from 'interweave';
import { useParsingBB } from '@helpers/useParsingBB';
import {cHTML} from '@helpers/functions';
import Typographer from '@components/Typographer/Typographer';

const H2 = ({ content, hover, children, className = '' }) => {

    let text = useParsingBB(content || children)
    
    return(
        <h2 className={`heading h2_c ${className} ${hover ? 'heading_hover' : ''}`}>
            <Typographer>

            <Interweave content={ cHTML(text) } noWrap />
            </Typographer>
        </h2>
    )
}

H2.propTypes = {
    content: PropTypes.string,
    children: PropTypes.node,
    hover: PropTypes.bool,
    className: PropTypes.string,
}

export default H2