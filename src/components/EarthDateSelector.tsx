import React from "react";
import {Form} from "react-bootstrap";
import {connect} from "react-redux";
import {selectEarthDate} from "../redux/form/FormActions";
import {EarthDateSelectorProps} from "../redux/form/FormTypes";
import {FormControlProps} from "react-bootstrap/es";
import {AppState} from "../redux/reducers";

export const EarthDateSelector = ({earthDate, selectedRover, selectEarthDate}: EarthDateSelectorProps) => {

    return (
        <Form.Group controlId="earthDateSelector">
            <Form.Label>Earth Date</Form.Label>
            <Form.Control disabled={!selectedRover.name}
                          type="date"
                          name="earthDate"
                          min={selectedRover ? selectedRover.landing_date : 0}
                          max={selectedRover ? selectedRover.max_date : 0}
                          value={earthDate}
                          onChange={(e: React.ChangeEvent<FormControlProps>) =>
                              e.target &&
                              e.target.value &&
                              selectEarthDate(e.target.value)
                          }
            />
        </Form.Group>
    );
};

const mapStateToProps = (state: AppState) => {
    return {
        earthDate: state.formReducer.earthDate,
        selectedRover: state.formReducer.selectedRover
    };
};

export default connect(
    mapStateToProps,
    {selectEarthDate}
)(EarthDateSelector);
