import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mapStateToProps, Rovers} from '../../components/Rovers';
import {Badge, Col} from "react-bootstrap";

describe('Rovers', () => {
    let component;
    const dummyRovers =[
        {
            name: 'Opportunity',
            status: 'complete',
            total_photos: 100,
            launch_date: '2019-09-09',
            max_sol: 100
        },
        {
            name: 'Spirit',
            status: 'active',
            total_photos: 100,
            launch_date: '2019-09-09',
            max_sol: 100
        }
    ];

    beforeAll(() => {
        configure({adapter: new Adapter()});
    });

    afterEach(() => {
        component.unmount();
    });

    describe('basic rendering', ()=>{
        it('should render a col for each rover in props', ()=>{
            component = shallow(<Rovers rovers={dummyRovers}/>);
            expect(component.exists()).toEqual(true);
            expect(component.find(Col).length).toEqual(dummyRovers.length);
        });
        it('should render title, image and a table for each rover', ()=>{
            component = shallow(<Rovers rovers={[dummyRovers[0]]}/>);
            expect(component.exists()).toEqual(true);
            expect(component.find('h4').length).toEqual(1);
            expect(component.find('img').length).toEqual(1);
            expect(component.find('table').length).toEqual(1);
            expect(component.find('tr').length).toEqual(4);
            expect(component.find(Badge).length).toEqual(1);
        });
    });
});

describe('mapStateToProps', ()=> {
    it('should receive the correct state', () => {
        const mockedState = {
            roverReducer: {
                pending: false,
                error: '',
                rovers: [{
                    name: 'Curiosity'
                }]
            }
        };
        expect(mapStateToProps(mockedState).rovers).toEqual([{
            name: 'Curiosity'
        }]);
    });
});