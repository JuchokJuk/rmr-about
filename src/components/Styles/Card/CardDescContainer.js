import React from 'react';
import PropType from 'prop-types';
import Description from '@components/Styles/Description'


const CardDescContainer = ({ desc }) => {

    return <React.Fragment>
            {desc ? (
            <div className="card-base__field card-base__description">
                <Description.D1>
                    {desc}
                </Description.D1>
            </div>) : ''}
        </React.Fragment>
}

CardDescContainer.propTypes = {
    desc : PropType.string
}

export default CardDescContainer;