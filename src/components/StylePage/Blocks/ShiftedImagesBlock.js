import React from 'react';
import Image from "@components/Styles/Image";
import PropTypes from 'prop-types';

const ShiftedImagesBlock = ({ items, captions }) => {

    const [file1, file2] = items;
    const [content1, content2] = captions;

    return (
        <div className="grid-row two-image_padd">
            <Image.Vertical 
                images={[{
                            caption: content1,
                            image: file1 
                        },
                        {
                            caption: content2,
                            image: file2
                        }]} />
        </div>)
}


ShiftedImagesBlock.propTypes = {
    items: PropTypes.array,
    captions: PropTypes.array
}

export default ShiftedImagesBlock;