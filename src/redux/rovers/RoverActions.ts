import {FETCH_ROVERS_ERROR, FETCH_ROVERS_PENDING, FETCH_ROVERS_SUCCESS} from "../actionTypes";
import axios from 'axios';
import {API_ROVERS_ENDPOINT} from "../../constants";
import {RoverProps} from "./RoverTypes";

export const fetchRoversPending = () => ({
    type: FETCH_ROVERS_PENDING
});

export const fetchRoversSuccess = (rovers: [RoverProps]) => ({
    type: FETCH_ROVERS_SUCCESS,
    payload: rovers
});

export const fetchRoversError = (error: any) => ({
    type: FETCH_ROVERS_ERROR,
    payload: error
});

export const fetchRovers = () => {
    return (dispatch: any) => {
        dispatch(fetchRoversPending());
        axios.get(API_ROVERS_ENDPOINT)
            .then(res => {
                dispatch(fetchRoversSuccess(res.data.rovers));
                return res.data.rovers;
            })
            .catch(error => {
                dispatch(fetchRoversError(error));
            })

    }
};