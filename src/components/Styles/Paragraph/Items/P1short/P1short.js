import React from "react"
import PropTypes from "prop-types"
import Interweave from "interweave"
import { cHTML, transformA } from "@helpers/functions"
import './P1short.less'
import Typographer from "@components/Typographer/Typographer"

const P1short = ({ content, children, className = "" }) => {
    return (
        <div className={`paragraph-1-short ${className}`}>
            <Typographer>

            <Interweave
                content={cHTML(content || children)}
                noWrap
                transform={transformA}
                />
                </Typographer>
        </div>
    )
}

P1short.propTypes = {
    content: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
}

export default P1short
