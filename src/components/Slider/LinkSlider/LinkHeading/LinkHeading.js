import React from 'react'
import PropTypes from 'prop-types';
import Heading from "@components/Styles/Heading"
import Link from 'next/link'
import { getUrlObject } from '@helpers/Adapters/CardAdapter';


const LinkHeading = ({ override, original, link }) => {

    const url = getUrlObject(link)

    return (
        url ?
            <div className="link-slider__header">
                <Link href={{
                    pathname: '/[tag]/[slug]',
                    query: {
                        tag: url.tag,
                        slug: url.slug
                    },
                }}
                      as={`/${url.tag}/${url.slug}`} passHref>
                    <a>
                        <Heading.HA2>
                            { override.title || original.title }
                        </Heading.HA2>
                    </a>
                </Link>
            </div> : null
    )
}

LinkHeading.propTypes = {
    override: PropTypes.object,
    original: PropTypes.object,
    link: PropTypes.object
}

export default LinkHeading