import React from 'react'
import {Badge, Col} from 'react-bootstrap';
import {MISSION_BADGE} from '../constants';
import {RoverProps} from "../redux/rovers/RoverTypes";
import {connect} from "react-redux";
import {StateType} from "../redux/StateType";


const Rovers = ({rovers}: any) => {
    return (
        rovers.map((rover: RoverProps) =>
            <Col className="roverCol" lg="4" key={rover.id}>
                <h4>{rover.name}</h4>
                <img src={"images/" + rover.name + "_rover.jpg"} alt={rover.name} className="w-100"/>
                <table className="w-100">
                    <tbody>
                    <tr>
                        <td>Mission Status:</td>
                        <td>
                            {MISSION_BADGE.success === rover.status && <Badge variant="success">{rover.status}</Badge>}
                            {MISSION_BADGE.primary === rover.status && <Badge variant="primary">{rover.status}</Badge>}
                        </td>
                    </tr>
                    <tr>
                        <td>Photos Taken:</td>
                        <td><span>{rover.total_photos}</span></td>
                    </tr>
                    <tr>
                        <td>Launch Date:</td>
                        <td><span>{rover.launch_date}</span></td>
                    </tr>
                    <tr>
                        <td>Sols:</td>
                        <td><span>{rover.max_sol}</span></td>
                    </tr>
                    </tbody>
                </table>
            </Col>
        )
    )
};

const mapStateToProps = (state: StateType) => {
    return {
        rovers: state.roverReducer.rovers
    };
};

export default connect(
    mapStateToProps
)(Rovers);
