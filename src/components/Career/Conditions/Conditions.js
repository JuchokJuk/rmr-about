import React from 'react'

import PropTypes from 'prop-types';
import Heading from '@components/Styles/Heading';
import Paragraph from '@components/Styles/Paragraph';

import BaseImage from '@components/BaseImage';

const Conditions = ({ scrollHeading, scrollImage, list, scrollPosition }) => {

    const listMarkup = list.map((item) => {
        return(
            <div className="list-item" key={item._id}>
            <div className="list-item__header">
                <Heading.H5>
                    {item.name}
                </Heading.H5>
            </div>

            <Paragraph.P3>
                {item.description}
            </Paragraph.P3>
        </div>
        )
    })

    const columnDifference = 2;
    const sliceFrom = Math.floor(listMarkup.length/2) + columnDifference - 1;
    
    const columnLeft = listMarkup.slice(0,sliceFrom);
    const columnRight = listMarkup.slice(sliceFrom);
    
    return (<React.Fragment>
        <div className="grid-container">
            <div className="conditions grid-col-6">


                <div className="conditions__list conditions__list_indented">

                    <div className="conditions__header">
                        <Heading.H4>
                            {scrollHeading}
                        </Heading.H4>
                    </div>
                    {columnLeft}
                </div>
                <div className="conditions__list">
                    <div className="conditions__image">
                        <div className='conditions__image-wrapper'>
                            <BaseImage formats={scrollImage} scrollPosition={scrollPosition} />
                        </div>
                    </div>
                    {columnRight}
                </div>
            </div>
        </div>

    </React.Fragment>)
}

Conditions.propTypes = {
    scrollImage: PropTypes.object,
    scrollHeading: PropTypes.string,
    list: PropTypes.array,
    scrollPosition: PropTypes.any
}

export default Conditions