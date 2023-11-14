import aboutApi from "@api/about";
import { articleAdapter } from "@helpers/Adapters/ArticleAdapter";
import { aboutActionTypes, newAboutPage } from "../constant";

export const initAbout = () => {
    const host = process.env.NEXT_PUBLIC_SITE_URL;

    return {
        type: aboutActionTypes.TYPE,
        payload: aboutApi
            .getAboutData()
            .then((result) => articleAdapter(result.data, `${host}about`)),
    };
};
export const changeVisibilityMobileMenu = (payload) => {
    return {
        type: newAboutPage.CHANGE_VISIBILITY_MOBILE_MENU,
        payload,
    };
};
export const setRefBlock = (payload) => {
    return {
        type: newAboutPage.SET_REF_RED_BLOCK,
        payload,
    };
};

export const setPlayBlock = (payload) => {
    return {
        type: newAboutPage.SET_PLAY_BLOCK,
        payload,
    };
};


export const setVideos = (payload) => {
    return {
        type: newAboutPage.SET_VIDEOS,
        payload,
    };
};

export const setVideosStatus = (payload) => {
    return {
        type: newAboutPage.SET_VIDEOS_STATUS,
        payload,
    };
};

export const setHeroSliderDelayed = (payload) => {
    return {
        type: newAboutPage.SET_HERO_SLIDER_DELAYED,
        payload,
    }
}
export const setBigBusinessDelayed = (payload) => {
    return {
        type: newAboutPage.SET_BIG_BUSINESS_DELAYED,
        payload,
    }
}
export const setExplosionDelayed = (payload) => {
    return {
        type: newAboutPage.SET_EXPLOSION_DELAYED,
        payload,
    }
}
export const setSlidesDelayed = (payload) => {
    return {
        type: newAboutPage.SET_SLIDES_DELAYED,
        payload,
    }
}