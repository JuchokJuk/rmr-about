import React from 'react';
import NotFoundIcon from '@assets/notfound.svg';

const NoResults = () => {
    return (
        <div className={'noresults'}>
            <div className={'noresults__top'}>
                Ничего не нашлось
            </div>
            <div className={'noresults__bottom'}>
                Попробуйте изменить формулировку
            </div>
            <NotFoundIcon className={'noresults__icon'}/>
        </div>
    )
}

export default NoResults