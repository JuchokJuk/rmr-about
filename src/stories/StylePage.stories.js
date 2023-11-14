import React from 'react';
import StyleSlider from '@components/Slider/StylePage/StylePage';

export default {
    title: 'Изображения/Слайдер',
    component: StyleSlider,
};

const TStyleSlider = (args) => (
    <div className="grid-container">
        <StyleSlider {...args} />
    </div>
);

export const StylePageSlider = TStyleSlider.bind({});
StylePageSlider.args = {
    caption: 'Подпись к слайдеру',
    slides: [
        {
            "_id": "5fa94fdf7e93a20027222a29",
            "name": "620e009d_072d_5c8b_0a9a_a6e2588fccdb_72874fda01.jpg",
            "hash": "620e009d_072d_5c8b_0a9a_a6e2588fccdb_72874fda01_de53f75f68",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "size": 319.01,
            "width": 1500,
            "height": 1999,
            "url": "https://458615.selcdn.ru/rmr_main/620e009d_072d_5c8b_0a9a_a6e2588fccdb_72874fda01_de53f75f68.jpg",
            "formats": {
                "thumbnail": {
                    "name": "thumbnail_620e009d_072d_5c8b_0a9a_a6e2588fccdb_72874fda01.jpg",
                    "hash": "thumbnail_620e009d_072d_5c8b_0a9a_a6e2588fccdb_72874fda01_de53f75f68",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 117,
                    "height": 156,
                    "size": 5.85,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/thumbnail_620e009d_072d_5c8b_0a9a_a6e2588fccdb_72874fda01_de53f75f68.jpg"
                },
                "large": {
                    "name": "large_620e009d_072d_5c8b_0a9a_a6e2588fccdb_72874fda01.jpg",
                    "hash": "large_620e009d_072d_5c8b_0a9a_a6e2588fccdb_72874fda01_de53f75f68",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 936,
                    "height": 1248,
                    "size": 119.51,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/large_620e009d_072d_5c8b_0a9a_a6e2588fccdb_72874fda01_de53f75f68.jpg"
                },
                "mediumRetina": {
                    "name": "mediumRetina_620e009d_072d_5c8b_0a9a_a6e2588fccdb_72874fda01.jpg",
                    "hash": "mediumRetina_620e009d_072d_5c8b_0a9a_a6e2588fccdb_72874fda01_de53f75f68",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 1333,
                    "height": 1776,
                    "size": 204.98,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/mediumRetina_620e009d_072d_5c8b_0a9a_a6e2588fccdb_72874fda01_de53f75f68.jpg"
                },
                "medium": {
                    "name": "medium_620e009d_072d_5c8b_0a9a_a6e2588fccdb_72874fda01.jpg",
                    "hash": "medium_620e009d_072d_5c8b_0a9a_a6e2588fccdb_72874fda01_de53f75f68",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 666,
                    "height": 888,
                    "size": 69.64,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/medium_620e009d_072d_5c8b_0a9a_a6e2588fccdb_72874fda01_de53f75f68.jpg"
                },
                "smallRetina": {
                    "name": "smallRetina_620e009d_072d_5c8b_0a9a_a6e2588fccdb_72874fda01.jpg",
                    "hash": "smallRetina_620e009d_072d_5c8b_0a9a_a6e2588fccdb_72874fda01_de53f75f68",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 690,
                    "height": 920,
                    "size": 73.49,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/smallRetina_620e009d_072d_5c8b_0a9a_a6e2588fccdb_72874fda01_de53f75f68.jpg"
                },
                "small": {
                    "name": "small_620e009d_072d_5c8b_0a9a_a6e2588fccdb_72874fda01.jpg",
                    "hash": "small_620e009d_072d_5c8b_0a9a_a6e2588fccdb_72874fda01_de53f75f68",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 345,
                    "height": 460,
                    "size": 23.93,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/small_620e009d_072d_5c8b_0a9a_a6e2588fccdb_72874fda01_de53f75f68.jpg"
                },
                "microRetina": {
                    "name": "microRetina_620e009d_072d_5c8b_0a9a_a6e2588fccdb_72874fda01.jpg",
                    "hash": "microRetina_620e009d_072d_5c8b_0a9a_a6e2588fccdb_72874fda01_de53f75f68",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 96,
                    "height": 128,
                    "size": 3.24,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/microRetina_620e009d_072d_5c8b_0a9a_a6e2588fccdb_72874fda01_de53f75f68.jpg"
                },
                "micro": {
                    "name": "micro_620e009d_072d_5c8b_0a9a_a6e2588fccdb_72874fda01.jpg",
                    "hash": "micro_620e009d_072d_5c8b_0a9a_a6e2588fccdb_72874fda01_de53f75f68",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 48,
                    "height": 64,
                    "size": 1.37,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/micro_620e009d_072d_5c8b_0a9a_a6e2588fccdb_72874fda01_de53f75f68.jpg"
                }
            },
            "provider": "aws-s3",
            "related": [],
            "createdAt": "2020-11-09T14:19:11.507Z",
            "updatedAt": "2020-11-09T14:19:11.523Z",
            "__v": 0,
            "id": "5fa94fdf7e93a20027222a29"
        },
        {
            "_id": "5fa94fec7e93a20027222a2a",
            "name": "799e7160_77de_d620_3268_8b574cedc3eb_c4eaeb01b2.jpg",
            "hash": "799e7160_77de_d620_3268_8b574cedc3eb_c4eaeb01b2_1583348674",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "size": 244.1,
            "width": 1500,
            "height": 1999,
            "url": "https://458615.selcdn.ru/rmr_main/799e7160_77de_d620_3268_8b574cedc3eb_c4eaeb01b2_1583348674.jpg",
            "formats": {
                "thumbnail": {
                    "name": "thumbnail_799e7160_77de_d620_3268_8b574cedc3eb_c4eaeb01b2.jpg",
                    "hash": "thumbnail_799e7160_77de_d620_3268_8b574cedc3eb_c4eaeb01b2_1583348674",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 117,
                    "height": 156,
                    "size": 5.37,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/thumbnail_799e7160_77de_d620_3268_8b574cedc3eb_c4eaeb01b2_1583348674.jpg"
                },
                "large": {
                    "name": "large_799e7160_77de_d620_3268_8b574cedc3eb_c4eaeb01b2.jpg",
                    "hash": "large_799e7160_77de_d620_3268_8b574cedc3eb_c4eaeb01b2_1583348674",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 936,
                    "height": 1248,
                    "size": 92.54,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/large_799e7160_77de_d620_3268_8b574cedc3eb_c4eaeb01b2_1583348674.jpg"
                },
                "mediumRetina": {
                    "name": "mediumRetina_799e7160_77de_d620_3268_8b574cedc3eb_c4eaeb01b2.jpg",
                    "hash": "mediumRetina_799e7160_77de_d620_3268_8b574cedc3eb_c4eaeb01b2_1583348674",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 1333,
                    "height": 1776,
                    "size": 157.69,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/mediumRetina_799e7160_77de_d620_3268_8b574cedc3eb_c4eaeb01b2_1583348674.jpg"
                },
                "medium": {
                    "name": "medium_799e7160_77de_d620_3268_8b574cedc3eb_c4eaeb01b2.jpg",
                    "hash": "medium_799e7160_77de_d620_3268_8b574cedc3eb_c4eaeb01b2_1583348674",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 666,
                    "height": 888,
                    "size": 55.56,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/medium_799e7160_77de_d620_3268_8b574cedc3eb_c4eaeb01b2_1583348674.jpg"
                },
                "smallRetina": {
                    "name": "smallRetina_799e7160_77de_d620_3268_8b574cedc3eb_c4eaeb01b2.jpg",
                    "hash": "smallRetina_799e7160_77de_d620_3268_8b574cedc3eb_c4eaeb01b2_1583348674",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 690,
                    "height": 920,
                    "size": 58.26,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/smallRetina_799e7160_77de_d620_3268_8b574cedc3eb_c4eaeb01b2_1583348674.jpg"
                },
                "small": {
                    "name": "small_799e7160_77de_d620_3268_8b574cedc3eb_c4eaeb01b2.jpg",
                    "hash": "small_799e7160_77de_d620_3268_8b574cedc3eb_c4eaeb01b2_1583348674",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 345,
                    "height": 460,
                    "size": 20.08,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/small_799e7160_77de_d620_3268_8b574cedc3eb_c4eaeb01b2_1583348674.jpg"
                },
                "microRetina": {
                    "name": "microRetina_799e7160_77de_d620_3268_8b574cedc3eb_c4eaeb01b2.jpg",
                    "hash": "microRetina_799e7160_77de_d620_3268_8b574cedc3eb_c4eaeb01b2_1583348674",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 96,
                    "height": 128,
                    "size": 3.02,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/microRetina_799e7160_77de_d620_3268_8b574cedc3eb_c4eaeb01b2_1583348674.jpg"
                },
                "micro": {
                    "name": "micro_799e7160_77de_d620_3268_8b574cedc3eb_c4eaeb01b2.jpg",
                    "hash": "micro_799e7160_77de_d620_3268_8b574cedc3eb_c4eaeb01b2_1583348674",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 48,
                    "height": 64,
                    "size": 1.35,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/micro_799e7160_77de_d620_3268_8b574cedc3eb_c4eaeb01b2_1583348674.jpg"
                }
            },
            "provider": "aws-s3",
            "related": [],
            "createdAt": "2020-11-09T14:19:24.539Z",
            "updatedAt": "2020-11-09T14:19:24.543Z",
            "__v": 0,
            "id": "5fa94fec7e93a20027222a2a"
        },
        {
            "_id": "5fa94ff17e93a20027222a2b",
            "name": "f4d33e8d_7e70_af73_dbb1_5d4832df64b8_24a64e02fb.jpg",
            "hash": "f4d33e8d_7e70_af73_dbb1_5d4832df64b8_24a64e02fb_fdbd3dc90d",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "size": 285.38,
            "width": 1500,
            "height": 1999,
            "url": "https://458615.selcdn.ru/rmr_main/f4d33e8d_7e70_af73_dbb1_5d4832df64b8_24a64e02fb_fdbd3dc90d.jpg",
            "formats": {
                "thumbnail": {
                    "name": "thumbnail_f4d33e8d_7e70_af73_dbb1_5d4832df64b8_24a64e02fb.jpg",
                    "hash": "thumbnail_f4d33e8d_7e70_af73_dbb1_5d4832df64b8_24a64e02fb_fdbd3dc90d",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 117,
                    "height": 156,
                    "size": 4.91,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/thumbnail_f4d33e8d_7e70_af73_dbb1_5d4832df64b8_24a64e02fb_fdbd3dc90d.jpg"
                },
                "large": {
                    "name": "large_f4d33e8d_7e70_af73_dbb1_5d4832df64b8_24a64e02fb.jpg",
                    "hash": "large_f4d33e8d_7e70_af73_dbb1_5d4832df64b8_24a64e02fb_fdbd3dc90d",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 936,
                    "height": 1248,
                    "size": 103.49,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/large_f4d33e8d_7e70_af73_dbb1_5d4832df64b8_24a64e02fb_fdbd3dc90d.jpg"
                },
                "mediumRetina": {
                    "name": "mediumRetina_f4d33e8d_7e70_af73_dbb1_5d4832df64b8_24a64e02fb.jpg",
                    "hash": "mediumRetina_f4d33e8d_7e70_af73_dbb1_5d4832df64b8_24a64e02fb_fdbd3dc90d",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 1333,
                    "height": 1776,
                    "size": 180.26,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/mediumRetina_f4d33e8d_7e70_af73_dbb1_5d4832df64b8_24a64e02fb_fdbd3dc90d.jpg"
                },
                "medium": {
                    "name": "medium_f4d33e8d_7e70_af73_dbb1_5d4832df64b8_24a64e02fb.jpg",
                    "hash": "medium_f4d33e8d_7e70_af73_dbb1_5d4832df64b8_24a64e02fb_fdbd3dc90d",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 666,
                    "height": 888,
                    "size": 59.11,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/medium_f4d33e8d_7e70_af73_dbb1_5d4832df64b8_24a64e02fb_fdbd3dc90d.jpg"
                },
                "smallRetina": {
                    "name": "smallRetina_f4d33e8d_7e70_af73_dbb1_5d4832df64b8_24a64e02fb.jpg",
                    "hash": "smallRetina_f4d33e8d_7e70_af73_dbb1_5d4832df64b8_24a64e02fb_fdbd3dc90d",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 690,
                    "height": 920,
                    "size": 62.47,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/smallRetina_f4d33e8d_7e70_af73_dbb1_5d4832df64b8_24a64e02fb_fdbd3dc90d.jpg"
                },
                "small": {
                    "name": "small_f4d33e8d_7e70_af73_dbb1_5d4832df64b8_24a64e02fb.jpg",
                    "hash": "small_f4d33e8d_7e70_af73_dbb1_5d4832df64b8_24a64e02fb_fdbd3dc90d",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 345,
                    "height": 460,
                    "size": 19.93,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/small_f4d33e8d_7e70_af73_dbb1_5d4832df64b8_24a64e02fb_fdbd3dc90d.jpg"
                },
                "microRetina": {
                    "name": "microRetina_f4d33e8d_7e70_af73_dbb1_5d4832df64b8_24a64e02fb.jpg",
                    "hash": "microRetina_f4d33e8d_7e70_af73_dbb1_5d4832df64b8_24a64e02fb_fdbd3dc90d",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 96,
                    "height": 128,
                    "size": 2.85,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/microRetina_f4d33e8d_7e70_af73_dbb1_5d4832df64b8_24a64e02fb_fdbd3dc90d.jpg"
                },
                "micro": {
                    "name": "micro_f4d33e8d_7e70_af73_dbb1_5d4832df64b8_24a64e02fb.jpg",
                    "hash": "micro_f4d33e8d_7e70_af73_dbb1_5d4832df64b8_24a64e02fb_fdbd3dc90d",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "width": 48,
                    "height": 64,
                    "size": 1.28,
                    "path": {},
                    "url": "https://458615.selcdn.ru/rmr_main/micro_f4d33e8d_7e70_af73_dbb1_5d4832df64b8_24a64e02fb_fdbd3dc90d.jpg"
                }
            },
            "provider": "aws-s3",
            "related": [],
            "createdAt": "2020-11-09T14:19:29.253Z",
            "updatedAt": "2020-11-09T14:19:29.257Z",
            "__v": 0,
            "id": "5fa94ff17e93a20027222a2b"
        }
    ],
}