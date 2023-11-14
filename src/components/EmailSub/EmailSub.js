import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import CustomInput from '@components/Inputs/Input'
import formHooks from '@helpers/FormHooks';
import { useForm } from 'react-hook-form';
import {resetForm, sendModalForm, setRecaptchaFlag} from '@store/forms/formsAction';
import { useDispatch, useSelector } from 'react-redux';
import useDidUpdateEffect from '@helpers/useDidUpdateEffect';
import { logEvent } from '@helpers/metrics';
import { formTypesApi } from '@api/constants';
import Paragraph from '@components/Styles/Paragraph';
import RecaptchaForm from "@components/Recaptcha";
import Heading from '@components/Styles/Heading';

const EmailSub = ({ content, articleId, file, white }) => {
    let dispatch = useDispatch()
    const type = file ? formTypesApi.fileSub : formTypesApi.emailSub
    const [success, setSuc] = useState(false)
    const [sending, setSending] = useState(false)
    const { inputs, handleInputChange } = formHooks()
    const { register, handleSubmit, errors } = useForm({
        reValidateMode: "onSubmit"
    });

    let isSent = useSelector((state) => state.forms[type].sent)
    let isError = useSelector((state) => state.forms[type].error)
    let article = useSelector(state => state.articles)
    let recaptchaToken = useSelector((state) => state.forms[type].token)
    let event = 'NewsletterMain'
    let eventData = {}

    if (article.isFulfilled && !article.isRejected) {
        event = file ? 'SendFile' : 'NewsletterArticle'
        eventData = {
            Author: article.data.author ? article.data.author.fullname : '',
            Tags: article.data.tags,
            ArticleName: article.data.header ? article.data.header.title : '',
        }
    }

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
            dispatch(sendModalForm({ ...inputs, article: { _id: articleId }, token: recaptchaToken }, type))
        }
    }, [recaptchaToken])

    return (
        <div className={`email-sub ${white ? "email_sub_white" : ''}`}>
            <div className="email-sub__content">
                <form onSubmit={handleSubmit(formSubmit)}>
                    <RecaptchaForm formType={type} />
                    <div className="email-sub__content__header">
                        { 
                            white ? 
                                <Paragraph.P1>
                                    {content}
                                </Paragraph.P1> 
                            :   <Heading.H4>
                                    {content}
                                </Heading.H4>
                        } 
                    </div>

                    <div className={`email-sub__content__input ${white ? 'email-sub_white-input': ''}`}>
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
                            successLabel="Вы подписались!"
                            emailSub
                        />
                    </div>
                    { !white ? 
                        <div className="email-sub__content__text">
                            {
                                file ? "Укажите свой e-mail и мы вышлем на него исследование"
                                : "Текст о том что не рассылаем рекламу и спам, после каждого исправления, даже если это было всего."
                            }
                        </div> : null 
                    }
                </form>
            </div>
        </div>
    )
}

EmailSub.defaultProps = {
    content: "Подписаться на рассылку",
    articleId: '',
    file: false
}

EmailSub.propTypes = {
    content: PropTypes.string,
    articleId: PropTypes.string,
    file: PropTypes.bool, 
    white: PropTypes.bool
}

export default EmailSub