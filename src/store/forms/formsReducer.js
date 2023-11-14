import { formsActionTypes } from "../constant";

const initialState = {
    adBlock: false,
    hr: {
        recaptcha: false,
        token: null,
        sent: false,
        error: false,
        pending: false,
        file: {
            file_id: null,
            sent: false,
            error: false,
            pending: false,
        },
    },
    media: {
        recaptcha: false,
        token: null,
        sent: false,
        error: false,
        pending: false,
        file: {
            file_id: null,
            sent: false,
            error: false,
            pending: false,
        },
    },
    project: {
        recaptcha: false,
        token: null,
        sent: false,
        error: false,
        pending: false,
        file: {
            file_id: null,
            sent: false,
            error: false,
            pending: false,
        },
    },
    projectAbout: {
        recaptcha: false,
        token: null,
        sent: false,
        error: false,
        pending: false,
        file: {
            file_id: null,
            sent: false,
            error: false,
            pending: false,
        },
    },
    partner: {
        recaptcha: false,
        token: null,
        sent: false,
        error: false,
        pending: false,
        file: {
            file_id: null,
            sent: false,
            error: false,
            pending: false,
        },
    },
    vacancyForm: {
        recaptcha: false,
        token: null,
        sent: false,
        error: false,
        pending: false,
        file: {
            file_id: null,
            sent: false,
            error: false,
            pending: false,
        },
    },
    contactsForm: {
        recaptcha: false,
        token: null,
        sent: false,
        error: false,
        pending: false,
    },
    mailingListHeader: {
        recaptcha: false,
        token: null,
        sent: false,
        error: false,
        pending: false,
    },
    emailSub: {
        recaptcha: false,
        token: null,
        sent: false,
        error: false,
        pending: false,
    },
    fileSub: {
        recaptcha: false,
        token: null,
        sent: false,
        error: false,
        pending: false,
    },
    presentSub: {
        recaptcha: false,
        token: null,
        sent: false,
        error: false,
        pending: false,
    },
};

const FormsReducer = (state = initialState, action) => {
    switch (action.type) {
        case formsActionTypes.SEND_REQUEST:
            return {
                ...state,
                [action.formType]: {
                    ...state[action.formType],
                    pending: true,
                    sent: false,
                    error: false,
                },
            };

        case formsActionTypes.SEND_SUCCESS:
            return {
                ...state,
                [action.formType]: {
                    ...state[action.formType],
                    pending: false,
                    sent: true,
                    error: false,
                },
            };

        case formsActionTypes.SEND_FAIL:
            return {
                ...state,
                [action.formType]: {
                    ...state[action.formType],
                    pending: false,
                    sent: false,
                    error: true,
                },
            };

        case formsActionTypes.FILE_REQUEST:
            return {
                ...state,
                [action.formType]: {
                    ...state[action.formType],
                    file: {
                        file_id: null,
                        pending: true,
                        sent: false,
                        error: false,
                    },
                },
            };

        case formsActionTypes.FILE_UPLOADED:
            return {
                ...state,
                [action.formType]: {
                    ...state[action.formType],
                    file: {
                        file_id: action.id,
                        pending: false,
                        sent: true,
                        error: false,
                    },
                },
            };

        case formsActionTypes.FILE_FAIL:
            return {
                ...state,
                [action.formType]: {
                    ...state[action.formType],
                    error: true,
                    file: {
                        file_id: null,
                        pending: false,
                        sent: false,
                        error: true,
                    },
                },
            };

        case formsActionTypes.RESET:
            return {
                ...state,
                [action.formType]: {
                    pending: false,
                    sent: false,
                    error: false,
                    recaptcha: false,
                    token: null,
                    file: {
                        file_id: null,
                        sent: false,
                        error: false,
                        pending: false,
                    },
                },
            };

        case formsActionTypes.RECAPTCHA_FLAG:
            return {
                ...state,
                [action.formType]: {
                    ...state[action.formType],
                    recaptcha: action.flag,
                },
            };

        case formsActionTypes.RECAPTCHA_TOKEN:
            return {
                ...state,
                [action.formType]: {
                    ...state[action.formType],
                    token: action.token,
                },
            };
        case formsActionTypes.TOGGLE_STATE_ADBLOCK:
            return {
                ...state,
                adBlock: action.adBlock,
            };
        default:
            return state;
    }
};

export { FormsReducer };
