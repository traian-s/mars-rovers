import {AnyAction} from "redux";
import {FETCH_ROVERS_ERROR, FETCH_ROVERS_PENDING, FETCH_ROVERS_SUCCESS} from "../actionTypes";

export interface RoverProps {
    id: number,
    name: string,
    landing_date: string,
    launch_date: string,
    status: string,
    max_sol: string,
    max_date: string,
    total_photos: number,
    cameras: CameraProps[]
}

export interface CameraProps {
    full_name: string,
    id: number,
    name: string,
    rover_id: number
}

export interface roveReducerProps {
    pending: boolean,
    error: string,
    rovers: RoverProps[]
}

export interface FetchRoversPendingAction extends AnyAction {
    type: typeof FETCH_ROVERS_PENDING
}

export interface FetchRoversSuccessAction extends AnyAction {
    type: typeof FETCH_ROVERS_SUCCESS,
    payload: RoverProps[]
}

export interface FetchRoversErrorAction extends AnyAction {
    type: typeof FETCH_ROVERS_ERROR,
    payload: string
}

export type RoverActionTypes = FetchRoversErrorAction | FetchRoversSuccessAction | FetchRoversPendingAction;

export interface RoverState extends roveReducerProps {
}