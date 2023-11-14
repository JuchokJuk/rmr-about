import React from "react"
import PropTypes from "prop-types"
import Interweave from "interweave"
import { cHTML, transformA } from "@helpers/functions"
import './P1Long.less'
import Typographer from "@components/Typographer/Typographer"

const P1Long = ({ content, children, className = "" }) => {
    return (
        <div className={`paragraph-1-long ${className}`}>
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

P1Long.propTypes = {
    content: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
}

export default P1Long
