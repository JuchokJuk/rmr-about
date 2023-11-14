import React, { useRef, useEffect } from 'react';
import PropType from "prop-types";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch, useSelector } from 'react-redux';
import { setRecaptchaToken } from '@store/forms/formsAction';

const RecaptchaForm = ({ size, formType }) => {
    let dispatch = useDispatch()

    const recaptchaRef = useRef(null);
    const SITE_KEY = process.env.NEXT_PUBLIC_SITE_KEY
    let recaptchaFlag = useSelector((state) => state.forms[formType].recaptcha)

    useEffect(() => {
        if (recaptchaFlag) {
            recaptchaRef.current.execute()
        }
    }, [recaptchaFlag])

    const onChange = (token) => {
        if (token) {
            dispatch(setRecaptchaToken(formType, token))
        }
        recaptchaRef.current.reset()
    }

    const onErrored = () => {
        recaptchaRef.current.reset()
    }

    return (
        <>
            <ReCAPTCHA
                ref={recaptchaRef}
                size={size}
                sitekey={SITE_KEY}
                onChange={onChange}
                onErrored={onErrored}
            />
            <div></div>
        </>
    )
}

RecaptchaForm.defaultProps = {
    size: 'invisible',
    recaptchaFlag: false,
}

RecaptchaForm.propTypes = {
    recaptchaFlag: PropType.bool,
    formType: PropType.string.isRequired,
    size: PropType.string,
}

export default RecaptchaForm;