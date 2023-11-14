import React from 'react';
import StatisticsBlock from '@stories/BlockStories/Hoc/StatisticsHOC';
import StoryContainer from '@stories/StoryContainer'

export default {
    title: 'Колонки/Статистика',
    component: StatisticsBlock,
};

const TStatistics = (args) => (<StoryContainer row><StatisticsBlock {...args} /></StoryContainer>);

export const Statistics = TStatistics.bind({});
Statistics.args = { 
    title1: '854,5',
    label1: "Подзаголовок 1",
    value1: "Текст 1",

    title2: "10%",
    label2: "Подзаголовок 2",
    value2: "Текст 2",

    title3: "495",
    label3: "Подзаголовок 3",
    value3: "Текст 3",
};