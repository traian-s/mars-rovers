import React from 'react';
import {selectCamera, selectEarthDate, selectRover, selectSolDate, setDateType} from "../../../redux/form/FormActions";
import {
    SELECT_CAMERA,
    SELECT_EARTH_DATE,
    SELECT_ROVER,
    SELECT_SOL_DATE,
    SET_DATE_TYPE
} from "../../../redux/actionTypes";

const dummyData = {
    earthDate: '2019-08-08',
    solDate: '300',
    camera: 'FHAZ',
    dateType: 'Earth',
    rover: {
        name: 'Curiosity',
        max_date: '2019-08-08',
        max_sol: '5000'
    }
};

describe('actions', () => {
    it('should create an action to select an earth date', () => {
        const expectedAction = {
            type: SELECT_EARTH_DATE,
            payload: dummyData.earthDate
        };
        expect(selectEarthDate(dummyData.earthDate)).toEqual(expectedAction);
    });
    it('should create an action to select an sol date', () => {
        const expectedAction = {
            type: SELECT_SOL_DATE,
            payload: dummyData.solDate
        };
        expect(selectSolDate(dummyData.solDate)).toEqual(expectedAction);
    });
    it('should create an action to select an active camera', () => {
        const expectedAction = {
            type: SELECT_CAMERA,
            payload: dummyData.camera
        };
        expect(selectCamera(dummyData.camera)).toEqual(expectedAction);
    });
    it('should create an action to set the active date type', () => {
        const expectedAction = {
            type: SET_DATE_TYPE,
            payload: dummyData.dateType
        };
        expect(setDateType(dummyData.dateType)).toEqual(expectedAction);
    });
    it('should create an action to set the active rover', () => {
        const expectedAction = {
            type: SELECT_ROVER,
            payload: dummyData.rover
        };
        expect(selectRover(dummyData.rover)).toEqual(expectedAction);
    });
});