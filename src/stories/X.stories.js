import React from 'react';
import X from '@components/Styles/X/X';
import StoryContainer from '@stories/StoryContainer'


export default {
    title: 'Текст/X2',
    component: X,
};

const TX = (args) => (<StoryContainer><X.X2 {...args} /></StoryContainer>)

export const X2 = TX.bind({});
X2.args = {
    caption: "Исходные данные: 120 тысяч сотрудников, 11 часовых поясов, на ходу помогает приложение RT Life.",
}