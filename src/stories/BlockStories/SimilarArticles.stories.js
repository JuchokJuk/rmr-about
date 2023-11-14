import React from 'react';
import SimilarHOC from '@stories/BlockStories/Hoc/SimilarHOC';
import StoryContainer from '@stories/StoryContainer'

export default {
    title: 'Остальное/Похожие статьи',
    component: SimilarHOC,
};

const TSimilarArticlesBlock = (args) => (<StoryContainer row><SimilarHOC {...args} /></StoryContainer>);

export const SimilarArticles = TSimilarArticlesBlock.bind({});
SimilarArticles.args = { 
    card1Title : "Всё как у людей — калькулятор доходности, упрощённые платежи и 13 наград за реализацию мобильного банка",
    card1DateTime : "2020-10-21T10:53:23.746Z",
    card2Title : "«Олег, где деньги?» — как голосовые помощники и другие технологии меняют наше взаимодействие с банком", 
    card2DateTime : "2020-10-21T10:53:23.746Z",
    card3Title : "RedMadRobot",
    card3Link : "https://redmadrobot.ru/"
}; 