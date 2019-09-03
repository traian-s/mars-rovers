import React from 'react';
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mapStateToProps, RoverForm} from '../../components/RoverForm';
import {Col, Form, Row} from "react-bootstrap";
import RoverSelector from "../../components/RoverSelector";
import DateTypeSelector from "../../components/DateTypeSelector";
import CameraSelector from "../../components/CameraSelector";
import SolDateSelector from "../../components/SolDateSelector";
import configureMockStore from 'redux-mock-store'
import {Provider} from "react-redux";
import {initialState as formReducer} from "../../redux/form/FormReducer";
import {initialState as roverReducer} from "../../redux/rovers/RoverReducer";
import {initialState as imageReducer} from "../../redux/images/ImageReducer";

let dummyData = {
    dateType: 'Earth',
    roverName: '',
    earthDate: '',
    solDate: '',
    camera: '',
    selectedRover: []
};

describe('RoverForm', () => {
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

    beforeEach(()=>{
        store = mockStore(initialState);
    });

    afterEach(() => {
        component.unmount();
    });

    describe('basic rendering', () => {
        it('should create a form element', () => {
            component = shallow(<RoverForm formData={dummyData}/>);
            expect(component.exists()).toEqual(true);
            expect(component.find('h2').length).toEqual(1);
            expect(component.find(Form).length).toEqual(1);
            expect(component.find(Col).length).toEqual(4);
            expect(component.find(Row).length).toEqual(1);
        });
        it('should load form components', () => {
            component = shallow(<RoverForm formData={dummyData}/>);
            expect(component.find(RoverSelector).length).toEqual(1);
            expect(component.find(DateTypeSelector).length).toEqual(1);
            expect(component.find(CameraSelector).length).toEqual(1);
        });
        it('should load the proper date selector', () => {
            component = shallow(<RoverForm formData={dummyData}/>);
            component.setProps({formData: {dateType: 'Sol'}});
            expect(component.find(SolDateSelector).length).toEqual(1);
        });
        it('should call fetch images when mounted', ()=>{
            const fetchImages = jest.fn();
            component = mount(<Provider store={store}><RoverForm fetchImages={fetchImages} formData={dummyData} /></Provider>);
            component.setProps();
            expect(fetchImages).toHaveBeenCalled();
        });
    });
});

describe('mapStateToProps', () => {
    it('should receive the correct state', () => {
        const mockedState = {
            formReducer: dummyData
        };
        expect(mapStateToProps(mockedState).formData).toEqual({
            dateType: 'Earth',
            roverName: '',
            earthDate: '',
            solDate: '',
            camera: '',
            selectedRover: []
        });
    });
});

