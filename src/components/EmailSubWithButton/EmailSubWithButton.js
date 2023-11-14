import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import CustomInput from '@components/Inputs/Input'
import formHooks from '@helpers/FormHooks';
import { useForm } from 'react-hook-form';
import { resetForm, sendModalForm, setRecaptchaFlag } from '@store/forms/formsAction';
import { useDispatch, useSelector } from 'react-redux';
import useDidUpdateEffect from '@helpers/useDidUpdateEffect';
import { logEvent } from '@helpers/metrics';
import { formTypesApi } from '@api/constants';
import Paragraph from '@components/Styles/Paragraph';
import RecaptchaForm from "@components/Recaptcha";


const EmailSubWithButton = ({ content }) => {
    let dispatch = useDispatch()
    const type = formTypesApi.presentSub
    const [success, setSuc] = useState(false)
    const [showForm, setShowForm] = useState(true)
    const [sending, setSending] = useState(false)
    const { inputs, handleInputChange } = formHooks()
    const { register, handleSubmit, errors } = useForm({
        reValidateMode: "onSubmit"
    });

    let isSent = useSelector((state) => state.forms[type].sent)
    let isError = useSelector((state) => state.forms[type].error)
    let recaptchaToken = useSelector((state) => state.forms.presentSub.token)
    let event = 'AboutCompanyDownload'
    let eventData = {}

    useEffect(() => {
        dispatch(setRecaptchaFlag(type, false))
    }, [])

    const formSubmit = () => {
        if (sending || success) {
            return
        }

        setSending(true)
        dispatch(setRecaptchaFlag(type, true))
    }

    useDidUpdateEffect(() => {
        if (!isSent && !isError) return

        dispatch(setRecaptchaFlag(type, false))

        if (isSent && !isError) {
            setSuc(true)
            setShowForm(false)
            setTimeout(() => {
                setShowForm(true)
                setSuc(false)
            }, 1500)
            dispatch(resetForm(type))
            logEvent(event, eventData)
        }

        if (isError) {
            errors.email = true
        }

        setSending(false)
    }, [isSent, isError]);


    useDidUpdateEffect(() => {
        if (recaptchaToken) {
            // ToDo: Process file and email separately
            dispatch(sendModalForm({ ...inputs, token: recaptchaToken }, type))
        }
    }, [recaptchaToken])

    return (
        <div className={`email-sub-w-btn`}>
            <div className="email-sub-w-btn__content">
                <form onSubmit={handleSubmit(formSubmit)}>
                    <RecaptchaForm formType={type} />
                    <div className="email-sub-w-btn__content__header">
                        <Paragraph.P1>
                            {content}
                        </Paragraph.P1>
                    </div>
                    {
                        showForm ? <React.Fragment>
                            <div className='email-sub-w-btn__content__input email-sub_white-input'>
                                <div className='email-sub-w-btn__content__input__wrap'>
                                    <CustomInput
                                        label="Ваш e-mail"
                                        onChange={handleInputChange}
                                        inputValue={inputs.email}
                                        name="email"
                                        register={register}
                                        type={'email'}
                                        pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/}
                                        error={!!errors.email}
                                        required={true}
                                        success={success}
                                    />

                                    <div className="email-sub-w-btn__content__text">
                                        {
                                            errors.email ? "Робот не нашел такую почту"
                                                : ""
                                        }
                                    </div>
                                </div>
                        
                                <button className="btn" type="submit" disabled={!inputs.email}>Запросить</button>
                            </div>
                        
                        </React.Fragment> :  <React.Fragment>
                            <div className='email-sub-w-btn__content__success'>
                                <Paragraph.P1>
                                    Отправлено!
                                </Paragraph.P1>
                            </div>
                        </React.Fragment>
                    }
                </form>
            </div>
        </div>
    )
}

EmailSubWithButton.defaultProps = {
    content: "Подписаться на рассылку",
}

EmailSubWithButton.propTypes = {
    content: PropTypes.string,
}

export default EmailSubWithButton