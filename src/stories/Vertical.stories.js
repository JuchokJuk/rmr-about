import React from 'react';
import ImageComponent from '@components/Styles/Image';
import StoryContainer from '@stories/StoryContainer'

export default {
    title: 'Изображения/Вертикальное',
    component: ImageComponent,
};

const TVertical = (args) => (<StoryContainer row>
    <ImageComponent.Vertical {...args} />
</StoryContainer>) 

export const ImageVertical = TVertical.bind({});
ImageVertical.args = {
    images: [{
        image: {
            "width": 1194,
            "url": "https://458615.selcdn.ru/rmr_main/384783d1_4a2e_8786_96ff_a31edf4eff46_fe26b3f7f9_de66b774ea.png",
            "formats": {
                "thumbnail": {
                    "width": 117,
                    "url": "https://458615.selcdn.ru/rmr_main/thumbnail_384783d1_4a2e_8786_96ff_a31edf4eff46_fe26b3f7f9_de66b774ea.png"
                },
                "large": {
                    "width": 938,
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/large_384783d1_4a2e_8786_96ff_a31edf4eff46_fe26b3f7f9_de66b774ea.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/large_384783d1_4a2e_8786_96ff_a31edf4eff46_fe26b3f7f9_de66b774ea.jpg"
                },
                "medium": {
                    "width": 668,
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/medium_384783d1_4a2e_8786_96ff_a31edf4eff46_fe26b3f7f9_de66b774ea.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/medium_384783d1_4a2e_8786_96ff_a31edf4eff46_fe26b3f7f9_de66b774ea.jpg"
                },
                "smallRetina": {
                    "width": 692,
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/smallRetina_384783d1_4a2e_8786_96ff_a31edf4eff46_fe26b3f7f9_de66b774ea.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/smallRetina_384783d1_4a2e_8786_96ff_a31edf4eff46_fe26b3f7f9_de66b774ea.jpg"
                },
                "small": {
                    "width": 346,
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/small_384783d1_4a2e_8786_96ff_a31edf4eff46_fe26b3f7f9_de66b774ea.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/small_384783d1_4a2e_8786_96ff_a31edf4eff46_fe26b3f7f9_de66b774ea.jpg"
                },
                "microRetina": {
                    "width": 96,
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/microRetina_384783d1_4a2e_8786_96ff_a31edf4eff46_fe26b3f7f9_de66b774ea.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/microRetina_384783d1_4a2e_8786_96ff_a31edf4eff46_fe26b3f7f9_de66b774ea.jpg"
                },
                "micro": {
                    "width": 48,
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/micro_384783d1_4a2e_8786_96ff_a31edf4eff46_fe26b3f7f9_de66b774ea.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/micro_384783d1_4a2e_8786_96ff_a31edf4eff46_fe26b3f7f9_de66b774ea.jpg"
                }
            },
        },
        caption: 'Подпись 1',
    },
    {
        image: {
            "width": 1194,
            "url": "https://458615.selcdn.ru/rmr_main/384783d1_4a2e_8786_96ff_a31edf4eff46_fe26b3f7f9_de66b774ea.png",
            "formats": {
                "thumbnail": {
                    "width": 117,
                    "url": "https://458615.selcdn.ru/rmr_main/thumbnail_384783d1_4a2e_8786_96ff_a31edf4eff46_fe26b3f7f9_de66b774ea.png"
                },
                "large": {
                    "width": 938,
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/large_384783d1_4a2e_8786_96ff_a31edf4eff46_fe26b3f7f9_de66b774ea.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/large_384783d1_4a2e_8786_96ff_a31edf4eff46_fe26b3f7f9_de66b774ea.jpg"
                },
                "medium": {
                    "width": 668,
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/medium_384783d1_4a2e_8786_96ff_a31edf4eff46_fe26b3f7f9_de66b774ea.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/medium_384783d1_4a2e_8786_96ff_a31edf4eff46_fe26b3f7f9_de66b774ea.jpg"
                },
                "smallRetina": {
                    "width": 692,
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/smallRetina_384783d1_4a2e_8786_96ff_a31edf4eff46_fe26b3f7f9_de66b774ea.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/smallRetina_384783d1_4a2e_8786_96ff_a31edf4eff46_fe26b3f7f9_de66b774ea.jpg"
                },
                "small": {
                    "width": 346,
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/small_384783d1_4a2e_8786_96ff_a31edf4eff46_fe26b3f7f9_de66b774ea.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/small_384783d1_4a2e_8786_96ff_a31edf4eff46_fe26b3f7f9_de66b774ea.jpg"
                },
                "microRetina": {
                    "width": 96,
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/microRetina_384783d1_4a2e_8786_96ff_a31edf4eff46_fe26b3f7f9_de66b774ea.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/microRetina_384783d1_4a2e_8786_96ff_a31edf4eff46_fe26b3f7f9_de66b774ea.jpg"
                },
                "micro": {
                    "width": 48,
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/micro_384783d1_4a2e_8786_96ff_a31edf4eff46_fe26b3f7f9_de66b774ea.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/micro_384783d1_4a2e_8786_96ff_a31edf4eff46_fe26b3f7f9_de66b774ea.jpg"
                }
            },
        },
        caption: 'Подпись 2',
    }]
}
