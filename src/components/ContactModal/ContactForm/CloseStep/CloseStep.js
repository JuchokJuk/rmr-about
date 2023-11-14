import React from "react"
import PropTypes from "prop-types"

import FromLoveWithRMR from "@assets/IconPack/rmr_heart.svg"
import { SH1 } from "@components/fontSystem/Subheading/Subheading"
import { P1Long } from "@components/fontSystem/Paragraph/Paragraph"

const CloseStep = ({ toggleFunc, message }) => {
    return (
        <div className="close-step-scroll-wrapper">
            <div className="close-step-wrapper">

                <div className="close-step">
                    <div className="close-step__box">
                        <FromLoveWithRMR className="close-step__box__icon" />


                        <div className="close-step__box__heading">
                            <SH1>Спасибо!</SH1>
                        </div>

                        <div className="close-step__box__description">
                            <P1Long>{message}</P1Long>
                        </div>
                    </div>

                    <div className="close-step__btn">
                        <button onClick={toggleFunc} className="btn-submit">
                            Закрыть
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

CloseStep.propTypes = {
    toggleFunc: PropTypes.func.isRequired,
}

export default CloseStep
