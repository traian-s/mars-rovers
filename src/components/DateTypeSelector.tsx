import React from "react";
import {Form} from "react-bootstrap";
import {connect} from "react-redux";
import {setDateType} from "../redux/form/FormActions";
import {DATE_TYPES} from "../constants";
import {StateType} from "../redux/StateType";

const DateTypeSelector = ({activeType, setDateType}: { activeType: string, setDateType: (dateType: string) => void }) => {
    return (
        <Form.Text className="text-muted">
          <span
              className="date-switcher underlineHover"
              onClick={() => setDateType(DATE_TYPES.EARTH === activeType ? DATE_TYPES.SOL : DATE_TYPES.EARTH)}>
            Switch to {DATE_TYPES.EARTH === activeType ? DATE_TYPES.SOL : DATE_TYPES.EARTH} date?
          </span>
        </Form.Text>
    );
};

const mapStateToProps = (state: StateType) => {
    return {activeType: state.formReducer.dateType};
};

export default connect(
    mapStateToProps,
    {setDateType}
)(DateTypeSelector);
