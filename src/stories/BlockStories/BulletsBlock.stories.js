import React from 'react';
import BulletsHOC from '@stories/BlockStories/Hoc/BulletsHOC';
import StoryContainer from '@stories/StoryContainer'

export default {
    title: 'Колонки/Три колонки с красным заголовком',
    component: BulletsHOC,
};

const TBulletsBlock = (args) => (<StoryContainer row><BulletsHOC {...args} /></StoryContainer>);

export const Bullets = TBulletsBlock.bind({});
Bullets.args = { 
    title1: 'Тайл1',
    label1: "Подзаголовок 1",
    value1: "Текст 1",

    title2: "Тайл2",
    label2: "Подзаголовок 2",
    value2: "Текст 2",

    title3: "Тайлт3",
    label3: "Подзаголовок 3",
    value3: "Текст 3",
};