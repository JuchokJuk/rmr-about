import React from 'react';
import PropTypes from 'prop-types';

import Heading from '@components/Styles/Heading';
import Description from '../Description';

//! Сфигали это буллетс....  
const Bullets = ({ isString, items }) => {

    const bulletList = items.map((item, index) => {
        return (
            <div
                key={`${item.title}_${index}_`} 
                className="grid-col-2 achievements-block">
                    <div className={isString ? "bullets__title-string" : "bullets__title"}>
                        {isString
                            ? <Heading.HA2> {item.title} </Heading.HA2>
                            : <Heading.H3> {item.title} </Heading.H3>
                        }
                    </div>

                    <div className={isString ? "bullets__sub-string" : "bullets__sub"}>
                        {isString
                            ? <Description.D2 isString={isString}> {item.label} </Description.D2>
                            : <Heading.HA2> {item.label} </Heading.HA2>
                        }
                    </div>

                    <div className={isString ? "bullets__desc-string" : "bullets__desc"}>
                        <Description.D2 isString={isString}> {item.value} </Description.D2>
                    </div>
            </div>
        )
    })

    return <React.Fragment>{bulletList}</React.Fragment>
}

Bullets.propTypes = {
    isString: PropTypes.bool,
    items: PropTypes.array.isRequired
}

export default Bullets;