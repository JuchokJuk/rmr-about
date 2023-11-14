import React from 'react'
import PropTypes from 'prop-types';
import { cHTML } from '@helpers/functions';
import Interweave from 'interweave';
import Typographer from '@components/Typographer/Typographer';


const X1 = ( content, children ) => {
    return (
        <div className="x1">
            <Typographer>
                <Interweave content={cHTML(content || children)} />
            </Typographer>
        </div>
    )
}

X1.propTypes = {
    content : PropTypes.string,
    children: PropTypes.node
}

export default X1;