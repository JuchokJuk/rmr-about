import Typographer from "@components/Typographer/Typographer";
import "./style.less";

const BTN = (props) => {
    return (
        <span className="BTN">
            <Typographer>{props.children}</Typographer>
        </span>
    );
};

export default BTN;
