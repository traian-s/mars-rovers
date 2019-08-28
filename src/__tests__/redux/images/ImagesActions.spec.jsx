import React from "react";
import {FETCH_IMAGES_ERROR, FETCH_IMAGES_PENDING, FETCH_IMAGES_SUCCESS} from "../../../redux/actionTypes";
import {fetchImagesError, fetchImagesPending, fetchImagesSuccess} from "../../../redux/images/ImagesActions";

describe('actions', () => {
    it('should create an action to set images fetch to pending', () => {
        const expectedAction = {
            type: FETCH_IMAGES_PENDING
        };
        expect(fetchImagesPending()).toEqual(expectedAction)
    });
    it('should create an action to set images', () => {
        const images = [{
            id: '1'
        }];
        const expectedAction = {
            type: FETCH_IMAGES_SUCCESS,
            payload: images
        };
        expect(fetchImagesSuccess(images)).toEqual(expectedAction)
    });
    it('should create an action to set images fetch error', () => {
        const error = 'Some network error';
        const expectedAction = {
            type: FETCH_IMAGES_ERROR,
            payload: error
        };
        expect(fetchImagesError(error)).toEqual(expectedAction)
    });
});