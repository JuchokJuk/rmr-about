import React from "react"

import Head from "next/head"
import { object, string } from "prop-types"
import seoConstants from "@helpers/seoConstants"

const Seo = ({ seo, ogUrl, componentName }) => {
    return (
        <Head>
            <title>
                {seo.title
                    ? seo.title
                    : seoConstants[componentName] && seoConstants[componentName].title
                    ? seoConstants[componentName].title
                    : seoConstants.default.title}
            </title>
            <meta
                name="description"
                content={
                    seo.description
                        ? seo.description
                        : seoConstants[componentName] && seoConstants[componentName].description
                        ? seoConstants[componentName].description
                        : seoConstants.default.description
                }
            />
            <meta
                property="og:title"
                content={
                    seo.ogTitle
                        ? seo.ogTitle
                        : seoConstants[componentName] && seoConstants[componentName].ogTitle
                        ? seoConstants[componentName].ogTitle
                        : seoConstants.default.ogTitle
                }
            />
            <meta
                property="og:type"
                content={
                    seo.ogType
                        ? seo.ogType
                        : seoConstants[componentName] && seoConstants[componentName].ogType
                        ? seoConstants[componentName].ogType
                        : seoConstants.default.ogType
                }
            />
            <meta
                property="og:image"
                content={
                    seo.ogImage
                        ? seo.ogImage
                        : seoConstants[componentName] && seoConstants[componentName].ogImage
                        ? seoConstants[componentName].ogImage
                        : seoConstants.default.ogImage
                }
            />
            <meta
                property="og:url"
                content={
                    ogUrl
                        ? ogUrl
                        : seoConstants[componentName] && seoConstants[componentName].ogUrl
                        ? seoConstants[componentName].ogUrl
                        : seoConstants.default.ogUrl
                }
            />
            {/* telegram small ogimage fix */}
            <meta name="twitter:card" 
                content="summary_large_image" />
            <meta name="twitter:image" 
                content={
                seo.ogImage
                    ? seo.ogImage
                    : seoConstants[componentName] && seoConstants[componentName].ogImage
                    ? seoConstants[componentName].ogImage
                    : seoConstants.default.ogImage
            } />
            <link rel="canonical" href={ogUrl}></link>
        </Head>
    )
}

Seo.propTypes = {
    componentName: string,
    ogUrl: string,
    seo: object,
}

Seo.defaultProps = {
    seo: {},
    ogUrl: "",
    componentName: "default",
}

export default Seo
