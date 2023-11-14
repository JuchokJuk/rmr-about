import React from "react";
import PropTypes from "prop-types";
import Interweave from "interweave";
import { useParsingBB } from "@helpers/useParsingBB";
import { cHTML } from "@helpers/functions";
import "./H3medium.less";
import Typographer from "@components/Typographer/Typographer";

const H3medium = ({ content, hover, children, className = "" }) => {
    let text = useParsingBB(content || children);

    return (
        <h3
            className={`heading H3medium ${className} ${
                hover ? "heading_hover" : ""
            }`}
        >
            <Typographer>

            <Interweave content={cHTML(text)} noWrap />
            </Typographer>
        </h3>
    );
};

H3medium.propTypes = {
    content: PropTypes.string,
    children: PropTypes.node,
    hover: PropTypes.bool,
    className: PropTypes.string,
};

export default H3medium;
