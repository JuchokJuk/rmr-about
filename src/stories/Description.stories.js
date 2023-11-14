import React from 'react';
import Description from '@components/Styles/Description/Description';
import StoryContainer from '@stories/StoryContainer'


export default {
    title: 'Текст/Описание(D1, D2)',
    component: Description,
};

const TD1 = (args) => (<StoryContainer><Description.D1 {...args} /></StoryContainer>)
const TD2 = (args) => (<StoryContainer><Description.D2 {...args} /></StoryContainer>)

export const D1 = TD1.bind({});
D1.args = { content: "Описание D1"};

export const D2 = TD2.bind({});
D2.args = { content: "Описание D2" };
