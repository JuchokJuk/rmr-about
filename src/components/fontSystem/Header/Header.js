import Typographer from "@components/Typographer/Typographer";
import "./style.less";

const T = (props) => {
    return (
        <p className="T">
            <Typographer>{props.children}</Typographer>
        </p>
    );
};
export default T;
