import Description from "@components/Styles/Description"
import useLocalStorage from "@helpers/useLocalStorage"
import { toggleGdprModal } from "@store/modals/modalsAction"
import React from "react"
import { useDispatch, useSelector } from "react-redux"

const GdprPopup = () => {
    let dispatch = useDispatch()
    const [, setGdpr] = useLocalStorage("rmrgdprshow", 2)

    const show = useSelector((state) => state.modals.gdpr.isOpen)

    const clickFunction = () => {
        dispatch(toggleGdprModal(false))
        setGdpr(0)
    }

    return (
        <React.Fragment>
            {show ? (
                <div className="gdpr">
                    <div className="gdpr__container">
                        <div className="gdpr__container__header">
                            <span>Можно записать ваши cookies?</span>
                        </div>
                        <div className="gdpr__container__text">
                            <Description.D1>
                                Мы используем файлы cookie, чтобы сайт работал правильно, и чтобы сделать его удобнее и
                                полезнее. Записываем местоположение, IP-адрес, тип и версию браузера, тип устройства и
                                разрешение экрана, язык ОС, браузера и источник, откуда вы перешли. Если вы остаётесь на
                                сайте, то автоматически даёте согласие на обработку этих данных, а если не хотите этого
                                — придётся расстаться.
                            </Description.D1>
                        </div>
                        <button className="gdpr__container__button" onClick={clickFunction}>
                            Да, запишите
                        </button>
                    </div>
                </div>
            ) : (
                ""
            )}
        </React.Fragment>
    )
}

export default GdprPopup
