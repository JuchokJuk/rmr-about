import React from 'react';
import ListComponent from '@components/Styles/List/List';
import StoryContainer from '@stories/StoryContainer'


export default {
    title: 'Текст/Список',
    component: ListComponent,
};

const TList = (args) => (<StoryContainer><ListComponent {...args} /></StoryContainer>);
const TListDecimal = (args) => (<StoryContainer><ListComponent {...args} /></StoryContainer>);

export const List = TList.bind({});
List.args = { 
    items: ["Пункт 1", 'Пункт 2']
};

export const ListDecimal = TListDecimal.bind({});
ListDecimal.args = { 
    items: ["Пункт 1", 'Пункт 2'],
    decimal: true
};