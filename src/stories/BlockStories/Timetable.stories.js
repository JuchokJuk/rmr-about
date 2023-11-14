import React from 'react';
import TimetableHOC from '@stories/BlockStories/Hoc/TimetableHOC';
import StoryContainer from '@stories/StoryContainer'

export default {
    title: 'Остальное/Расписание',
    component: TimetableHOC,
};

const TTimeTableBlock = (args) => (<StoryContainer row><TimetableHOC {...args} /></StoryContainer>);

export const TimeTable = TTimeTableBlock.bind({});
TimeTable.args = { 
    time: '20:30',
    heading: "Заголовок",
    description: "Описание",
}; 