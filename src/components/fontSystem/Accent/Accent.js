import Typographer from "@components/Typographer/Typographer";
import "./style.less";

const AC = (props) => {
    return (
        <p className="AC">
            <Typographer>{props.children}</Typographer>
        </p>
    );
};
export default AC;
