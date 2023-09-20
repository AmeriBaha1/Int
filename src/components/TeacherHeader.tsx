import React from 'react';

const AboutHeader: React.FC = () => {
    return (
        <div className="container-fluid page-header" style={{
            background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/page-header.jpg), no-repeat center center',
            backgroundSize: 'cover',
            marginBottom: '90px'
        }}>
            {/* Header Start */}
                <div className="container">
                    <div
                        className="d-flex flex-column justify-content-center"
                        style={{ minHeight: 300 }}
                    >
                        <h3 className="display-4 text-white text-uppercase">Teachers</h3>
                        <div className="d-inline-flex text-white">
                            <p className="m-0 text-uppercase">
                                <a className="text-white" href="">
                                    Home
                                </a>
                            </p>
                            <i className="fa fa-angle-double-right pt-1 px-3" />
                            <p className="m-0 text-uppercase">Teachers</p>
                        </div>
                    </div>
            </div>
            {/* Header End */}
        </div>
    );
};

export default AboutHeader;
