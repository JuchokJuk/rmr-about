import React from 'react';
import PropTypes from 'prop-types';

import HeadingBlock from '@components/StylePage/Blocks/HeadingBlock';
import ParagraphBlock from '@components/StylePage/Blocks/ParagraphBlock';
import TwoImageBlock from '@components/StylePage/Blocks/TwoImageBlock';
import SliderBlock from '@components/StylePage/Blocks/SliderBlock';
import ListBlock from '@components/StylePage/Blocks/ListBlock';
import TwoColumnBlock from '@components/StylePage/Blocks/TwoColumnBlock';
import HeaderTwoColumnBlock from '@components/StylePage/Blocks/HeaderTwoColumnBlock'
import BigTextBlock from '@components/StylePage/Blocks/BigTextBlock';
import SmallTextBlock from '@components/StylePage/Blocks/SmallTextBlock';
import VideoBlock from '@components/StylePage/Blocks/VideoBlock';
import QuoteBlock from '@components/StylePage/Blocks/QuoteBlock';
import ShiftedImagesBlock from '@components/StylePage/Blocks/ShiftedImagesBlock';
import StatisticsBlock from '@components/StylePage/Blocks/StatisticsBlock';
import QuoteFileBlock from '@components/StylePage/Blocks/QuoteFileBlock';
import BulletsBlock from '@components/StylePage/Blocks/BulletsBlock';
import TextAndQuoteBlock from '@components/StylePage/Blocks/TextAndQuoteBlock';
import TimeTableBlock from '@components/StylePage/Blocks/TimeTableBlock';
import EmailSubBlock from '@components/StylePage/Blocks/EmailSubBlock';
import SubToEventBlock from '@components/StylePage/Blocks/SubToEventBlock';
import SomeImgsBlock from '@components/StylePage/Blocks/SomeImgsBlock';
import SimilarArticlesBlock from '@components/StylePage/Blocks/SimilarArticlesBlock';
import ImageWithCaptionBlock from "@components/StylePage/Blocks/ImageWithCaptionBlock";
import BlueDownloadBlock from '../Blocks/BlueDownloadBlock';
import ApplyJobBlock from '../Blocks/ApplyJobBlock';
import EmbedVideoBlock from '../Blocks/EmbedVideoBlock'

const MainBlock = ({ items, scrollPosition, articleInfo }) => {

    // Group timetable blocks v3; 
    const timetableItems = items.filter((item, index, arr) =>  {  
        
        arr[index].blockIndex = index; 
        return item.type === 'timetable';
        
    }).reduce((accum, item) => {

        const lastSubArray = accum[accum.length - 1];

        if(!lastSubArray || lastSubArray[lastSubArray.length - 1].blockIndex !== item.blockIndex - 1) {
            accum.push([]);
        } 

        accum[accum.length - 1].push(item);

        return accum;  
    }, []);


    const paragraphItems = items.filter((item, index, arr) =>  {  
        
        arr[index].blockIndex = index; 
        return item.type === 'paragraph';
        
    }).reduce((accum, item) => {

        const lastSubArray = accum[accum.length - 1];

        if(!lastSubArray || lastSubArray[lastSubArray.length - 1].blockIndex !== item.blockIndex - 1) {
            accum.push([]);
        } 

        accum[accum.length - 1].push(item);

        return accum;  
    }, []);
    
    const newItems = items.map((item, index) => {
        if (item.type === 'timetable') {

            timetableItems.map(timeItem => {
                if (index === timeItem[0].blockIndex) {
                    timeItem.type = "_timetable";
                    item = timeItem
                }
            });
        }

        if (item.type === 'paragraph') {

            paragraphItems.map(timeItem => {
                if (index === timeItem[0].blockIndex) {
                    timeItem.type = "_paragraph";
                    item = timeItem
                }
            });
        }
        
        return item
    })


    const blocksList = newItems.map((block, index) => {

        switch (block.type) {
            case 'header':
                return <HeadingBlock
                            key={index + "block"}
                            level={block.data.level}
                            content={block.data.text} />

            // Для обратной совместимости
            case '_paragraph':
                return  <ParagraphBlock
                            key={index + "block"}
                            items={block} />;

            // case 'paragraphPlugin':
            //     return <ParagraphBlock
            //                 key={index + "block"}
            //                 content={block.data.text} />

            case 'twoImages':
                return <TwoImageBlock
                            key={index + "block"}
                            caption={block.data.text}
                            items={[block.data.file1, block.data.file2]} />

            case 'slider':
                return <SliderBlock
                            slides={block.data.files}
                            caption={block.data.text}
                            key={index + "block"} />

            case 'textWithDownFile':
                return <BlueDownloadBlock 
                            key={index + "block"}
                            content={block.data.text}
                            title={block.data.textOverBtn}
                            file={block.data.file}
                            />

            case 'textTwoColumns':
                return <TwoColumnBlock
                            key={index + "block"}
                            content1={block.data.row1Column1}
                            content2={block.data.row1Column2} />

            case 'list':
                return <ListBlock
                            key={index + "block"}
                            style={block.data.style}
                            color={block.data.styleColor}
                            items={block.data.items} />

            case 'bigText':
                return <BigTextBlock
                            key={index + "block"}
                            content={block.data.text} />

            case 'smallText':
                return <SmallTextBlock
                    key={index + "block"}
                    content={block.data.text} />

            case 'textTwoColumnsWithHeaders':
                return <HeaderTwoColumnBlock
                            key={index + "block"}
                            heading1={block.data.row1Column1}
                            heading2={block.data.row1Column2}
                            content1={block.data.row2Column1}
                            content2={block.data.row2Column2} />

            case 'video':
                return <VideoBlock
                            key={index + "block"}
                            url={block.data.video.url}
                            text={block.data.text}
                            poster={block.data.file}
                            isGif={block.data.isGif} />

            case 'textWithRedLine':
                return <QuoteBlock
                            key={index + "block"}
                            title={block.data.textWithRedLine} />

            case 'shiftedPictures':
                return <ShiftedImagesBlock
                            key={index + "block"}
                            items={[block.data.file1, block.data.file2]}
                            captions={[block.data.text1, block.data.text2]} />

            case 'fileWithText':
                return <QuoteFileBlock
                            key={index + "block"}
                            title={block.data.fileHeading}
                            filesize={block.data.files.size}
                            url={block.data.files.url}
                            content={block.data.text} />

            case 'textThreeColumnsWithRedHeaders':
                return <BulletsBlock
                            key={index + "block"}
                            items={block.data} />

            case 'textThreeColumnsWithRedHeaderStrings':
                return <BulletsBlock
                            isString={true}
                            key={index + "block"}
                            items={block.data} />

            case 'statistics':
                return <StatisticsBlock
                            key={index + "block"}
                            items={block.data} />

            case 'quote':
                return <QuoteBlock
                            key={index + "block"}
                            content={block.data.text}
                            members={block.data.members}/>

            case 'textTwoColumnsWithRedLine':
                return <TextAndQuoteBlock
                            key={index + "block"}
                            content={block.data.leftColumn}
                            quoteTitle={block.data.rightColumn} />

            case '_timetable':
                return <TimeTableBlock
                            items={block}
                            key={index + "block"} />

            case 'subscription':
                return <EmailSubBlock 
                            key={index + "block"}
                            articleId={articleInfo.id} />

            case 'subToEvent':
                return <SubToEventBlock
                            key={index + "block"} 
                            text={block.data.text} />

            case 'someImgs':
                return <SomeImgsBlock
                            items={block.data.files}
                            key={index + "block"} />

            case 'similarArticles':
                return <SimilarArticlesBlock 
                            key={index + "block "}
                            items={block.data} />

            case 'imageWithCaption':
                return <ImageWithCaptionBlock 
                            key={index + "block"}
                            image={block.data.file}
                            caption={block.data.text} 
                            scrollPosition={scrollPosition}/>

            case 'applyForJob':
                return <ApplyJobBlock
                            key={index + "block"} />

            case 'fileOnEmail': 
                return <EmailSubBlock key={index + "block"} 
                            articleId={articleInfo.id}
                            content={block.data.text}
                            file />
            
            case 'embed':
                return <EmbedVideoBlock 
                            key={index + "block"}
                            video={block.data} />

            default:
                return ''
        }
    })

    return <React.Fragment> { blocksList } </React.Fragment>
}

MainBlock.propTypes = {
    items: PropTypes.any.isRequired,
    scrollPosition: PropTypes.any,
    articleInfo: PropTypes.object
}

export default MainBlock