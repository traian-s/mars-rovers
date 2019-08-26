import React from 'react'
import {Carousel, Col, Row, Spinner} from 'react-bootstrap';

import {connect} from "react-redux";
import {ImageProps} from "../redux/images/ImageTypes";

const RoverImages = ({images, Pending, Error}: { images: ImageProps[], Pending: boolean, Error: string | null }) => {

    return (
        <Row className="result_list justify-content-center">
            <Col lg={6}>
                {Pending && <>Searching for Images... <Spinner animation="grow"></Spinner></>}

                {images.length > 0 &&
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
                                    by {row.camera.full_name} ({row.camera.name}) <br/>on {row.earth_date} (Sol {row.sol})
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>)}
                </Carousel>
                }
                {1 > images.length && !Pending && !Error &&
                <p> No images found for selected parameters...</p>}
                {Error &&
                <p>The following errors occured: {Error}</p>}
            </Col>
        </Row>
    )
};

const mapStateToProps = (state: any) => {
    return {
        Pending: state.imageReducer.pending,
        Error: state.imageReducer.error,
        images: state.imageReducer.images
    };
};

export default connect(mapStateToProps)(RoverImages);
