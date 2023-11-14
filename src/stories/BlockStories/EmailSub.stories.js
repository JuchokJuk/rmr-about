import React from 'react';
import EmailSubHoc from '@stories/BlockStories/Hoc/EmailSubHoc';
import StoryContainer from '@stories/StoryContainer'

export default {
    title: 'Остальное/Подписка email',
    component: EmailSubHoc,
};

const TEmailSubHoc= (args) => (<StoryContainer row><EmailSubHoc {...args} /></StoryContainer>);

export const EmailSub = TEmailSubHoc.bind({});
EmailSub.args = { 
    content : 'Описание строки',
}; 