import React from 'react'
import PropTypes from 'prop-types'
import Interweave from 'interweave';
import { cHTML, transformA } from '@helpers/functions';
import Typographer from '@components/Typographer/Typographer';

const P6 = ({ content, children }) => {

    return (
        <p className="paragraph-6">
            <Typographer>

            <Interweave content={cHTML(content || children)}
                        transform={transformA}
                        noWrap />
                        </Typographer>
        </p>
    )
}

P6.propTypes = {
    content: PropTypes.string,
    children: PropTypes.node
}

export default P6