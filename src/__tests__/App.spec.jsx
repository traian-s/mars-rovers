import React from 'react';
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {App, mapStateToProps, WelcomeContent} from '../App';
import configureMockStore from "redux-mock-store";
import {initialState as formReducer} from "../redux/form/FormReducer";
import {initialState as roverReducer} from "../redux/rovers/RoverReducer";
import {initialState as imageReducer} from "../redux/images/ImageReducer";
import {Provider} from "react-redux";

describe('App', () => {
    let component;
    const mockStore = configureMockStore();
    const initialState = {
        formReducer,
        roverReducer,
        imageReducer
    };
    let store;

    beforeAll(() => {
        configure({adapter: new Adapter()});
    });

    beforeEach(() => {
        store = mockStore(initialState);
    });

    afterEach(() => {
        component.unmount();
    });

    describe('basic rendering', () => {
        it('should render  with welcome text', () => {
            component = shallow(<App/>);
            expect(component.exists()).toEqual(true);
            expect(component.find(WelcomeContent).length).toEqual(1);
        });
        it('should show Rovers when ready', () => {
            const dummyProps = {
                fetchPending: false,
                fetchError: '',
                rovers: [1]
            };
            component = shallow(<App {...dummyProps}/>);
            expect(component.find('.roversWrapper').length).toEqual(1);
        });
    });

    describe('welcome content', () => {
        it('should have welcome content', () => {
            component = shallow(<WelcomeContent/>);
            expect(component.exists()).toEqual(true);
            expect(component.find('h1').length).toEqual(1);
            expect(component.find('p').length).toEqual(1);
        });
    });

    describe('useEffect', () => {
        it('should call fetchRovers on mount', () => {
            const fetchRovers = jest.fn();
            component = mount(<Provider store={store}><App fetchRovers={fetchRovers}/></Provider>);
            expect(fetchRovers).toHaveBeenCalled();
        })
    })
});

describe('mapStateToProps', () => {
    it('should return the correct state', () => {
        const mockedState = {
            roverReducer: {
                error: '',
                pending: false,
                rovers: []
            }
        };

        expect(mapStateToProps(mockedState)).toEqual({
            fetchError: '',
            fetchPending: false,
            rovers: []
        });
    })
});
