import imageReducer from "../../../redux/images/ImageReducer";
import {FETCH_IMAGES_ERROR, FETCH_IMAGES_PENDING, FETCH_IMAGES_SUCCESS} from "../../../redux/actionTypes";


describe('imageReducer', () => {
    it('should return the initial state', () => {
        expect(imageReducer(undefined, {})).toEqual(
            {
                pending: false,
                images: {},
                error: ''
            }
        );
    });
    it('should handle FETCH_IMAGES_PENDING', () => {
        expect(
            imageReducer([], {
                type: FETCH_IMAGES_PENDING
            })
        ).toEqual(
            {
                pending: true,
                error: ''
            }
        );
    });

    it('should handle FETCH_IMAGES_SUCCESS', () => {
        expect(
            imageReducer([], {
                type: FETCH_IMAGES_SUCCESS,
                payload: [{
                    id: '1'
                }]
            })
        ).toEqual(
            {
                pending: false,
                images: [{
                    id: '1'
                }]
            }
        );
    });

    it('should handle FETCH_IMAGES_ERROR', () => {
        expect(
            imageReducer([], {
                type: FETCH_IMAGES_ERROR,
                payload: "Some error text"
            })
        ).toEqual(
            {
                pending: false,
                error: "Some error text",
                images: []
            }
        );
    });
});