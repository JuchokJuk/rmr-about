import SimilarArticles from "@components/Styles/LayoutGrid/SimilarArticles";
import VacancyPageGrid from "@components/Styles/VacancyPageGrid";
import { initSidebar } from "@store/sidebar/sidebarAction";
import Description from "@components/Styles/Description";
import { setSelectedUrl } from "@store/tags/tagsAction";
import { initCards } from "@store/career/careerAction";
import VacancyFilter from "@components/VacancyFilter";
import Paragraph from "@components/Styles/Paragraph";
import Wrapper from "@components/SiteGrid/Wrapper";
import RespondForm from "@components/RespondForm";
import Heading from "@components/Styles/Heading";
import Prism from "@components/AboutPage/Prism";
import { storeWrapper } from "@store/store";
import Video from "@components/Styles/Video";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import Seo from "@components/Seo";

const CareerPage = () => {
    const host = process.env.NEXT_PUBLIC_SITE_URL;
    const currentUrl = `${host}career`;
    const tags = useSelector((state) => state.career.mainData.tags);
    const pageData = useSelector((state) => state.career.mainData.pageData);
    const isVideo = !!pageData.video;
    const filteredCards = useSelector(
        (state) => state.career.filteredData.cards
    );
    const {
        firstHeader,
        firstDescription,
        secondHeader,
        secondDescription,
        notice,
        relatedArticles,
    } = pageData;
    const mailingHeader = useSelector(
        (state) => state.modals.emailingHeader.display
    );
    return (
        <>
            <Seo ogUrl={currentUrl} componentName={"career"} />
            <div
                className={

                     mailingHeader
                        ? "career career-show-mailing-header"
                        : "career"

                }
            >
                <Wrapper>
                    <Heading.H1new className="career__name">
                        Вакансии
                    </Heading.H1new>
                    <Heading.H2small className="career__firstHeader">
                        {firstHeader}
                    </Heading.H2small>
                    <Paragraph.P1Long className="career__firstDescription">
                        {firstDescription}
                    </Paragraph.P1Long>
                    {isVideo && (
                        <div className="career__video">
                            <Video
                                url={pageData.video.url}
                                text={pageData.videoCaption}
                                poster={pageData.videoPoster}
                            />
                        </div>
                    )}
                    <Heading.H2small className="career__secondHeader">
                        {secondHeader}
                    </Heading.H2small>
                    <Paragraph.P1Long className="career__secondDescription">
                        {secondDescription}
                    </Paragraph.P1Long>
                    <Description.D2new className="career__notice">
                        {notice}
                    </Description.D2new>
                    <div className="career__filters">
                        <VacancyFilter tags={tags} />
                    </div>
                    {filteredCards.length !== 0 ? (
                        <VacancyPageGrid cards={filteredCards} />
                    ) : (
                        <div className="career__notVacancy">
                            <Paragraph.P1Long>
                                Вероятно, сейчас у нас нет открытых вакансий для
                                тебя, но мы всегда рады крутым специалистам и
                                обязательно свяжемся с тобой, если появится
                                что-то подходящее.
                            </Paragraph.P1Long>
                        </div>
                    )}
                </Wrapper>
                <div className="career__form">
                    <div className="career__form--content">
                        <RespondForm />
                    </div>
                </div>
                <Wrapper>
                    <Prism className="career__prism" />
                    {relatedArticles && (
                        <div className="career__cards">
                            <Heading.H2small className="career__cards--name">
                                Больше о роботах
                            </Heading.H2small>
                            <div>
                                <div className=""></div>
                                <SimilarArticles
                                    cards={pageData.relatedArticles}
                                />
                            </div>
                        </div>
                    )}
                </Wrapper>
            </div>
        </>
    );
};
CareerPage.layout = "L3";
export const getServerSideProps = storeWrapper.getServerSideProps(
    async ({ store }) => {
        store.dispatch(setSelectedUrl("career"));

        await Promise.allSettled([
            store.dispatch(initSidebar()),
            store.dispatch(initCards()),
        ]);
    }
);

export default CareerPage;
