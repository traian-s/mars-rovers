import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {DateTypeSelector} from '../../components/DateTypeSelector';
import {FormText} from "react-bootstrap";

describe('DateTypeSelector', () => {
    let component;

    beforeAll(() => {
        configure({adapter: new Adapter()});
    });

    afterEach(() => {
        component.unmount();
    });

    describe('basic rendering', () => {
        it('should render a text element and a span', function () {
            component = shallow(<DateTypeSelector/>);
            expect(component.exists()).toEqual(true);
            expect(component.find(FormText).length).toEqual(1);
            expect(component.find('span.date-switcher').length).toEqual(1);
        });
        it('simulates click events', () => {
            const setDateType = jest.fn();
            component = shallow(<DateTypeSelector activeType={'Sol'} setDateType={setDateType}/>);
            component.find('span').simulate('click');
            expect(setDateType).toHaveBeenCalled();
            expect(setDateType).toHaveBeenLastCalledWith('Earth');
        });
        it('calls setDateType with correct args', () => {
            const setDateType = jest.fn();
            component = shallow(<DateTypeSelector activeType={'Earth'} setDateType={setDateType}/>);
            component.find('span').simulate('click');
            expect(setDateType).toHaveBeenCalled();
            expect(setDateType).toHaveBeenLastCalledWith('Sol');
        });
    });
});
