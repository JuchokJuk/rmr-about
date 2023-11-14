import { setContactModalForm, setContactModalStepForm } from "@store/contactForm/contactFormAction"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { formTypes } from "../contactConstans"

// SVGS
import CaseSVG from "@assets/IconPack/case.svg"
import TvSVG from "@assets/IconPack/tv.svg"
import RobotSVG from "@assets/IconPack/robot.svg"
import PlugSVG from "@assets/IconPack/plug.svg"
import { SH1, SH3 } from "@components/fontSystem/Subheading/Subheading"

const MenuStep = () => {
    let dispatch = useDispatch()

    const selectForm = (formType) => {
        dispatch(setContactModalStepForm())
        dispatch(setContactModalForm(formType))
    }

    useEffect(() => {
        dispatch(setContactModalForm(null))
    }, [])

    return (
        <div className="menu-step-scroll-wrapper">
            <div className="menu-step-wrapper">

                <div className="menu-step-container">
                    <div className="menu-step">
                        <div className="menu-step__heading">
                            <SH1>О чем поговорим?</SH1>
                        </div>

                        <div className="menu-step__items">
                            <div className="menu-step__col">
                                <div className="menu-step__col__wrap">
                                    <div className="menu-step-item" onClick={() => selectForm(formTypes.project)}>
                                        <div className="menu-step-item__icon">
                                            <CaseSVG />
                                        </div>
                                        <SH3>У меня есть задача</SH3>
                                    </div>
                                </div>
                                <div className="menu-step__col__wrap">
                                    <div className="menu-step-item" onClick={() => selectForm(formTypes.hr)}>
                                        <div className="menu-step-item__icon">
                                            <RobotSVG />
                                        </div>
                                        <SH3>Хочу стать роботом</SH3>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-step__col">
                                <div className="menu-step__col__wrap">
                                    <div className="menu-step-item" onClick={() => selectForm(formTypes.media)}>
                                        <div className="menu-step-item__icon">
                                            <TvSVG />
                                        </div>
                                        <SH3>Я из медиа</SH3>
                                    </div>
                                </div>
                                <div className="menu-step__col__wrap">
                                    <div className="menu-step-item" onClick={() => selectForm(formTypes.partner)}>
                                        <div className="menu-step-item__icon">
                                            <PlugSVG />
                                        </div>
                                        <SH3>Хочу стать партнёром</SH3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuStep
