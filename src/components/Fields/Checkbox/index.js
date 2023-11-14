import { P1Long } from "@components/fontSystem/Paragraph/Paragraph"
import Link from "next/link"
import React from "react"
import "./style.less"

const Checkbox = ({ type, onChange, className, checked, ...other }) => {
    return (
        <div className={`${className} field-check`}>
            <input
                onChange={(e) => onChange(e.target.checked)}
                className="field-check__input"
                checked={checked}
                type="checkbox"
                id="checkbox"
                {...other}
            />

            <>
                {type === "privacy" && (
                    <label htmlFor="checkbox" className="field-check__label">
                        <P1Long>
                            Я прочитал{" "}

                            <Link href="/privacy" target="_blank">
                                <a className="field-check__label--link">
                                    политику обработки персональных данных
                                </a>
                            </Link>

                            {" "}и{" "}

                            <Link href="/agreement">
                                <a
                                    target="_blank"
                                    className="field-check__label--link"
                                >
                                    даю согласие на обработку своих данных
                                </a>
                            </Link>

                        </P1Long>
                    </label>
                )}
                {type === "mailing" && (
                    <label htmlFor="checkbox" className="field-check__label">
                        <P1Long>Я хочу получать новости от роботов</P1Long>
                    </label>
                )}
            </>

        </div>
    )
}

export default Checkbox
