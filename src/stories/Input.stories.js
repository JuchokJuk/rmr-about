import React from 'react';
import InputStory from '@components/Inputs/Input/Input';
import StoryContainer from '@stories/StoryContainer'

export default {
    title: 'Инпут/Базовый',
    component: InputStory,
    parameters: {
        backgrounds: {
            default: 'rmr_blue',
        },
    },
};

const TInput = (args) => (<StoryContainer blue><InputStory {...args} /></StoryContainer>)

export const Input = TInput.bind({});

Input.args = { 
    label: "Плейсхолдер",
    error: false,
    short: false,
    big: false,
    bigger: false,
    onChange: () => { },
    register: () => {},
    required: false,
    textarea: false,
    emailSub: false,
    success: false,
    successLabel: "Успешный лейбл",
};

