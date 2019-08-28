import {SELECT_CAMERA, SELECT_EARTH_DATE, SELECT_ROVER, SELECT_SOL_DATE, SET_DATE_TYPE} from "../actionTypes";
import {RoverProps} from "../rovers/RoverTypes";
import {
    SelectCameraAction,
    SelectDateTypeAction,
    SelectEarthDateAction,
    SelectRoverAction,
    SelectSolDateAction
} from "./FormTypes";

export const selectRover = (payload: RoverProps): SelectRoverAction => ({
    type: SELECT_ROVER, payload
});

export const selectEarthDate = (payload: string): SelectEarthDateAction => ({
    type: SELECT_EARTH_DATE, payload
});

export const selectSolDate = (payload: string): SelectSolDateAction => ({
    type: SELECT_SOL_DATE, payload
});

export const selectCamera = (payload: string): SelectCameraAction => ({
    type: SELECT_CAMERA, payload
});

export const setDateType = (payload: string): SelectDateTypeAction => ({
    type: SET_DATE_TYPE, payload
});