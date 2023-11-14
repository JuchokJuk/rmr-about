import React from 'react';
import QuoteStory from '@components/Styles/Quote/Quote';
import StoryContainer from '@stories/StoryContainer'


export default {
    title: 'Текст/Цитата',
    component: Quote,
};

const TQuote = (args) => (<StoryContainer><QuoteStory {...args} /></StoryContainer>)

export const Quote = TQuote.bind({});
Quote.args = {
    content: "Исходные данные: 120 тысяч сотрудников, 11 часовых поясов, большое количество офисов, много командировок и передвижений между офисами в крупных городах. Решать максимум рабочих вопросов на ходу помогает приложение RT Life.",
    title: 'Заголовок',
    name: 'Имя автора',
    position: 'Моя позиция',
    image: {
        "width": 2500,
        "url": "https://458615.selcdn.ru/rmr_main/Artboard_1_copy_6_1_67a2d41584.png",
        "formats": {
            "thumbnail": {
                "name": "thumbnail_Artboard 1 copy 6_1.png",
                "hash": "thumbnail_Artboard_1_copy_6_1_67a2d41584",
                "ext": ".png",
                "mime": "image/png",
                "width": 245,
                "height": 138,
                "size": 5.83,
                "path": null,
                "url": "https://458615.selcdn.ru/rmr_main/thumbnail_Artboard_1_copy_6_1_67a2d41584.png"
            },
            "largeRetina": {
                "name": "largeRetina_Artboard 1 copy 6_1.png",
                "hash": "largeRetina_Artboard_1_copy_6_1_67a2d41584",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "width": 2496,
                "height": 1405,
                "size": 256.88,
                "path": null,
                "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/largeRetina_Artboard_1_copy_6_1_67a2d41584.jpg",
                "url": "https://458615.selcdn.ru/rmr_main/largeRetina_Artboard_1_copy_6_1_67a2d41584.jpg"
            },
            "large": {
                "name": "large_Artboard 1 copy 6_1.png",
                "hash": "large_Artboard_1_copy_6_1_67a2d41584",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "width": 1248,
                "height": 702,
                "size": 71.16,
                "path": null,
                "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/large_Artboard_1_copy_6_1_67a2d41584.jpg",
                "url": "https://458615.selcdn.ru/rmr_main/large_Artboard_1_copy_6_1_67a2d41584.jpg"
            },
            "mediumRetina": {
                "name": "mediumRetina_Artboard 1 copy 6_1.png",
                "hash": "mediumRetina_Artboard_1_copy_6_1_67a2d41584",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "width": 1776,
                "height": 1000,
                "size": 133.24,
                "path": null,
                "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/mediumRetina_Artboard_1_copy_6_1_67a2d41584.jpg",
                "url": "https://458615.selcdn.ru/rmr_main/mediumRetina_Artboard_1_copy_6_1_67a2d41584.jpg"
            },
            "medium": {
                "name": "medium_Artboard 1 copy 6_1.png",
                "hash": "medium_Artboard_1_copy_6_1_67a2d41584",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "width": 888,
                "height": 500,
                "size": 40.75,
                "path": null,
                "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/medium_Artboard_1_copy_6_1_67a2d41584.jpg",
                "url": "https://458615.selcdn.ru/rmr_main/medium_Artboard_1_copy_6_1_67a2d41584.jpg"
            },
            "smallRetina": {
                "name": "smallRetina_Artboard 1 copy 6_1.png",
                "hash": "smallRetina_Artboard_1_copy_6_1_67a2d41584",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "width": 920,
                "height": 518,
                "size": 43.17,
                "path": null,
                "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/smallRetina_Artboard_1_copy_6_1_67a2d41584.jpg",
                "url": "https://458615.selcdn.ru/rmr_main/smallRetina_Artboard_1_copy_6_1_67a2d41584.jpg"
            },
            "small": {
                "name": "small_Artboard 1 copy 6_1.png",
                "hash": "small_Artboard_1_copy_6_1_67a2d41584",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "width": 460,
                "height": 259,
                "size": 14.63,
                "path": null,
                "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/small_Artboard_1_copy_6_1_67a2d41584.jpg",
                "url": "https://458615.selcdn.ru/rmr_main/small_Artboard_1_copy_6_1_67a2d41584.jpg"
            },
            "microRetina": {
                "name": "microRetina_Artboard 1 copy 6_1.png",
                "hash": "microRetina_Artboard_1_copy_6_1_67a2d41584",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "width": 128,
                "height": 72,
                "size": 2.46,
                "path": null,
                "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/microRetina_Artboard_1_copy_6_1_67a2d41584.jpg",
                "url": "https://458615.selcdn.ru/rmr_main/microRetina_Artboard_1_copy_6_1_67a2d41584.jpg"
            },
            "micro": {
                "name": "micro_Artboard 1 copy 6_1.png",
                "hash": "micro_Artboard_1_copy_6_1_67a2d41584",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "width": 64,
                "height": 36,
                "size": 1.2,
                "path": null,
                "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/micro_Artboard_1_copy_6_1_67a2d41584.jpg",
                "url": "https://458615.selcdn.ru/rmr_main/micro_Artboard_1_copy_6_1_67a2d41584.jpg"
            },
            "default": {
                "url": "https://458615.selcdn.ru/rmr_main/Artboard_1_copy_6_1_67a2d41584.png",
                "type": "origin",
                "width": 2500
            }
        },
    }
}