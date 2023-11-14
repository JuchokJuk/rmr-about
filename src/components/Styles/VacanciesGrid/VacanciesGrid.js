import React from 'react'
import PropTypes from 'prop-types'
import Card from '@components/Styles/Card'

const VacanciesGrid = ({ cards }) => {

    const cardEven = cards.filter((el, index) => {
        return index % 2 === 0
    })

    const cardOdd = cards.filter((el, index) => {
        return Math.abs(index % 2) === 1;
    })

    const cardParser = (card) => {
        return {
            title: card.title,
            date: card.date,
            dateOnPreview: card.dateOnPreview,
            tags: card.tags,
            author: card.author,
            imgOnPreiew: card.imgOnPreiew,
            sizeTitleOnPreiew: card.sizeTitleOnPreiew,
            introTextOnPreview: card.introTextOnPreview,
            url: card.url
        }
    }

    const cardCol1 = cardEven.map((card) => {
        return (<Card.Vacancies key={card._id} {...cardParser(card)} />)
    })

    const cardCol2 = cardOdd.map((card) => {
        return (<Card.Vacancies key={card._id} {...cardParser(card)} />)
    })

    return (
        <div className={`grid-container`}>
            <div className="grid-row">
                <div className="grid-col-3">
                    { cardCol1 }
                </div>

                <div className="grid-col-3">
                    { cardCol2 }
                </div>
            </div>
        </div>)
}

VacanciesGrid.propTypes = {
    cards: PropTypes.array, 
}

export default VacanciesGrid;