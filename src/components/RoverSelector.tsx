import React from "react";
import {Form} from "react-bootstrap";
import {connect} from "react-redux";
import {selectRover} from "../redux/form/FormActions";
import {RoverProps} from "../redux/rovers/RoverTypes";
import {FormControlProps} from "react-bootstrap/es";
import {StateType} from "../redux/StateType";

const RoverSelector = ({selectRover, rovers}: { selectRover: (rover: RoverProps | undefined) => void, rovers: RoverProps[] }) => {
    return (
        <Form.Group controlId="roverSelector">
            <Form.Label>Rover</Form.Label>
            <Form.Control as="select" name="selectedRover"
                          onChange={(event: React.ChangeEvent<FormControlProps>) => event.target.value && selectRover(rovers.find(e => e.name === event.target.value))}>
                <option value="">Select Rover...</option>
                {rovers.map((entry, index) => <option key={index} value={entry.name}>{entry.name}</option>)}
            </Form.Control>
        </Form.Group>
    );
};

const mapStateToProps = (state: StateType) => {
    return {
        rovers: state.roverReducer.rovers
    };
};

export default connect(
    mapStateToProps,
    {selectRover}
)(RoverSelector);
