import React from 'react'
import PropTypes from 'prop-types';
import Link from 'next/link';
import Paragraph from '@components/Styles/Paragraph';
import Description from '@components/Styles/Description';

const Tag = ({ title, size, url, tagsByUrl }) => {

    let clSize;
    let block = "span"

    switch(size) {
        case 'large': 
            clSize = 'tags__tag_large'
            block = 'p1'
            break;

        case 'medium': 
            clSize = 'tags__tag_medium'
            break;

        case 'small':
            clSize = 'tags__tag_small'
            block = 'd2'
            break;

        case 'tiny':
            clSize = 'tags__tag_tiny'
            break;

        case 'search':
            clSize = 'tags__tag_search'
            break;

        case 'career':
            clSize = 'tags__tag_career'
            break;

        default: 
            clSize = 'tags__tag_large'
    }

    const getHref = (as = false) => {
        if (!url) {
            return '/'
        }

        if (tagsByUrl && tagsByUrl[url]) {
            return as ? `/${url}` : '/[tag]'
        }

        return as ? `/tags/${url}` : '/tags/[subtag]'
    }

    return (
        <Link href={getHref()} as={getHref(true)} passHref>
            <a>
                <div className={`tags__tag ${clSize}`}>
                    {
                        block == 'span' ? <span>{title}</span> : null
                    }
                    {
                        block == 'p1' ? <Paragraph.P1>{title}</Paragraph.P1> : null
                    }
                    {
                        block == 'd2' ? <Description.D2>{title}</Description.D2> : null
                    }
                </div>
            </a>
        </Link>)
}

Tag.propTypes = {
    title: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['large', 'medium', 'small', 'tiny', 'search', 'career']),
    url: PropTypes.string,
    tagsByUrl: PropTypes.object
}

export default Tag;