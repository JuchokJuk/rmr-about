import React from "react"
import PropTypes from "prop-types"
import { useRetina } from "@helpers/useRetina"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "./style.less"

const BaseImage = ({
    formats,
    alt,
    className,
    targets,
    scrollPosition,
    type,
    isVideo,
    lazyLoad = true,
}) => {
    let image = useRetina({
        image: formats,
        targets,
        type,
    })
    const onErrorFunc = (event) => {
        event.currentTarget.parentNode.classList.add("preloader-wrap")
        event.currentTarget.parentNode.classList.add("error")
        event.currentTarget.classList.add("preloader--img")
    }
    return (
        <React.Fragment>
            {!isVideo && lazyLoad ? (
                <LazyLoadImage
                    src={image.defaultUrl}
                    srcSet={image.srcSet}
                    alt={alt}
                    className={className}
                    onError={onErrorFunc}
                    effect="blur"
                    wrapperClassName="preloader-wrap"
                    scrollPosition={scrollPosition}
                    placeholderSrc="/images/preloader.svg"
                />
            ) : !isVideo && !lazyLoad ? (
                <img src={image.defaultUrl} alt={alt} />
            ) : (
                <video
                    src={image.defaultUrl}
                    autoPlay
                    muted
                    loop
                    className={className}
                    style={{ width: "100%" }}
                />
            )}
        </React.Fragment>
    )
}

BaseImage.defaultProps = {
    format: {},
}

BaseImage.propTypes = {
    defaultUrl: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    formats: PropTypes.object,
    targets: PropTypes.array,
    scrollPosition: PropTypes.any,
    type: PropTypes.string,
    isVideo: PropTypes.bool,
    lazyLoad: PropTypes.bool,
}

export default BaseImage
