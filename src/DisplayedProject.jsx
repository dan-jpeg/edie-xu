import { useState } from 'react';
import PropTypes from 'prop-types';

const DisplayedProject = ({ project }) => {
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

    const goToPreviousMedia = () => {
        setCurrentMediaIndex((prevIndex) =>
            prevIndex === 0 ? project.media.length - 1 : prevIndex - 1
        );
    };

    const goToNextMedia = () => {
        setCurrentMediaIndex((prevIndex) =>
            prevIndex === project.media.length - 1 ? 0 : prevIndex + 1
        );
    };

    const renderMedia = () => {
        const currentMedia = project.media[currentMediaIndex];
        if (currentMedia.type === 'image') {
            return (
                <img
                    className="displayed-project-image"
                    src={currentMedia.url}
                    key={currentMedia.url}
                    alt={`${project.title} ${currentMediaIndex + 1}`}
                />
            );
        } else if (currentMedia.type === 'video') {
            return (
                <video
                    className="video-player"
                    src={currentMedia.url}
                    controls
                />
            );
        }
        return null;
    };

    return (
        <div className="displayed-project-container">
            <div className="displayed-title-container">
                <p className="displayed-project-title">{project.title}</p>
                <div className="displayed-project-details">
                    <p>{project.year}</p>
                    <p>{project.dimensions}</p>
                    <p>{project.material}</p>

                </div>

            </div>
            <div className="single-media-container">
                <div className="media-wrapper">
                    {renderMedia()}

                </div>
                <p className="image-index">
                    {currentMediaIndex + 1}/{project.media.length}
                </p>

                <div className="image-navigation">
                    <h2 className="left-chev" onClick={goToPreviousMedia}> {"<"} </h2>

                    <h2 className="right-chev" onClick={goToNextMedia}> {">"} </h2>
                </div>
                <p>{project.description}</p>
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
        year: PropTypes.string,
        dimensions: PropTypes.string,
        media: PropTypes.arrayOf(PropTypes.shape({
            type: PropTypes.oneOf(['image', 'video']).isRequired,
            url: PropTypes.string.isRequired
        })).isRequired
    }).isRequired
};

export default DisplayedProject;