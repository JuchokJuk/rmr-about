import { steps } from '@components/ContactModal/ContactForm/contactConstans'
import { contactFormTypes } from '../constant'

const initialState = {
    step: steps.menu,
    formType: null,
    formData: {},
    isSending: false,
}

const ContactFormReducer = (state = initialState, action) => {

    switch (action.type) {
        case contactFormTypes.SET_STEP:
            return {
                ...state,
                step: action.payload,
            };

        case contactFormTypes.SET_FORM:
            return {
                ...state,
                formType: action.payload,
            };

        case contactFormTypes.SET_DATA:
            return {
                ...state,
                formData: action.payload,
            };

        case contactFormTypes.SET_SENDING:
            return {
                ...state,
                isSending: action.payload,
            };

        default:
            return state
    }

}

export { ContactFormReducer }