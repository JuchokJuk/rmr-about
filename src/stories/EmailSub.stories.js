import React from 'react';
import EmailSubStory from '@components/EmailSub';
import StoryContainer from '@stories/StoryContainer'

export default {
    title: 'Остальное/Подписка на Email',
    component: EmailSub,
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};

const TEmailSub = (args) => (<StoryContainer><EmailSubStory {...args} /></StoryContainer>)

export const EmailSub = TEmailSub.bind({});

EmailSub.args = { 
    content: 'Подписаться на рассылку',
    white: false
};

