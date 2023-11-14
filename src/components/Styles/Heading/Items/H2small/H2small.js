import React from "react";
import PropTypes from "prop-types";
import Interweave from "interweave";
import { useParsingBB } from "@helpers/useParsingBB";
import { cHTML } from "@helpers/functions";
import "./H2small.less";
import Typographer from "@components/Typographer/Typographer";

const H2small = ({ content, hover, children, className = "" }) => {
    let text = useParsingBB(content || children);

    return (
        <div
            className={`heading h2small ${className} ${
                hover ? "heading_hover" : ""
            }`}
        >
            <Typographer>

            <Interweave content={cHTML(text)} noWrap />
            </Typographer>
        </div>
    );
};

H2small.propTypes = {
    content: PropTypes.string,
    children: PropTypes.node,
    hover: PropTypes.bool,
    className: PropTypes.string,
};

export default H2small;
