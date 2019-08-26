import {SELECT_CAMERA, SELECT_EARTH_DATE, SELECT_ROVER, SELECT_SOL_DATE, SET_DATE_TYPE} from "../actionTypes";
import {RoverProps} from "../rovers/RoverTypes";

export const selectRover = (rover: RoverProps | undefined) => ({
    type: SELECT_ROVER, payload: {rover}
});

export const selectEarthDate = (earthDate: string | undefined) => ({
    type: SELECT_EARTH_DATE, payload: {earthDate}
});

export const selectSolDate = (solDate: string | undefined) => ({
    type: SELECT_SOL_DATE, payload: {solDate}
});

export const selectCamera = (camera: string | undefined) => ({
    type: SELECT_CAMERA, payload: {camera}
});

export const setDateType = (dateType: string) => ({
    type: SET_DATE_TYPE, payload: {dateType}
});