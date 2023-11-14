import React from "react";

export const smallScreen = () => window.innerWidth < 1024
export const isSelectedTags = (selectedTags) => selectedTags.length !== 0 
export const isOnTop = () => window.pageYOffset > 0;
export const isEmpty = (empty) => (Object.keys(empty).length === 0 && empty.constructor === Object)
export const isExist = ( field, defaultValue ) => field ? field : defaultValue
export const cHTML = (field) =>  {

    if (field && field.constructor === Array) {
        field = field.join('')
    }

    return field;
};

export const transformA = (node, children) => {
    if (node.tagName === 'a') {
        return <a href={node.getAttribute('href')} rel="noreferrer" target="_blank">{children}</a>;
    }
}

export const chooseHeight = (page, height, id) => {

    if( page === '/' ) {
        return height.mainPage ? height.mainPage : height
    } else {
        return height[id] ? height[id] : [0,0,0,0,0];
    }
}

export const convertDateToString = (date) => {

    let stringDate = new Date(date);
    let day = stringDate.getUTCDate();
    let month = (stringDate.getUTCMonth() + 1)
    month = month >= 10 ? month : "0" + month;
    let year = stringDate.getFullYear();

    return `${day}_${month}_${year}`;
}

export const chunkArray = (arr, chunk_size) => {
    let arr_copy = [...arr]
    let results = []

    while (arr_copy.length) {
        results.push(arr_copy.splice(0, chunk_size))
    }

    return results
}

export const chooseImage = (image) => {
    const allowed = ['large', 'largeRetina', 'medium', 'mediumRetina', 'small', 'smallRetina'];

    image.formats.default = {
        url: image.url,
        width: image.width 
    }

    const filtered = Object.keys(image.formats)
                            .filter(key => allowed.includes(key) )
                            .map((key) => {
                                return {
                                    width: image.formats[key].width,
                                    url: image.formats[key].urlCDN || image.formats[key].url,
                                    type: key
                                }
                            })

    return filtered.reduce(function (prev, curr) {
        return Math.abs(curr.width - 800) < Math.abs(prev.width - 800)
        ? curr
        : prev;
    }, { url: '', width: 0})
} 

export const isRetina = () => {
    let mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
            (min--moz-device-pixel-ratio: 1.5),\
            (-o-min-device-pixel-ratio: 3/2),\
            (min-resolution: 1.5dppx)";
    if (window.devicePixelRatio > 1)
        return true;
    if (window.matchMedia && window.matchMedia(mediaQuery).matches)
        return true;
    return false;
}

export const getOgImageLink = () => {
    const host = process.env.NEXT_PUBLIC_API_URL
    return `${host}ogimage.png`
}

export const createObjectURL = ( file ) => {
    if ( window.webkitURL ) {
        return window.webkitURL.createObjectURL( file );
    } else if ( window.URL && window.URL.createObjectURL ) {
        return window.URL.createObjectURL( file );
    } else {
        console.warn("❌ no window.URL / window.webkitURL")
        return null;
    }
}

export const isIos = () => {
    if (/iPad|iPhone|iPod/.test(navigator.platform)) {
        return true;
    } else if (navigator.maxTouchPoints &&
        navigator.maxTouchPoints > 2 &&
        /MacIntel/.test(navigator.platform)){
            return true;
    } 
    return false;
}