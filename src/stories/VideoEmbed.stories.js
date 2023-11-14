import React from 'react';
import VideoEmbedComponent from '@components/Styles/Video';
import StoryContainer from '@stories/StoryContainer'

export default {
    title: 'Видео/YouTub-Vimeo',
    component: VideoEmbedComponent,
};

const TVideoEmbed = (args) => (<StoryContainer row><VideoEmbedComponent {...args} /></StoryContainer>)

export const VideoEmbed = TVideoEmbed.bind({});
VideoEmbed.args = {
    service: 'youtube',
    url: 'https://www.youtube.com/embed/n86iGcE_R-o',
    caption: 'Подпись к тексту',
    posterUrl: 'http://img.youtube.com/vi/n86iGcE_R-o/maxresdefault.jpg'
}