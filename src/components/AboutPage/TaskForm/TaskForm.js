import { Controller, useForm, useFormState } from "react-hook-form";
import useDidUpdateEffect from "@helpers/useDidUpdateEffect";
import FileDropInput from "@components/Inputs/FileDropInput";
import RecaptchaForm from "@components/Recaptcha/Recaptcha";
import PhoneFields from "@components/Fields/PhoneFields";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "@components/Fields/Checkbox";
import Textarea from "@components/Fields/Textarea";
import React, { useEffect, useState } from "react";
import FormBtn from "@components/Button/FormBtn";
import Input from "@components/Fields/TextField";
import Layout from "@components/Layouts/Layout";
import { formTypesApi } from "@api/constants";
import Snackbar from "@components/Snackbar";

import { phoneValidation, checkEmail } from "@components/Fields/validation";
import {
    resetForm,
    sendFormWithFile,
    sendModalForm,
    setRecaptchaFlag,
    setRecaptchaToken,
} from "@store/forms/formsAction";
import "./style.less";
import { setContactModalData } from "@store/contactForm/contactFormAction";

const TaskForm = () => {
    const [success, setSuccess] = useState(false);
    const [dataForm, setDataForm] = useState();
    const [file, setFile] = useState(null);
    const [error, setError] = useState("");
    const type = formTypesApi.projectAbout;
    const dispatch = useDispatch();

    const { handleSubmit, control, reset } = useForm({
        defaultValues: {
            other_contact: "",
            description: "",
            position: "",
            company: "",
            project: "",
            email: "",
            phone: "",
            name: "",
            news: false,
            privacy: false,
        },
        mode: "onTouched",
    });
    const fileDrop = (files) => {
        files.length > 0 ? setFile(files) : setFile(null)
    };

    const { errors } = useFormState({ control });

    const isSent = useSelector((state) => state.forms.projectAbout.sent);
    const isError = useSelector((state) => state.forms.projectAbout.error);
    const recaptchaToken = useSelector((state) => state.forms.projectAbout.token);

    const formSubmit = (data) => {
        setDataForm(data);
        dispatch(setRecaptchaFlag(type, true));
    };

    useDidUpdateEffect(() => {
        if (!recaptchaToken) return;

        const utmLabels = JSON.parse(sessionStorage.getItem('utmLabels'));

        const data = {
            ...dataForm,
            type: type,
            token: recaptchaToken,

            amo_vizit: window.AMOPIXEL_IDENTIFIER_ID,
            ...utmLabels
        };
       
        if (!file) {
            dispatch(sendModalForm(data, type));
            return;
        }
        dispatch(sendFormWithFile(file, data, type));
    }, [recaptchaToken]);

    useEffect(() => {
        if (!isSent) return;
        dispatch(setRecaptchaFlag(type, false));
        dispatch(setRecaptchaToken(type, null));
        dispatch(setContactModalData({}));
        dispatch(resetForm(type));
        reset();
        setSuccess(true);
    }, [isSent]);

    useEffect(() => {
        if (isError) {
            dispatch(setRecaptchaFlag(type, false));
            setError("Что-то пошло не так, попробуйте ещё раз");
            return;
        }
        setError(errors?.privacy?.message);
    }, [errors?.privacy, isError]);

    useEffect(() => {
        if (!success) return;
        const delay = setTimeout(() => setSuccess(false), 3000);

        return () => {
            clearTimeout(delay);
        };
    }, [success]);

    return (
        <Layout>
            <div className="task-form__divider"></div>
            <div className="task-form">
                <div className="task-form__content">
                    <div className="task-form__name">Есть задача для нас?</div>
                    <form
                        className="task-form__form"
                        onSubmit={handleSubmit(formSubmit)}
                    >
                        <RecaptchaForm formType={type} />
                        <Controller
                            name="name"
                            rules={{ required: "Представьтесь, пожалуйста" }}
                            control={control}
                            render={({ field }) => (
                                <Input
                                    placeholder="Как вас зовут?"
                                    value={field.value}
                                    error={errors.name?.message}
                                    onChange={(value) => field.onChange(value)}
                                    {...field}
                                    className="task-form__field"
                                />
                            )}
                        />

                        <Controller
                            name="company"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    placeholder="Из какой вы компании?"
                                    value={field.value}
                                    error={errors.company?.message}
                                    onChange={(value) => field.onChange(value)}
                                    className="task-form__field"
                                    // {...field}
                                />
                            )}
                        />
                        <Controller
                            name="position"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    placeholder="За что вы в ней отвечаете?"
                                    value={field.value}
                                    error={errors.position?.message}
                                    onChange={(value) => field.onChange(value)}
                                    className="task-form__field"
                                    // {...field}
                                />
                            )}
                        />
                        <Controller
                            name="project"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    placeholder="Название проекта (если есть)"
                                    value={field.value}
                                    error={errors.project?.message}
                                    onChange={(value) => field.onChange(value)}
                                    className="task-form__field"
                                    // {...field}
                                />
                            )}
                        />
                        <Controller
                            name="description"
                            rules={{
                                required: "Не зная задачу, мы не сможем помочь",
                            }}
                            control={control}
                            render={({ field }) => (
                                <Textarea
                                    value={field.value}
                                    onChange={(value) => field.onChange(value)}
                                    error={errors.description?.message}
                                    placeholder="Опишите задачу"
                                    className="task-form__field"
                                    {...field}
                                />
                            )}
                        />
                        <div className="task-form__fileDrop">
                            <FileDropInput
                                onChange={fileDrop}
                                isSent={isSent}
                            />
                        </div>
                        <div className="task-form__phone">
                            <Controller
                                name="phone"
                                rules={{
                                    required: "Укажите телефон",
                                    validate: phoneValidation,
                                }}
                                control={control}
                                render={({ field }) => (
                                    <PhoneFields
                                        error={errors.phone?.message}
                                        isSent={isSent}
                                        onChange={(value) =>
                                            field.onChange(value)
                                        }
                                        {...field}
                                    />
                                )}
                            />
                        </div>

                        <Controller
                            name="email"
                            rules={{
                                required:
                                    "Почта нужна, чтобы мы могли связаться",
                                validate: (email) => {
                                    if (!checkEmail(email)) {
                                        return "Напишите почту в формате example@mail.com, чтобы мы могли с вами связаться";
                                    }
                                    return true;
                                },
                            }}
                            control={control}
                            render={({ field }) => (
                                <Input
                                    placeholder="Email"
                                    value={field.value}
                                    error={errors.email?.message}
                                    onChange={(value) => field.onChange(value)}
                                    className="task-form__field"
                                    {...field}
                                />
                            )}
                        />
                        <Controller
                            name="other_contact"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    placeholder="Любой другой удобный способ связи"
                                    value={field.value}
                                    error={errors.other_contact?.message}
                                    onChange={(value) => field.onChange(value)}
                                    className="task-form__field"
                                    // {...field}
                                />
                            )}
                        />

                        <Controller
                            name="privacy"
                            rules={{
                                required:
                                    "Сначала скажите, что вы не против обработки персональных данных :)",
                            }}
                            control={control}
                            render={({ field }) => (
                                <Checkbox
                                    checked={field.value}
                                    onChange={(value) => field.onChange(value)}
                                    className="task-form__privacy"
                                    type="privacy"
                                />
                            )}
                        />

                        <Controller
                            name="news"
                            control={control}
                            render={({ field }) => (
                                <Checkbox
                                    checked={field.value}
                                    onChange={(value) => field.onChange(value)}
                                    className="task-form__news"
                                    type="mailing"
                                />
                            )}
                        />

                        <FormBtn error={error}>Отправить</FormBtn>
                    </form>
                </div>
            </div>
            <Snackbar visibility={success} onChange={() => setSuccess(false)}>
                Спасибо! Роботы скоро выйдут с вами на связь.
            </Snackbar>
            <div className="task-form__divider"></div>
        </Layout>
    );
};
export default TaskForm;
