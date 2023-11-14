import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { cHTML } from '@helpers/functions';
import { useRetina } from '@helpers/useRetina';
import Description from '@components/Styles/Description';

const Vertical = ({ images, about }) => {

    let caption1Ref = useRef(null)
    let caption2Ref = useRef(null)

    let [styleHeight, setStyle] = useState({ height: 'auto' })

    const caption1 = images.length > 0 && images[0].caption ? cHTML(images[0].caption) : null
    const caption2 = images.length > 0 && images[1].caption ? cHTML(images[1].caption) : null

    const back1 = useRetina({
        image: images[0].image,
        targets: [1248, 888, 450, 328, 328],
        type: "photo"
    }).defaultUrl

    const back2 = useRetina({
        image: images[1].image,
        targets: [1248, 888, 450, 328, 328],
        type: "photo"
    }).defaultUrl


    const computeHeight = () => {

        setStyle({ height: 'auto' })

        if (caption1Ref && caption2Ref && caption1Ref.current && caption2Ref.current) {
            if (caption1Ref.current.clientHeight > caption2Ref.current.clientHeight) {
                setStyle({
                    height: caption1Ref.current.clientHeight
                })
            } else {
                setStyle({
                    height: caption2Ref.current.clientHeight
                })
            }
        }
    } 

    useEffect(() => {
        computeHeight()
    }, [])

    return (
        <div className={`vertical-images-block grid-col-6 ${about ? 'about-vertical' : ''}`}>
            <div className={`vertical-images vertical-images_skeleton ${about ? 'about_page-wrapp' : ''}`}>
                <div className={`vertical-wrapp ${ !about ? 'vertical_sticky' : '' }`}>
                    <div className={`vertical-image__picture ${ about ? 'about_page' : '' }`} style={{ backgroundImage: `url('${back1}')` }} />
                    {
                        caption1 ?
                            <div className="vertical-images-desc" ref={caption1Ref} style={styleHeight}>
                                <Description.D1>
                                    {caption1}
                                </Description.D1>
                            </div> 
                        : null
                    }
                </div>
            </div>


            <div className={`vertical-images vertical-images_skeleton_right ${about ? 'about_page-wrapp' : ''}`} >
                <div className={`vertical-image__picture ${ about ? 'about_page' : '' }`} style={{ backgroundImage: `url('${back2}')` }} />
                {
                    caption2 ?
                        <div className="vertical-images-desc" ref={caption2Ref} style={styleHeight}>
                            <Description.D1>
                                {caption2}
                            </Description.D1>
                        </div> 
                    : null
                }
            </div>
        </div>
    )
}

Vertical.propTypes = {
    images: PropTypes.array,
    about: PropTypes.bool
}

export default Vertical;