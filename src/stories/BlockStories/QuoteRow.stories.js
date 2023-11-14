import React from 'react';
import TextAndQuoteBlock from '@components/StylePage/Blocks/TextAndQuoteBlock';
import StoryContainer from '@stories/StoryContainer'

export default {
    title: 'Колонки/Цитата и текст',
    component: TextAndQuoteBlock,
};

const TTextAndQuoteBlock= (args) => (<StoryContainer row><TextAndQuoteBlock {...args} /></StoryContainer>);

export const TextAndQuote = TTextAndQuoteBlock.bind({});
TextAndQuote.args = { 
    content: "Контент",
    quoteTitle: "Заголовок",
}; 