import {SELECT_CAMERA, SELECT_EARTH_DATE, SELECT_ROVER, SELECT_SOL_DATE, SET_DATE_TYPE,} from "../actionTypes";
import {DATE_TYPES} from "../../constants";
import {FormActionTypes, formReducerProps} from "./FormTypes";

export const initialState: formReducerProps = {
    dateType: DATE_TYPES.EARTH,
    roverName: "",
    earthDate: "",
    solDate: "",
    camera: "",
// @ts-ignore
    selectedRover: {
        cameras: []
    }
};

export default function formReducer(state = initialState, action: FormActionTypes) {
    switch (action.type) {
        case SELECT_ROVER:
            return {
                ...state,
                selectedRover: action.payload,
                roverName: action.payload.name,
                earthDate: action.payload.max_date,
                solDate: action.payload.max_sol,
                camera: ""
            };
        case SET_DATE_TYPE:
            return {
                ...state,
                dateType: action.payload
            };
        case SELECT_EARTH_DATE:
            return {
                ...state,
                earthDate: action.payload
            };
        case SELECT_SOL_DATE:
            return {
                ...state,
                solDate: action.payload
            };
        case SELECT_CAMERA:
            return {
                ...state,
                camera: action.payload
            };
        default: {
            return state;
        }
    }
}
