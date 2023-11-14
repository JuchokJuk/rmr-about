import React from 'react';

import Paragraph from '@components/Styles/Paragraph';
import CallbackSVG from '@assets/Callback/callback.svg'
import { logEvent } from '@helpers/metrics';
import { useDispatch } from 'react-redux';
import { showContactModal, toggleScrollLock } from '@store/modals/modalsAction';

const Callback = () => {
    let dispatch = useDispatch()

    const contactClickHandler = () => {
        logEvent('ContactUsArticle')
        dispatch(showContactModal(true))
        dispatch(toggleScrollLock(true))
    }

    return (
        <div className="callback" onClick={contactClickHandler}>
            <div className="callback__content">
                <Paragraph.P1>
                    Связаться с нами
                </Paragraph.P1>
                <span className="callback__icon">
                    <CallbackSVG />
                </span>
            </div>
        </div>
    )
}

export default Callback;