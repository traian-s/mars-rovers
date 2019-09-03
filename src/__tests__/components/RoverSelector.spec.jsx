import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {RoverSelector} from '../../components/RoverSelector';
import {FormControl, FormGroup, FormLabel} from "react-bootstrap";

describe('RoverSelector', () => {
    let component;
    const rovers = [{name: 'Curiosity'}, {name: 'Spirit'}, {name: 'Opportunity'}];
    const dummyRover = {
        id: 0,
        name: '',
        landing_date: '',
        launch_date: '',
        status: '',
        max_sol: '',
        max_date: '',
        total_photos: 0,
        cameras: []
    };

    beforeAll(() => {
        configure({adapter: new Adapter()});
    });

    afterEach(() => {
        component.unmount();
    });

    describe('basic rendering', () => {
        it('should render a select with label', () => {
            component = shallow(<RoverSelector rovers={rovers}/>);
            expect(component.exists()).toEqual(true);
            expect(component.find(FormGroup).length).toEqual(1);
            expect(component.find(FormLabel).length).toEqual(1);
            expect(component.find(FormControl).length).toEqual(1);
            expect(component.find('option').length).toEqual(4);
        });
    });

    describe('event handler', () => {
        it('should call selectRover on change event', () => {
            const selectRover = jest.fn();
            const event = {target: {name: 'selectedRover', value: 'Opportunity'}};

            component = shallow(<RoverSelector selectRover={selectRover} rovers={rovers}/>);
            component.find(FormControl).simulate('change', event);
            expect(selectRover).toHaveBeenCalled();
            expect(selectRover).toHaveBeenCalledWith({name: 'Opportunity'});
        });
        it('should call selectRover with dummy data on empty event', () => {
            const selectRover = jest.fn();
            const emptyEvent = {target: {name: 'selectedRover', value: 'Dummy'}};

            component = shallow(<RoverSelector selectRover={selectRover} rovers={rovers}/>);

            component.find(FormControl).simulate('change', emptyEvent);
            expect(selectRover).toHaveBeenCalled();
            expect(selectRover).toHaveBeenCalledWith(dummyRover);
        })
    });
});