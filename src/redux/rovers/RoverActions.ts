import {FETCH_ROVERS_ERROR, FETCH_ROVERS_PENDING, FETCH_ROVERS_SUCCESS} from "../actionTypes";
import axios from 'axios';
import {API_ROVERS_ENDPOINT} from "../../constants";
import {FetchRoversErrorAction, FetchRoversPendingAction, FetchRoversSuccessAction, RoverProps} from "./RoverTypes";

export const fetchRoversPending = (): FetchRoversPendingAction => ({
    type: FETCH_ROVERS_PENDING
});

export const fetchRoversSuccess = (payload: RoverProps[]): FetchRoversSuccessAction => ({
    type: FETCH_ROVERS_SUCCESS, payload
});


export const fetchRoversError = (payload: string): FetchRoversErrorAction => ({
    type: FETCH_ROVERS_ERROR, payload
});

export const fetchRovers = () => {
    return (dispatch: any) => {
        dispatch(fetchRoversPending());
        axios.get(API_ROVERS_ENDPOINT)
            .then(res => {
                dispatch(fetchRoversSuccess(res.data.rovers));
            })
            .catch(error => {
                dispatch(fetchRoversError(error));
            })

    }
};