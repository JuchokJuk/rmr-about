import React, { useEffect } from "react";

import TagsMenu from "@components/TagsMenu";
import PromoSlider from "@components/Slider/PromoSlider";
import { useDispatch, useSelector } from "react-redux";

import "./index.less";
import { clearSelectedFilters, setSelectedUrl } from "@store/tags/tagsAction";
import { storeWrapper } from "@store/store";
import { initSidebar } from "@store/sidebar/sidebarAction";
import { initTags } from "@store/tags/tagsAction";
import { initMainArticles } from "@store/cards/cardsAction";
import LayoutGrid from "@components/Styles/LayoutGrid";
import Seo from "@components/Seo";
import { formTypesApi } from "@api/constants";
import Mailing from "@components/Mailing";

const Index = () => {
    let dispatch = useDispatch();
    const host = process.env.NEXT_PUBLIC_SITE_URL;
    const cards = useSelector((state) => state.cards.items);
    const promo = useSelector((state) => state.cards.promo);

    useEffect(() => {
        dispatch(clearSelectedFilters());
    }, []);
    const typeForm = formTypesApi.contactsForm;
    return (
        <React.Fragment>
            <Seo ogUrl={host} componentName={"index"} />

            <div className="page-wrap">
                <div className="mainPage">
                    <div className="grid-container">
                        <div className="grid-row">
                            <div className="grid-col-6">{<TagsMenu />}</div>
                        </div>
                    </div>
                </div>

                <div className="mainPage gridMargin">
                    <div className="grid-container">
                        {promo.length !== 0 ? (
                            <div className="grid-row promoblock__container">
                                <div className="grid-col-6">
                                    <PromoSlider slides={promo} />
                                </div>
                            </div>
                        ) : null}
                    </div>

                    <LayoutGrid cards={cards} page="/" pageId="" />
                </div>
                <div className="main-page__mailingList">
                    <div className="main-page__mailingList--content">
                        <Mailing labelGA="NewsletterSubscribeMain" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export const getServerSideProps = storeWrapper.getServerSideProps(
    async ({ store }) => {
        store.dispatch(setSelectedUrl(null));

        await Promise.allSettled([
            store.dispatch(initMainArticles()),
            store.dispatch(initSidebar()),
            store.dispatch(initTags()),
        ]);
    }
);

export default Index;
