import React from "react";
import "./Year.less";
const Year = (props) => {
    return (
        <div className="year">
            <div className="year__header">
                <div className="year__name">{props.year}</div>

               {/*  {props.link && (
                    <div className="year__link circle">
                        <div className="circle__body"></div>
                        <div className="circle__text">
                            <span>В это время&nbsp;</span>
                            <span>в мире...</span>
                        </div>
                    </div>
                )} */}
            </div>
            {props.children}
        </div>
    );
};
export default Year;
