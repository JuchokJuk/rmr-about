import React from 'react';
import EmailSubWithButtonStory from '@components/EmailSubWithButton';
import StoryContainer from '@stories/StoryContainer'

export default {
    title: 'Остальное/Подписка Email с кнопкой',
    component: EmailSubWithButton,
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};

const TEmailSubWithButton = (args) => (<StoryContainer><EmailSubWithButtonStory {...args} /></StoryContainer>)

export const EmailSubWithButton = TEmailSubWithButton.bind({});

EmailSubWithButton.args = { 
    content: 'Подписаться на рассылку',
};

