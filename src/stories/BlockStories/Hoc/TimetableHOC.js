import React from 'react';
import TimeTableBlock from '@components/StylePage/Blocks/TimeTableBlock';
import PropTypes from 'prop-types';

const TimeTableHOC = ({ 
    time,
    heading,
    description,
 }) => (<TimeTableBlock items={[
    {
        data: {
            time, 
            heading,
            description,
            members: [
                {
                    "photo": {
                        "_id": "5fe09995747c93001cd8034f",
                        "name": "2020-01-23 17.40.09.jpg",
                        "hash": "2020_01_23_17_40_09_c2adae39cd",
                        "ext": ".jpg",
                        "mime": "image/jpeg",
                        "size": 70.4,
                        "width": 640,
                        "height": 640,
                        "url": "https://458615.selcdn.ru/rmr_main/2020_01_23_17_40_09_c2adae39cd.jpeg",
                        "formats": {
                            "thumbnail": {
                                "name": "thumbnail_2020-01-23 17.40.09.jpg",
                                "hash": "thumbnail_2020_01_23_17_40_09_c2adae39cd",
                                "ext": ".jpeg",
                                "mime": "image/jpeg",
                                "width": 156,
                                "height": 156,
                                "size": 6.91,
                                "path": {},
                                "url": "https://458615.selcdn.ru/rmr_main/thumbnail_2020_01_23_17_40_09_c2adae39cd.jpeg"
                            },
                            "small": {
                                "name": "small_2020-01-23 17.40.09.jpg",
                                "hash": "small_2020_01_23_17_40_09_c2adae39cd",
                                "ext": ".jpg",
                                "mime": "image/jpeg",
                                "width": 460,
                                "height": 460,
                                "size": 40.4,
                                "path": {},
                                "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/small_2020_01_23_17_40_09_c2adae39cd.jpg",
                                "url": "https://458615.selcdn.ru/rmr_main/small_2020_01_23_17_40_09_c2adae39cd.jpg"
                            },
                            "microRetina": {
                                "name": "microRetina_2020-01-23 17.40.09.jpg",
                                "hash": "microRetina_2020_01_23_17_40_09_c2adae39cd",
                                "ext": ".jpg",
                                "mime": "image/jpeg",
                                "width": 128,
                                "height": 128,
                                "size": 5.17,
                                "path": {},
                                "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/microRetina_2020_01_23_17_40_09_c2adae39cd.jpg",
                                "url": "https://458615.selcdn.ru/rmr_main/microRetina_2020_01_23_17_40_09_c2adae39cd.jpg"
                            },
                            "micro": {
                                "name": "micro_2020-01-23 17.40.09.jpg",
                                "hash": "micro_2020_01_23_17_40_09_c2adae39cd",
                                "ext": ".jpg",
                                "mime": "image/jpeg",
                                "width": 64,
                                "height": 64,
                                "size": 1.97,
                                "path": {},
                                "urlCDN": "https://3060c06e-a6a8-4cac-92fc-49f3e4749ede.selcdn.net/micro_2020_01_23_17_40_09_c2adae39cd.jpg",
                                "url": "https://458615.selcdn.ru/rmr_main/micro_2020_01_23_17_40_09_c2adae39cd.jpg"
                            }
                        },
                        "provider": "aws-s3",
                        "related": [],
                        "createdAt": "2020-12-21T12:48:21.292Z",
                        "updatedAt": "2020-12-21T12:48:21.304Z",
                        "__v": 0,
                        "id": "5fe09995747c93001cd8034f"
                    },
                    "name": "Vlad",
                    "lastName": "",
                    "position": "Full Stack Developer"
                }
            ]
        }
    }         
 ]}  />)


TimeTableHOC.propTypes = {
    time: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
}

export default TimeTableHOC;