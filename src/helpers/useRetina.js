import { useMemo } from "react";
import { getImageMetaResolution } from "@helpers/Adapters/Retina";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const useRetina = ({ image, targets, type }) => {
  const isRetina = useSelector(state => state.checks.isRetina)
  let breakpoint = useSelector((state) => state.breakpoint.breakpoint);
  const target = targets && targets.length !== 0 ? targets[breakpoint] : 888 // ( middle value 1248, *888*, 452)
  return useMemo(() => {
    if (image) {
      return getImageMetaResolution({
        formats: image.formats,
        default: {
          url: image.urlCDN || image.url,
          type: "origin",
          width: image.width
        },
        target,
        isRetina,
        type
      })
    }
  },
  [image, target, isRetina, breakpoint, type])
} 


useRetina.propTypes = {
  image: PropTypes.object,
  targets: PropTypes.number,
  type: PropTypes.string
}

export { useRetina };