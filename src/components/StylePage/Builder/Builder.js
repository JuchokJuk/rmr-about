import React from 'react';
import PropTypes from 'prop-types';

import MainBlock from '../MainBlock';
import ArticleFooter from '../ArticleFooter';
// ToDo: обработка для вакансии

const Builder = ({ author = {}, blocks = {}, tags = [], type = 'article', scrollPosition, id, tagsByUrl }) => {
    return (
        <main className="article-main">
            <div className={`grid-container`}>
                {
                    blocks.items ? (<MainBlock items={blocks.items} scrollPosition={scrollPosition} articleInfo={{ id: id }} />) : ''
                }
                {
                    type === 'vacancy' ? '' : (<ArticleFooter author={author} tags={tags} tagsByUrl={tagsByUrl} />)
                }
            </div>
        </main>
    )
}

Builder.propTypes = {
    author: PropTypes.object,
    blocks: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.any
    ]),
    tags: PropTypes.array,
    type: PropTypes.oneOf([
        'article',
        'vacancy',
    ]),
    scrollPosition: PropTypes.any,
    id: PropTypes.string,
    tagsByUrl: PropTypes.object,
}

Builder.defaultProps = {
    tags: []
}

export default Builder;