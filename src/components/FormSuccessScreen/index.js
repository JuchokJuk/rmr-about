import "./style.less";
import BackIcon from "@assets/IconPack/arrow-left.svg";
import Heart from "@assets/IconPack/heart.svg";
import { H3Medium } from "@components/fontSystem/Heading/Heading";
import { P1Long } from "@components/fontSystem/Paragraph/Paragraph";
import IconButton from "@components/Button/IconButton";
import { useEffect, useRef } from "react";

const FomrSuccessScreen = ({ message, close }) => {
    
    const successScreenRef = useRef();
    
    useEffect(() => {
        if (successScreenRef.current) {
            successScreenRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        }
    },[])

    return (
        <div className="form-success-screen" ref={successScreenRef}>
            <IconButton onClick={close}>
                <BackIcon className="white-icon" />
            </IconButton>

            <div className="form-success-screen__footer">
                <div className="form-success-screen__footer__thanks">
                    <div className="form-success-screen__footer__thanks__text-wrapper">
                        <H3Medium>Спасибо!</H3Medium>
                    </div>
                    <Heart className="form-success-screen__footer__thanks__icon" />
                </div>
                <div className="form-success-screen__footer__message-wrapper">
                    <P1Long>{message}</P1Long>
                </div>
            </div>
        </div>
    );
}

export default FomrSuccessScreen;