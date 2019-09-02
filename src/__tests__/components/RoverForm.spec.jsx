import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mapStateToProps, RoverForm} from '../../components/RoverForm';
import {Col, Form, Row} from "react-bootstrap";
import RoverSelector from "../../components/RoverSelector";
import DateTypeSelector from "../../components/DateTypeSelector";
import CameraSelector from "../../components/CameraSelector";
import SolDateSelector from "../../components/SolDateSelector";

describe('RoverForm', () => {
    let component;
    let dummyData = {
        dateType: 'Earth',
        roverName: '',
        earthDate: '',
        solDate: '',
        camera: '',
        selectedRover: []
    };

    beforeAll(() => {
        configure({adapter: new Adapter()});
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
        })
        // it('should call fetch images when mounted', ()=>{
        //     const fetchImages = jest.fn();
        //     component = shallow(<RoverForm fetchImages={fetchImages} formData={dummyData} />);
        //     component.setProps();
        //     expect(fetchImages).toHaveBeenCalled();
        // });
    });

    describe('mapStateToProps', () => {
        it('should receive the correct state', () => {
            const mockedState = {
                formReducer: dummyData
            }
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
});

