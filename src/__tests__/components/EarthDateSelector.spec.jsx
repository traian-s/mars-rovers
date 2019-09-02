import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {EarthDateSelector} from '../../components/EarthDateSelector';

describe('EarthDateSelector', () => {
    let component;

    beforeAll(() => {
        configure({adapter: new Adapter()});
    });

    afterEach(() => {
        component.unmount();
    });
});
