import React from 'react';
import TwoColumnBlock from '@components/StylePage/Blocks/TwoColumnBlock';
import StoryContainer from '@stories/StoryContainer'

export default {
    title: 'Колонки/Две колонки',
    component: TwoColumnBlock,
};

const TTwoColumnBlock = (args) => (<StoryContainer><TwoColumnBlock {...args} /></StoryContainer>);

export const TwoColumn = TTwoColumnBlock.bind({});
TwoColumn.args = { 
    content1: 'Первая колонка',
    content2: 'Вторая колонка'
};