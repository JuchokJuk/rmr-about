import PropTypes from "prop-types"
import React from "react"
import Link from "next/link"
import { P1Long } from "@components/fontSystem/Paragraph/Paragraph"

const Input = ({ label, onChange, name, id, privacy, disabled, check, register, required }) => {
    let reg = register && register(name, { required: required })

    const localChange = (e) => {
        onChange && onChange(e)
        reg?.onChange(e)
    }

    return (
        <div className={`checkbox-wrap ${disabled ? "disabled" : ""}`}>
            <label className="checkbox">
                <input className="checkbox__control" type="checkbox" onChange={localChange} name={name} id={id} disabled={disabled} checked={check} ref={reg?.ref} ></input>
                <div className="checkbox__marker">
                    {/* <TikSvg className="checkbox__marker-icon" /> */}
                    <div className="checkbox__marker-icon--svg"></div>
                </div>
                <span className="checkbox__label">
                    <P1Long>
                        {label}
                        &nbsp;
                        {privacy && (
                            <React.Fragment>
                                <Link href="/privacy">
                                    <a target="_blank" className="checkbox__label--link">
                                        политику обработки персональных данных
                                    </a>
                                </Link>
                                <span>{' '}</span>и даю&nbsp;
                                <Link href="/agreement">
                                    <a target="_blank" className="checkbox__label--link">
                                        согласие на обработку своих данных
                                    </a>
                                </Link>
                            </React.Fragment>
                        )}
                    </P1Long>
                </span>
            </label>
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
    id: PropTypes.string,
    privacy: PropTypes.bool,
    disabled: PropTypes.bool,
    check: PropTypes.bool,
    register: PropTypes.func,
    required: PropTypes.bool,
}

export default Input
