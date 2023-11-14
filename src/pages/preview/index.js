import React from 'react';
import PropTypes from 'prop-types'

import StylePageHeader from '@components/StylePage/StylePageHeader';
import Builder from '@components/StylePage/Builder';
import Footer from '@components/StylePage/StylePageFooter';

import Divider from '@components/Styles/Divider';

import { useSelector } from 'react-redux';

import Head from "next/head";
import { storeWrapper } from '@store/store';
import { initSidebar } from '@store/sidebar/sidebarAction';
import { initPreview } from '@store/articles/articlesAction';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import Custom404 from "@pages/404";
import seoConstants from '@helpers/seoConstants'
import { chooseImage } from '@helpers/functions';
import { initActualAuthors } from '@store/employees/employeesAction';
import Seo from "@components/Seo";

const PreviewPage = ({ scrollPosition }) =>  {
    const state = useSelector(state => state.articles)
    const tagsByUrl = useSelector((state) => state.tags.allTags.byUrl)
    let seoTitle = ''
    let seoImage = ''
    let seo = {}

    if (state.isFulfilled) {
        try {
            seoTitle = state.data.seo.title ? state.data.seo.title : (state.data.header.title ? state.data.header.title.replace(/\[\/?(?:p).*?\]/g, "") : 'Red_mad_robot')
            let choisedImage = chooseImage(state.data.header.image);
            if (choisedImage.url) {
                if (state.data.seo.ogImage) {
                    seoImage = state.data.seo.ogImage
                }
                seoImage = choisedImage.url
            }
        } catch (error) {
            console.error('Seo title or image error:', error)
        }

        seo = {
            title: seoTitle,
            description: state.data.seo.description ? state.data.seo.description : seoConstants.description,
            ogTitle: state.data.seo.ogTitle ? state.data.seo.ogTitle : state.data.header.title.replace(/\[\/?(?:p).*?\]/g, ""),
            ogType: state.data.seo.ogType ? state.data.seo.ogType : 'article',
            ogImage: seoImage,
            ogUrl: state.data.currentUrl ? state.data.currentUrl : ''
        }
    }

    if (state.isRejected) {
        return(
            <React.Fragment>
                <Head>
                    <meta name="robots" content="noindex"/>
                </Head>

                <Custom404/>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>

            <Seo seo={seo} ogUrl={seo.ogUrl} componentName={'article'} />
            { state.isFulfilled ?
                <div className="st1">

                    <StylePageHeader author={state.data.author}
                            tags={state.data.tags ? state.data.tags : []}
                            {...state.data.header}
                            scrollPosition={scrollPosition}
                            tagsByUrl={tagsByUrl}/>

                    <Divider header />

                    <Builder {...state.data} scrollPosition={scrollPosition} id={state.data.id} tagsByUrl={tagsByUrl}/>

                    <Footer similarTags={state.data.similarTags}
                            similarArticles={state.data.similarArticles}
                            scrollPosition={scrollPosition} tagsByUrl={tagsByUrl}/>

                </div> : ''}
        </React.Fragment>
    );
};

PreviewPage.propTypes = {
    scrollPosition: PropTypes.any
}

export const getServerSideProps = storeWrapper.getServerSideProps(async ({ store, query, res }) => {
    await Promise.allSettled([
        store.dispatch(initPreview(query.id, 'preview')),
        store.dispatch(initSidebar()),
    ])

    if (store.getState().articles.isRejected) {
        res.statusCode = 404;
        return;
    }

    if (store.getState().articles.data.authorsToRefresh) {
        await Promise.allSettled([
            store.dispatch(initActualAuthors(store.getState().articles.data.authorsToRefresh))
        ])
    }
})

export default trackWindowScroll(PreviewPage);