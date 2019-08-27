import React from 'react';
import {selectCamera, selectEarthDate, selectRover, selectSolDate, setDateType} from "../../../redux/form/FormActions";
import {
    SELECT_CAMERA,
    SELECT_EARTH_DATE,
    SELECT_ROVER,
    SELECT_SOL_DATE,
    SET_DATE_TYPE
} from "../../../redux/actionTypes";

describe('actions', () => {
    it('should create an action to select an earth date', () => {
        const earthDate = '2019-08-08';
        const expectedAction = {
            type: SELECT_EARTH_DATE,
            payload: {earthDate}
        };
        expect(selectEarthDate(earthDate)).toEqual(expectedAction)
    });
    it('should create an action to select an sol date', () => {
        const solDate = '300';
        const expectedAction = {
            type: SELECT_SOL_DATE,
            payload: {solDate}
        };
        expect(selectSolDate(solDate)).toEqual(expectedAction)
    });
    it('should create an action to select an active camera', () => {
        const camera = 'FHAZ';
        const expectedAction = {
            type: SELECT_CAMERA,
            payload: {camera}
        };
        expect(selectCamera(camera)).toEqual(expectedAction)
    });
    it('should create an action to set the active date type', () => {
        const dateType = 'Earth';
        const expectedAction = {
            type: SET_DATE_TYPE,
            payload: {dateType}
        };
        expect(setDateType(dateType)).toEqual(expectedAction)
    });
    it('should create an action to set the active rover', () => {
        const rover = {
            name: 'Curiosity',
            max_date: '2019-08-08',
            max_sol: '5000'
        };
        const expectedAction = {
            type: SELECT_ROVER,
            payload: {rover}
        };
        expect(selectRover(rover)).toEqual(expectedAction)
    });
});