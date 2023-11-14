import { useEffect, useRef } from "react";
import "./style.less";

const SharedBackground = (props) => {
    const backgroundContainerRef = useRef();
    function scroll() {
        const backgroundContainer = backgroundContainerRef.current;
        const background = backgroundContainer.firstElementChild
        const backgroundContainerOffset = backgroundContainer.getBoundingClientRect();

        const topBound = 0;
        const bottomBound = window.innerHeight;

        if (
            backgroundContainerOffset.top <= topBound &&
            backgroundContainerOffset.bottom >= bottomBound
        ) {
            stick();
        } else {
            if (backgroundContainerOffset.bottom <= bottomBound) {
                unstickToBottom();
            } else {
                unstickToTop();
            }
        }

        function stick() {
            background.style.position = "fixed";
            background.style.top = 0;
            let offsetY = backgroundContainerOffset.top;
            if (props.sendOffsetY) {
                props.sendOffsetY(offsetY);
            }
        }
        function unstickToTop() {
            background.style.position = "absolute";
            background.style.top = 0;
            background.style.bottom = "unset";
        }
        function unstickToBottom() {
            background.style.position = "absolute";
            background.style.top = "unset";
            background.style.bottom = 0;
        }
    }
    // function sendMaxOffsetY(){
    //     if (props.sendMaxOffsetY) {
    //         props.sendMaxOffsetY(backgroundContainerRef.current.offsetHeight - 2 * window.innerHeight);
    //    }
    // }
    useEffect(() => {
        // sendMaxOffsetY()
        scroll();
        window.addEventListener("resize", scroll);
        window.addEventListener("scroll", scroll);
        // window.addEventListener("resize", sendMaxOffsetY)
        
        return () => {
            window.removeEventListener("resize", scroll);
            window.removeEventListener("scroll", scroll);
            // window.removeEventListener("resize", sendMaxOffsetY)
        }
    }, []);
    return (
        <div
            ref={backgroundContainerRef}
            className="shared-background-container"
        >
            <div className="shared-background">{props.background}</div>

            <div className="shared-background__content-container">
                {props.children}
            </div>
        </div>
    );
};
export default SharedBackground;
