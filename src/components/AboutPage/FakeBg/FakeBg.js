import useDidUpdateEffect from "@helpers/useDidUpdateEffect";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "./FakeBg.less";
const FakeBg = () => {
    const redPageRef = useSelector((state) => state.about.refRedBlock);
    const refFakeBg = useRef(null);

    useEffect(() => {
        if (refFakeBg.current) {
            const fakeBg = refFakeBg.current;
            const redPage = document.getElementById("redPage");
            if (redPage) {
                const counterPositionFakeBg = () => {
                    requestAnimationFrame(() => {
                        const containerComputedStyle = getComputedStyle(
                            fakeBg.parentElement,
                            null
                        );
                        const containerPosition =
                            fakeBg.parentElement.getBoundingClientRect();

                        const redPagePosition = redPage.getBoundingClientRect();

                        const containerBorderLeft = parseInt(
                            containerComputedStyle.borderLeftWidth
                        );
                        // const containerBorderRight = parseInt( // почему то без него считается лучше
                        //     containerComputedStyle.borderRightWidth
                        // );

                        const containerBorderTop = parseInt(
                            containerComputedStyle.borderTopWidth
                        );
                        // const containerBorderBottom = parseInt( // почему то без него считается лучше
                        //     containerComputedStyle.borderBottomWidth
                        // );

                        const containerX = containerPosition.x;
                        const containerY = containerPosition.y;

                        const redPageX = redPagePosition.x;
                        const redPageY = redPagePosition.y;

                        const redPageWidth = redPagePosition.width;
                        const redPageHeight = redPagePosition.height;

                        let targetX =
                            -containerX + redPageX - containerBorderLeft;
                        let targetY =
                            -containerY + redPageY - containerBorderTop;

                        targetX = targetX > 0 ? targetX : 0; // safari overflow fix
                        targetY = targetY > 0 ? targetY : 0;

                        let targetWidth = redPageWidth;
                        let targetHeight = redPageHeight;

                        const redPageX1 =
                            window.innerWidth - redPagePosition.right;
                        const containerX1 =
                            window.innerWidth - containerPosition.right;

                        if (redPageX1 < containerX1) {
                            targetWidth = containerPosition.width - targetX;
                        } else {
                            targetWidth =
                                containerPosition.width +
                                (redPagePosition.right -
                                    containerPosition.right);
                        }

                        const redPageY1 =
                            window.innerHeight - redPagePosition.bottom;
                        const containerY1 =
                            window.innerHeight - containerPosition.bottom;

                        if (redPageY1 < containerY1) {
                            targetHeight = containerPosition.height - targetY;
                        } else {
                            targetHeight =
                                containerPosition.height +
                                (redPagePosition.bottom -
                                    containerPosition.bottom);
                        }

                        targetWidth = targetWidth > 0 ? targetWidth : 0;
                        targetHeight = targetHeight > 0 ? targetHeight : 0;

                        fakeBg.style.transform = `translate(${targetX}px, ${targetY}px)`;

                        fakeBg.style.width = `${targetWidth}px`;
                        fakeBg.style.height = `${targetHeight}px`;
                    });
                };

                let openedTransitionsCounter = 0; // нужен чтоб случайно не прекратить перекрашивание во время транзишена
                let requestId;

                const loop = () => {
                    counterPositionFakeBg();
                    requestId = requestAnimationFrame(loop);
                };

                const startLoop = () => {
                    openedTransitionsCounter++;
                    if (requestId === undefined) {
                        loop();
                    }
                };

                const stopLoop = () => {
                    openedTransitionsCounter--;
                    if (openedTransitionsCounter === 0) {
                        cancelAnimationFrame(requestId);
                        requestId = undefined;
                    }
                };

                document.addEventListener("scroll", counterPositionFakeBg);
                window.addEventListener("resize", counterPositionFakeBg);
                fakeBg.parentElement.addEventListener(
                    "transitionstart",
                    startLoop
                );
                fakeBg.parentElement.addEventListener(
                    "transitionend",
                    stopLoop
                );
                fakeBg.parentElement.addEventListener(
                    "transitioncancel",
                    stopLoop
                );

                counterPositionFakeBg();
                return () => {
                    document.removeEventListener(
                        "scroll",
                        counterPositionFakeBg
                    );
                    window.removeEventListener("resize", counterPositionFakeBg);
                    fakeBg.parentElement.removeEventListener(
                        "transitionstart",
                        startLoop
                    );
                    fakeBg.parentElement.removeEventListener(
                        "transitionend",
                        stopLoop
                    );
                    fakeBg.parentElement.removeEventListener(
                        "transitioncancel",
                        stopLoop
                    );
                };
            }
        }
        return;
    }, [refFakeBg]);

    return <div className="fake" ref={refFakeBg}></div>;
};
export default FakeBg;
