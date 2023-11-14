import {scrollBlockerTypes} from '../constant';

export function pushSliderObject(scrollBlocker) {
    return {
        payload: scrollBlocker,
        type: scrollBlockerTypes.PUSH_SLIDER_OBJECT
    }
}