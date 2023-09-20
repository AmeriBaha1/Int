import { Carousel, Container } from 'react-bootstrap';

const MyCarousel = () => {
    return (
        <Container fluid className="p-0 pb-5 mb-5">
            <Carousel fade id="header-carousel">
                <Carousel.Item style={{ minHeight: 300 }}>
                    <img
                        className="position-relative w-100"
                        src="/img/carousel-1.jpg"
                        style={{ minHeight: 300, objectFit: "cover" }}
                        alt="Carousel Image 1"
                    />
                    <Carousel.Caption className="d-flex align-items-center justify-content-center">
                        <div className="p-5" style={{ width: "100%", maxWidth: 900 }}>
                            <h5 className="text-white text-uppercase mb-md-3">
                                Best Courses
                            </h5>
                            <h1 className="display-3 text-white mb-md-4">
                                Best Education
                            </h1>
                            <a
                                href=""
                                className="btn btn-danger py-md-2 px-md-4 font-weight-semi-bold mt-2"
                            >
                                Learn More
                            </a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ minHeight: 300 }}>
                    <img
                        className="position-relative w-100"
                        src="/img/carousel-2.jpg"
                        style={{ minHeight: 300, objectFit: "cover" }}
                        alt="Carousel Image 2"
                    />
                    <Carousel.Caption className="d-flex align-items-center justify-content-center">
                        <div className="p-5" style={{ width: "100%", maxWidth: 900 }}>
                            <h5 className="text-white text-uppercase mb-md-3">
                                Best Courses
                            </h5>
                            <h1 className="display-3 text-white mb-md-4">
                                Best Learning Destination
                            </h1>
                            <a
                                href=""
                                className="btn btn-danger py-md-2 px-md-4 font-weight-semi-bold mt-2"
                            >
                                Learn More
                            </a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ minHeight: 300 }}>
                    <img
                        className="position-relative w-100"
                        src="/img/carousel-3.jpg"
                        style={{ minHeight: 300, objectFit: "cover" }}
                        alt="Carousel Image 3"
                    />
                    <Carousel.Caption className="d-flex align-items-center justify-content-center">
                        <div className="p-5" style={{ width: "100%", maxWidth: 900 }}>
                            <h5 className="text-white text-uppercase mb-md-3">
                                Best Courses
                            </h5>
                            <h1 className="display-3 text-white mb-md-4">
                                New Way To Learn
                            </h1>
                            <a
                                href=""
                                className="btn btn-danger py-md-2 px-md-4 font-weight-semi-bold mt-2"
                            >
                                Learn More
                            </a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default MyCarousel;
