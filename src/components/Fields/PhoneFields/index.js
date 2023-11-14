import IconError from "@assets/Input/error.svg";
import InputMask from "react-input-mask";
import React, { useEffect, useRef, useState } from "react";
import "./style.less";
import useDidUpdateEffect from "@helpers/useDidUpdateEffect";

// eslint-disable-next-line react/display-name
const PhoneFields = React.forwardRef(

    ({ error, className, value, onChange, isSent, ...other }, ref) => {

        const [focus, setFocus] = useState(false);
        const [rusMask, setRusMask] = useState(true);
        const [valueInput, setValueInput] = useState("");

        const toggleBlur = () => {
            !!other.onBlur ? other.onBlur() : null;
            setFocus(false);
        };

        const handlerInput = (e) => {
            const value = e.target.value;
            setValueInput(value);
            onChange(value);
        };

        const handlerType = () => {
            setRusMask(!rusMask);
            if (rusMask) {
                setValueInput("+");
                return;
            }
            setValueInput("+7 (");
        };
        useEffect(() => {
            if (!isSent) return;
            setValueInput("");
        }, [isSent]);

        return (
            <div className={className}>
                <div
                    className={
                        error
                            ? "fieldPhone--error fieldPhone"
                            : focus
                            ? "fieldPhone--focus fieldPhone"
                            : "fieldPhone"
                    }
                >
                    <label
                        className={
                            focus || valueInput
                                ? "fieldPhone__label fieldPhone__label--focus"
                                : "fieldPhone__label"
                        }
                    >
                        Номер телефона
                    </label>
                    <div className="fieldPhone__wrapper">
                        <InputMask
                            {...other}
                            mask={
                                rusMask ? "+7 (999) 999-99-99" : "+999999999999"
                            }
                            onChange={handlerInput}
                            className="fieldPhone__input"
                            onFocus={() => setFocus(true)}
                            onBlur={() => toggleBlur()}
                            maskChar={null}
                            value={valueInput}
                            autoComplete="off"
                        />
                        {error && <IconError />}
                    </div>
                </div>
                {error && <div className="fieldPhone__error">{error}</div>}
                {rusMask ? (
                    <div className="fieldPhone__toggle" onClick={handlerType}>
                        У меня номер другой страны
                    </div>
                ) : (
                    <div className="fieldPhone__toggle" onClick={handlerType}>
                        У меня российский или казахстанский номер
                    </div>
                )}
            </div>
        );
    }
);
export default PhoneFields;
