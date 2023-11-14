import React from 'react';
import SubToEventBlock from '@components/StylePage/Blocks/SubToEventBlock';
import StoryContainer from '@stories/StoryContainer'

export default {
    title: 'Остальное/Подписаться на событие',
    component: SubToEventBlock,
};

const TSubToEventBlock = (args) => (<StoryContainer row><SubToEventBlock {...args} /></StoryContainer>);

export const SubToEvent = TSubToEventBlock.bind({});
SubToEvent.args = { 
    text: 'Мест всем не хватит, <br /> а вход в роботохранилище по регистрации'
};