import { checkEmail } from "@components/Fields/validation";
import { setRecaptchaFlag, setRecaptchaToken } from "@store/forms/formsAction";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Controller, useForm, useFormState } from "react-hook-form";
import RecaptchaForm from "@components/Recaptcha/Recaptcha";
import { useDispatch, useSelector } from "react-redux";
import IconHeart from "@assets/IconPack/newHeart.svg";
import Checkbox from "@components/Fields/Checkbox";
import FormBtn from "@components/Button/FormBtn";
import Input from "@components/Fields/TextField";
import IconArrow from "@assets/leftArrow.svg";
import { formTypesApi } from "@api/constants";
import { useEffect, useState } from "react";
import { logEvent } from "@helpers/metrics";
import { useCookies } from "react-cookie";
import formsApi from "@api/forms";
import "./style.less";

const Mailing = ({ labelGA }) => {
    const [dataForm, setDataForm] = useState();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [cookies] = useCookies();
    const roistat = {
        roistat_visit: cookies.roistat_visit ? cookies.roistat_visit : null,
    };

    const dispatch = useDispatch();
    const type = formTypesApi.contactsForm;
    const token = useSelector((state) => state.forms.contactsForm.token);

    const { handleSubmit, control, reset } = useForm({
        defaultValues: { email: "", privacy: false },
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
        formsApi
            .postFormData({ ...dataForm, token: token, roistat: roistat }, type)
            .then(() => {
                logEvent(labelGA);
                dispatch(setRecaptchaFlag(type, false));
                dispatch(setRecaptchaToken(type, null));
                setSuccess(true);
                reset();
            })
            .catch(() => {
                setError("Что-то пошло не так, попробуйте ещё раз");
            });
    }, [token]);

    useEffect(() => {
        setError(errors?.privacy?.message);
    }, [errors?.privacy]);

    return (
        <>
            <SwitchTransition>
                <CSSTransition
                    key={success}
                    classNames="fade"
                    unmountOnExit
                    addEndListener={(node, done) =>
                        node.addEventListener("transitionend", done, false)
                    }
                >
                    {!success ? (
                        <div className="mailing">
                            <div className="mailing__name">Наша рассылка</div>
                            <div className="mailing__description">
                                В ней только самое важное: новости, кейсы,
                                немного аналитики. Присылаем два раза в месяц.
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <RecaptchaForm formType={type} />
                                <Controller
                                    rules={
                                        {
                                            required: "Нам нужно знать, куда отправлять письма",
                                            validate: (email) => {
                                                if (!checkEmail(email)) {
                                                    return "Напишите почту в формате example@mail.com, чтобы мы могли отправлять вам письма";
                                                }
                                                return true;
                                            },
                                        }
                                    }
                                    control={control}
                                    name="email"
                                    render={({ field }) => (
                                        <Input
                                            className="mailing__input"
                                            onChange={(value) =>
                                                field.onChange(value)
                                            }
                                            value={field.value}
                                            error={errors.email?.message}
                                            placeholder="Email"
                                            {...field}
                                        />
                                    )}
                                />
                                <Controller
                                    rules={
                                        {
                                            required: "Сначала скажите, что вы не против обработки персональных данных :)",
                                        }
                                    }
                                    control={control}
                                    name="privacy"
                                    render={({ field }) => (
                                        <Checkbox
                                            className="mailing__checkbox"
                                            onChange={(value) =>
                                                field.onChange(value)
                                            }
                                            checked={field.value}
                                        type='privacy'/>
                                    )}
                                />
                                <FormBtn error={error}>Подписаться</FormBtn>
                            </form>
                        </div>
                    ) : (
                        <div className="successful">
                            <div
                                className="successful__arrow"
                                onClick={() => setSuccess(false)}
                            >
                                <IconArrow />
                            </div>
                            <div className="successful__thanks">
                                <div className="successful__thanks--text">
                                    Спасибо!
                                </div>
                                <div className="successful__thanks--heart">
                                    <IconHeart />
                                </div>
                            </div>
                            <div className="successful__description">
                                Отправили на адрес {dataForm.email}{" "}
                                приветственное письмо. Не спамим.
                            </div>
                        </div>
                    )}
                </CSSTransition>
            </SwitchTransition>
        </>
    );
};

export default Mailing;
