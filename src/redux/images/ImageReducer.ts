import {FETCH_IMAGES_ERROR, FETCH_IMAGES_PENDING, FETCH_IMAGES_SUCCESS} from "../actionTypes";
import {ImagesActionTypes} from "./ImageTypes";

const initialState = {
    error: '',
    images: {},
    pending: false
};

export default function imageReducer(state = initialState, action: ImagesActionTypes) {
    switch (action.type) {
        case FETCH_IMAGES_PENDING:
            return {
                ...state,
                error: '',
                pending: true
            };
        case FETCH_IMAGES_SUCCESS:
            return {
                ...state,
                images: action.payload,
                pending: false
            };
        case FETCH_IMAGES_ERROR:
            return {
                ...state,
                error: action.payload,
                images: [],
                pending: false
            };
        default:
            return state;
    }
}
