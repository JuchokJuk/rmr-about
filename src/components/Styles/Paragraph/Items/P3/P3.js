import React from 'react'
import PropTypes from 'prop-types'
import Interweave from 'interweave';
import { cHTML, transformA } from '@helpers/functions';
import Typographer from '@components/Typographer/Typographer';

const P3 = ({ content, children, className = '' }) => {
    return (
        <p className={`paragraph-3 ${className}`}>
            <Typographer>

            <Interweave content={cHTML(content || children)} noWrap transform={transformA} />
            </Typographer>
        </p>
    )
}

P3.propTypes = {
    content: PropTypes.any,
    children: PropTypes.node,
    className: PropTypes.string
}

export default P3