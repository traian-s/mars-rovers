import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {CameraSelector} from '../../components/CameraSelector';
import {FormControl, FormGroup, FormLabel} from "react-bootstrap";

describe('CameraSelector', () => {
    let component;
    const roverWithCameras = {name: "Test", cameras: ['test1', 'test2']};

    beforeAll(() => {
        configure({adapter: new Adapter()});
    });

    afterEach(() => {
        component.unmount();
    });

    describe('basic rendering', () => {
        it('should render a select with label', () => {
            component = shallow(<CameraSelector selectedRover={roverWithCameras}/>);
            expect(component.exists()).toEqual(true);
            expect(component.find(FormGroup).length).toEqual(1);
            expect(component.find(FormControl).length).toEqual(1);
            expect(component.find(FormLabel).length).toEqual(1);
        });
        it('should render a number of options based on props', () => {
            component = shallow(<CameraSelector selectedRover={roverWithCameras}/>);
            expect(component.find('option').length).toEqual(3);
        });
        it('should call the handler function onChange', () => {
            const selectCamera = jest.fn();
            const event = {target: {name: "camera", value: "FHAZ"}};
            component = shallow(<CameraSelector selectedRover={roverWithCameras} selectCamera={selectCamera}/>);
            component.find(FormControl).simulate('change', event);
            expect(selectCamera).toHaveBeenCalled();
            expect(selectCamera).toBeCalledWith('FHAZ')
        });
    });
});
