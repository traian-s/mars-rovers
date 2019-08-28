import axios from 'axios';
import {API_ROVERS_ENDPOINT, DATE_TYPES} from "../../constants";
import {FETCH_IMAGES_ERROR, FETCH_IMAGES_PENDING, FETCH_IMAGES_SUCCESS} from "../actionTypes";
import {FetchImagesErrorAction, FetchImagesPendingAction, FetchImagesSuccessAction, ImageProps} from "./ImageTypes";
import {AppState} from "../reducers";

export const fetchImagesPending = (): FetchImagesPendingAction => ({
    type: FETCH_IMAGES_PENDING
});

export const fetchImagesSuccess = (payload: ImageProps[]): FetchImagesSuccessAction => ({
    type: FETCH_IMAGES_SUCCESS, payload
});

export const fetchImagesError = (payload: string): FetchImagesErrorAction => ({
    type: FETCH_IMAGES_ERROR, payload
});

export const fetchImages = () => {
    return (dispatch: any, getState: () => AppState) => {
        const formData = getState().formReducer;
        dispatch(fetchImagesPending());
        let url =
            `${API_ROVERS_ENDPOINT}${formData.roverName}/photos?`;
        if (DATE_TYPES.EARTH === formData.dateType && formData.earthDate) {
            url += `earth_date=${formData.earthDate}`;
        } else if (DATE_TYPES.SOL === formData.dateType && formData.solDate) {
            url += `sol=${formData.solDate}`;
        }
        if (formData.camera) {
            url += `&camera=${formData.camera}`;
        }

        axios.get(url)
            .then(res => {
                dispatch(fetchImagesSuccess(res.data.photos));
            })
            .catch(error => {
                dispatch(fetchImagesError(error.response.data.errors));
            })
    }
};
