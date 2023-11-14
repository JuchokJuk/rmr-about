
import Typographer from "@components/Typographer/Typographer";
import "./style.less";

// TODO: добавить недостающие стили

const F1 = (props) => {
    return (
        <p className="F1">
            <Typographer>{props.children}</Typographer>
        </p>
    );
};

export default F1;
