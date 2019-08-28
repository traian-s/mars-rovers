import {FETCH_ROVERS_ERROR, FETCH_ROVERS_PENDING, FETCH_ROVERS_SUCCESS} from "../actionTypes";
import {RoverActionTypes} from "./RoverTypes";

const initialState = {
    pending: false,
    rovers: [{}],
    error: ''
};

export default function roverReducer(state = initialState, action: RoverActionTypes) {
    switch (action.type) {
        case FETCH_ROVERS_PENDING:
            return {
                ...state,
                pending: true,
                error: '',
                rovers: []
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
                error: action.payload,
                rovers: []
            };
        default:
            return state;
    }
}
