import React from 'react';
import PropTypes from 'prop-types';

import VacancyCard from "@components/Styles/VacancyCard";


const VacancyPageGrid = ({ cards }) => {

    return (
        <div className={'vacancy-wrapper'}>
            <div className={'vacancy-grid'}>
                {
                    cards.map((card) => <VacancyCard key={card._id} card={card} />)
                }
            </div>
        </div>
    )
}

VacancyPageGrid.propTypes = {
    cards: PropTypes.array,
}

export default VacancyPageGrid;