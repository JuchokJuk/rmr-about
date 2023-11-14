import React from 'react';
import GdprPopupStory from '@components/GdprPopup/GdprPopup';
import StoryContainer from '@stories/StoryContainer'

export default {
    title: 'GdprPopup',
    component: GdprPopup,
};

const TGdprPopup = (args) => (<StoryContainer><GdprPopupStory {...args} /></StoryContainer>)

export const GdprPopup = TGdprPopup.bind({});

GdprPopup.args = { 
};

