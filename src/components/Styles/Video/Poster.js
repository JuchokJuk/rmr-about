import React from 'react';
import PropTypes from 'prop-types'
import { useRetina } from '@helpers/useRetina';

const VideoPoster = ({ poster, show }) => {

    let backgroundUrl = null

    backgroundUrl = useRetina({
        image: poster,
        targets: [1248, 888, 450, 328, 328],
        type: "photo"
    })
    
    const styles = {
        backgroundImage: poster ? `url(${backgroundUrl?.defaultUrl})` : null
    }

    return !show ? <div className="article__poster" style={styles} /> : null
}

VideoPoster.propTypes = {
    poster: PropTypes.object,
    show: PropTypes.bool
}

export default VideoPoster;