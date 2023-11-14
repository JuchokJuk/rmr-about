import {headerTypes} from '../constant';

export function setHeaderRef(headerRef) {
    return {
        payload: headerRef,
        type: headerTypes.SET_HEADER_REF
    }
}