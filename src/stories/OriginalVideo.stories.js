import React from 'react';
import VideoComponent from '@components/Styles/Video';
import StoryContainer from '@stories/StoryContainer'

export default {
    title: 'Видео/Базовое',
    component: VideoComponent,
};

const TVideo = (args) => (<StoryContainer row><VideoComponent {...args} /></StoryContainer>)

export const Video = TVideo.bind({});
Video.args = {
    url: 'https://458615.selcdn.ru/rmr_main/delenie_aa1ab15ba4.mp4',
    posterUrl: 'https://458615.selcdn.ru/rmr_main/Snimok_ekrana_2020_11_18_v_16_18_57_7825bbef86.png',
    caption: 'Подпись к видео',
    service: null
}