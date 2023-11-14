import React from 'react';

import Heading from '@components/Styles/Heading';
import X from '@components/Styles/X';

import PropTypes from 'prop-types'

const Statistics = ({ items }) => {

    const itemList = items.map((item, index) => {

        const key = `${item.title}_${item.label}_${item.value}_${index}`;

        return (
            <div key={key}
                className="grid-col-2 achievements-block">
                <div className="statistic__title">
                    <Heading.H3>{ item.title }</Heading.H3>
                </div>

                <div className="statistic__label">
                    <X.X2> { item.label } </X.X2>
                </div>

                <div className="statistic__value">
                    <X.X2> { item.value } </X.X2>
                </div>
            </div>
        )

    })


    return <React.Fragment>{itemList}</React.Fragment>
}

Statistics.propTypes = {
    items: PropTypes.array.isRequired
}

export default Statistics