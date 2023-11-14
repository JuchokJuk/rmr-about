import { scrollBlockerTypes } from "../constant";

const initialState = [];

const ScrollBlockerReducer = (state = initialState, action) => {
    switch (action.type) {
        case scrollBlockerTypes.PUSH_SLIDER_OBJECT:
            return [...state, action.payload];
        default:
            return state;
    }
};

export { ScrollBlockerReducer };
