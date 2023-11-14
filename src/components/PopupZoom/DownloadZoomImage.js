import React from 'react';
import PropType from 'prop-types';
import DownloadSVG from '@assets/Zoom/zoom-download.svg';

const DownloadZoomImage = ({ images, currentIndex }) => {

    const downloadImage = () => {
      if (images[currentIndex]) {
        window.open(images[currentIndex].url);
      }
    }

    return (
      <React.Fragment>
        <div className="zoom__download" onClick={downloadImage}>
          <DownloadSVG />
        </div>
      </React.Fragment>
    )
}

DownloadZoomImage.propTypes = {
  images: PropType.array,
  currentIndex: PropType.number
}

export default DownloadZoomImage;