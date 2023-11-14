import React from 'react';
import ApplyJobBlock from '@components/StylePage/Blocks/ApplyJobBlock';
import StoryContainer from '@stories/StoryContainer'

export default {
    title: 'Остальное/Форма Вакансии',
    component: ApplyJobBlock,
};

const TApplyJobBlock = (args) => (<StoryContainer row><ApplyJobBlock {...args} /></StoryContainer>);

export const ApplyJob = TApplyJobBlock.bind({});
ApplyJob.args = { 
    
};