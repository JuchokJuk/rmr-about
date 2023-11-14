import React from 'react';

import PropTypes from "prop-types";

import PersonalCard from "./PersonalCard";

const Employees = (props) => {
    if (!props.employees.length) {
        return null;
    }

    return (
        <div className="employees">
            {props.employees.map(({position, photo, name, id}) => (
                <div className='employees__wrapper' key={id}>
                    <PersonalCard name={name} post={position} src={photo} alt={name} />
                </div>
            ))}
        </div>
    )
};

Employees.propTypes = {
    employees: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        photo: PropTypes.string,
        position: PropTypes.string,
    })).isRequired,
};

Employees.defaultProps = {
    employees: [],
};

export default Employees;