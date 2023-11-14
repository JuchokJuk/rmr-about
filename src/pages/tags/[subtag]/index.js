import React from 'react';
import Head from 'next/head';

import TagsMenu from '@components/TagsMenu/TagsMenu'
import TagsCloud from '@components/TagsCloud/TagsCloud'
import LoadMore from '@components/LoadMore'
import PromoSlider from '@components/Slider/PromoSlider'

import { useSelector } from 'react-redux'
import Filter from '@components/Filter'
import { useRouter } from 'next/router';

import { storeWrapper } from '@store/store';
import { initSidebar } from '@store/sidebar/sidebarAction';
import { initTags, setSelectedUrl } from '@store/tags/tagsAction';
import { initArticles } from '@store/cards/cardsAction';
import LayoutGrid from '@components/Styles/LayoutGrid';
import { setPagination } from '@store/pagination/paginationAction';
import Custom404 from '@pages/404';
import Seo from '@components/Seo';

const SubTagPage = () => {
    const host = process.env.NEXT_PUBLIC_SITE_URL

    const router = useRouter()
    const currentUrl = host + 'subtag/' + router.query.subtag

    const state = useSelector((state) => state.cards)
    const tags = useSelector((state) => state.tags.allTags)
    const currentPage = useSelector((state) => state.pagination.currentPage)
    const ping = useSelector((state) => state.tags.selectedTagsPing)


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

    let seo = {}

    const cards = state.items
    const cardsFilters = state.filters
    const promo = state.promo
    const total = state.totalItems
    const received = state.itemsRecieved

    let filtersPresent = cardsFilters.all ? cardsFilters.all.length : 0

    const lastPage = received === total

    const showTagsBubble = (currentPage > 3 && ping === null)

    return (
        <React.Fragment>
            <Seo seo={seo} ogUrl={currentUrl} componentName={'subtag'} />
        
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
                                    <Filter filters={cardsFilters} type='subtag'/>
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

                    <LayoutGrid
                        cards={cards}
                        page='/'
                        pageId=''
                        filters={cardsFilters.all} />

                    {
                        showTagsBubble ? <div className="grid-container">
                            <div className="grid-row tag-cloud__container">
                                <div className="grid-col-6">
                                    <TagsCloud />
                                </div>
                            </div>
                        </div> : ''
                    }

                    <LoadMore type='subtag' />
                </div>
            </div>
        </React.Fragment>
    );
};

export const getServerSideProps = storeWrapper.getServerSideProps(async ({ store, query }) => {
    store.dispatch(setSelectedUrl(query.subtag))
    store.dispatch(setPagination(query.page === undefined ? 1 : +query.page))

    await Promise.allSettled([
        store.dispatch(initArticles('', [query.subtag], query.page)),
        store.dispatch(initSidebar()),
        store.dispatch(initTags()),
    ])
})

export default SubTagPage;