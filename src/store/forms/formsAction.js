import formsApi from "@api/forms"
import { formsActionTypes } from "../constant"

export const toggleStateAdBlock = (adBlock) => {
    return {
        type: formsActionTypes.TOGGLE_STATE_ADBLOCK,
        adBlock: adBlock,
    }
}

export const setRecaptchaFlag = (formType, flag) => {
    return {
        type: formsActionTypes.RECAPTCHA_FLAG,
        formType: formType,
        flag: flag,
    }
}

export const setRecaptchaToken = (formType, token) => {
    return {
        type: formsActionTypes.RECAPTCHA_TOKEN,
        formType: formType,
        token: token,
    }
}

export const resetForm = (formType) => {
    return {
        type: formsActionTypes.RESET,
        formType: formType,
    }
}

export const sendRequest = (formType) => {
    return {
        type: formsActionTypes.SEND_REQUEST,
        formType: formType,
    }
}

export const sendComplete = (formType) => {
    return {
        type: formsActionTypes.SEND_SUCCESS,
        formType: formType,
    }
}

export const sendFailed = (formType) => {
    return {
        type: formsActionTypes.SEND_FAIL,
        formType: formType,
    }
}

export const fileRequest = (formType) => {
    return {
        type: formsActionTypes.FILE_REQUEST,
        formType: formType,
    }
}

export const fileUploaded = (id, formType) => {
    return {
        id: id,
        type: formsActionTypes.FILE_UPLOADED,
        formType: formType,
    }
}

export const fileUploadFailed = (formType) => {
    return {
        type: formsActionTypes.FILE_FAIL,
        formType: formType,
    }
}

export const sendModalForm = (data, type) => {
    return async (dispatch) => {
        dispatch(sendRequest(type))

        formsApi
            .postFormData(data, type)
            .then(() => {
                return dispatch(sendComplete(type))
            })
            .catch(() => {
                return dispatch(sendFailed(type))
            })
    }
}

export const sendFormWithFile = (file, inputs, type) => {
    return async (dispatch) => {
        dispatch(fileRequest(type))
        let file_id_array = []

        await formsApi
            .uploadFile(file)
            .then((result) => {
                for(const item of result.data){
                    file_id_array.push({ _id: item.id })
                }
                dispatch(fileUploaded(result.data[0].id, type))
            })
            .catch(() => {
                dispatch(fileUploadFailed(type))
            })

        if (file_id_array.length !== 0) {
            dispatch(sendModalForm({ ...inputs, file: file_id_array }, type))
        } else {
            dispatch(fileUploadFailed(type))
        }
    }
}
