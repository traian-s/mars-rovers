import React, {useEffect} from 'react'
import {Col, Form, Row} from 'react-bootstrap';
import {connect} from "react-redux";

import RoverSelector from './RoverSelector';
import EarthDateSelector from './EarthDateSelector';
import SolDateSelector from './SolDateSelector';
import DateTypeSelector from './DateTypeSelector';
import CameraSelector from './CameraSelector';
import {DATE_TYPES} from "../constants";

import {fetchImages} from "../redux/images/ImagesActions";
import {formReducerProps} from "../redux/form/FormTypes";
import {StateType} from "../redux/StateType";

const RoverForm = ({formData, loadImages}: { formData: formReducerProps, loadImages: () => void }) => {

    useEffect(() => {
        loadImages();
    });

    return (
        <Col lg={12}>
            <h2>Query the database</h2>
            <Form className="roverForm largeSpacer">
                <Row>
                    <Col lg={4}>
                        <RoverSelector/>
                    </Col>
                    <Col lg={4}>
                        {DATE_TYPES.EARTH === formData.dateType && <EarthDateSelector/>}
                        {DATE_TYPES.SOL === formData.dateType && <SolDateSelector/>}
                        <DateTypeSelector/>
                    </Col>
                    <Col lg={4}>
                        <CameraSelector/>
                    </Col>
                </Row>
            </Form>
        </Col>
    )
};

const mapDispatchToProps = (dispatch: Function) => ({
    loadImages: () => dispatch(fetchImages())
});

const mapStateToProps = (state: StateType) => {
    return {
        formData: state.formReducer
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoverForm);
