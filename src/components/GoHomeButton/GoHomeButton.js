import React from 'react';
import PropTypes from 'prop-types'
import PixelArrow from '@assets/Navigation/pixelArrowLeft.svg'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Paragraph from '@components/Styles/Paragraph';

const GoHomeButton = ({ vacancy, mainTag })=> {
    const router = useRouter()
    const lastTag = useSelector((state) => state.routing.lastVisitedTag)

    const goBack = () => {
        router.push(composeUrl())
    }

    const composeUrl = () => {
        let href = '/'

        if (vacancy) {
            href = '/career'
        } else if (lastTag) {
            href = `/${lastTag}`
        } else if (mainTag) {
            href = `/${mainTag}`
        } 

        return href
    }

    return (
        <div onClick={goBack} className={`go-home`}>
            <div className="go-home__arrow">
                <PixelArrow />
            </div>
            <Paragraph.P3>
                {
                    vacancy ? 'Назад к предложениям' : 'Назад к главному'
                }
            </Paragraph.P3>
        </div>
    )
}

GoHomeButton.propTypes = {
    vacancy: PropTypes.bool,
    mainTag: PropTypes.string,
}

export default GoHomeButton