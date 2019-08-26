import {SELECT_CAMERA, SELECT_EARTH_DATE, SELECT_ROVER, SELECT_SOL_DATE, SET_DATE_TYPE,} from "../actionTypes";
import {DATE_TYPES} from "../../constants";

const initialState = {
    dateType: DATE_TYPES.EARTH,
    roverName: "",
    earthDate: "",
    solDate: "",
    camera: "",
    selectedRover: {
        cameras: []
    }
};

export default function formReducer(state = initialState, action: { type: string, payload: any }) {
    switch (action.type) {
        case SELECT_ROVER:
            return {
                ...state,
                selectedRover: action.payload.rover,
                roverName: action.payload.rover.name,
                earthDate: action.payload.rover.max_date,
                solDate: action.payload.rover.max_sol,
                camera: ""
            };
        case SET_DATE_TYPE:
            return {
                ...state,
                dateType: action.payload.dateType
            };
        case SELECT_EARTH_DATE:
            return {
                ...state,
                earthDate: action.payload.earthDate
            };
        case SELECT_SOL_DATE:
            return {
                ...state,
                solDate: action.payload.solDate
            };
        case SELECT_CAMERA:
            return {
                ...state,
                camera: action.payload.camera
            };
        default: {
            return state;
        }
    }
}
