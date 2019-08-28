import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {App} from '../App';

describe('App', () => {
    let component;

    beforeAll(() => {
        configure({adapter: new Adapter()});
    });

    afterEach(() => {
        component.unmount();
    });

    describe('basic rendering', () => {
        it('should render  with welcome text', () => {
            component = shallow(<App/>);
            expect(component.exists()).toEqual(true);
        });
    });
});
