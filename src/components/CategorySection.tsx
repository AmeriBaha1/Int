import React from 'react';

const categories = [
    {
        name: 'Web Design',
        imgSrc: 'img/cat-1.jpg',
    },
    {
        name: 'Development',
        imgSrc: 'img/cat-2.jpg',
    },
    {
        name: 'Game Design',
        imgSrc: 'img/cat-3.jpg',
    },
    {
        name: 'Apps Design',
        imgSrc: 'img/cat-4.jpg',
    },
    {
        name: 'Marketing',
        imgSrc: 'img/cat-5.jpg',
    },
    {
        name: 'Research',
        imgSrc: 'img/cat-6.jpg',
    },
    {
        name: 'Content Writing',
        imgSrc: 'img/cat-7.jpg',
    },
    {
        name: 'SEO',
        imgSrc: 'img/cat-8.jpg',
    },
];

const CategorySection: React.FC = () => {
    return (
        <>
            {/* Category Start */}
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-5">
                        <h1>Explore Top Subjects</h1>
                    </div>
                    <div className="row">
                        {categories.map((category, index) => (
                            <div className="col-lg-3 col-md-6 mb-4" key={index}>
                                <div className="cat-item position-relative overflow-hidden rounded mb-2">
                                    <img className="img-fluid" src={category.imgSrc} alt={category.name} />
                                    <div className="cat-overlay text-white text-decoration-none">
                                        <h4 className="text-white font-weight-medium">{category.name}</h4>
                                        <span>100 Courses</span>
                                    </div>
                                    <h4 className="text-center" style={{ marginTop: "-3rem" }}>{category.name}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Category End */}
        </>
    );
};

export default CategorySection;
