import React from 'react';
import PropTypes from 'prop-types';
import {cHTML} from '@helpers/functions';
import Interweave from 'interweave';
import './D2new.less'
import Typographer from '@components/Typographer/Typographer';

const D2new = ({ className = '', isString, content, children }) => {

    return(
        <div className={`${className} D2new` }>
            <Typographer>

            <Interweave content={cHTML(content || children)} noWrap />
            </Typographer>
        </div>
    )
}

D2new.propTypes = {
    className: PropTypes.string,
    isString: PropTypes.bool,
    content: PropTypes.string,
    children: PropTypes.node
}

export default D2new;