import IconDropDown from "@assets/IconPack/dropDownPixel.svg";
import { useBreakpoint } from "@helpers/useBreakpoint";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "./Logo.less";
import FakeBg from "@components/AboutPage/FakeBg/FakeBg";
import useDidUpdateEffect from "@helpers/useDidUpdateEffect";

const Logo = () => {
    const domains = [".ru", /* ".kz" */ /* ".com" */];
    const [currentDomain, setCurrentDomain] = useState(domains[0]);
    const [notSelectDomains, setNotSelectDomains] = useState([]);
    const [showSelect, setShowSelect] = useState(false);
    const selectRef = useRef(null);

    useEffect(() => {
        const arr = domains.filter((item) => item != currentDomain);
        setNotSelectDomains(arr);
    }, [currentDomain]);

    const openSelect = () => {
        setShowSelect(!showSelect);
    };
    const selectValue = (item) => {
        setCurrentDomain(item);
        setShowSelect(false);
    };
    
    useDidUpdateEffect(() => {
        // console.log(currentDomain);
        if (currentDomain === ".kz") {
            window.location.href = "https://www.redmadrobot.kz/";
        }
    }, [currentDomain]);

    useEffect(() => {
        document.addEventListener("click", (e) => {
            const click = e.composedPath().includes(selectRef.current);
            if (!click) {
                setShowSelect(false);
            }
        });
    }, []);

    const breakpoint = useBreakpoint();
    return (
        <div className="r-logo">
            {breakpoint < 2 || breakpoint === "max" ? (
                <Link href="/">
                    <div className="r-logo__name">
                        <span className="r-logo__name--span">red_mad_</span>
                        robot
                    </div>
                </Link>
            ) : (
                <Link href="/">
                    <div className="r-logo__name">
                        <span className="r-logo__name--span">r_m_</span>r
                    </div>
                </Link>
            )}

            <div
                className="r-logo__select domain"
                onClick={openSelect}
                ref={selectRef}
            >
               {/*  <div className="domain__name">
                    <span className="domain__name--span">{currentDomain}</span>
                    <IconDropDown
                        className={
                            !showSelect
                                ? "domain__icon"
                                : "domain__icon domain__icon--active"
                        }
                    />
                </div> */}

                <ul
                    className={
                        !showSelect
                            ? "domain__block"
                            : "domain__block domain__block--active"
                    }
                >
                    {notSelectDomains.map((option, index) => {
                        return (
                            <li
                                className="domain__option"
                                key={index}
                                onClick={() => selectValue(option)}
                            >
                                {option}
                            </li>
                        );
                    })}
                    <FakeBg />
                </ul>
            </div>
        </div>
    );
};
export default Logo;
