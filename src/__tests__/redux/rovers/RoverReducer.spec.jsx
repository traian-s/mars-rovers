import roverReducer from "../../../redux/rovers/RoverReducer";
import {FETCH_ROVERS_ERROR, FETCH_ROVERS_PENDING, FETCH_ROVERS_SUCCESS} from "../../../redux/actionTypes";


describe('roverReducer', () => {
    it('should return the initial state', () => {
        expect(roverReducer(undefined, {})).toEqual(
            {
                pending: false,
                rovers: [{}],
                error: ''
            }
        );
    });
    it('should handle FETCH_ROVERS_PENDING', () => {
        expect(
            roverReducer([], {
                type: FETCH_ROVERS_PENDING
            })
        ).toEqual(
            {
                pending: true,
                error: '',
                rovers: []
            }
        );
    });

    it('should handle FETCH_ROVERS_SUCCESS', () => {
        expect(
            roverReducer([], {
                type: FETCH_ROVERS_SUCCESS,
                pending: false,
                payload: [{
                    id: '1',
                    name: 'Curiosity'
                }]
            })
        ).toEqual(
            {
                pending: false,
                rovers: [{
                    id: '1',
                    name: 'Curiosity'
                }]
            }
        );
    });

    it('should handle FETCH_ROVERS_ERROR', () => {
        expect(
            roverReducer([], {
                type: FETCH_ROVERS_ERROR,
                payload: "Some error text"
            })
        ).toEqual(
            {
                pending: false,
                error: "Some error text",
                rovers: []
            }
        );
    });
});