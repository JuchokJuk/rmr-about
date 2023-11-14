import FileDropInput from "@components/Inputs/FileDropInput";
import RecaptchaForm from "@components/Recaptcha";

import { SH1 } from "@components/fontSystem/Subheading/Subheading";

import {
    resetForm,
    sendFormWithFile,
    sendModalForm,
    setRecaptchaFlag,
    setRecaptchaToken,
} from "@store/forms/formsAction";
import { useForm, useFormState } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Controller } from "react-hook-form";
import Checkbox from "@components/Fields/Checkbox";
import Input from "@components/Fields/TextField";
import PhoneFields from "@components/Fields/PhoneFields";
import Textarea from "@components/Fields/Textarea";
import FormBtn from "@components/Button/FormBtn";
import useDidUpdateEffect from "@helpers/useDidUpdateEffect";
import {
    setContactModalIsSending,
    setContactModalStepClose,
} from "@store/contactForm/contactFormAction";
import { logEvent } from "@helpers/metrics";
import { checkEmail, phoneValidation } from "@components/Fields/validation";

const FormStep = () => {
    const statusAdBlock = useSelector((state) => state.forms.adBlock);

    const [cookies] = useCookies();
    const roistat = {
        roistat_visit: cookies.roistat_visit ? cookies.roistat_visit : null,
    };

    const metricsLabels = {
        project: "ApplicationBusiness",
        hr: "VacancyContact",
        media: "ApplicationMedia",
        partner: "ApplicationPartners",
    };

    const [dataForm, setDataForm] = useState();
    const [error, setError] = useState("");
    const type = useSelector((state) => state.contactForm.formType);
    const token = useSelector((state) => state.forms[type].token);
    const isSent = useSelector((state) => state.forms[type].sent);
    const isError = useSelector((state) => state.forms[type].error);
    const dispatch = useDispatch();

    const { handleSubmit, control, reset } = useForm({
        defaultValues: {
            name: "",
            company: "",
            position: "",
            description: "",
            project: "",
            file: [],
            phone: "",
            email: "",
            other_contact: "",
            news: false,
            privacy: false,
        },
        mode: "onTouched",
    });

    const { errors } = useFormState({ control });

    const formSubmit = (data) => {
        setDataForm(data);
        dispatch(setRecaptchaFlag(type, true));
    };

    useDidUpdateEffect(() => {
        if (!token) return;

        let amoFields = {};

        if (type === "project") {
            const utmLabels = JSON.parse(sessionStorage.getItem("utmLabels"));

            amoFields = {
                amo_vizit: window.AMOPIXEL_IDENTIFIER_ID,
                ...utmLabels,
            };
        }

        if (!dataForm?.file.length) {
            dispatch(
                sendModalForm(
                    {
                        ...dataForm,
                        type: type,
                        token: token,
                        statusAdBlock: statusAdBlock,
                        roistat: roistat,

                        ...amoFields,
                    },
                    type
                )
            );
            return;
        }

        const { file, ...data } = dataForm;
        dispatch(
            sendFormWithFile(
                dataForm.file,
                {
                    ...data,
                    type: type,
                    token: token,
                    statusAdBlock: statusAdBlock,
                    roistat: roistat,

                    ...amoFields,
                },
                type
            )
        );
    }, [token]);

    useEffect(() => {
        if (!isSent) return;
        dispatch(setRecaptchaFlag(type, false));
        dispatch(setRecaptchaToken(type, null));
        dispatch(setContactModalIsSending(false));
        dispatch(setContactModalStepClose());
        dispatch(resetForm(type));
        reset();

        if (dataForm) {
            let eventData = {
                Text: dataForm.description,
                File: dataForm?.file ? true : false,
            };
            if (type != "hr") {
                eventData.CompanyName = dataForm.company;
                eventData.RoleName = dataForm.position;
            }
            logEvent(metricsLabels[type], eventData);
        }
    }, [isSent]);

    useEffect(() => {
        if (isError) {
            dispatch(setRecaptchaFlag(type, false));
            setError(
                type === "hr"
                    ? "Что-то пошло не так, попробуй ещё раз"
                    : "Что-то пошло не так, попробуйте ещё раз"
            );
            return;
        }
        setError(errors?.privacy?.message);
    }, [errors?.privacy, isError]);

    const form = {
        project: (
            <>
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
                            className="input-wrap"
                            {...field}
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
                            className="input-wrap"
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
                            className="input-wrap"
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
                            className="input-wrap"
                            // {...field}
                        />
                    )}
                />
                <Controller
                    name="description"
                    rules={{ required: "Не зная задачу, мы не сможем помочь" }}
                    control={control}
                    render={({ field }) => (
                        <Textarea
                            value={field.value}
                            onChange={(value) => field.onChange(value)}
                            error={errors.description?.message}
                            placeholder="Опишите задачу"
                            className="input-wrap"
                            {...field}
                        />
                    )}
                />
            </>
        ),
        media: (
            <>
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
                            className="input-wrap"
                            {...field}
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
                            className="input-wrap"
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
                            className="input-wrap"
                            // {...field}
                        />
                    )}
                />
                <Controller
                    name="description"
                    rules={{ required: "Это важно" }}
                    control={control}
                    render={({ field }) => (
                        <Textarea
                            value={field.value}
                            onChange={(value) => field.onChange(value)}
                            error={errors.description?.message}
                            placeholder="О чём хотели бы поговорить?"
                            className="input-wrap"
                            {...field}
                        />
                    )}
                />
            </>
        ),
        hr: (
            <>
                <Controller
                    name="name"
                    rules={{ required: "Представься, пожалуйста" }}
                    control={control}
                    render={({ field }) => (
                        <Input
                            placeholder="Как тебя зовут?"
                            value={field.value}
                            error={errors.name?.message}
                            onChange={(value) => field.onChange(value)}
                            className="input-wrap"
                            {...field}
                        />
                    )}
                />
                <Controller
                    name="position"
                    rules={{
                        required:
                            "Расскажи, чтобы мы знали, кому из руководителей переслать твоё сообщение",
                    }}
                    control={control}
                    render={({ field }) => (
                        <Input
                            placeholder="Кем хочешь у нас работать?"
                            value={field.value}
                            error={errors.position?.message}
                            onChange={(value) => field.onChange(value)}
                            className="input-wrap"
                            {...field}
                        />
                    )}
                />
                <Controller
                    name="description"
                    rules={{ required: "Это важно" }}
                    control={control}
                    render={({ field }) => (
                        <Textarea
                            value={field.value}
                            onChange={(value) => field.onChange(value)}
                            error={errors.description?.message}
                            placeholder="Пара слов о тебе"
                            underText="Цели и достижения, зарплатные ожидания, ссылка на портфолио/github и почему нам нужно работать вместе"
                            className="input-wrap"
                            {...field}
                        />
                    )}
                />
            </>
        ),
        partner: (
            <>
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
                            className="input-wrap"
                            {...field}
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
                            className="input-wrap"
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
                            className="input-wrap"
                            // {...field}
                        />
                    )}
                />
                <Controller
                    name="description"
                    rules={{ required: "Это важно" }}
                    control={control}
                    render={({ field }) => (
                        <Textarea
                            value={field.value}
                            onChange={(value) => field.onChange(value)}
                            error={errors.description?.message}
                            placeholder="Как вы видите партнёрство с нами?"
                            className="input-wrap"
                            {...field}
                        />
                    )}
                />
            </>
        ),
    };

    return (
        <div className="form-step">
            <div className="form-step__heading">
                <SH1>
                    {type !== "hr"
                        ? "Давайте познакомимся"
                        : "Давай познакомимся"}
                </SH1>
            </div>

            <form onSubmit={handleSubmit(formSubmit)}>
                <div className="form-step__forms">
                    {form[type]}
                    <Controller
                        name="file"
                        rules={{
                            required:
                                type == "hr"
                                    ? "Резюме нужно, чтобы мы могли ближе познакомиться с твоим рабочим опытом"
                                    : false,
                        }}
                        control={control}
                        render={({ field }) => (
                            <FileDropInput
                                onChange={(value) => field.onChange(value)}
                                textPlaceholder={
                                    type == "hr"
                                        ? "Добавить резюме"
                                        : "Добавить файл"
                                }
                                error={errors.file?.message}
                            />
                        )}
                    />

                    <Controller
                        name="phone"
                        rules={{
                            required:
                                type !== "hr" ? "Укажите телефон" : undefined,
                            validate: (value) => {
                                if (!value && type === "hr") return true;
                                return phoneValidation(value);
                            },
                        }}
                        control={control}
                        render={({ field }) => (
                            <PhoneFields
                                error={errors.phone?.message}
                                onChange={(value) => field.onChange(value)}
                                className={"input-wrap"}
                                {...field}
                            />
                        )}
                    />
                    <Controller
                        name="email"
                        rules={{
                            required: "Почта нужна, чтобы мы могли связаться",
                            validate: (email) => {
                                if (!checkEmail(email)) {
                                    if (type === "hr") {
                                        return "Напиши почту в формате example@mail.com, чтобы мы могли с тобой связаться";
                                    } else {
                                        return "Напишите почту в формате example@mail.com, чтобы мы могли с вами связаться";
                                    }
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
                                className="input-wrap"
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
                                className="input-wrap"
                                // {...field}
                            />
                        )}
                    />

                    <RecaptchaForm formType={type} />

                    <div className={"checks-wrapper"}>
                        <Controller
                            name="privacy"
                            rules={{
                                required:
                                    type === "hr"
                                        ? "Сначала скажи, что ты не против обработки персональных данных :)"
                                        : "Сначала скажите, что вы не против обработки персональных данных :)",
                            }}
                            control={control}
                            render={({ field }) => (
                                <Checkbox
                                    checked={field.value}
                                    onChange={(value) => field.onChange(value)}
                                    className="mailing__checkbox"
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
                                    className="mailing__checkbox"
                                    type="mailing"
                                />
                            )}
                        />
                    </div>
                    <FormBtn error={error}>Отправить</FormBtn>
                </div>
            </form>
        </div>
    );
};

export default FormStep;
