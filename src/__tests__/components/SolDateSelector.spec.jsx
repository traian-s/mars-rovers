import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mapStateToProps, SolDateSelector} from '../../components/SolDateSelector';
import {FormControl, FormGroup, FormLabel} from "react-bootstrap";

describe('SolDateSelector', () => {
    let component;
    const selectedRover = {name: 'Curiosity', max_sol: 100};

    beforeAll(() => {
        configure({adapter: new Adapter()});
    });

    afterEach(() => {
        component.unmount();
    });

    describe('basic rendering', () => {
        it('should render a label and number input', () => {
            component = shallow(<SolDateSelector selectedRover={selectedRover}/>);
            expect(component.exists()).toEqual(true);
            expect(component.find(FormGroup).length).toEqual(1);
            expect(component.find(FormControl).length).toEqual(1);
            expect(component.find(FormLabel).length).toEqual(1);
            expect(component.find(FormControl).props().max).toEqual(100);
        });
        it('should set max to zero is no max_sol property exists', () => {
            const emptyRover = {name:'Test'};
            component = shallow(<SolDateSelector selectedRover={emptyRover}/>);
            expect(component.find(FormControl).props().max).toEqual(0);
        });
        it('should call selectSolDate on change', () => {
            const selectSolDate = jest.fn();
            const event = {target: {name: 'solDate', value: '100'}};
            component = shallow(<SolDateSelector selectedRover={selectedRover} selectSolDate={selectSolDate}/>);
            component.find(FormControl).simulate('change', event);
            expect(selectSolDate).toHaveBeenCalled();
            expect(selectSolDate).toHaveBeenCalledWith('100');
        });
    });

    describe('mapStateToProps', () => {
        it('should receive the correct state', () => {
            const mockedState = {
                formReducer: {
                    solDate: 100,
                    selectedRover: selectedRover
                }
            };
            expect(mapStateToProps(mockedState)).toEqual({
                solDate: 100,
                selectedRover: {
                    name: 'Curiosity',
                    max_sol: 100
                }
            });
        });
    });
});