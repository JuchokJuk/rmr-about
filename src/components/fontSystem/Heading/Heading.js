import Typographer from "@components/Typographer/Typographer";
import "./style.less";

const H1 = (props) => {
    return (
        <h1 className="H1">
            <Typographer>{props.children}</Typographer>
        </h1>
    );
};

const H1Pixel = (props) => {
    return (
        <h1 className="H1-pixel">
            <Typographer>{props.children}</Typographer>
        </h1>
    );
};

const H2Big = (props) => {
    return (
        <h2 className="H2-big">
            <Typographer>{props.children}</Typographer>
        </h2>
    );
};

const H2BigPixel = (props) => {
    return (
        <h2 className="H2-big-pixel">
            <Typographer>{props.children}</Typographer>
        </h2>
    );
};

const H2Small = (props) => {
    return (
        <h2 className="H2-small">
            <Typographer>{props.children}</Typographer>
        </h2>
    );
};

const H3Large = (props) => {
    return (
        <h3 className="H3-large ">
            <Typographer>{props.children}</Typographer>
        </h3>
    );
};

const H3Medium = (props) => {
    return (
        <h3 className="H3-medium">
            <Typographer>{props.children}</Typographer>
        </h3>
    );
};

const H3Big = (props) => {
    return (
        <h3 className="H3-big">
            <Typographer>{props.children}</Typographer>
        </h3>
    );
};

const H3Small = (props) => {
    return (
        <h3 className="H3-small">
            <Typographer>{props.children}</Typographer>
        </h3>
    );
};

export {
    H1,
    H1Pixel,
    H2Big,
    H2BigPixel,
    H2Small,
    H3Large,
    H3Medium,
    H3Big,
    H3Small,
};
