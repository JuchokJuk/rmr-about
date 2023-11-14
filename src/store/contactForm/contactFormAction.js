import { steps } from '@components/ContactModal/ContactForm/contactConstans'
import { contactFormTypes } from '../constant'

export const setContactModalStepForm = () => {
    return {
        type: contactFormTypes.SET_STEP,
        payload: steps.form
    }
}

export const setContactModalStepMenu = () => {
    return {
        type: contactFormTypes.SET_STEP,
        payload: steps.menu
    }
}

export const setContactModalStepClose = () => {
    return {
        type: contactFormTypes.SET_STEP,
        payload: steps.close
    }
}

export const setContactModalForm = (state) => {
    return {
        type: contactFormTypes.SET_FORM,
        payload: state
    }
}

export const setContactModalData = (state) => {
    return {
        type: contactFormTypes.SET_DATA,
        payload: state
    }
}

export const setContactModalIsSending = (state) => {
    return {
        type: contactFormTypes.SET_SENDING,
        payload: state
    }
}