import {RoverProps} from "../rovers/RoverTypes";
import {selectCamera, selectEarthDate, selectRover, selectSolDate, setDateType} from "./FormActions";
import {AnyAction} from "redux";
import {SELECT_CAMERA, SELECT_EARTH_DATE, SELECT_ROVER, SELECT_SOL_DATE, SET_DATE_TYPE} from "../actionTypes";

export interface CameraSelectorProps {
    selectedRover: RoverProps,
    selectCamera: typeof selectCamera
}

export interface EarthDateSelectorProps {
    earthDate: string,
    selectedRover: RoverProps,
    selectEarthDate: typeof selectEarthDate
}

export interface SelectRoverProps {
    selectRover: typeof selectRover,
    rovers: RoverProps[]
}

export interface SolDateSelectorProps {
    solDate: string,
    selectedRover: RoverProps,
    selectSolDate: typeof selectSolDate
}

export interface DateTypeSelectorProps {
    activeType: string,
    setDateType: typeof setDateType
}

export interface formReducerProps {
    dateType: string,
    roverName: string,
    earthDate: string,
    solDate: string,
    camera: string,
    selectedRover: RoverProps
}

export interface SelectRoverAction extends AnyAction {
    type: typeof SELECT_ROVER,
    payload: RoverProps
}

export interface SelectEarthDateAction extends AnyAction {
    type: typeof SELECT_EARTH_DATE,
    payload: string
}

export interface SelectSolDateAction extends AnyAction {
    type: typeof SELECT_SOL_DATE,
    payload: string
}

export interface SelectCameraAction extends AnyAction {
    type: typeof SELECT_CAMERA,
    payload: string
}

export interface SelectDateTypeAction extends AnyAction {
    type: typeof SET_DATE_TYPE,
    payload: string
}

export type FormActionTypes =
    SelectRoverAction
    | SelectEarthDateAction
    | SelectSolDateAction
    | SelectCameraAction
    | SelectDateTypeAction;

export interface FormState extends formReducerProps {}