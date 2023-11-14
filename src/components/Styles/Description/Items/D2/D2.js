import React from 'react';
import PropTypes from 'prop-types';
import {cHTML} from '@helpers/functions';
import Interweave from 'interweave';
import Typographer from '@components/Typographer/Typographer';

const D2 = ({ className = '', isString, content, children }) => {

    return(
        <div className={`${className}` + (isString ? ' description-2_string' : ' description-2')}>
            <Typographer>

            <Interweave content={cHTML(content || children)} noWrap />
            </Typographer>
        </div>
    )
}

D2.propTypes = {
    className: PropTypes.string,
    isString: PropTypes.bool,
    content: PropTypes.string,
    children: PropTypes.node
}

export default D2;