import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const MenuItem = ({name = '', link = '', active = false, onClickHandler}) => {

    const getHref = (as = false) => {
        if (!link) {
            return '/'
        }

        if (link === 'contacts' || link === 'vacancies') {
            return `/${link}`
        }
        
        return as ? `/${link}` : '/[tag]'
    }

    return (
        <Link href={getHref()} as={getHref(true)} passHref>
            <a className={`tags__wrap__list__item no_select ${active ? 'hover' : ''}`} onClick={onClickHandler} >{name}</a>
        </Link>
    )
}

MenuItem.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string,
    active: PropTypes.bool,
    onClickHandler: PropTypes.func
}

export default MenuItem