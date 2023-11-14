import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
    addSelectedFilter,
    clearSelectedFilters,
    removeSelectedFilter,
} from "@store/career/careerAction";
import useDidUpdateEffect from "@helpers/useDidUpdateEffect";
import { logEvent } from "@helpers/metrics";
import Paragraph from "@components/Styles/Paragraph";
import Description from "@components/Styles/Description";

const VacancyFilterItem = ({
    filter,
    home,
    initialActive,
    level,
    disabled,
}) => {
    let dispatch = useDispatch();
    const [active, setActive] = useState(initialActive);
    const selectedFilters = useSelector((state) =>
        level
            ? state.career.filteredData.selectedFilters.secondLevel
            : state.career.filteredData.selectedFilters.firstLevel
    );

    useEffect(() => {
        if (home) {
            if (selectedFilters.length) {
                setActive(false);
            } else {
                setActive(true);
            }
        } else {
            if (selectedFilters.find((el) => el._id === filter._id)) {
                setActive(true);
            } else {
                setActive(false);
            }
        }
    }, [JSON.stringify(selectedFilters)]);

    useDidUpdateEffect(() => {
        if (active) {
            setActive(false);
            dispatch(removeSelectedFilter(filter._id, level));
        }
    }, [disabled]);

    const clickHandler = () => {
        if (home) {
            if (!active) {
                dispatch(clearSelectedFilters(level));
                setActive(true);
            }
            return;
        }

        if (disabled) {
            return;
        }

        setActive(!active);

        if (!active) {
            dispatch(addSelectedFilter(filter, level));
            logEvent("TagsVacancy", {
                Tags: filter.name,
            });
        } else {
            dispatch(removeSelectedFilter(filter._id, level));
        }
    };

    return (
        <div
            className={`tags__tag vacancy-tags__tag_universal ${
                active ? "active" : ""
            } ${disabled ? "tag_disabled" : ""}`}
            onClick={clickHandler}
        >
            <Description.D2new> {filter.name}</Description.D2new>
        </div>
    );
};

VacancyFilterItem.propTypes = {
    filter: PropTypes.object,
    home: PropTypes.bool,
    initialActive: PropTypes.bool,
    level: PropTypes.number,
    disabled: PropTypes.bool,
};

export default VacancyFilterItem;
