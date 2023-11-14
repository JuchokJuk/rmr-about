import React from 'react'
import PropTypes from 'prop-types';
import { cHTML } from '@helpers/functions';
import Interweave from 'interweave';
import Typographer from '@components/Typographer/Typographer';


const X2 = ({ caption, children }) => {

    return (
        <div className="x2">
            <Typographer>
                <Interweave content={cHTML(caption || children)} />
            </Typographer>
        </div>
    )
}

X2.propTypes = {
    caption: PropTypes.string,
    children: PropTypes.node
}

export default X2