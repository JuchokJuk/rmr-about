import Typographer from "@components/Typographer/Typographer";
import "./style.less";

const D1 = (props) => {
    return (
        <p className="D1">
            <Typographer>{props.children}</Typographer>
        </p>
    );
};

const D2 = (props) => {
    return (
        <p className="D2">
            <Typographer>{props.children}</Typographer>
        </p>
    );
};

export { D1, D2 };
