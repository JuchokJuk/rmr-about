import React from 'react'
import PropTypes from 'prop-types';
import { cHTML } from '@helpers/functions';
import BaseImage from '@components/BaseImage';
import DefaultImage from '@components/Styles/Author/Default'
import Interweave from 'interweave'

const Article = ({ name, position, image }) => {

    return (
        <React.Fragment>
            <div className="author-article">
                <div className="author-article__image">

                    { image && image.url 
                            ? <BaseImage formats={image}
                                type="avatar" 
                                targets={[128, 128, 128, 128, 128]} /> 
                            :  <DefaultImage /> }
                </div>

                <div className="author-article__meta">
                    <div className="author-article__name">{cHTML(name)}</div>
                    {
                        position && <div className="author-article__position"> <Interweave content={ cHTML(position) } noWrap /> </div>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

Article.propTypes = {
    name: PropTypes.string,
    position: PropTypes.string,
    image: PropTypes.object,
}

export default Article