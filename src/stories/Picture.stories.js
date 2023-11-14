import React from 'react';
import PhotoComponent from '@components/Styles/Picture';
import StoryContainer from '@stories/StoryContainer'

export default {
    title: 'Изображения/Фотография',
    component: PhotoComponent,
};

const TPhotoArticle = (args) => (<StoryContainer><PhotoComponent {...args} /></StoryContainer>)

export const Picture = TPhotoArticle.bind({});
Picture.args = {
    photo: {                        
        "width": 1152,
        "url": "https://458615.selcdn.ru/rmr_main/Bez_nazvaniya_1_cfa1bbba40.jpeg",
        "formats": {
            "thumbnail": {
                "width": 234,
                "url": "https://458615.selcdn.ru/rmr_main/thumbnail_Bez_nazvaniya_1_cfa1bbba40.jpeg"
            }
        }
    },
    desc: 'Подпись к фото'
}