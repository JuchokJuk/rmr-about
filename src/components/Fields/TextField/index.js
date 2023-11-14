import IconError from "@assets/Input/error.svg";
import React, { useState } from "react";
import "./style.less";

// eslint-disable-next-line react/display-name
const Input = React.forwardRef(
    ({ value, onChange, error, placeholder, className, ...other }, ref) => {
        const [focus, setFocus] = useState(false);
        const toggleBlur = () => {
            !!other.onBlur ? other.onBlur() : null;
            setFocus(false);
        };
        return (
            <div className={className}>
                <div
                    className={
                        error
                            ? "field--error field"
                            : focus
                            ? "field--focus field"
                            : "field"
                    }
                >
                    <label
                        className={
                            focus || value
                                ? "field__label field__label--focus"
                                : "field__label"
                        }
                    >
                        {placeholder}
                    </label>
                    <div className="field__wrapper">
                        <input
                            {...other}
                            className="field__input"
                            onChange={(e) => onChange(e.target.value)}
                            onFocus={() => setFocus(true)}
                            onBlur={() => toggleBlur()}
                            value={value}
                            ref={ref}
                            autoComplete="off"
                        />
                        {error && <IconError />}
                    </div>
                </div>
                {error && <div className="field__error">{error}</div>}
            </div>
        );
    }
);
export default Input;
