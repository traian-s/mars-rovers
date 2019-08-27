import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {CameraSelector} from '../../components/CameraSelector';
import {FormControl, FormLabel} from "react-bootstrap";

describe('CameraSelector', () => {
    let component;

    beforeAll(() => {
        configure({adapter: new Adapter()});
    });

    afterEach(() => {
        component.unmount();
    });

    describe('basic rendering', () => {
        it('should render a select with label', () => {
            component = shallow(<CameraSelector/>);
            expect(component.exists()).toEqual(true);
            expect(component.find(FormControl).length).toEqual(1);
            expect(component.find(FormLabel).length).toEqual(1);
        });
    });
});
