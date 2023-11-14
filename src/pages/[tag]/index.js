import React, { useEffect } from 'react';

import TagsMenu from '@components/TagsMenu'
import TagsCloud from '@components/TagsCloud'
import LoadMore from '@components/LoadMore'
import PromoSlider from '@components/Slider/PromoSlider'

import './index.less';
import { useDispatch, useSelector } from 'react-redux'
import Filter from '@components/Filter'
import { useRouter } from 'next/router';
import Head from 'next/head';
import { storeWrapper } from '@store/store';
import { initSidebar } from '@store/sidebar/sidebarAction';
import { initTags, setSelectedUrl } from '@store/tags/tagsAction';
import { initArticles } from '@store/cards/cardsAction';
import LayoutGrid from '@components/Styles/LayoutGrid';
import { setPagination } from '@store/pagination/paginationAction';
import Custom404 from '@pages/404';
import seoConstants from '@helpers/seoConstants'
import Seo from "@components/Seo";
import { setLastVisitTag } from '@store/routing/routingAction';

const TagPage = () => {
    const router = useRouter()
    const dispath = useDispatch()
    const host = process.env.NEXT_PUBLIC_SITE_URL
    const currentUrl = router.query.tag

    const state = useSelector((state) => state.cards)
    const tags = useSelector((state) => state.tags.allTags)
    const currentPage = useSelector((state) => state.pagination.currentPage)
    const ping = useSelector((state) => state.tags.selectedTagsPing)

    useEffect(() => {
        if (currentTag && (state.isRejected && tags.isRejected)) {
            dispath(setLastVisitTag(currentUrl))
        }
    }, [currentUrl])

    if (state.isRejected || tags.isRejected) {
        return (
            <React.Fragment>
                <Head>
                    <meta name="robots" content="noindex" />
                </Head>

                <Custom404 />
            </React.Fragment>
        )
    }

    const currentTag = tags.data.find(tag => tag.url === currentUrl)

    let seo = {}

    if (currentTag) {
        if (currentTag.seo) {
            seo = currentTag.seo
        }
        if (!seo.title) {
            seo.title = currentTag.name
        }
        if (!seo.description) {
            seo.description = seoConstants.description
        }
        if (!seo.ogType) {
            seo.ogType = 'website'
        }
        if (!seo.ogTitle) {
            seo.ogTitle = seo.title
        }
        if (seo.ogImage && seo.ogImage.formats && seo.ogImage.formats.thumbnail) {
            seo.ogImage = seo.ogImage.formats.thumbnail.url ? seo.ogImage.formats.thumbnail.url : ''
        }
        seo.currentUrl = `${host}${currentUrl}`
    }

    const cards = state.items
    const cardsFilters = state.filters
    const promo = state.promo
    const total = state.totalItems
    const recieved = state.itemsRecieved
    const lastPage = recieved === total

    let filtersPresent = cardsFilters.available ? cardsFilters.available.length : 0

    const showTagsBubble = (currentPage > 3 && ping === null)

    return (
        <React.Fragment>

            <Seo seo={seo} ogUrl={seo.currentUrl} componentName={'tag'} />

            <div className="page-wrap">
                <div className="mainPage">
                    <div className="grid-container">
                        <div className="grid-row">
                            <div className="grid-col-6">
                                <TagsMenu />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`mainPage ${lastPage ? 'gridMargin' : ''}`}>
                    <div className="grid-container promoblock__container">
                        {
                            filtersPresent ? <div className="grid-row">
                                <div className="grid-col-6">
                                    <Filter filters={cardsFilters}/>
                                </div>
                            </div> : ''
                        }

                        { promo.length !== 0 ?
                            <div className="grid-row promoblock__container">
                                <div className="grid-col-6">
                                    <PromoSlider slides={promo} />
                                </div>
                            </div> : null
                        }
                    </div>

                    { currentTag ?
                        <LayoutGrid cards={cards}
                                    filters={cardsFilters.all}
                                    page=''
                                    pageId={currentTag._id} />
                        : null }
                    {
                        showTagsBubble ? <div className="grid-container">
                            <div className="grid-row tag-cloud__container">
                                <div className="grid-col-6">
                                    <TagsCloud />
                                </div>
                            </div>
                        </div> : ''
                    }

                    <LoadMore type='tag' />

                </div>
            </div>
        </React.Fragment>
    );
};

export const getServerSideProps = storeWrapper.getServerSideProps(async ({ store, query, res }) => {
    store.dispatch(setSelectedUrl(query.tag))
    store.dispatch(setPagination(query.page === undefined ? 1 : +query.page))

    await Promise.allSettled([
        store.dispatch(initArticles(query.tag, [], query.page)),
        store.dispatch(initSidebar()),
        store.dispatch(initTags()),
    ])

    if (store.getState().cards.isRejected) {
        res.statusCode = 404;
    }
})

export default TagPage;