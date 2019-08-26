import React from "react";
import {Form} from "react-bootstrap";
import {connect} from "react-redux";
import {selectSolDate} from "../redux/form/FormActions";
import {SolDateSelectorProps} from "../redux/form/FormTypes";
import {FormControlProps} from "react-bootstrap/es";

const SolDateSelector = ({solDate, selectedRover, selectSolDate}: SolDateSelectorProps) => {
    return (
        <Form.Group controlId="solDateSelector">
            <Form.Label>Sol Date</Form.Label>
            <Form.Control disabled={!selectedRover.name}
                          type="number"
                          name="solDate"
                          min="0"
                          value={solDate}
                          max={selectedRover.max_sol ? selectedRover.max_sol : 0}
                          onChange={(e: React.ChangeEvent<FormControlProps>) => selectSolDate(e.target.value)}
            />
        </Form.Group>
    );
};

const mapStateToProps = (state: any) => {
    return {
        solDate: state.formReducer.solDate,
        selectedRover: state.formReducer.selectedRover
    };
};

export default connect(
    mapStateToProps,
    {selectSolDate}
)(SolDateSelector);
