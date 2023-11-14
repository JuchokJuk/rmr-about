import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from "react-transition-group"


const PlayBtn = ({ show, onClick }) => {

    return  (<CSSTransition in={!show} timeout={200} unmountOnExit classNames="article-video__playbtn_animation">
                <div className="article-video__play-button" onClick={onClick} />
            </CSSTransition>)
}

PlayBtn.propTypes = {
    show: PropTypes.bool,
    onClick: PropTypes.func
}

export default PlayBtn;