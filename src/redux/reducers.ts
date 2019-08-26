import {combineReducers} from "redux";
import roverReducer from "./rovers/RoverReducer";
import formReducer from "./form/FormReducer";
import imageReducer from "./images/ImagesReducers";

export default combineReducers({roverReducer, formReducer, imageReducer});