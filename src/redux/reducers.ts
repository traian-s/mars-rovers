import {combineReducers} from "redux";
import roverReducer from "./rovers/RoverReducer";
import formReducer from "./form/FormReducer";
import imageReducer from "./images/ImageReducer";
import {FormState} from "./form/FormTypes";
import {RoverState} from "./rovers/RoverTypes";
import {ImageState} from "./images/ImageTypes";

export default combineReducers({roverReducer, formReducer, imageReducer});

export interface AppState {
    formReducer: FormState,
    roverReducer: RoverState,
    imageReducer: ImageState
}

