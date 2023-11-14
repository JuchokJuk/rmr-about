import React from 'react';
import PropTypes from 'prop-types';
import Picture from '@components/Styles/Picture';
import PubDate from '@components/Styles/PubDate'
import ShareButton from '@components/Styles/ShareButton';
import Paragraph from '@components/Styles/Paragraph';
import VideoBlock from "@components/StylePage/Blocks/VideoBlock";
import RespondButton from "@components/Styles/RespondButton";
import Tags from '@components/Styles/Tags';
import Heading from '@components/Styles/Heading';

const VacancyPageHeader = ({ title,  intro, image, tags, visibleDateCreated, scrollPosition, createdAt }) => {

    return (
        <header className="vacancy-header">
            <div className={`grid-container`}>
                {   title ?
                    <div className="grid-row vacancy-header-padd">
                        <div className="grid-col-5">
                            <Heading.H1>
                                {title}
                            </Heading.H1>
                        </div>
                    </div> : null }

                {  tags.length ?
                    <div className="grid-row">
                        <div className="grid-col-6">
                            <Tags tags={tags} noOutline size={'career'} />
                        </div>
                    </div> : null
                }

                {   visibleDateCreated ?
                    <div className="grid-row article-date_padd">
                        <div className="grid-col-6">
                            <PubDate.Article timestamp={createdAt} />
                        </div>
                    </div> : null
                }

                <div className="grid-row author-padd">
                    <div className="grid-col-6">
                        <Paragraph.P2>
                            { intro }
                        </Paragraph.P2>
                    </div>
                </div>

                <div className={'grid-row respond-button-in-header'}>
                    <div className={'grid-col-6'}>
                        <div className={'career-social-header'}>
                            <RespondButton />
                            
                            <ShareButton/>
                        </div>
                    </div>
                </div>
                

                {   image && image.url && image.width ?
                    <div className="grid-row career_img-header_padd">
                        <div className="grid-col-6">
                            <Picture
                                image={image}
                                scrollPosition={scrollPosition}/>
                        </div>
                    </div> : null 
                }
                {
                    image && image.url && !image.width ?
                        <VideoBlock
                            key={image.url + "block"}
                            url={image.url}
                            isGif /> : null
                }

            </div>
        </header>
    )
}

VacancyPageHeader.propTypes = {
    title: PropTypes.string,
    intro: PropTypes.string,
    image: PropTypes.any,
    tags: PropTypes.any,
    visibleDateCreated: PropTypes.bool,
    scrollPosition: PropTypes.any,
    createdAt: PropTypes.string,
}

export default VacancyPageHeader;