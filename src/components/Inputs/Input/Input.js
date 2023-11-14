import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AlertSvg from "@assets/Input/alert.svg";
import EmailSvg from "@assets/Input/envelope.svg";
import LightSvg from "@assets/Input/lightning.svg";
import InputMask from "react-input-mask";
import TextareaAutosize from "react-textarea-autosize";
import { D2 } from "@components/fontSystem/Description/Description";
import useDidUpdateEffect from "@helpers/useDidUpdateEffect";

const Input = ({
    sent,
    label,
    error,
    short,
    big,
    onChange,
    name,
    mask,
    required,
    textarea,
    register,
    pattern,
    bigger,
    type = "text",
    emailSub,
    success,
    successLabel,
    errorText,
    underText,
    inputValue = "",
    disabled = false,
}) => {
    const [isDirty, setDirty] = useState(!!inputValue);
    const [value, setValue] = useState(inputValue);

    // Заполняем сохраненные данные, их нужно пустить через formHooks, поэтому такая структура типа_event
    useEffect(() => {
        if (inputValue) {
            onChange({
                target: {
                    name: name,
                    value: inputValue,
                },
                persist: () => {},
            });
        }
    }, []);

    const localChange = (e) => {
        setValue(e.target.value);
        if (e.target.value) {
            setDirty(true);
        } else {
            setDirty(false);
        }
        onChange(e);
    };

    useDidUpdateEffect(() => {
        setValue("");
        setDirty(false);
    }, [success]);

    /*  const phoneValidation =
        type == "tel"
            ? {
                  onKeyPress: (e) =>
                      !/[0-9\s\+]/.test(e.key) && e.preventDefault(),
              }
            : {}
 */
    useEffect(() => {
        if (sent) {
            setValue("");
            setDirty(false);
        }
    }, [sent]);

    const [showToggleTypePhone, setShowToggleTypePhone] = useState(false);
    const [valueToggleTypePhone, setValueToggleTypePhone] = useState("rus");
    const maskPhone = () => {
        return valueToggleTypePhone == "rus"
            ? "+7 (999) 999-99-99"
            : "+9 999999999999999999";
    };
    const patternPhone = () => {
        return valueToggleTypePhone == "rus"
            ? /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/
            : /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/;
    };

    const inputType = () => {
        if (textarea) {
            let reg = register(name, { required: required });
            return (
                <TextareaAutosize
                    className={`input text hide_scrollbar ${
                        error ? "error" : ""
                    } ${success ? "success" : ""} ${isDirty ? "dirty" : ""}`}
                    name={name}
                    maxRows={4}
                    onChange={(e) => {
                        reg.onChange(e);
                        localChange(e);
                    }}
                    onBlur={reg.onBlur}
                    ref={reg.ref}
                    value={value}
                    autoComplete="off"
                    disabled={disabled}
                />
            );
        }
        if (mask) {
            let reg = register(name, {
                required: required,
                pattern: type === "tel" ? patternPhone() : pattern,
            });

            return (
                <InputMask
                    id="maskInput"
                    className={`input masked ${error ? "error" : ""} ${
                        success ? "success" : ""
                    } ${isDirty ? "dirty" : ""}`}
                    mask={type === "tel" ? maskPhone() : mask}
                    inputMode={type}
                    name={name}
                    value={value}
                    maskChar={null}
                    onChange={(e) => {
                        reg.onChange(e);
                        localChange(e);
                    }}
                    onBlur={reg.onChange}
                    inputRef={reg.ref}
                    autoComplete="off"
                    disabled={disabled}
                    onFocus={() => setShowToggleTypePhone(true)}
                ></InputMask>
            );
        }

        let reg = register(name, { required: required, pattern: pattern });
        return (
            <input
                className={`input 
                ${error ? "error" : ""} 
                ${success ? "success" : ""} 
                ${isDirty ? "dirty" : ""}`}
                name={name}
                inputMode={type}
                onChange={(e) => {
                    reg.onChange(e);
                    localChange(e);
                }}
                onBlur={reg.onBlur}
                ref={reg.ref}
                value={value}
                autoComplete="off"
                disabled={disabled}
            />
        );
    };
    const changeTypePhoneInput = (value) => {
        document.getElementById("maskInput").focus();
        setValueToggleTypePhone(value);
        setValue("");
    };
    return (
        <div
            className={`input-wrapper ${disabled ? "disabled" : ""} ${
                short ? "input-wrap--short" : ""
            } ${big ? "big_label" : ""} ${bigger ? "big_label--more" : ""} ${
                emailSub ? "email_sub" : ""
            }`}
        >
            {inputType()}
            {error && errorText && (
                <div className="error-label">
                    <D2>{errorText}</D2>
                </div>
            )}
            {underText && (
                <div className="under-label">
                    <D2>{underText}</D2>
                </div>
            )}
            {showToggleTypePhone && type == "tel" ? (
                <div>
                    {valueToggleTypePhone == "rus" ? (
                        <div onClick={() => changeTypePhoneInput("another")}>
                            <div className="under-label--phone">
                                <D2>У меня номер другой страны</D2>
                            </div>
                        </div>
                    ) : (
                        <div onClick={() => changeTypePhoneInput("rus")}>
                            <div className="under-label--phone">
                                <D2>У меня Российский номер</D2>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                ""
            )}
            <label>{success ? successLabel : label}</label>
            <AlertSvg className="svg" />
            <EmailSvg className="email_svg" />
            <LightSvg className="email_suc" />
        </div>
    );
};

// Input.propTypes = {
//     label: PropTypes.string,
//     error: PropTypes.bool,
//     short: PropTypes.bool,
//     big: PropTypes.bool,
//     bigger: PropTypes.bool,
//     onChange: PropTypes.func,
//     name: PropTypes.any,
//     inputValue: PropTypes.string,
//     mask: PropTypes.string,
//     register: PropTypes.func.isRequired,
//     required: PropTypes.bool,
//     textarea: PropTypes.bool,
//     pattern: PropTypes.any,
//     type: PropTypes.string,
//     emailSub: PropTypes.bool,
//     success: PropTypes.bool,
//     successLabel: PropTypes.string,
//     errorText: PropTypes.string,
//     underText: PropTypes.string,
//     disabled: PropTypes.bool,
// }

export default Input;
