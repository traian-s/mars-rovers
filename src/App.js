import React, {useEffect} from 'react'
import {Col, Container, Navbar, Row, Spinner} from 'react-bootstrap';

import Rovers from './components/Rovers';
import RoverImages from './components/RoverImages';
import RoverForm from './components/RoverForm';

import {connect} from "react-redux";
import {fetchRovers} from "./redux/rovers/RoverActions";

const App = ({loadRovers, fetchPending, fetchError, rovers}) => {
    const WelcomeContent = () => {
        return (
            <>
                <h1>The App</h1>
                <p>
                    This app uses NASA's Mars Rover Photos API (<a href="https://api.nasa.gov/api.html#MarsPhotos"
                                                                   className="underlineHover" target="_blank"
                                                                   rel="noopener noreferrer">link</a>) to display Photos
                    taken by the three Martian rovers filtered by a particular Earth (or Sol) date.
                    You may also filter the photos by specific camera. The app is written in React.js and uses the <a
                    rel="noopener noreferrer" className="underlineHover"
                    href="https://react-bootstrap.github.io/components/navbar/#navbars-colors"
                    target="_blank">react-bootstrap</a> framework.
                    <br/>
                    To begin simply choose one of the three Rovers and optionally filter the results by date and/or
                    camera.
                    Each time a filter is selected the app will send an request and fetch a new result set which will be
                    displayed.
                </p>
            </>
        )
    };
    useEffect(() => {
        loadRovers();
    }, []); /* <-- Fetch API data only on first render to avoid infinite loop --> */

    return (
        <React.Fragment>
            <Navbar fixed="top">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="images/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    {'Mars Rovers Photos With React.js'}
                </Navbar.Brand>
            </Navbar>
            <Container>
                <Row>
                    <Col lg={12}>
                        <WelcomeContent/>
                        {false !== fetchPending && <><h3>Connecting... <Spinner animation="grow"></Spinner></h3></>}
                        {null !== fetchError && <h3> An error occured while fetching Rover data.</h3>}
                        {false === fetchPending &&
                        null === fetchError &&
                        rovers.length &&
                        <React.Fragment>
                            <h2>Meet the Rovers</h2>
                            <Row>
                                <Rovers/>
                            </Row>
                            <Row>
                                <div className="largeSpacer"/>
                                <RoverForm/>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <div className="largeSpacer"/>
                                    <div className="resultList">
                                        <RoverImages/>
                                    </div>
                                </Col>
                            </Row>
                        </React.Fragment>}
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
};

const mapDispatchToProps = dispatch => ({
    loadRovers: () => dispatch(fetchRovers())
});

const mapStateToProps = state => {
    console.log(state);
    return {
        fetchPending: state.roverReducer.pending,
        fetchError: state.roverReducer.error,
        rovers: state.roverReducer.rovers
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
