import React from 'react';
import PropType from 'prop-types';
import RightArrowSVG from '@assets/Zoom/arrow-right.svg';

const RightArrow = ({ next, isOnePicture}) => {
    return (<React.Fragment>
        <div className={`zoom__right-control ${isOnePicture ? 'zoom_hide-control' : ''}`} onClick={next}>
          <RightArrowSVG />
        </div>
    </React.Fragment>)
}

RightArrow.propTypes = {
  next: PropType.func,
  isOnePicture: PropType.bool
}

export default RightArrow;