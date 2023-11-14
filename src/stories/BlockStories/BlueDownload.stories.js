import React from 'react';
import BlueDownload from '@components/StylePage/Blocks/BlueDownloadBlock';
import StoryContainer from '@stories/StoryContainer'

export default {
    title: 'Остальное/Скачивание файла ( синий )',
    component: BlueDownload,
};

const TBlueDownload = (args) => (<StoryContainer row><BlueDownload {...args} /></StoryContainer>);

export const BlueDownBlock = TBlueDownload.bind({});
BlueDownBlock.args = { 
    content: `Что должно быть на&nbsp;главном экране приложения для вызова такси&nbsp;&mdash; карта города (как у&nbsp;&laquo;Яндекс.Такси&raquo;) или адресная строка? 
    В&nbsp;какой момент новый клиент должен регистрироваться&nbsp;&mdash; когда только скачал приложение или в&nbsp;процессе первого заказа? 
    И&nbsp;какой сценарий больше подойдет жителю Пензы, который привык звонить в&nbsp;диспетчерскую, а&nbsp;вовсе не&nbsp;пользоваться приложением?
    red_mad_robot и&nbsp;ИТ-команда компании &laquo;Везёт&raquo; рассказывают о&nbsp;том, как им&nbsp;удалось создать приложение, используя продуктовый подход. 
    А&nbsp;потом, преодолев все сложности, передать его для дальнейшей разработки инхаус.`,
    title: 'Заголовок',
    file: {
        url: '',
        size: 769
    },
    isSticky: false
};