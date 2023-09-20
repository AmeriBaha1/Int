import React from 'react';
import {teachersData} from "~/config/SiteConfig";


const TeamSection: React.FC = () => {
    return (
        <>
            {/* Team Start */}
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-5">
                        <h1>Meet Our Teachers</h1>
                    </div>
                    <div className="row">
                        {teachersData.map((teacher, index) => (
                            <div className="col-md-6 col-lg-3 text-center team mb-4" key={index}>
                                <div className="team-item rounded overflow-hidden mb-2">
                                    <div className="team-img position-relative">
                                        <img className="img-fluid" src={teacher.imgSrc} alt={teacher.name} />
                                        <div className="team-social">
                                            {teacher.socialLinks.map((social, socialIndex) => (
                                                <a className="btn btn-outline-light btn-square mx-1" href={social.link} key={socialIndex}>
                                                    <i className={social.icon}></i>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-secondary p-4">
                                        <h5>{teacher.name}</h5>
                                        <p className="m-0">{teacher.role}</p>
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
