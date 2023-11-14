import React from 'react'
import PropTypes from 'prop-types'
import Interweave from 'interweave';
import { cHTML, transformA } from '@helpers/functions';
import Typographer from '@components/Typographer/Typographer';

const P5 = ({ content, children }) => {

    return (
        <p className="paragraph-5">
            <Typographer>

            <Interweave content={cHTML(content || children)}
                        transform={transformA}
                        noWrap />
                        </Typographer>
        </p>
    )
}

P5.propTypes = {
    content: PropTypes.string,
    children: PropTypes.node
}

export default P5