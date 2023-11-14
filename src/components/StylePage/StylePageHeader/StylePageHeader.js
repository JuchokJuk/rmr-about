import React from 'react';
import PropTypes from 'prop-types';

import Heading from '@components/Styles/Heading';
import Tags from '@components/Styles/Tags';
import Picture from '@components/Styles/Picture';
import PubDate from '@components/Styles/PubDate'
import ShareButton from '@components/Styles/ShareButton';
import Author from '@components/Styles/Author/Author';
import Paragraph from '@components/Styles/Paragraph';
import VideoBlock from "@components/StylePage/Blocks/VideoBlock";

const StylePageHeader = ({ title, author, intro, image, tags, visibleDateCreated, scrollPosition, tagsByUrl, createdAt }) => {

    return (            
        <header className="article-header">
            <div className="grid-container">
                {   title ?
                    <div className="grid-row article-header-padd">
                        <div className="grid-col-6">
                            <Heading.H1>
                                { title }
                            </Heading.H1>
                        </div>
                    </div> : null }
                    
                {  tags.length ?
                    <div className="grid-row">
                        <div className="grid-col-6">
                            <Tags tags={tags} size={'large'} tagsByUrl={tagsByUrl}/>
                        </div>
                    </div> : null
                }

                {   image.url && image.width ?
                    <div className="grid-row img-header_padd">
                        <div className="grid-col-6">
                            <Picture 
                                image={image} 
                                scrollPosition={scrollPosition}/>
                        </div>
                    </div> : null }
                {
                    image.url && !image.width ?
                        <VideoBlock
                            key={image.url + "block"}
                            url={image.url}
                            isGif /> : null
                }

                {   visibleDateCreated ? 
                    <div className="grid-row article-date_padd">
                        <div className="grid-col-6">
                            <div className="">
                                <PubDate.Article timestamp={createdAt} />
                            </div>
                        </div>
                    </div> : null
                }

                    <div className="grid-row p2-padd">
                        <div className="grid-col-6">
                            <Paragraph.P2>
                                { intro }
                            </Paragraph.P2>
                        </div>
                    </div>

                { author && author.fullname ?
                <div className="grid-row author-padd">
                    <div className="grid-col-6">
                        <Author image={author.image}
                                name={author.fullname}
                                position={author.position} />
                    </div>
                </div> : null }

                <div className="grid-row ">
                    <div className="grid-col-6">
                        <div className="social-icons-padd">
                            <ShareButton/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

StylePageHeader.propTypes = {
    title: PropTypes.string,
    author: PropTypes.any,
    intro: PropTypes.string,
    image: PropTypes.any,
    tags: PropTypes.any,
    visibleDateCreated: PropTypes.bool,
    scrollPosition: PropTypes.any,
    tagsByUrl: PropTypes.object,
    createdAt: PropTypes.string,
}

export default StylePageHeader;