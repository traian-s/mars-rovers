import React from 'react'
import {Carousel, Col, Row, Spinner} from 'react-bootstrap';

import {connect} from "react-redux";
import {ImageProps} from "../redux/images/ImageTypes";
import {AppState} from "../redux/reducers";

export const RoverImages = ({images, Pending, Error}:
                                { images: ImageProps[] | null, Pending: boolean, Error: string }) => {
    return (
        <Row className="result_list justify-content-center">
            <Col lg={6}>
                {Pending && <>Searching for Images... <Spinner animation="grow"></Spinner></>}

                {null !== images && images.length > 0 &&
                <Carousel>
                    {images.map((row) =>
                        <Carousel.Item key={row.id}>
                            <img
                                className="d-block w-100"
                                src={row.img_src}
                                alt="{row.id}"
                            />
                            <Carousel.Caption>
                                <h3>{row.id}</h3>
                                <p>Taken
                                    by {row.camera.full_name} ({row.camera.name}) <br/>
                                    on {row.earth_date} (Sol {row.sol})
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>)}
                </Carousel>
                }
                {null !== images && 1 > images.length && !Pending && !Error &&
                <p> No images found for selected parameters...</p>}
                {Error &&
                <p className="errorMessage">The following errors occurred: {Error}</p>}
            </Col>
        </Row>
    )
};

export const mapStateToProps = (state: AppState) => {
    return {
        images: state.imageReducer.images,
        Pending: state.imageReducer.pending,
        Error: state.imageReducer.error
    };
};

export default connect(mapStateToProps)(RoverImages);
