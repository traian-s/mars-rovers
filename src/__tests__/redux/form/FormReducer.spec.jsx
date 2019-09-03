import formReducer from "../../../redux/form/FormReducer";
import {
    SELECT_CAMERA,
    SELECT_EARTH_DATE,
    SELECT_ROVER,
    SELECT_SOL_DATE,
    SET_DATE_TYPE
} from "../../../redux/actionTypes";
import {DATE_TYPES} from "../../../constants";

describe('formReducer', () => {
    it('should return the initial state', () => {
        expect(formReducer(undefined, {})).toEqual(
            {
                dateType: DATE_TYPES.EARTH,
                roverName: "",
                earthDate: "",
                solDate: "",
                camera: "",
                selectedRover: {
                    cameras: []
                }
            }
        );
    });

    it('should handle SELECT_ROVER', () => {
        expect(
            formReducer([], {
                type: SELECT_ROVER,
                payload: {
                    name: 'Curiosity',
                    max_date: '2019-08-08',
                    max_sol: '5000',
                    camera: 'FHAZ'
                }
            })
        ).toEqual(
            {
                selectedRover: {
                    name: 'Curiosity',
                    max_date: '2019-08-08',
                    max_sol: '5000',
                    camera: 'FHAZ'
                },
                roverName: 'Curiosity',
                earthDate: '2019-08-08',
                solDate: '5000',
                camera: ''
            }
        );
    });

    it('should handle SET_DATE_TYPE', () => {
        expect(
            formReducer([], {
                type: SET_DATE_TYPE,
                payload: 'Sol'
            })
        ).toEqual(
            {
                dateType: 'Sol'
            }
        );
    });

    it('should handle SELECT_EARTH_DATE', () => {
        expect(
            formReducer([], {
                type: SELECT_EARTH_DATE,
                payload: '2019-08-08'
            })
        ).toEqual(
            {
                earthDate: '2019-08-08'
            }
        );
    });

    it('should handle SELECT_SOL_DATE', () => {
        expect(
            formReducer([], {
                type: SELECT_SOL_DATE,
                payload: '5000'
            })
        ).toEqual(
            {
                solDate: '5000'
            }
        );
    });

    it('should handle SELECT_CAMERA', () => {
        expect(
            formReducer([], {
                type: SELECT_CAMERA,
                payload: 'FHAZ'
            })
        ).toEqual(
            {
                camera: 'FHAZ'
            }
        );
    });
});