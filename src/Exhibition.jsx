import { useState } from 'react';
import PropTypes from 'prop-types';
import "./App.css"

const Exhibition = ({ project: exhibition }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? exhibition.images.length - 1 : prevIndex - 1
        );
    };

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === exhibition.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="displayed-exhibition-container">
            <div className="exhibition-info-container">
                <p className="exhibition-title">{exhibition.title}</p>
                <p className="exhibition-location">{exhibition.location}</p>
                <p className="exhibition-date">{exhibition.date}</p>
            </div>
                <a className="exhibition-url" href={exhibition.url}>{exhibition.url} </a>

                <p className="exhibition-header"> {exhibition.header}</p>
                <p className="exhibition-subheader"> {exhibition.subheader}</p>


            <div className="exhibition-image-container">
                <div className="image-wrapper">
                    <img
                        className="displayed-exhibition-image"
                        src={exhibition.images[currentImageIndex]}
                        key={exhibition.images[currentImageIndex]}
                        alt={`${exhibition.title} ${currentImageIndex + 1}`}
                    />
                    <p className="image-index">
                        {currentImageIndex + 1}/{exhibition.images.length}
                    </p>
                </div>

                <div className="image-navigation">
                    <h2 onClick={goToPreviousImage}> {"<"} </h2>
                    <h2 onClick={goToNextImage}> {">"} </h2>
                </div>
                <p className="text-content">{exhibition.textContent}</p>
                <p>{exhibition.footnote}</p>

            </div>
        </div>
    );
};

// const SmallProjectInfo = ({ project }) => {
//
//     return (
//         <div className="small-project-info-container">
//             <span>{project.title}</span>
//             <span>{project.year}</span>
//             <span>{project.dimensions}</span>
//             <span>{project.material}</span>
//             <span>{project.description}</span>
//         </div>
//     )
// }
Exhibition.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        url: PropTypes.string,
        header: PropTypes.string,
        subheader: PropTypes.string,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        textContent: PropTypes.string,
        footnote: PropTypes.string,
        workIncluded: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            year: PropTypes.string,
            dimensions: PropTypes.string,
            material: PropTypes.string,
            description: PropTypes.string
        }))
    }).isRequired
};

export default Exhibition;