

import { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DisplayedProject = ({ project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
        );
    };

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="displayed-project-container">
            <div className="title-container">
                <p>{project.title}</p>
                <p>{project.material}</p>
                <p>{project.category}</p>
                <p>{project.location}</p>
            </div>
            <div className="image-container">
                <p>{project.description}</p>
                <div className="image-navigation">
                    <button onClick={goToPreviousImage} className="nav-button">
                        <ChevronLeft size={24} />
                    </button>
                    <div className="image-wrapper">
                        <img
                            className="displayed-project-image"
                            src={project.images[currentImageIndex]}
                            alt={`${project.title} ${currentImageIndex + 1}`}
                        />
                        <p className="image-index">
                            {currentImageIndex + 1}/{project.images.length}
                        </p>
                    </div>
                    <button onClick={goToNextImage} className="nav-button">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

DisplayedProject.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        material: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};

export default DisplayedProject;