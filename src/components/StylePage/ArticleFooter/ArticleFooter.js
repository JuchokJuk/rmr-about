import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Tags from '@components/Styles/Tags';
import ShareButton from '@components/Styles/ShareButton';

const ArticleFooter = ({ tags, tagsByUrl }) => {

    return <Fragment>
            <div className="grid-row tags_padd">
                <div className="grid-col-6">
                    <Tags tags={tags} size={'large'} tagsByUrl={tagsByUrl}/>
                </div>
            </div>

            <div className="grid-row p1_padd">
                <div className="grid-col-2">
                    <div className="social-horizontal">
                        <ShareButton/>
                    </div>
                </div>
            </div>

        </Fragment>
}

ArticleFooter.propTypes = {
    tags: PropTypes.array,
    tagsByUrl: PropTypes.object,
}

export default ArticleFooter;