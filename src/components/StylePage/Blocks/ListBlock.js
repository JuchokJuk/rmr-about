import React from 'react';
import List from "@components/Styles/List";
import PropTypes from 'prop-types';

const ListBlock = ({ items, style, color }) => {
    let isDecimal = style === 'ordered';
    let isBlack = color === 'blackList';

    return (
        <div className={`grid-row list_padd`}>
            <div className="grid-col-6">
                <List 
                    items={items} 
                    isDecimal={isDecimal}
                    isBlack={isBlack}/>
            </div>
        </div>)
}
    

ListBlock.propTypes = {
    items: PropTypes.array.isRequired,
    style: PropTypes.string,
    color: PropTypes.string,
}

export default ListBlock;