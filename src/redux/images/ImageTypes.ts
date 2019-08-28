import {CameraProps, RoverProps} from "../rovers/RoverTypes";
import {AnyAction} from "redux";
import {FETCH_IMAGES_ERROR, FETCH_IMAGES_PENDING, FETCH_IMAGES_SUCCESS} from "../actionTypes";

export interface ImageProps {
    id: number,
    sol: string,
    camera: CameraProps,
    img_src: string,
    earth_date: string,
    rover: RoverProps
}

export interface imageReducerProps {
    pending: boolean,
    error: string,
    images: ImageProps[]
}

export interface FetchImagesSuccessAction extends AnyAction {
    type: typeof FETCH_IMAGES_SUCCESS,
    payload: ImageProps[]
}

export interface FetchImagesPendingAction extends AnyAction {
    type: typeof FETCH_IMAGES_PENDING
}

export interface FetchImagesErrorAction extends AnyAction {
    type: typeof FETCH_IMAGES_ERROR,
    payload: string
}

export type ImagesActionTypes = FetchImagesSuccessAction | FetchImagesErrorAction | FetchImagesPendingAction;

export interface ImageState extends imageReducerProps {
}