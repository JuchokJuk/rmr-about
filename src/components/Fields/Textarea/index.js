import React from "react"
import AlertSvg from "@assets/Input/alert.svg"
import EmailSvg from "@assets/Input/envelope.svg"
import LightSvg from "@assets/Input/lightning.svg"
import TextareaAutosize from "react-textarea-autosize"

import { D2 } from "@components/fontSystem/Description/Description"
import "./style.less"

// eslint-disable-next-line react/display-name
const Textarea = React.forwardRef(
    ({ value, onChange, error, placeholder, className, underText }, ref) => {
        return (
            <div className={`text-area-wrap ${className}`}>
                <TextareaAutosize
                    className={`text-area text hide_scrollbar 
                            ${error ? "error" : ""}
                            ${value.length !== 0 ? "dirty" : ""}`}
                    maxRows={4}
                    onChange={(e) => onChange(e.target.value)}
                    value={value}
                />

                {error && (
                    <div className="error-label">
                        <D2>{error}</D2>
                    </div>
                )}
                {underText && (
                    <div className="under-label">
                        <D2>{underText}</D2>
                    </div>
                )}
                <label>{placeholder}</label>
                <AlertSvg className="svg" />
                <EmailSvg className="email_svg" />
                <LightSvg className="email_suc" />
            </div>
        )
    }
)

export default Textarea
