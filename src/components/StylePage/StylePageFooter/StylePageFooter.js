import React from 'react';
import PropTypes from 'prop-types'

import Heading from '@components/Styles/Heading';
import Tags from '@components/Styles/Tags';
import SimilarArticles from '@components/Styles/LayoutGrid/SimilarArticles';
import Divider from '@components/Styles/Divider';

const StylePageFooter = ({ similarTags, similarArticles, scrollPosition, tagsByUrl }) => {
    return (
        <div className={`article-footer ${ similarArticles.length || similarTags.length ? 'article-footer_nomargin' : ''} `}>
            { similarArticles.length || similarTags.length ?
                <Divider /> : null }

            { similarArticles.length !== 0 ?
                <div className="grid-container">
                    <div className="grid-row h3-padd_footer">
                        <div className="grid-col-6">
                            <Heading.H3>Похожие статьи</Heading.H3>
                        </div>
                    </div>

                    <div className="grid-row">
                        <SimilarArticles 
                            cards={similarArticles} 
                            scrollPosition={scrollPosition} />
                    </div>
                </div> : ''}

            { similarTags.length !== 0 ?
                <div className="grid-container  ">
                    <div className="grid-row h3-padd_footer">
                        <div className="grid-col-6">
                            <Heading.H3>Другие теги по теме</Heading.H3>
                        </div>
                    </div>

                    <div className="grid-row">
                        <div className="grid-col-6">
                            <Tags tags={similarTags} size={'large'} tagsByUrl={tagsByUrl}/>
                        </div>
                    </div>
                </div> : ''
            }
        </div>
    )
}

StylePageFooter.propTypes = {
    similarTags: PropTypes.any,
    similarArticles: PropTypes.any,
    scrollPosition: PropTypes.any,
    tagsByUrl: PropTypes.object,
}

export default StylePageFooter;