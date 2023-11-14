import React, { useEffect, useState, useRef } from "react";

import CheckMarkSvg from "@assets/StylePageSocial/checkMark.svg";
import VKSvg from "@assets/StylePageSocial/vk.svg";
import TgSvg from "@assets/StylePageSocial/tg.svg";
import { logEvent } from "@helpers/metrics";
import { useSelector } from "react-redux";

import "./ShareButton.less";
const ShareButton = () => {
    let article = useSelector((state) => state.articles);
    let eventData = {};

    if (article.isFulfilled && !article.isRejected) {
        eventData = {
            Author: article.data.author ? article.data.author.fullname : "",
            Tags: article.data.tags,
            ArticleName: article.data.header ? article.data.header.title : "",
        };
    }

    // Need because SSR.
    const click = (name) => {
        switch (name) {
            case "fb":
                logEvent("ArticleShareFB", {
                    ...eventData,
                    SocialNetwork: "facebook",
                });
                return window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
                    "_blank"
                );
            case "vk":
                logEvent("ArticleShareVK", {
                    ...eventData,
                    SocialNetwork: "vkontakte",
                });
                return window.open(
                    `http://vk.com/share.php?url=${window.location.href}`,
                    "_blank"
                );
            case "tw":
                logEvent("ArticleShareTwitter", {
                    ...eventData,
                    SocialNetwork: "twitter",
                });
                return window.open(
                    `http://twitter.com/share?url=${window.location.href}`,
                    "_blank"
                );
            case "tg":
                logEvent("ArticleShareTelegram", {
                    ...eventData,
                    SocialNetwork: "telegram",
                });
                return window.open(
                    `https://t.me/share/url?url=${window.location.href}`,
                    "_blank"
                );
            default:
                return window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
                    "_blank"
                );
        }
    };

    const buttonRef = useRef();

    let [onLeft, setOnLeft] = useState();

    useEffect(() => {
        function getPosition() {
            if (buttonRef.current) {
                let pos = buttonRef.current.getBoundingClientRect();
                let pageCenterX = window.innerWidth / 2;
                let buttonCenterX =
                    pos.left + buttonRef.current.offsetWidth / 2;

                if (buttonCenterX < pageCenterX) {
                    setOnLeft(true);
                } else {
                    setOnLeft(false);
                }
            }
        }
        getPosition();
        window.onscroll = getPosition;
        window.onresize = getPosition;

        document.addEventListener("click", function (event) {
            if (buttonRef.current && tooltipRef.current) {
                if (
                    !tooltipRef.current.contains(event.target) &&
                    !buttonRef.current.contains(event.target)
                ) {
                    closeTooltip();
                }
            }
        });
    }, [onLeft]);

    const copiedMessageTime = 5000;

    let tooltipRef = useRef(null);
    let copyLink = useRef(null);
    let linkWasCopied = useRef(null);

    function toggleTooltip() {
        if (tooltipRef.current.classList.contains("hidden")) {
            openTooltip();
        } else {
            closeTooltip();
        }
    }
    function openTooltip() {
        resetCopyButton();
        tooltipRef.current.classList.remove("hidden");
        tooltipRef.current.classList.remove("fade-out");
        tooltipRef.current.classList.add("fade-in");
    }
    function closeTooltip() {
        tooltipRef.current.classList.remove("fade-in");
        tooltipRef.current.classList.add("fade-out");
        setTimeout(() => {
            tooltipRef.current.classList.add("hidden");
        }, 100);
    }

    function resetCopyButton() {
        copyLink.current.classList.remove("hidden");
        linkWasCopied.current.classList.add("hidden");
    }

    let prevTimeoutId;
    async function copy() {
        await navigator.clipboard.writeText(window.location.href).then(() => {
            copyLink.current.classList.add("hidden");
            linkWasCopied.current.classList.remove("hidden");

            clearTimeout(prevTimeoutId);
            prevTimeoutId = setTimeout(resetCopyButton, copiedMessageTime);
        });
    }

    return (
        <div className="relative">
            <div
                className={
                    "tooltip hidden " +
                    (onLeft ? "tooltip_on-left" : "tooltip_on-right")
                }
                ref={tooltipRef}
            >
                <div className="tooltip__content">
                    <div className="social">
                        <div
                            className="social-item social__tg"
                            onClick={() => click("tg")}
                        >
                            <TgSvg />
                        </div>
                        <div
                            className="social-item social__vk"
                            onClick={() => click("vk")}
                        >
                            <VKSvg />
                        </div>
                    </div>

                    <div className="divider"></div>
                    <span className="copy " onClick={copy} ref={copyLink}>
                        Скопировать ссылку
                    </span>
                    <span className="copy hidden copied" ref={linkWasCopied}>
                        Ссылка скопирована
                        <span className="checkmarkSvg checkMarkSvg_indented">
                            <CheckMarkSvg />
                        </span>
                    </span>
                </div>
                <svg
                    className="tooltip__triangle"
                    width="40"
                    height="25"
                    viewBox="0 0 40 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M20 25L0 0L40 3.14803e-06L20 25Z" />
                </svg>
            </div>

            <div
                className="share-button"
                onClick={toggleTooltip}
                ref={buttonRef}
            >
                Поделиться
            </div>
        </div>
    );
};

export default ShareButton;
