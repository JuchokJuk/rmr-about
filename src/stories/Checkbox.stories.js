import React from 'react';
import CheckboxStory from '@components/Inputs/Checkbox/Checkbox';
import StoryContainer from '@stories/StoryContainer'

export default {
    title: 'Инпут/Чекбокс',
    component: CheckboxStory,
    parameters: {
        backgrounds: {
            default: 'rmr_blue',
        },
    },
};

const TCheckbox = (args) => (<StoryContainer blue><CheckboxStory {...args} /></StoryContainer>)

export const Checkbox = TCheckbox.bind({});

Checkbox.args = { 
    label: "Лейбл",
    onChange: () => {},
};

