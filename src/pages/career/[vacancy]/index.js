import { initActualAuthors } from "@store/employees/employeesAction";
import RespondButton from "@components/Styles/RespondButton";
import { initSidebar } from "@store/sidebar/sidebarAction";
import { chooseImage, isEmpty } from "@helpers/functions";
import { initVacancy } from "@store/career/careerAction";
import ShareButton from "@components/Styles/ShareButton";
import Paragraph from "@components/Styles/Paragraph";
import PixelArrow from "@assets/pixelArrowLeft.svg";
import React, { useEffect, useState } from "react";
import Wrapper from "@components/SiteGrid/Wrapper";
import RespondForm from "@components/RespondForm";
import Heading from "@components/Styles/Heading";
import BaseImage from "@components/BaseImage";
import { storeWrapper } from "@store/store";
import { useSelector } from "react-redux";
import Custom404 from "@pages/404";
import PropTypes from "prop-types";
import Seo from "@components/Seo";
import router from "next/router";
import Head from "next/head";

const VacancyPage = ({ scrollPosition }) => {
    const state = useSelector((state) => state.career.vacancy);
    let seoTitle = "";
    let seoImage = "";
    let seo = {};
    let cityTags = [];

    if (state.isFulfilled) {
        try {
            seoTitle = state.data.seo.title
                ? state.data.seo.title
                : state.data.header.title
                ? state.data.header.title.replace(/\[\/?(?:p).*?\]/g, "")
                : "Red_mad_robot";
            let choisedImage = chooseImage(state.data.header.image);
            if (choisedImage.url) {
                if (state.data.seo.ogImage) {
                    seoImage = state.data.seo.ogImage;
                }
                seoImage = choisedImage.url;
            }
        } catch (error) {
            console.error("Seo title or image error:", error);
        }

        seo = {
            title: seoTitle,
            description: state.data.seo.description
                ? state.data.seo.description
                : state.data.header.intro,
            ogTitle: state.data.seo.ogTitle
                ? state.data.seo.ogTitle
                : state.data.header.title.replace(/\[\/?(?:p).*?\]/g, ""),
            ogType: state.data.seo.ogType ? state.data.seo.ogType : "article",
            ogImage: seoImage,
            ogUrl: state.data.currentUrl ? state.data.currentUrl : "",
        };

        cityTags = state.data.tags.filter((tag) => tag.type == "city");
    }
    const goBack = () => {
        router.push("/career");
    };

    const { header, aboutTeam, blocks, advantages } = state.data;

    // формируем данные по требованию к кандидату
    const [detailedVacancy, setDetailedVacancy] = useState([]);
    useEffect(() => {
        if (!isEmpty(blocks)) {
            const blocksArr = blocks.items;
            const sortBlocks = blocksArr.reduce(
                (result, value, index, array) => {
                    if (index % 2 === 0) {
                        result.push(array.slice(index, index + 2));
                    }
                    return result;
                },
                []
            );
            const newSort = sortBlocks.map((item) => {
                const obj = {
                    name: item[0].data.text,
                    items: item[1].data.items,
                };
                return obj;
            });
            setDetailedVacancy(newSort);
        }
        return;
    }, [isEmpty(blocks)]);

    // формируем данные по условию работы
    const [dataLeftBlock, setDataLeftBlock] = useState([]);
    const [dataRightBlock, setDataRightBlock] = useState([]);

    useEffect(() => {
        if (!isEmpty(advantages)) {
            let dataForLeftBlock = [];
            let dataForRightBlock = [];
            for (let i = 0; i < 6; i++) {
                dataForLeftBlock.push(advantages.list[i]);
            }
            for (let i = 6; i < 9; i++) {
                dataForRightBlock.push(advantages.list[i]);
            }
            setDataRightBlock(dataForRightBlock);
            setDataLeftBlock(dataForLeftBlock);
        }
        return;
    }, [isEmpty(advantages)]);

    const mailingHeader = useSelector(
        (state) => state.modals.emailingHeader.display
    );

    if (state.isRejected) {
        return (
            <React.Fragment>
                <Head>
                    <meta name="robots" content="noindex" />
                </Head>

                <Custom404 />
            </React.Fragment>
        );
    }

    return (
        <div
            className={
                mailingHeader
                    ? "vacancy vacancy-show-mailing-header"
                    : "vacancy"
            }
        >
            <Seo seo={seo} ogUrl={seo.ogUrl} componentName={"career"} />
            {state.isFulfilled ? (
                <>
                    <Wrapper>
                        <div className="vacancy__content">
                            <div
                                className="vacancy__content--back step-back"
                                onClick={() => goBack()}
                            >
                                <div className="step-back__arrow">
                                    <PixelArrow />
                                </div>
                                <div>Назад к предложениям</div>
                            </div>
                            <div className="vacancy__header">
                                <Heading.H1new className="vacancy__name">
                                    {header.title}
                                </Heading.H1new>
                                <div className="vacancy__tags">
                                    {cityTags.map((city, index) => {
                                        return (
                                            <span
                                                className="vacancy__tags--city"
                                                key={index}
                                            >
                                                {city.name}
                                            </span>
                                        );
                                    })}
                                </div>
                                <Paragraph.P1Long className="vacancy__header--description">
                                    {header.intro}
                                </Paragraph.P1Long>
                                <div className="vacancy__btns">
                                    <RespondButton />
                                    <div className="vacancy__btns--share">
                                        <ShareButton />
                                    </div>
                                </div>
                            </div>

                            {!isEmpty(state.data.aboutTeam) && (
                                <div className="vacancy__about">
                                    <div className="vacancy__about--img">
                                        <BaseImage
                                            formats={aboutTeam.image}
                                            type="photo"
                                            targets={[1248, 888, 672, 680, 328]}
                                            scrollPosition={scrollPosition}
                                        />
                                    </div>
                                    <div className="vacancy__about--block">
                                        <Heading.H2small className="vacancy__about--name">
                                            {aboutTeam.header}
                                        </Heading.H2small>

                                        <Paragraph.P1Long>
                                            {aboutTeam.description}
                                        </Paragraph.P1Long>
                                    </div>
                                </div>
                            )}
                            {!isEmpty(blocks) &&
                                detailedVacancy.map((block, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="vacancy__detailed"
                                        >
                                            <Heading.H2small className="vacancy__detailed--name">
                                                {block.name}
                                            </Heading.H2small>
                                            <ul className="vacancy__detailed--list">
                                                {block.items.map(
                                                    (item, index2) => {
                                                        return (
                                                            <div
                                                                key={index2}
                                                                className="vacancy__requirement"
                                                            >
                                                                <span className="vacancy__requirement--dash">
                                                                    —
                                                                </span>
                                                                <Paragraph.P1Long>
                                                                    {item}
                                                                </Paragraph.P1Long>
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            </ul>
                                        </div>
                                    );
                                })}

                            {!isEmpty(advantages) && (
                                <div className="vacancy__conditions conditions">
                                    <div className="conditions__block">
                                        <Heading.H2small className="conditions__name">
                                            {advantages.scroll.text}
                                        </Heading.H2small>
                                        {dataLeftBlock.map((item, index) => (
                                            <div
                                                key={index}
                                                className="conditions__block--item"
                                            >
                                                <Heading.H3medium className="conditions__block--heading">
                                                    {item.name}
                                                </Heading.H3medium>
                                                <Paragraph.P1Long>
                                                    {item.description}
                                                </Paragraph.P1Long>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="conditions__block">
                                        <div className="conditions__block--image">
                                            {
                                                <BaseImage
                                                    formats={
                                                        advantages.scroll.image
                                                    }
                                                    type="photo"
                                                    targets={[
                                                        1248, 888, 672, 680,
                                                        328,
                                                    ]}
                                                    scrollPosition={
                                                        scrollPosition
                                                    }
                                                />
                                            }
                                        </div>
                                        {dataRightBlock.map((item, index) => (
                                            <div
                                                key={index}
                                                className="conditions__block--item"
                                            >
                                                <Heading.H3medium className="conditions__block--heading">
                                                    {item.name}
                                                </Heading.H3medium>
                                                <Paragraph.P1Long>
                                                    {item.description}
                                                </Paragraph.P1Long>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </Wrapper>
                    <div className="vacancy__form" id={"contact-window"}>
                        <div className="vacancy__form--content">
                            <RespondForm
                                id={state.data.id}
                                title={state.data.header.title}
                            />
                        </div>
                    </div>
                </>
            ) : (
                ""
            )}
        </div>
    );
};
VacancyPage.layout = "L3";
VacancyPage.propTypes = {
    scrollPosition: PropTypes.any,
};

export const getServerSideProps = storeWrapper.getServerSideProps(
    async ({ store, query, res }) => {
        await Promise.allSettled([
            store.dispatch(initVacancy(query.vacancy)),
            store.dispatch(initSidebar()),
        ]);

        if (store.getState().articles.isRejected) {
            res.statusCode = 404;
            return;
        }

        if (store.getState().articles.data.authorsToRefresh) {
            await Promise.allSettled([
                store.dispatch(
                    initActualAuthors(
                        store.getState().articles.data.authorsToRefresh
                    )
                ),
            ]);
        }
    }
);

/* export default trackWindowScroll(VacancyPage); */
export default VacancyPage;
