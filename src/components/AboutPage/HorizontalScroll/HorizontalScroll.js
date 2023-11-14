import React, {
    useEffect,
    useRef,
} from "react";
import "./style.less";

const HorizontalScroll = (props) => {

    let horizontalSectionRef = useRef();

    function setupHorizontalSections() {

        if (horizontalSectionRef.current) {

            
            let horizontalSection = horizontalSectionRef.current;
            let content = horizontalSection.firstElementChild;
            
            let distanceToScroll = content.offsetWidth - (window.innerWidth - content.clientHeight);
            
            if (props.sendMaxOffsetX) {
                props.sendMaxOffsetX(distanceToScroll + content.clientHeight);
            }

            horizontalSection.style.height = `${distanceToScroll}px`;
        }

    }

    function scrollHorizontalSections() {
        if (horizontalSectionRef.current) {
            const horizontalSection = horizontalSectionRef.current;
            const content = horizontalSection.firstElementChild;
            const sectionOffset = horizontalSection.getBoundingClientRect();

            const topBound = 0;
            const bottomBound = content.clientHeight;

            if (
                sectionOffset.top <= topBound &&
                sectionOffset.bottom >= bottomBound
            ) {
                stick();
            } else {
                if (sectionOffset.bottom <= bottomBound) {
                    unstickToBottom();
                } else {
                    unstickToTop();
                }
            }

            function stick() {
                let offsetX = sectionOffset.top;

                content.style.position = "fixed";
                content.style.top = 0;
                content.style.bottom = "unset";
                content.style.left = `${offsetX}px`;
                content.style.right = "unset";

                if (props.sendOffsetX) {
                    props.sendOffsetX(offsetX);
                }
            }
            function unstickToTop() {
                content.style.position = "absolute";
                content.style.top = 0;
                content.style.bottom = "unset";
                content.style.left = 0;
                content.style.right = "unset";
            }
            function unstickToBottom() {
                content.style.position = "absolute";
                content.style.top = "unset";
                content.style.bottom = 0 + "px";
                content.style.left = "unset";
                content.style.right = 0;
            }
        }
    }

    useEffect(() => {
        setupHorizontalSections();
        scrollHorizontalSections();
        window.addEventListener("resize", setupHorizontalSections);
        window.addEventListener("resize", scrollHorizontalSections);
        window.addEventListener("scroll", scrollHorizontalSections);

        return () => {
            window.removeEventListener("resize", setupHorizontalSections);
            window.removeEventListener("resize", scrollHorizontalSections);
            window.removeEventListener("scroll", scrollHorizontalSections);
        };
    }, []);

    return (
        <div className="horizontal-scroll" ref={horizontalSectionRef}>
            <div className="horizontal-scroll__content">
                {props.children}
            </div>
        </div>
    );
};
export default HorizontalScroll;

