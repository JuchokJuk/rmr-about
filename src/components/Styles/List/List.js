import React from 'react'
import PropTypes from 'prop-types'
import Paragraph from '../Paragraph';

const List = ({ items, isDecimal, isBlack }) => {

    if (isDecimal) {
        return (
            <ol className="article-list-decimal">
                { items.map((item, index) => {
                    return (
                    <li key={"list-decimal" + index}
                        className={`article-list__item ${isBlack ? 'item-before-black' : ''}`}>
                            <span className="list__item_count">
                                <Paragraph.P1>
                                    {index + 1}_
                                </Paragraph.P1>
                            </span>
                            <Paragraph.P1>
                                {item}
                            </Paragraph.P1>
                    </li>)
                })}
            </ol>
        )
    }
    else {
        return (
            <ul className="article-list">
                {items.map((item, index) => {
                    return (
                    <li key={"list" + index}
                        className={`article-list__item ${isBlack ? 'item-before-black' : ''}`}>
                            <Paragraph.P1>
                                {item}
                            </Paragraph.P1>
                    </li>)
                })}
            </ul>
        )
    }
}

List.propTypes = {
    items: PropTypes.array,
    isDecimal: PropTypes.bool,
    isBlack: PropTypes.bool,
}

export default List;