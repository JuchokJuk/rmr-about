import Typographer from "@components/Typographer/Typographer";
import "./style.less";

const SH1 = (props) => {
    return (
        <span className="SH1">
            <Typographer>{props.children}</Typographer>
        </span>
    );
};

const SH1Pixel = (props) => {
    return (
        <span className="SH1-pixel">
            <Typographer>{props.children}</Typographer>
        </span>
    );
};

const SH2 = (props) => {
    return (
        <span className="SH2">
            <Typographer>{props.children}</Typographer>
        </span>
    );
};

const SH3 = (props) => {
    return (
        <span className="SH3">
            <Typographer>{props.children}</Typographer>
        </span>
    );
};

const SH3Pixel = (props) => {
    return (
        <span className="SH3-pixel">
            <Typographer>{props.children}</Typographer>
        </span>
    );
};

export { SH1, SH1Pixel, SH2, SH3, SH3Pixel };
