import React from 'react';
import PropType from 'prop-types';
import LeftArrowSVG from '@assets/Zoom/arrow-left.svg';

const LeftArrow = ({ prev, isOnePicture }) => {
    return (<React.Fragment>
        <div className={`zoom__left-control ${isOnePicture ? 'zoom_hide-control' : ''}`} onClick={prev}>
          <LeftArrowSVG />
        </div>
    </React.Fragment>)
}

LeftArrow.propTypes = {
  prev: PropType.func,
  isOnePicture: PropType.bool
}

export default LeftArrow;