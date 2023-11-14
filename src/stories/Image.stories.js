import React from 'react';
import ImageComponent from '@components/Styles/Image/Image';
import StoryContainer from '@stories/StoryContainer'

export default {
    title: 'Изображения/Картинка + Картинка',
    component: ImageComponent,
};

const TIM1 = (args) => (<StoryContainer row><ImageComponent {...args} /></StoryContainer>)

export const Image1х1 = TIM1.bind({});
Image1х1.args = { 
    caption: "Подпись к картинкам", 
    images: [
        {
            "_id": "5fa946797e93a20027222a23",
            "name": "2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2.png",
            "hash": "2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999",
            "ext": ".webp",
            "mime": "image/webp",
            "size": 53.25,
            "width": 1920,
            "height": 1008,
            "url": "https://458615.selcdn.ru/rmr_main/2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999.png",
            "formats": {
                "thumbnail": {
                    "name": "thumbnail_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2.png",
                    "hash": "thumbnail_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999",
                    "ext": ".png",
                    "mime": "image/png",
                    "width": 245,
                    "height": 129,
                    "size": 15.79,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/thumbnail_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999.png"
                },
                "large": {
                    "name": "large_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2.png",
                    "hash": "large_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999",
                    "ext": ".webp",
                    "mime": "image/webp",
                    "width": 1248,
                    "height": 655,
                    "size": 19.12,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/large_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999.webp"
                },
                "mediumRetina": {
                    "name": "mediumRetina_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2.png",
                    "hash": "mediumRetina_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999",
                    "ext": ".webp",
                    "mime": "image/webp",
                    "width": 1776,
                    "height": 932,
                    "size": 29.91,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/mediumRetina_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999.webp"
                },
                "medium": {
                    "name": "medium_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2.png",
                    "hash": "medium_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999",
                    "ext": ".webp",
                    "mime": "image/webp",
                    "width": 888,
                    "height": 466,
                    "size": 12.57,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/medium_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999.webp"
                },
                "smallRetina": {
                    "name": "smallRetina_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2.png",
                    "hash": "smallRetina_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999",
                    "ext": ".webp",
                    "mime": "image/webp",
                    "width": 920,
                    "height": 483,
                    "size": 13.07,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/smallRetina_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999.webp"
                },
                "small": {
                    "name": "small_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2.png",
                    "hash": "small_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999",
                    "ext": ".webp",
                    "mime": "image/webp",
                    "width": 460,
                    "height": 242,
                    "size": 5.66,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/small_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999.webp"
                },
                "microRetina": {
                    "name": "microRetina_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2.png",
                    "hash": "microRetina_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999",
                    "ext": ".webp",
                    "mime": "image/webp",
                    "width": 128,
                    "height": 67,
                    "size": 1.02,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/microRetina_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999.webp"
                },
                "micro": {
                    "name": "micro_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2.png",
                    "hash": "micro_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999",
                    "ext": ".webp",
                    "mime": "image/webp",
                    "width": 64,
                    "height": 34,
                    "size": 0.52,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/micro_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999.webp"
                }
            },
            "provider": "aws-s3",
            "related": [],
            "createdAt": "2020-11-09T13:39:05.389Z",
            "updatedAt": "2020-11-09T13:39:05.396Z",
            "__v": 0,
            "id": "5fa946797e93a20027222a23"
        },
        {
            "_id": "5fabc8b8c97bd4001ca51bbf",
            "name": "71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7.png",
            "hash": "71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "size": 52.04,
            "width": 1920,
            "height": 1008,
            "url": "https://458615.selcdn.ru/rmr_main/71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.png",
            "formats": {
                "thumbnail": {
                    "name": "thumbnail_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7.png",
                    "hash": "thumbnail_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239",
                    "ext": ".png",
                    "mime": "image/png",
                    "width": 245,
                    "height": 129,
                    "size": 3.83,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/thumbnail_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.png"
                },
                "large": {
                    "name": "large_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7.png",
                    "hash": "large_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 1248,
                    "height": 655,
                    "size": 29.01,
                    "path": {},
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/large_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/large_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.jpg"
                },
                "mediumRetina": {
                    "name": "mediumRetina_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7.png",
                    "hash": "mediumRetina_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 1776,
                    "height": 932,
                    "size": 46.99,
                    "path": {},
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/mediumRetina_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/mediumRetina_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.jpg"
                },
                "medium": {
                    "name": "medium_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7.png",
                    "hash": "medium_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 888,
                    "height": 466,
                    "size": 18.76,
                    "path": {},
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/medium_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/medium_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.jpg"
                },
                "smallRetina": {
                    "name": "smallRetina_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7.png",
                    "hash": "smallRetina_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 920,
                    "height": 483,
                    "size": 19.62,
                    "path": {},
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/smallRetina_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/smallRetina_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.jpg"
                },
                "small": {
                    "name": "small_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7.png",
                    "hash": "small_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 460,
                    "height": 242,
                    "size": 8.31,
                    "path": {},
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/small_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/small_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.jpg"
                },
                "microRetina": {
                    "name": "microRetina_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7.png",
                    "hash": "microRetina_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 128,
                    "height": 67,
                    "size": 1.9,
                    "path": {},
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/microRetina_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/microRetina_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.jpg"
                },
                "micro": {
                    "name": "micro_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7.png",
                    "hash": "micro_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 64,
                    "height": 34,
                    "size": 1.01,
                    "path": {},
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/micro_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/micro_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.jpg"
                }
            },
            "provider": "aws-s3",
            "related": [],
            "createdAt": "2020-11-11T11:19:20.566Z",
            "updatedAt": "2020-11-11T11:19:20.571Z",
            "__v": 0,
            "id": "5fabc8b8c97bd4001ca51bbf"
        }
    ]
};


export const Image4x4 = TIM1.bind({});
Image4x4.args = {
    images: [
        {
            "_id": "5fa946797e93a20027222a23",
            "name": "2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2.png",
            "hash": "2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999",
            "ext": ".webp",
            "mime": "image/webp",
            "size": 53.25,
            "width": 1920,
            "height": 1008,
            "url": "https://458615.selcdn.ru/rmr_main/2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999.png",
            "formats": {
                "thumbnail": {
                    "name": "thumbnail_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2.png",
                    "hash": "thumbnail_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999",
                    "ext": ".png",
                    "mime": "image/png",
                    "width": 245,
                    "height": 129,
                    "size": 15.79,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/thumbnail_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999.png"
                },
                "large": {
                    "name": "large_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2.png",
                    "hash": "large_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999",
                    "ext": ".webp",
                    "mime": "image/webp",
                    "width": 1248,
                    "height": 655,
                    "size": 19.12,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/large_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999.webp"
                },
                "mediumRetina": {
                    "name": "mediumRetina_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2.png",
                    "hash": "mediumRetina_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999",
                    "ext": ".webp",
                    "mime": "image/webp",
                    "width": 1776,
                    "height": 932,
                    "size": 29.91,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/mediumRetina_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999.webp"
                },
                "medium": {
                    "name": "medium_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2.png",
                    "hash": "medium_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999",
                    "ext": ".webp",
                    "mime": "image/webp",
                    "width": 888,
                    "height": 466,
                    "size": 12.57,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/medium_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999.webp"
                },
                "smallRetina": {
                    "name": "smallRetina_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2.png",
                    "hash": "smallRetina_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999",
                    "ext": ".webp",
                    "mime": "image/webp",
                    "width": 920,
                    "height": 483,
                    "size": 13.07,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/smallRetina_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999.webp"
                },
                "small": {
                    "name": "small_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2.png",
                    "hash": "small_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999",
                    "ext": ".webp",
                    "mime": "image/webp",
                    "width": 460,
                    "height": 242,
                    "size": 5.66,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/small_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999.webp"
                },
                "microRetina": {
                    "name": "microRetina_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2.png",
                    "hash": "microRetina_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999",
                    "ext": ".webp",
                    "mime": "image/webp",
                    "width": 128,
                    "height": 67,
                    "size": 1.02,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/microRetina_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999.webp"
                },
                "micro": {
                    "name": "micro_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2.png",
                    "hash": "micro_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999",
                    "ext": ".webp",
                    "mime": "image/webp",
                    "width": 64,
                    "height": 34,
                    "size": 0.52,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/micro_2c97bd50_848c_28ce_7667_4bbce8a4c99d_3edb0ac9d2_14a9eb8999.webp"
                }
            },
            "provider": "aws-s3",
            "related": [],
            "createdAt": "2020-11-09T13:39:05.389Z",
            "updatedAt": "2020-11-09T13:39:05.396Z",
            "__v": 0,
            "id": "5fa946797e93a20027222a23"
        },
        {
            "_id": "5fabc8b8c97bd4001ca51bbf",
            "name": "71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7.png",
            "hash": "71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "size": 52.04,
            "width": 1920,
            "height": 1008,
            "url": "https://458615.selcdn.ru/rmr_main/71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.png",
            "formats": {
                "thumbnail": {
                    "name": "thumbnail_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7.png",
                    "hash": "thumbnail_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239",
                    "ext": ".png",
                    "mime": "image/png",
                    "width": 245,
                    "height": 129,
                    "size": 3.83,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/thumbnail_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.png"
                },
                "large": {
                    "name": "large_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7.png",
                    "hash": "large_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 1248,
                    "height": 655,
                    "size": 29.01,
                    "path": {},
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/large_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/large_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.jpg"
                },
                "mediumRetina": {
                    "name": "mediumRetina_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7.png",
                    "hash": "mediumRetina_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 1776,
                    "height": 932,
                    "size": 46.99,
                    "path": {},
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/mediumRetina_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/mediumRetina_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.jpg"
                },
                "medium": {
                    "name": "medium_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7.png",
                    "hash": "medium_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 888,
                    "height": 466,
                    "size": 18.76,
                    "path": {},
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/medium_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/medium_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.jpg"
                },
                "smallRetina": {
                    "name": "smallRetina_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7.png",
                    "hash": "smallRetina_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 920,
                    "height": 483,
                    "size": 19.62,
                    "path": {},
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/smallRetina_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/smallRetina_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.jpg"
                },
                "small": {
                    "name": "small_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7.png",
                    "hash": "small_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 460,
                    "height": 242,
                    "size": 8.31,
                    "path": {},
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/small_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/small_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.jpg"
                },
                "microRetina": {
                    "name": "microRetina_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7.png",
                    "hash": "microRetina_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 128,
                    "height": 67,
                    "size": 1.9,
                    "path": {},
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/microRetina_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/microRetina_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.jpg"
                },
                "micro": {
                    "name": "micro_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7.png",
                    "hash": "micro_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 64,
                    "height": 34,
                    "size": 1.01,
                    "path": {},
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/micro_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/micro_71612fe0_e142_2eda_4e8c_9fa5fe1e552d_7d9578b9a7_f4650a3239.jpg"
                }
            },
            "provider": "aws-s3",
            "related": [],
            "createdAt": "2020-11-11T11:19:20.566Z",
            "updatedAt": "2020-11-11T11:19:20.571Z",
            "__v": 0,
            "id": "5fabc8b8c97bd4001ca51bbf"
        },
        {
            "_id": "5fabc8ccc97bd4001ca51bc0",
            "name": "81175eff_184f_abfd_769b_becda909c413_4873282000.png",
            "hash": "81175eff_184f_abfd_769b_becda909c413_4873282000_c427faeb0a",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "size": 31.3,
            "width": 1920,
            "height": 1008,
            "url": "https://458615.selcdn.ru/rmr_main/81175eff_184f_abfd_769b_becda909c413_4873282000_c427faeb0a.png",
            "formats": {
                "thumbnail": {
                    "name": "thumbnail_81175eff_184f_abfd_769b_becda909c413_4873282000.png",
                    "hash": "thumbnail_81175eff_184f_abfd_769b_becda909c413_4873282000_c427faeb0a",
                    "ext": ".png",
                    "mime": "image/png",
                    "width": 245,
                    "height": 129,
                    "size": 3.12,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/thumbnail_81175eff_184f_abfd_769b_becda909c413_4873282000_c427faeb0a.png"
                },
                "large": {
                    "name": "large_81175eff_184f_abfd_769b_becda909c413_4873282000.png",
                    "hash": "large_81175eff_184f_abfd_769b_becda909c413_4873282000_c427faeb0a",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 1248,
                    "height": 655,
                    "size": 26.73,
                    "path": {},
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/large_81175eff_184f_abfd_769b_becda909c413_4873282000_c427faeb0a.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/large_81175eff_184f_abfd_769b_becda909c413_4873282000_c427faeb0a.jpg"
                },
                "mediumRetina": {
                    "name": "mediumRetina_81175eff_184f_abfd_769b_becda909c413_4873282000.png",
                    "hash": "mediumRetina_81175eff_184f_abfd_769b_becda909c413_4873282000_c427faeb0a",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 1776,
                    "height": 932,
                    "size": 43.41,
                    "path": {},
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/mediumRetina_81175eff_184f_abfd_769b_becda909c413_4873282000_c427faeb0a.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/mediumRetina_81175eff_184f_abfd_769b_becda909c413_4873282000_c427faeb0a.jpg"
                },
                "medium": {
                    "name": "medium_81175eff_184f_abfd_769b_becda909c413_4873282000.png",
                    "hash": "medium_81175eff_184f_abfd_769b_becda909c413_4873282000_c427faeb0a",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 888,
                    "height": 466,
                    "size": 17.07,
                    "path": {},
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/medium_81175eff_184f_abfd_769b_becda909c413_4873282000_c427faeb0a.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/medium_81175eff_184f_abfd_769b_becda909c413_4873282000_c427faeb0a.jpg"
                },
                "smallRetina": {
                    "name": "smallRetina_81175eff_184f_abfd_769b_becda909c413_4873282000.png",
                    "hash": "smallRetina_81175eff_184f_abfd_769b_becda909c413_4873282000_c427faeb0a",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 920,
                    "height": 483,
                    "size": 18.38,
                    "path": {},
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/smallRetina_81175eff_184f_abfd_769b_becda909c413_4873282000_c427faeb0a.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/smallRetina_81175eff_184f_abfd_769b_becda909c413_4873282000_c427faeb0a.jpg"
                },
                "small": {
                    "name": "small_81175eff_184f_abfd_769b_becda909c413_4873282000.png",
                    "hash": "small_81175eff_184f_abfd_769b_becda909c413_4873282000_c427faeb0a",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 460,
                    "height": 242,
                    "size": 7.23,
                    "path": {},
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/small_81175eff_184f_abfd_769b_becda909c413_4873282000_c427faeb0a.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/small_81175eff_184f_abfd_769b_becda909c413_4873282000_c427faeb0a.jpg"
                },
                "microRetina": {
                    "name": "microRetina_81175eff_184f_abfd_769b_becda909c413_4873282000.png",
                    "hash": "microRetina_81175eff_184f_abfd_769b_becda909c413_4873282000_c427faeb0a",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 128,
                    "height": 67,
                    "size": 1.47,
                    "path": {},
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/microRetina_81175eff_184f_abfd_769b_becda909c413_4873282000_c427faeb0a.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/microRetina_81175eff_184f_abfd_769b_becda909c413_4873282000_c427faeb0a.jpg"
                },
                "micro": {
                    "name": "micro_81175eff_184f_abfd_769b_becda909c413_4873282000.png",
                    "hash": "micro_81175eff_184f_abfd_769b_becda909c413_4873282000_c427faeb0a",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 64,
                    "height": 34,
                    "size": 0.88,
                    "path": {},
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/micro_81175eff_184f_abfd_769b_becda909c413_4873282000_c427faeb0a.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/micro_81175eff_184f_abfd_769b_becda909c413_4873282000_c427faeb0a.jpg"
                }
            },
            "provider": "aws-s3",
            "related": [],
            "createdAt": "2020-11-11T11:19:40.822Z",
            "updatedAt": "2020-11-11T11:19:40.831Z",
            "__v": 0,
            "id": "5fabc8ccc97bd4001ca51bc0"
        },
        {
            "_id": "5fabc8dcc97bd4001ca51bc1",
            "name": "f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735.png",
            "hash": "f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735_12abf4c621",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "size": 34.75,
            "width": 1920,
            "height": 1008,
            "url": "https://458615.selcdn.ru/rmr_main/f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735_12abf4c621.png",
            "formats": {
                "thumbnail": {
                    "name": "thumbnail_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735.png",
                    "hash": "thumbnail_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735_12abf4c621",
                    "ext": ".png",
                    "mime": "image/png",
                    "width": 245,
                    "height": 129,
                    "size": 2.46,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/thumbnail_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735_12abf4c621.png"
                },
                "large": {
                    "name": "large_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735.png",
                    "hash": "large_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735_12abf4c621",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 1248,
                    "height": 655,
                    "size": 19.66,
                    "path": {},
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/large_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735_12abf4c621.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/large_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735_12abf4c621.jpg"
                },
                "mediumRetina": {
                    "name": "mediumRetina_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735.png",
                    "hash": "mediumRetina_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735_12abf4c621",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 1776,
                    "height": 932,
                    "size": 32.17,
                    "path": {},
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/mediumRetina_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735_12abf4c621.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/mediumRetina_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735_12abf4c621.jpg"
                },
                "medium": {
                    "name": "medium_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735.png",
                    "hash": "medium_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735_12abf4c621",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 888,
                    "height": 466,
                    "size": 12.28,
                    "path": {},
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/medium_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735_12abf4c621.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/medium_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735_12abf4c621.jpg"
                },
                "smallRetina": {
                    "name": "smallRetina_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735.png",
                    "hash": "smallRetina_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735_12abf4c621",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 920,
                    "height": 483,
                    "size": 13.15,
                    "path": {},
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/smallRetina_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735_12abf4c621.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/smallRetina_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735_12abf4c621.jpg"
                },
                "small": {
                    "name": "small_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735.png",
                    "hash": "small_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735_12abf4c621",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 460,
                    "height": 242,
                    "size": 5.47,
                    "path": {},
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/small_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735_12abf4c621.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/small_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735_12abf4c621.jpg"
                },
                "microRetina": {
                    "name": "microRetina_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735.png",
                    "hash": "microRetina_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735_12abf4c621",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 128,
                    "height": 67,
                    "size": 1.36,
                    "path": {},
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/microRetina_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735_12abf4c621.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/microRetina_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735_12abf4c621.jpg"
                },
                "micro": {
                    "name": "micro_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735.png",
                    "hash": "micro_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735_12abf4c621",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 64,
                    "height": 34,
                    "size": 0.84,
                    "path": {},
                    "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/micro_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735_12abf4c621.jpg",
                    "url": "https://458615.selcdn.ru/rmr_main/micro_f2bfec9a_480b_38a8_7274_7dbb027714ed_4d494f5735_12abf4c621.jpg"
                }
            },
            "provider": "aws-s3",
            "related": [],
            "createdAt": "2020-11-11T11:19:56.594Z",
            "updatedAt": "2020-11-11T11:19:56.599Z",
            "__v": 0,
            "id": "5fabc8dcc97bd4001ca51bc1"
        }
    ]
} 