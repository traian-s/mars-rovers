import axios from 'axios';
import {API_ROVERS_ENDPOINT, DATE_TYPES} from "../../constants";
import {FETCH_IMAGES_ERROR, FETCH_IMAGES_PENDING, FETCH_IMAGES_SUCCESS} from "../actionTypes";
import {ImageProps} from "./ImageTypes";

export const fetchImagesPending = () => ({
    type: FETCH_IMAGES_PENDING
});

export const fetchImagesSuccess = (images: ImageProps) => ({
    type: FETCH_IMAGES_SUCCESS,
    payload: images
});

export const fetchImagesError = (error: string) => ({
    type: FETCH_IMAGES_ERROR,
    payload: error
});

export const fetchImages = () => {
    return (dispatch: Function, getState: Function) => {
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
                return res.data.photos;
            })
            .catch(error => {
                dispatch(fetchImagesError(error.response.data.errors));
            })

    }
};
