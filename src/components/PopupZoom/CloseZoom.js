import React from 'react';
import PropType from 'prop-types';
import SVGClose from '@assets/Zoom/close.svg';

const CloseZoom = ({ closeModal }) => {
    return (<React.Fragment>
        <div className="zoom__close" onClick={closeModal}>
          <SVGClose />
        </div>
    </React.Fragment>)
}

CloseZoom.propTypes = {
  closeModal: PropType.func
}

export default CloseZoom;