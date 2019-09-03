import React from "react";
import {FETCH_ROVERS_ERROR, FETCH_ROVERS_PENDING, FETCH_ROVERS_SUCCESS} from "../../../redux/actionTypes";
import {fetchRoversError, fetchRoversPending, fetchRoversSuccess} from "../../../redux/rovers/RoverActions";

describe('actions', () => {
    it('should create an action to set rover fetch to pending', () => {
        const expectedAction = {
            type: FETCH_ROVERS_PENDING
        };
        expect(fetchRoversPending()).toEqual(expectedAction);
    });
    it('should create an action to set rovers', () => {
        const rovers = [{
            id: '1',
            name: 'Curiosity'
        }];
        const expectedAction = {
            type: FETCH_ROVERS_SUCCESS,
            payload: rovers
        };
        expect(fetchRoversSuccess(rovers)).toEqual(expectedAction);
    });
    it('should create an action to set rover fetch error', () => {
        const error = 'Some network error';
        const expectedAction = {
            type: FETCH_ROVERS_ERROR,
            payload: error
        };
        expect(fetchRoversError(error)).toEqual(expectedAction);
    });
});
