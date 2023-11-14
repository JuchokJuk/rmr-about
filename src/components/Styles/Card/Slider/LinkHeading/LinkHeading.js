import React from 'react'

import PropTypes from 'prop-types';
import Heading from "@components/Styles/Heading"
import { getUrlObject } from "@helpers/Adapters/CardAdapter";
import Link from 'next/link';

const LinkHeading = ({ override, original, link }) => {

    const url = getUrlObject(link);

    return (
        <div className="card-slider__header">
            <Link href={{
                pathname: '/[tag]/[slug]',
                query: {
                    tag: url.tag,
                    slug: url.slug
                },
            }}
                  as={`/${url.tag}/${url.slug}`} passHref>
                <a className="card-slider__link card-slider__heading">
                    <Heading.HA2>
                        {original.title || override.title}
                    </Heading.HA2>
                </a>
            </Link>
        </div>
    )
}

LinkHeading.propTypes = {
    override: PropTypes.object,
    original: PropTypes.object,
    link: PropTypes.object
}

export default LinkHeading