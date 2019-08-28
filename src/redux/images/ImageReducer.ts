import {FETCH_IMAGES_ERROR, FETCH_IMAGES_PENDING, FETCH_IMAGES_SUCCESS} from "../actionTypes";
import {ImagesActionTypes} from "./ImageTypes";

const initialState = {
    pending: false,
    error: '',
    images: {}

};

export default function imageReducer(state = initialState, action: ImagesActionTypes) {
    switch (action.type) {
        case FETCH_IMAGES_PENDING:
            return {
                ...state,
                pending: true,
                error: ''
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
