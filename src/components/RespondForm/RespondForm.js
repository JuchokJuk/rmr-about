import RecaptchaForm from "@components/Recaptcha";
import FileDropInput from "@components/Inputs/FileDropInput";
import Interweave from "interweave";
import {
    resetForm,
    sendFormWithFile,
    sendModalForm,
    setRecaptchaFlag,
} from "@store/forms/formsAction";
import { useForm, useFormState } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Controller } from "react-hook-form";
import { phoneValidation, checkEmail } from "@components/Fields/validation";
import Checkbox from "@components/Fields/Checkbox";
import Input from "@components/Fields/TextField";
import PhoneFields from "@components/Fields/PhoneFields";
import Textarea from "@components/Fields/Textarea";
import FormBtn from "@components/Button/FormBtn";
import useDidUpdateEffect from "@helpers/useDidUpdateEffect";
import { logEvent } from "@helpers/metrics";
import { formTypesApi } from "@api/constants";
import FomrSuccessScreen from "@components/FormSuccessScreen";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const RespondForm = ({ id, title = "" }) => {
    const type = formTypesApi.vacancyForm;
    const dispatch = useDispatch();

    let isSent = useSelector((state) => state.forms.vacancyForm.sent);
    let isError = useSelector((state) => state.forms.vacancyForm.error);
    let token = useSelector((state) => state.forms.vacancyForm.token);

    const [cookies] = useCookies();
    const roistat = {
        roistat_visit: cookies.roistat_visit ? cookies.roistat_visit : null,
    };

    const [dataForm, setDataForm] = useState();
    const [error, setError] = useState("");

    const { handleSubmit, control, reset } = useForm({
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            position: "",
            about: "",
            file: [],
            news: false,
            privacy: false,
        },
        mode: "onTouched",
        shouldFocusError: true,
    });

    const { errors } = useFormState({ control });

    const onSubmit = (data) => {
        dispatch(setRecaptchaFlag(type, true));
        setDataForm(data);
    };

    useEffect(() => {
        if (!token) return;

        const { file, ...data } = dataForm;
        dispatch(
            sendFormWithFile(
                dataForm.file,
                {
                    ...data,
                    token: token,
                    vacancy: id,
                    // news: news,
                    roistat: roistat,
                },
                type
            )
        );
    }, [token]);

    useEffect(() => {
        setError(errors?.privacy?.message);
    }, [errors?.privacy]);

    useDidUpdateEffect(() => {
        if (!isSent && !isError) return;

        dispatch(setRecaptchaFlag(type, false));

        if (isSent && !isError) {
            logEvent("VacancyPage", {
                Text: dataForm.about,
                File: dataForm.file ? true : false,
                Vacancy: title, //! Метрика для формы на списке вакансий
            });
        }
    }, [isSent, isError]);

    function closeSuccessScreen() {
        reset();
        dispatch(resetForm(type));
    }

    return (
        <SwitchTransition>
            <CSSTransition
                key={isSent}
                classNames="fade"
                unmountOnExit
                addEndListener={(node, done) =>
                    node.addEventListener("transitionend", done, false)
                }
            >
                {isSent ? (
                    <FomrSuccessScreen
                        close={closeSuccessScreen}
                        message={"Роботы скоро выйдут с тобой на связь."}
                    />
                ) : (
                    <div className="respond-form-wrapper">
                        <div className="form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <RecaptchaForm formType={type} />
                                <div className="form__block">
                                    <div className="form__block__header">
                                        <span>
                                            <Interweave
                                                content={
                                                    title
                                                        ? `Я — ${title}, хочу стать роботом `
                                                        : `По моему профилю нет вакансий, но я всё равно хочу стать роботом`
                                                }
                                            ></Interweave>
                                        </span>
                                    </div>

                                    <div className="form__block__inputs">
                                        <Controller
                                            name="name"
                                            rules={{
                                                required:
                                                    "Представься, пожалуйста",
                                            }}
                                            control={control}
                                            render={({ field }) => (
                                                <Input
                                                    placeholder="Как тебя зовут?"
                                                    value={field.value}
                                                    error={errors.name?.message}
                                                    onChange={(value) =>
                                                        field.onChange(value)
                                                    }
                                                    className="input-wrap"
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </div>

                                    <div className="short_inputs_block">
                                        <div className="form__block__inputs short">
                                            <Controller
                                                name="phone"
                                                rules={{
                                                    validate: (value) => {
                                                        if (!value) return true;
                                                        return phoneValidation(
                                                            value
                                                        );
                                                    },
                                                }}
                                                control={control}
                                                render={({ field }) => (
                                                    <PhoneFields
                                                        value={field.value}
                                                        error={
                                                            errors.phone
                                                                ?.message
                                                        }
                                                        onChange={(value) =>
                                                            field.onChange(
                                                                value
                                                            )
                                                        }
                                                        className={"input-wrap"}
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </div>
                                        <div className="form__block__inputs short">
                                            <Controller
                                                name="email"
                                                rules={{
                                                    required:
                                                        "Почта нужна, чтобы мы могли связаться",
                                                    validate: (email) => {
                                                        if (
                                                            !checkEmail(email)
                                                        ) {
                                                            return "Напиши почту в формате example@mail.com, чтобы мы могли с тобой связаться";
                                                        }
                                                        return true;
                                                    },
                                                }}
                                                control={control}
                                                render={({ field }) => (
                                                    <Input
                                                        placeholder="Email"
                                                        value={field.value}
                                                        error={
                                                            errors.email
                                                                ?.message
                                                        }
                                                        onChange={(value) =>
                                                            field.onChange(
                                                                value
                                                            )
                                                        }
                                                        className="input-wrap"
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </div>
                                    </div>

                                    {!id && (
                                        <div className="form__block__inputs">
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
                                                        error={
                                                            errors.position
                                                                ?.message
                                                        }
                                                        onChange={(value) =>
                                                            field.onChange(
                                                                value
                                                            )
                                                        }
                                                        className="input-wrap"
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </div>
                                    )}

                                    <div className="form__block__inputs">
                                        <Controller
                                            name="about"
                                            rules={{ required: "Это важно" }}
                                            control={control}
                                            render={({ field }) => (
                                                <Textarea
                                                    value={field.value}
                                                    onChange={(value) =>
                                                        field.onChange(value)
                                                    }
                                                    error={
                                                        errors.about?.message
                                                    }
                                                    placeholder="Пара слов о тебе"
                                                    underText="Цели и достижения, зарплатные ожидания, ссылка на портфолио/github и почему нам нужно работать вместе"
                                                    className="input-wrap"
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </div>

                                    <div className="dropzone-wrapper">
                                        <Controller
                                            name="file"
                                            rules={{
                                                required:
                                                    "Резюме нужно, чтобы мы могли ближе познакомиться с твоим рабочим опытом",
                                            }}
                                            control={control}
                                            render={({ field }) => (
                                                <FileDropInput
                                                    onChange={(value) =>
                                                        field.onChange(value)
                                                    }
                                                    textPlaceholder="Добавить резюме"
                                                    error={errors.file?.message}
                                                />
                                            )}
                                        />
                                    </div>

                                    <div className="checks-wrapper">
                                        <Controller
                                            name="privacy"
                                            rules={{
                                                required:
                                                    "Сначала скажи, что ты не против обработки персональных данных :)",
                                            }}
                                            control={control}
                                            render={({ field }) => (
                                                <Checkbox
                                                    checked={field.value}
                                                    onChange={(value) =>
                                                        field.onChange(value)
                                                    }
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
                                                    onChange={(value) =>
                                                        field.onChange(value)
                                                    }
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
                    </div>
                )}
            </CSSTransition>
        </SwitchTransition>
    );
};

export default RespondForm;
