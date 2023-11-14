import React from 'react';
import PropTypes from 'prop-types';
import {cHTML} from '@helpers/functions';
import Interweave from 'interweave';
import Typographer from '@components/Typographer/Typographer';

const D1 = ({ className = '', content, children }) => {

    return(
        <div className={`${className} description-1`}>
            <Typographer>

            <Interweave content={cHTML(content || children)} noWrap />
            </Typographer>
        </div>
    )
}

D1.propTypes = {
    className: PropTypes.string,
    content: PropTypes.string,
    children : PropTypes.node
}

export default D1;