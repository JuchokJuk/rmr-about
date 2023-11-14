import React from 'react';
import TwoHeaderColumnBlock from '@components/StylePage/Blocks/HeaderTwoColumnBlock';
import StoryContainer from '@stories/StoryContainer'

export default {
    title: 'Колонки/Две колонки с заголовком',
    component: TwoHeaderColumnBlock,
};

const TTwoHeaderColumnBlock = (args) => (<StoryContainer><TwoHeaderColumnBlock {...args} /></StoryContainer>);

export const TwoHeaderColumn = TTwoHeaderColumnBlock.bind({});
TwoHeaderColumn.args = { 
    heading1: 'Заголовок 1',
    heading2: 'Заголовок 2',
    content1: 'Абзацы текста в 1 строке',
    content2: 'Абзацы текста в 2 строке'
};