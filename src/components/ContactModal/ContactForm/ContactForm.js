import React, { useRef } from 'react';
import PropTypes from 'prop-types'
import CrossSvg from '@assets/Common/cross.svg'
import PixelArrow from '@assets/Navigation/pixelArrowLeft.svg'

import { formTypes, steps } from './contactConstans';
import { useDispatch, useSelector } from 'react-redux';
import MenuStep from './MenuStep';
import FormStep from './FormStep';
import CloseStep from './CloseStep';
import { setContactModalData, setContactModalStepMenu } from '@store/contactForm/contactFormAction';
import Paragraph from '@components/Styles/Paragraph';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

const ContactForm = ({ toggleFunc }) => {
    const ref = useRef()
    let dispatch = useDispatch()

    let step = useSelector((state) => state.contactForm.step)
    let formType = useSelector((state) => state.contactForm.formType)
    let isSending = useSelector((state) => state.contactForm.isSending)

    const selectedStep = () => {
        switch (step) {
            case steps.menu:
                return (<MenuStep />);

            case steps.form:
                return (<FormStep />);

            case steps.close:
                return (<CloseStep toggleFunc={closeFunc} message={
                    formType === 'hr' ?
                        'Роботы скоро выйдут с тобой на связь.' :
                        'Роботы скоро выйдут с вами на связь'
                } />);

            default:
                return (<MenuStep />);
        }
    }

    const goBackText = (selectedFormType) => {
        switch (selectedFormType) {
            case formTypes.project:
                return "У меня есть задача"

            case formTypes.hr:
                return "Хочу стать роботом"

            case formTypes.media:
                return "Я из медиа"

            case formTypes.partner:
                return "Хочу стать партнером"

            default:
                break;
        }
    }

    const goBack = () => {
        if (isSending) return

        dispatch(setContactModalStepMenu())
    }

    const closeFunc = () => {
        if (isSending) return

        dispatch(setContactModalData({}))
        toggleFunc();
    }

    return (
        <div ref={ref} className="contact">
            <div className="contact__transparency-top"></div>
            <SwitchTransition>
                <CSSTransition
                    key={step}
                    classNames='fade'
                    unmountOnExit
                    addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                >
                    <div className="CSSTransition">
                        {
                            step !== steps.close && <div className="contact__controls">
                                {
                                    step === steps.form && <div className={`contact__back ${isSending ? 'disabled' : ''}`} onClick={goBack}>
                                        <div className="contact__back__arrow">
                                            <PixelArrow />
                                        </div>
                                        <Paragraph.P3> {goBackText(formType)} </Paragraph.P3>
                                    </div>
                                }

                                <div className={`contact__button ${isSending ? 'disabled' : ''}`} onClick={closeFunc}>
                                    <CrossSvg className="cross" />
                                </div>
                            </div>
                        }
                    </div>
                </CSSTransition>
            </SwitchTransition>


            <div className="contact__content">

                <SwitchTransition>
                    <CSSTransition
                        key={step}
                        classNames='fade'
                        unmountOnExit
                        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                    >
                        {selectedStep()}
                    </CSSTransition>
                </SwitchTransition>
            </div>
            <div className="contact__transparency-bottom"></div>

        </div>
    )
}

ContactForm.propTypes = {
    toggleFunc: PropTypes.func.isRequired,
}

export default ContactForm