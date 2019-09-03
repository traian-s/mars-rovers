import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {EarthDateSelector} from '../../components/EarthDateSelector';
import {FormControl, FormGroup, FormLabel} from "react-bootstrap";

describe('EarthDateSelector', () => {
    let component;
    const selectedRover = {name: 'Curiosity'};

    beforeAll(() => {
        configure({adapter: new Adapter()});
    });

    afterEach(() => {
        component.unmount();
    });

    describe('basic rendering', () => {
        it('should render a label and date input', () => {
            component = shallow(<EarthDateSelector selectedRover={selectedRover}/>);
            expect(component.exists()).toEqual(true);
            expect(component.find(FormGroup).length).toEqual(1);
            expect(component.find(FormLabel).length).toEqual(1);
            expect(component.find(FormControl).length).toEqual(1);
        });
        it('calls selectEarthDate on change', () => {
            const selectEarthDate = jest.fn();
            const event = {target: {name: 'earthDate', value: '2019-09-09'}};
            component = shallow(<EarthDateSelector selectedRover={selectedRover} selectEarthDate={selectEarthDate}/>);
            component.find(FormControl).simulate('change', event);
            expect(selectEarthDate).toHaveBeenCalled();
            expect(selectEarthDate).toHaveBeenCalledWith('2019-09-09');
        });
        it('sets proper min and max', () => {
            component = shallow(<EarthDateSelector selectedRover={selectedRover}/>);
            expect(component.find(FormControl).props().min).toEqual(0);
            expect(component.find(FormControl).props().max).toEqual(0);
            const dummyRover = {
                name: 'Test',
                landing_date: '2010-09-09',
                max_date: '2019-09-09'
            };
            component.setProps({selectedRover: dummyRover});
            expect(component.find(FormControl).props().min).toEqual('2010-09-09');
            expect(component.find(FormControl).props().max).toEqual('2019-09-09');
        });
    });
});
