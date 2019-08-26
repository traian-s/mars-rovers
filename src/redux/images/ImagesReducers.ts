import {FETCH_IMAGES_ERROR, FETCH_IMAGES_PENDING, FETCH_IMAGES_SUCCESS} from "../actionTypes";

const initialState = {
    pending: false,
    images: [],
    error: null
};

export default function imageReducer(state = initialState, action: { type: string, payload: any }) {
    switch (action.type) {
        case FETCH_IMAGES_PENDING:
            return {
                ...state,
                pending: true,
                error: null
            };
        case FETCH_IMAGES_SUCCESS:
            return {
                ...state,
                pending: false,
                images: action.payload
            };
        case FETCH_IMAGES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload,
                images: []
            };
        default:
            return state;
    }
}
