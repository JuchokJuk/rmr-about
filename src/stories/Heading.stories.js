import React from 'react';
import Heading from '@components/Styles/Heading/Heading';
import StoryContainer from '@stories/StoryContainer'


export default {
    title: 'Текст/Заголовок',
    component: Heading,
};

const TH1 = (args) => (<StoryContainer><Heading.H1 {...args} /></StoryContainer>);
const TH2 = (args) => (<StoryContainer><Heading.H2 {...args} /></StoryContainer>);
const TH3 = (args) => (<StoryContainer><Heading.H3 {...args} /></StoryContainer>);
const TH4 = (args) => (<StoryContainer><Heading.H4 {...args} /></StoryContainer>);
const TH5 = (args) => (<StoryContainer><Heading.H5 {...args} /></StoryContainer>);
const THA1 = (args) => (<StoryContainer><Heading.HA1 {...args} /></StoryContainer>)
const THA2 = (args) => (<StoryContainer><Heading.HA2 {...args} /></StoryContainer>)
const THA3 = (args) => (<StoryContainer><Heading.HA3 {...args} /></StoryContainer>)


export const H1 = TH1.bind({});
H1.args = { content: "Заголовок H1", hover: false };

export const H2 = TH2.bind({});
H2.args = { content: "Заголовок H2", hover: false };

export const H3 = TH3.bind({});
H3.args = { content: "Заголовок H3", hover: false };

export const H4 = TH4.bind({});
H4.args = { content: "Заголовок H4", hover: false };

export const H5 = TH5.bind({});
H5.args = { content: "Заголовок H5", hover: false };

export const HA1 = THA1.bind({});
HA1.args = { content: "Заголовок HA1", hover: false };

export const HA2 = THA2.bind({});
HA2.args = { content: "Заголовок HA2", hover: false };

export const HA3 = THA3.bind({});
HA3.args = { content: "Заголовок HA3", hover: false };
