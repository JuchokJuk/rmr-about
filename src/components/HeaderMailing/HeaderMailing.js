import { checkEmail } from "@components/Fields/validation";
import { setRecaptchaFlag, setRecaptchaToken } from "@store/forms/formsAction";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Controller, useForm, useFormState } from "react-hook-form";
import RecaptchaForm from "@components/Recaptcha/Recaptcha";
import IconClose from "@assets/Common/mailingClose.svg";
import { useDispatch, useSelector } from "react-redux";
import IconHeart from "@assets/IconPack/newHeart.svg";
import Checkbox from "@components/Fields/Checkbox";
import Input from "@components/Fields/TextField";
import FormBtn from "@components/Button/FormBtn";
import { formTypesApi } from "@api/constants";
import { useEffect, useState } from "react";
import { logEvent } from "@helpers/metrics";
import { useCookies } from "react-cookie";
import ReactModal from "react-modal";
import formsApi from "@api/forms";
import "./HeaderMailing.less";
import { toggleDisplayEmailingHeader } from "@store/modals/modalsAction";

const HeaderMailing = ({ layout2 = false }) => {
    const [visibilityHeader, setVisibilityHeader] = useState(false);
    const [visibilityModal, setVisibilityModal] = useState(false);
    const [error, setError] = useState("");
    const [cookies] = useCookies();
    const dispatch = useDispatch();

    const roistat = {
        roistat_visit: cookies.roistat_visit ? cookies.roistat_visit : null,
    };

    // проверка на отображенние плашки с рассылкой
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("mailing"));
        if (!data) {
            setVisibilityHeader(true);
            dispatch(toggleDisplayEmailingHeader(true));
            return;
        }
        if (data && data.count == 3) {
            dispatch(toggleDisplayEmailingHeader(false));
            setVisibilityHeader(false);
            return;
        }
        //проверяем прошло 7 дней после закрытия рассылки или нет
        const check = +new Date() - data.date > 6.048e8;
        if (!check) {
            dispatch(toggleDisplayEmailingHeader(data.status));
            setVisibilityHeader(data.status);
            return;
        }
        if (check && data.count == 1) {
            const newDate = {
                date: +new Date(),
                status: true,
                count: 2,
            };
            localStorage.setItem("mailing", JSON.stringify(newDate));
            dispatch(toggleDisplayEmailingHeader(newDate.status));
            setVisibilityHeader(newDate.status);
        }
        dispatch(toggleDisplayEmailingHeader(data.status));
    }, []);

    //закрытие плашки с рассылкой
    const close = () => {
        const dataLocal = JSON.parse(localStorage.getItem("mailing"));
        if (dataLocal) {
            const data = {
                date: +new Date(),
                status: false,
                count: 3,
            };
            localStorage.setItem("mailing", JSON.stringify(data));
            dispatch(toggleDisplayEmailingHeader(data.status));
            setVisibilityHeader(data.status);
            return;
        }
        const data = {
            date: +new Date(),
            status: false,
            count: 1,
        };
        localStorage.setItem("mailing", JSON.stringify(data));
        setVisibilityHeader(data.status);
        dispatch(toggleDisplayEmailingHeader(data.status));
    };

    //запрос на подписку
    const type = formTypesApi.mailingListHeader;
    const token = useSelector((state) => state.forms.mailingListHeader.token);

    const [dataForm, setDataForm] = useState();
    const [success, setSuccess] = useState(false);

    const { handleSubmit, control, reset } = useForm({
        defaultValues: { email: "", privacy: false },
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
                logEvent("NewsletterSubscribeHeader");
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

    const closeModal = () => {
        setVisibilityModal(false);
        setSuccess(false);
    };


    useEffect(() => {
        setError(errors?.privacy?.message)
    }, [errors?.privacy])

    return (
        <>
            {visibilityHeader && (
                <div
                    className={
                        layout2
                            ? "header-mailing header-mailing-for-other-layout"
                            : "header-mailing"
                    }
                >
                    <div className="header-mailing__content">
                        <div className="header-mailing__name">
                            <span
                                className="header-mailing__name--link"
                                onClick={() =>
                                    setVisibilityModal(!visibilityModal)
                                }
                            >
                                Подпишись
                            </span>
                            {" "}на свежие материалы в одной рассылке
                        </div>
                        <IconClose
                            className="header-mailing__icon"
                            onClick={close}
                        />
                    </div>
                </div>
            )}
            <ReactModal
                overlayClassName="contact_modal--overlay"
                className="contact_modal"
                isOpen={visibilityModal}
                closeTimeoutMS={300}
            >
                <div className="mail-content">
                    <div className="mail-content__header">
                        <IconClose
                            className="header-mailing__icon mail-content__icon"
                            onClick={closeModal}
                        />
                    </div>
                    <SwitchTransition>
                        <CSSTransition
                            key={success}
                            classNames="fade"
                            unmountOnExit
                            addEndListener={(node, done) =>
                                node.addEventListener(
                                    "transitionend",
                                    done,
                                    false
                                )
                            }
                        >
                            {!success ? (
                                <div className="mail-content__main">
                                    <div className="mail-content__name">
                                        Наша рассылка
                                    </div>
                                    <div className="mail-content__description">
                                        В ней только самое важное: новости,
                                        кейсы, немного аналитики. Присылаем два
                                        раза в месяц.
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
                                                    className="mail-content__input"
                                                    onChange={(value) =>
                                                        field.onChange(value)
                                                    }
                                                    value={field.value}
                                                    error={
                                                        errors.email?.message
                                                    }
                                                    placeholder="Email"
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
                                                    className="mail-content__checkbox"
                                                    onChange={(value) =>
                                                        field.onChange(value)
                                                    }
                                                    checked={field.value}
                                                type="privacy"/>
                                            )}
                                        />
                                        <FormBtn error={error}>
                                            Подписаться
                                        </FormBtn>
                                    </form>
                                </div>
                            ) : (
                                <div className="mail-content__success">
                                    <div className="mail-content__thanks">
                                        <div className="mail-content__thanks--text">
                                            Спасибо!
                                        </div>
                                        <IconHeart />
                                    </div>
                                    <div className="mail-content__thanks--description">
                                        Отправили на адрес {dataForm.email}{" "}
                                        приветственное письмо. Не спамим.
                                    </div>
                                </div>
                            )}
                        </CSSTransition>
                    </SwitchTransition>
                </div>
            </ReactModal>
        </>
    );
};

export default HeaderMailing;
