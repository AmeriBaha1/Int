import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const AboutSection = () => {
    return (
        <div className="container-fluid py-5">
            <Container>
                <Row className="align-items-center">
                    <Col lg={5}>
                        <Image className="img-fluid rounded mb-4 mb-lg-0" src="img/about.jpg" alt="" />
                    </Col>
                    <Col lg={7}>
                        <div className="text-left mb-4">
                            <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px' }}>
                                About Us
                            </h5>
                            <h1>Innovative Way To Learn</h1>
                        </div>
                        <p>
                            Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet
                            voluptua duo dolores et sit ipsum rebum, sadipscing et erat eirmod diam kasd labore
                            clita est. Diam sanctus gubergren sit rebum clita amet, sea est sea vero sed et.
                            Sadipscing labore tempor at sit dolor clita consetetur diam. Diam ut diam tempor no et,
                            lorem dolore invidunt no nonumy stet ea labore, dolor justo et sit gubergren diam sed
                            sed no ipsum. Sit tempor ut nonumy elitr dolores justo aliquyam ipsum stet
                        </p>
                        <Button className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">
                            Learn More
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutSection;
