import React from 'react'
import PropTypes from 'prop-types'

import Author from '@components/Styles/Author'
import Download from './Download'
import Interweave from 'interweave'
import { cHTML } from '@helpers/functions';
import Paragraph from '@components/Styles/Paragraph'
import Typographer from '@components/Typographer/Typographer'

const Quote = ({ title, content, name, image, position, children }) => {

    return (
        <div className={`quote`}>
            {   title ? (
                <div className="quote__field quote__title">
                    <Typographer>
                        <Interweave content={cHTML(title)} />
                    </Typographer>
                </div>
            ) : '' }

            {   content || children ? ( 
                <div className="quote__field quote__content">
                    <Paragraph.P1>
                        { content || children } 
                    </Paragraph.P1>
                </div>) : ''
            }

            {   name && position ? (
                <div className="quote__field quote__author">
                    <Author name={name}
                            image={image}
                            position={position}  />
                </div>
            ) : ''}
        </div>
    )
}

Quote.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    name: PropTypes.string,
    children: PropTypes.node,
    position: PropTypes.string,
    image: PropTypes.object,
}

Quote.Download = Download;

export default Quote