import React, { useEffect } from "react";

import PropTypes from "prop-types";


import { useSelector, useDispatch } from 'react-redux';
import { pingSizes, setSizes } from '@store/sidebar/sidebarAction';
import { withResizeDetector } from "react-resize-detector";

import SideCardHeading from './SideCardHeading'
// import SideCardPubDate from './SideCardPubDate'
import SideCardCover from './SideCardCover'
import SideCardDesc from './SideCardDesc'
import SideCardAuthor from "./SideCardAuthor";


const SideCard = ({
  header,
  // timestamp,
  imageUrl,
  text,
  author,
  url,
  myIndex,
  scrollPosition,
  height
}) => {
  let dispatch = useDispatch();

  let sizes = useSelector((state) =>
    state.sidebar.sizes ? state.sidebar.sizes : []
  );

  useEffect(() => {
    if (myIndex !== undefined && height) {
      sizes[myIndex] = height + 64 // padding
      dispatch(setSizes(sizes))
      dispatch(pingSizes())
    }
  }, [height])

  const  displayMailingHeader = useSelector((state) => state.modals.emailingHeader.display)
  return (
    <a
      // ref={cardRef}
      className={displayMailingHeader ? "side-card side-card-emailingShow" : "side-card"}
      target="_blank"
      rel="noreferrer"
      {...(url ? { href: url } : {})}
    >
      <div className="side-card__container">

        <SideCardHeading  header={header} />
        {/*<SideCardPubDate  timestamp={timestamp} />*/}
        <SideCardCover    image={imageUrl} scrollPosition={scrollPosition}  />
        <SideCardDesc     desc={text} />
        <SideCardAuthor   author={author} scrollPosition={scrollPosition} />

      </div>
    </a>
  );
};

SideCard.propTypes = {
  header: PropTypes.string.isRequired,
  timestamp: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  imageUrl: PropTypes.object,
  text: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.string,
    photo: PropTypes.object,
  }),
  url: PropTypes.string,
  myIndex: PropTypes.number,
  scrollPosition: PropTypes.any,
  height: PropTypes.number,
};

export default withResizeDetector(SideCard);
