import ym from "react-yandex-metrika";
import { Router } from "next/router";
import GA4React from "ga-4-react";

let ga4react;

const eventCategories = {
    applications: "Applications",
    articles: "Articles",
    events: "Events",
    newsletters: "Newsletters",
    siteElements: "SiteElements",
    socialNetworks: "SocialNetworks",
    tags: "Tags",
    contacts: "Contacts",
    links: "Links",
    menuClicks: "MenuClicks",
};

const eventActions = {
    applicationBusiness: "ApplicationBusiness",
    applicationMedia: "ApplicationMedia",
    applicationVacancy: "ApplicationVacancy",
    articleDownloadFile: "ArticleDownloadFile",
    articleSendFile: "ArticleSendFile",
    articleShare: "ArticleShare",
    contactUs: "ContactUs",
    eventRegistration: "EventRegistration",
    flowSwipe: "FlowSwipe",
    newsletterArticle: "NewsletterArticle",
    newsletterMain: "NewsletterMain",
    newsletterContacts: "NewsletterContacts",
    newsletterHeader: "NewsletterHeader",
    newsletterSubscribe: "NewsletterSubscribe",
    outsideLink: "OutsideLink",
    menuClick: "MenuClick",
    socialOpen: "SocialOpen",
    tagsApply: "TagsApply",
    tagsMenu: "TagsMenu",
    emailClick: "EmailClick",
    phoneClick: "PhoneClick",
    aboutCompanyDownload: "AboutCompanyDownload",
};

const eventList = {
    ContactUsMain: {
        category: eventCategories.applications,
        action: eventActions.contactUs,
        label: "ContactUsMain",
    },
    ContactUsArticle: {
        category: eventCategories.applications,
        action: eventActions.contactUs,
        label: "ContactUsArticle",
    },
    ApplicationPartners: {
        category: eventCategories.applications,
        action: eventActions.applicationBusiness,
        label: "ApplicationPartners",
    },
    ApplicationBusiness: {
        category: eventCategories.applications,
        action: eventActions.applicationBusiness,
        label: "ApplicationBusiness",
    },
    VacancyContact: {
        category: eventCategories.applications,
        action: eventActions.applicationVacancy,
        label: "VacancyContact",
    },
    VacancyPage: {
        category: eventCategories.applications,
        action: eventActions.applicationVacancy,
        label: "VacancyPage",
    },
    VacancyArticle: {
        category: eventCategories.applications,
        action: eventActions.applicationVacancy,
        label: "VacancyArticle",
    },
    ApplicationMedia: {
        category: eventCategories.applications,
        action: eventActions.applicationMedia,
        label: "ApplicationMedia",
    },
    DownloadFile: {
        category: eventCategories.articles,
        action: eventActions.articleDownloadFile,
        label: "DownloadFile",
    },
    SendFile: {
        category: eventCategories.articles,
        action: eventActions.articleSendFile,
        label: "SendFile",
    },
    EventRegistration: {
        category: eventCategories.events,
        action: eventActions.eventRegistration,
        label: "EventRegistration",
    },
    ArticleShareFB: {
        category: eventCategories.socialNetworks,
        action: eventActions.articleShare,
        label: "ArticleShareFB",
    },
    ArticleShareInsta: {
        category: eventCategories.socialNetworks,
        action: eventActions.articleShare,
        label: "ArticleShareInsta",
    },
    ArticleShareTwitter: {
        category: eventCategories.socialNetworks,
        action: eventActions.articleShare,
        label: "ArticleShareTwitter",
    },
    ArticleShareVK: {
        category: eventCategories.socialNetworks,
        action: eventActions.articleShare,
        label: "ArticleShareVK",
    },
    SocialOpenFB: {
        category: eventCategories.socialNetworks,
        action: eventActions.socialOpen,
        label: "SocialOpenFB",
    },
    SocialOpenInsta: {
        category: eventCategories.socialNetworks,
        action: eventActions.socialOpen,
        label: "SocialOpenInsta",
    },
    SocialOpenTwitter: {
        category: eventCategories.socialNetworks,
        action: eventActions.socialOpen,
        label: "SocialOpenTwitter",
    },
    SocialOpenVC: {
        category: eventCategories.socialNetworks,
        action: eventActions.socialOpen,
        label: "SocialOpenVC",
    },
    SocialOpenTelegram: {
        category: eventCategories.socialNetworks,
        action: eventActions.socialOpen,
        label: "SocialOpenTelegram",
    },
    SocialOpenBehance: {
        category: eventCategories.socialNetworks,
        action: eventActions.socialOpen,
        label: "SocialOpenBehance",
    },
    SocialOpenLinkedin: {
        category: eventCategories.socialNetworks,
        action: eventActions.socialOpen,
        label: "SocialOpenLinkedin",
    },
    TagsMenu: {
        category: eventCategories.tags,
        action: eventActions.tagsMenu,
        label: "TagsMenu",
    },
    TagsApply: {
        category: eventCategories.tags,
        action: eventActions.tagsApply,
        label: "TagsApply",
    },
    TagsArticle: {
        category: eventCategories.tags,
        action: eventActions.tagsApply,
        label: "TagsArticle",
    },
    TagsVacancy: {
        category: eventCategories.tags,
        action: eventActions.tagsApply,
        label: "TagsVacancy",
    },
    FlowSwipe: {
        category: eventCategories.siteElements,
        action: eventActions.flowSwipe,
        label: "FlowSwipe",
    },
    EmailClickContacts: {
        category: eventCategories.contacts,
        action: eventActions.emailClick,
        label: "EmailClickContacts",
    },
    EmailClickFooter: {
        category: eventCategories.contacts,
        action: eventActions.emailClick,
        label: "EmailClickFooter",
    },
    PhoneClickContacts: {
        category: eventCategories.contacts,
        action: eventActions.phoneClick,
        label: "PhoneClickContacts",
    },
    PhoneClickFooter: {
        category: eventCategories.contacts,
        action: eventActions.phoneClick,
        label: "PhoneClickFooter",
    },
    AboutCompanyDownload: {
        category: eventCategories.contacts,
        action: eventActions.aboutCompanyDownload,
        label: "AboutCompanyDownload",
    },
    //new
    NewsletterSubscribeArticle: {
        category: eventCategories.newsletters,
        action: eventActions.newsletterSubscribe,
        label: "NewsletterSubscribeArticle",
    },
    NewsletterSubscribeMain: {
        category: eventCategories.newsletters,
        action: eventActions.newsletterSubscribe,
        label: "NewsletterSubscribeMain",
    },
    NewsletterSubscribeContacts: {
        category: eventCategories.newsletters,
        action: eventActions.newsletterSubscribe,
        label: "NewsletterSubscribeContacts",
    },
    NewsletterSubscribeHeader: {
        category: eventCategories.newsletters,
        action: eventActions.newsletterSubscribe,
        label: "NewsletterSubscribeHeader",
    },
    NewsletterSubscribeCompany: {
        category: eventCategories.newsletters,
        action: eventActions.newsletterSubscribe,
        label: "NewsletterSubscribeCompany",
    },
    OutsideLinkHitch: {
        category: eventCategories.links,
        action: eventActions.outsideLink,
        label: "OutsideLinkHitch",
    },
    OutsideLinkVerno: {
        category: eventCategories.links,
        action: eventActions.outsideLink,
        label: "OutsideLinkVerno",
    },
    OutsideLinkVC: {
        category: eventCategories.links,
        action: eventActions.outsideLink,
        label: "OutsideLinkVC",
    },
    OutsideLinkHabr: {
        category: eventCategories.links,
        action: eventActions.outsideLink,
        label: "OutsideLinkHabr",
    },
    MenuClickOpen: {
        category: eventCategories.menuClicks,
        action: eventActions.menuClick,
        label: "MenuClickOpen",
    },
    MenuClickWhatWeDo: {
        category: eventCategories.menuClicks,
        action: eventActions.menuClick,
        label: "MenuClickWhatWeDo",
    },
    MenuClickStory: {
        category: eventCategories.menuClicks,
        action: eventActions.menuClick,
        label: "MenuClickStory",
    },
    MenuClickDigServ: {
        category: eventCategories.menuClicks,
        action: eventActions.menuClick,
        label: "MenuClickDigServ",
    },
    MenuClickProd: {
        category: eventCategories.menuClicks,
        action: eventActions.menuClick,
        label: "MenuClickProd",
    },
    MenuClickAwards: {
        category: eventCategories.menuClicks,
        action: eventActions.menuClick,
        label: "MenuClickAwards",
    },
    MenuClickDigTransf: {
        category: eventCategories.menuClicks,
        action: eventActions.menuClick,
        label: "MenuClickDigTransf",
    },
    MenuClickInvest: {
        category: eventCategories.menuClicks,
        action: eventActions.menuClick,
        label: "MenuClickInvest",
    },
    MenuClickContactUs: {
        category: eventCategories.menuClicks,
        action: eventActions.menuClick,
        label: "MenuClickContactUs",
    },
};

const gaDmensions = {
    Text: "dimension1",
    ArticleName: "dimension2",
    Tags: "dimension3",
    Author: "dimension4",
    Source: "dimension5",
    VacancyLink: "dimension6",
    File: "dimension7",
    CompanyName: "dimension8",
    RoleName: "dimension9",
    Budget: "dimension10",
    SocialNetwork: "dimension11",
    Email: "dimension12",
    Vacancy: "dimension13",
    NewsletterPage: "dimension14",
};

const arrayNameKeys = {
    Source: "howDidFindOut",
    Tags: "name",
};

const convertArray = (arr, nameKey, ga = false) => {
    const result = arr.map((tag) => tag[nameKey]);
    return ga ? result.join() : result;
};

const parseParams = (params, ga = false) => {
    let result = {};
    Object.keys(params).forEach((key) => {
        let value = "";

        if (Array.isArray(params[key])) {
            value = convertArray(params[key], arrayNameKeys[key], ga);
        } else {
            value = params[key];
        }

        if (ga) {
            result[gaDmensions[key]] = value;
        } else {
            result[key] = value;
        }
    });
    return result;
};

export const logEvent = (event = "", params = {}) => {
    if (event && eventList[event] && GA4React.isInitialized()) {
        if (process.env.NODE_ENV !== "production") {
            console.log("ga", {
                ...eventList[event],
                ...parseParams(params, true),
            });
            console.log("ym", eventList[event].action, parseParams(params));
        }

        console.log({ GA4React: GA4React.isInitialized() });

        if (process.browser && GA4React.isInitialized()) {
            ga4react.gtag("event", eventList[event].action, {
                ...eventList[event],
                ...parseParams(params),
            });
        }
        ym("reachGoal", eventList[event].action, parseParams(params));
    }
    return;
};

export async function initGA4(G) {
    if (process.browser && !GA4React.isInitialized() && G) {
        let ga4init = new GA4React(G, {
            debug_mode: process.env.NODE_ENV !== "production",
        });

        try {
            await ga4init
                .initialize()
                .then((ga4) => {
                    ga4react = ga4;
                    console.log("Init ga4");
                })
                .catch((err) => {
                    console.error("ga4 err", err);
                });

            logPageViews();
        } catch (error) {
            console.error(error);
        }
    }
}

export const logPageView = (init = false) => {
    // ga4react.pageview(window.location.pathname)

    if (!init) {
        ym("hit", window.location.pathname + window.location.search);
    }
};

export function logPageViews() {
    logPageView(true);
    Router.events.on("routeChangeComplete", () => {
        logPageView();
    });
}
