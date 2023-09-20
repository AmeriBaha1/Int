import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TestimonialSection: React.FC = () => {
    const imageStyle = {
        maxWidth: '150px', // Adjust the width as needed
        maxHeight: '150px', // Adjust the height as needed
    };

    return (
        <>
            {/* Testimonial Start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h1>What Say Our Students</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <Carousel
                                autoPlay={true}
                                interval={1500} // smartSpeed equivalent
                                showThumbs={false}
                                infiniteLoop={true}
                            >
                                {/* Testimonial Slide 1 */}
                                <div className="text-center">
                                    <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                                    <h4 className="font-weight-normal mb-4">
                                        Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum
                                        elitr dolore et eos labore, stet justo sed est sed. Diam sed sed
                                        dolor stet amet eirmod eos labore diam
                                    </h4>
                                    <img
                                        className="img-fluid mx-auto mb-3"
                                        src="img/testimonial-1.jpg"
                                        alt=""
                                        style={imageStyle} // Apply the style to make the image smaller
                                    />
                                    <h5 className="m-0">Client Name 1</h5>
                                    <span>Profession 1</span>
                                </div>

                                {/* Testimonial Slide 2 */}
                                <div className="text-center">
                                    <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                                    <h4 className="font-weight-normal mb-4">
                                        Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum
                                        elitr dolore et eos labore, stet justo sed est sed. Diam sed sed
                                        dolor stet amet eirmod eos labore diam
                                    </h4>
                                    <img
                                        className="img-fluid mx-auto mb-3"
                                        src="img/testimonial-2.jpg"
                                        alt=""
                                        style={imageStyle} // Apply the style to make the image smaller
                                    />
                                    <h5 className="m-0">Client Name 2</h5>
                                    <span>Profession 2</span>
                                </div>

                                {/* Testimonial Slide 3 */}
                                <div className="text-center">
                                    <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                                    <h4 className="font-weight-normal mb-4">
                                        Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum
                                        elitr dolore et eos labore, stet justo sed est sed. Diam sed sed
                                        dolor stet amet eirmod eos labore diam
                                    </h4>
                                    <img
                                        className="img-fluid mx-auto mb-3"
                                        src="img/testimonial-3.jpg"
                                        alt=""
                                        style={imageStyle} // Apply the style to make the image smaller
                                    />
                                    <h5 className="m-0">Client Name 3</h5>
                                    <span>Profession 3</span>
                                </div>

                                {/* Add more slides as needed */}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial End */}
        </>
    );
};

export default TestimonialSection;
