import React from 'react'
import { cHTML } from '@helpers/functions';
import Interweave from 'interweave';
import PropTypes from 'prop-types'
import Typographer from '@components/Typographer/Typographer';

const Cap = ({ children }) => {
    return (
        <div className="media-caption">
            <Typographer>

            <Interweave content={cHTML(children)} noWrap />
            </Typographer>
        </div>
    )
}

Cap.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}

export default Cap;