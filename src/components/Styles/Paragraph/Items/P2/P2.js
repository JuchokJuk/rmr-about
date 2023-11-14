import React from 'react'
import PropTypes from 'prop-types'
import Interweave from 'interweave';
import { cHTML, transformA } from '@helpers/functions';
import Typographer from '@components/Typographer/Typographer';

const P2 = ({ content, children }) => {

    return (
        <p className="paragraph-2">
            <Typographer>

            <Interweave content={cHTML(content || children)}
                        transform={transformA}
                        noWrap />
                        </Typographer>
        </p>
    )
}

P2.propTypes = {
    content: PropTypes.string,
    children: PropTypes.node
}

export default P2