import React from 'react';
import Paragraph from '@components/Styles/Paragraph/Paragraph';
import StoryContainer from '@stories/StoryContainer'

export default {
    title: 'Текст/Параграф(P1, P2, P3)',
    component: Paragraph,
};

const TP1 = (args) => (<StoryContainer><Paragraph.P1 {...args} /></StoryContainer>)
const TP2 = (args) => (<StoryContainer><Paragraph.P2 {...args} /></StoryContainer>)
const TP3 = (args) => (<StoryContainer><Paragraph.P3 {...args} /></StoryContainer>)

export const P1 = TP1.bind({});
P1.args = { content: "Параграф P1" };

export const P2 = TP2.bind({});
P2.args = { content: "Параграф P2" };

export const P3 = TP3.bind({});
P3.args = { content: "Параграф P3" };