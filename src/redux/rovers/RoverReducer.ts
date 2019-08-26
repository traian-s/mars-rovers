import {FETCH_ROVERS_ERROR, FETCH_ROVERS_PENDING, FETCH_ROVERS_SUCCESS} from "../actionTypes";

const initialState = {
    pending: false,
    rovers: [],
    error: null
};

export default function roverReducer(state = initialState, action: { type: string, payload: any }) {
    switch (action.type) {
        case FETCH_ROVERS_PENDING:
            return {
                ...state,
                pending: true,
                error: null
            };
        case FETCH_ROVERS_SUCCESS:
            return {
                ...state,
                pending: false,
                rovers: action.payload
            };
        case FETCH_ROVERS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload.error,
                rovers: []
            };
        default:
            return state;
    }
}
