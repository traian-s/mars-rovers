import React from "react";
import {Form} from "react-bootstrap";
import {connect} from "react-redux";
import {selectCamera} from "../redux/form/FormActions";
import {CameraSelectorProps} from "../redux/form/FormTypes";
import {FormControlProps} from "react-bootstrap/es";
import {StateType} from "../redux/StateType";

export const CameraSelector = ({selectedRover, selectCamera}: CameraSelectorProps) => {
    return (
        <Form.Group controlId={"cameraSelector"}>
            <Form.Label>Camera</Form.Label>
            <Form.Control as="select" name="camera" disabled={!selectedRover || !selectedRover.name}
                          onChange={(e: React.ChangeEvent<FormControlProps>) => selectCamera(e.target.value)}>
                <option value="">Any</option>
                {selectedRover && selectedRover.cameras.map((entry, index) => <option key={index}
                                                                                      value={entry.name}>{entry.full_name}</option>)}
            </Form.Control>
        </Form.Group>
    );
};

const mapStateToProps = (state: StateType) => {
    return {
        selectedRover: state.formReducer.selectedRover
    };
};

export default connect(
    mapStateToProps,
    {selectCamera}
)(CameraSelector);
