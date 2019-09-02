import React from "react";
import {Form} from "react-bootstrap";
import {connect} from "react-redux";
import {selectRover} from "../redux/form/FormActions";
import {RoverProps} from "../redux/rovers/RoverTypes";
import {FormControlProps} from "react-bootstrap/es";
import {SelectRoverProps} from "../redux/form/FormTypes";
import {AppState} from "../redux/reducers";

export const RoverSelector = ({selectRover, rovers}: SelectRoverProps) => {
    const dummyRover: RoverProps = {
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
    return (
        <Form.Group controlId="roverSelector">
            <Form.Label>Rover</Form.Label>
            <Form.Control as="select" name="selectedRover"
                          onChange={(event: React.ChangeEvent<FormControlProps>) =>
                              event.target &&
                              event.target.value &&
                              selectRover(rovers.find(e => e.name === event.target.value) || dummyRover)}>
                <option value="">Select Rover...</option>
                {rovers.map((entry, index) => <option key={index} value={entry.name}>{entry.name}</option>)}
            </Form.Control>
        </Form.Group>
    );
};

const mapStateToProps = (state: AppState) => {
    return {
        rovers: state.roverReducer.rovers
    };
};

export default connect(
    mapStateToProps,
    {selectRover}
)(RoverSelector);
