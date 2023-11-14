import {breakpointTypes} from '../constant';

export function setBreakpoint(breakpointId) {
    return {
        payload: breakpointId,
        type: breakpointTypes.SET_BREAKPOINT
    }
}