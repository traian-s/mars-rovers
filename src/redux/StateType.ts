import {formReducerProps} from "./form/FormTypes";
import {RoverProps} from "./rovers/RoverTypes";
import {ImageProps} from "./images/ImageTypes";

export interface StateType {
    formReducer: formReducerProps,
    roverReducer: {
        pending: boolean,
        error: string | null | undefined,
        rovers: RoverProps[]
    },
    imageReducer: {
        pending: boolean,
        error: string | null | undefined,
        images: ImageProps[]
    }
}