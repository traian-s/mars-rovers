import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mapStateToProps, RoverImages} from '../../components/RoverImages';
import {Carousel, CarouselItem, Col, Row, Spinner} from "react-bootstrap";

describe('RoverForm', () => {
    let component;

    beforeAll(() => {
        configure({adapter: new Adapter()});
    });

    afterEach(() => {
        component.unmount();
    });

    describe('basic rendering', () => {
        it('should have a Row and a Col', () => {
            component = shallow(<RoverImages images={[]}/>);
            expect(component.exists()).toEqual(true);
            expect(component.find(Row).length).toEqual(1);
            expect(component.find(Col).length).toEqual(1);
            expect(component.find('.errorMessage').length).toEqual(0);
        });
        it('should show a spinner when images are loading', () => {
            component = shallow(<RoverImages images={[]} Pending={true}/>);
            expect(component.find(Spinner).length).toEqual(1);
            expect(component.find('.errorMessage').length).toEqual(0);
        });
        it('should show an error message', () => {
            component = shallow(<RoverImages images={[]} Pending={false} Error={'dummy error'}/>);
            expect(component.find('.errorMessage').length).toEqual(1);
        });
        it('should render a carousel with images', () => {
            const dummyImages = [{
                id: 1,
                img_src: 'http://example.com',
                camera: {
                    full_name: 'Some Camera Name',
                    name: 'SCN'
                },
                earth_date: '2019-09-09',
                sol: 100
            }];
            component = shallow(<RoverImages images={dummyImages} Pending={false} Error={''}/>);
            expect(component.find(Carousel).length).toEqual(1);
            expect(component.find(CarouselItem).length).toEqual(1);
        });
    });

    describe('mapStateToProps', () => {
        it('should receive the correct state', () => {
            const mockedState = {
                imageReducer: {
                    images: [],
                    pending: false,
                    error: ''
                }
            };
            expect(mapStateToProps(mockedState)).toEqual({
                images: [],
                Pending: false,
                Error: ''
            });
        });
    });
});