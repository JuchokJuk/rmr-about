import { H3Big } from "@components/fontSystem/Heading/Heading";
import { P1Long } from "@components/fontSystem/Paragraph/Paragraph";
import "./style.less";

const Slide = (props) => {
    return (
        <div className="big-business-slide">
            <H3Big>{props.header}</H3Big>
            <P1Long>{props.text}</P1Long>
            {props.buttonText && (
                <a href={props.href} target="_blank">
                    <div className="big-business-slide__btn">
                        {props.buttonText}
                    </div>
                </a>
            )}
        </div>
    );
};
export default Slide;
