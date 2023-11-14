import React from "react"
import BaseImage from "@components/BaseImage"
import PropType from "prop-types"
import Link from "next/link"

const CardCover = ({ cover, targets, logoStyles, scrollPosition, hRef }) => {
    
    return (
        <React.Fragment>
            {cover && hRef ? (
                <div
                    className={`base-card__field ${
                        logoStyles.backgroundImage ? "base-card__logo" : "base-card__cover"
                    }`}
                    style={logoStyles}
                >
                    {cover.url ? (
                        <Link href={hRef.props} as={`/${hRef.url}`} passHref>
                            <a>
                                <BaseImage
                                    formats={cover}
                                    alt=""
                                    type="card"
                                    scrollPosition={scrollPosition}
                                    targets={targets}
                                    isVideo={cover.mime.substr(0, 5) === "video"}
                                />
                            </a>
                        </Link>
                    ) : null}
                </div>
            ) : null}{" "}
        </React.Fragment>
    )
}

CardCover.propTypes = {
    cover: PropType.shape({
        photo: PropType.object,
        url: PropType.string,
        mime: PropType.string,
    }),
    url: PropType.string,
    targets: PropType.array,
    scrollPosition: PropType.any,
    logoStyles: PropType.shape({
        backgroundImage: PropType.string,
    }),
    hRef: PropType.shape({
        props: PropType.object,
        url: PropType.string,
    }),
}

export default CardCover
