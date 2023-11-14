import React from 'react';
import PropTypes from 'prop-types';

import Card from '@components/Styles/Card'
import { } from '@helpers/Adapters/ArticleAdapter'

const convertDateToString = (date) => {

    let stringDate = new Date(date);
    let day = stringDate.getUTCDate();
    let month = (stringDate.getUTCMonth() + 1)
    month = month >= 10 ? month : "0" + month; // добавим 0 перед числом.
    let year = stringDate.getFullYear();

    return `${day}_${month}_${year}`;
}

const SimilarArticlesBlock = ({ items }) => {

    const cardList = items.art.map((item, i) => {

        let author = null;
        let content = item.content;

        if (content.employees && content.employees.length !== 0) {
            author = {
                name: `${content.employees[0].name} ${content.employees[0].lastName}`,
                position: `${content.employees[0].position}`,
                image: content.employees[0].photo
            }
        }

        switch (item.type) {
            case 'art':
                return (
                    <div className="grid-col-2 article-card_column" key={`${content._id}_${i}`}>
                        <Card
                            timestamp={convertDateToString(content.createdAt)}
                            cover={content.imgOnPreview}
                            author={author}
                            heading={content.title}
                            tags={content.tags}
                            cardSize={1}
                            headingSize={2}
                            url={content.url}
                            urlX={content.urlX} />
                    </div>
                )
            case 'url':
                return (
                    <div className="grid-col-2 article-card_column" key={`${content._id}_${i}`}>
                        <Card
                            heading={content.title}
                            cardSize={1}
                            link={{ url: content.lineUrl, caption: "" }}
                            headingSize={2} />
                    </div>
                )
        }
    })


    return (
        <div className="grid-row p1_padd">
            {cardList}
        </div>)
}

SimilarArticlesBlock.propTypes = {
    items: PropTypes.any,
}

export default SimilarArticlesBlock;