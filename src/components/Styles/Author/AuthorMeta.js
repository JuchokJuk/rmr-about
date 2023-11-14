import React from 'react'
import PropType from 'prop-types'
import Description from '../Description';

const AuthorMeta = ({ name, position }) => {

    return (
        <React.Fragment>
            <div className="author__meta">
                <div className="author__name">
                    <Description.D2>
                        {name}
                    </Description.D2>
                </div>
                {
                    position && <div className="author__position"> <Description.D2>{position}</Description.D2> </div>
                }
            </div>
        </React.Fragment>
    )
}

AuthorMeta.propTypes = {
    name: PropType.string,
    position: PropType.string,
}

export default AuthorMeta;