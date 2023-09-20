import React from 'react';
import {booksData} from "~/config/SiteConfig";



const TeamSection: React.FC = () => {
    return (
        <>
            {/* Books Start */}
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-5">
                        <h1>Our Books</h1>
                    </div>
                    <div className="row">
                        {booksData.map((teacher, index) => (
                            <div className="col-md-6 col-lg-3 text-center team mb-4" key={index}>
                                <div className="team-item rounded overflow-hidden mb-2">
                                    <div className="team-img position-relative">
                                        <img className="img-fluid" src={teacher.imgSrc} alt={teacher.name} />
                                    </div>
                                    <div className="bg-secondary p-4">
                                        <h5>{teacher.name}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Team End */}
        </>
    );
};

export default TeamSection;
