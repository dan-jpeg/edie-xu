import { useState, useEffect, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import './App.css';
import DisplayedProject from "./DisplayedProject.jsx";
import { projects, videos, exhibitions } from "./projects-and-videos.js"


const App = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [sideBarExpanded, setSideBarExpanded] = useState(false);
    const [videoSideBarExpanded, setVideoSideBarExpanded] = useState(false);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setSelectedVideo(null);
    };

    const mainContentRef = useRef(null);


    const handleVideoClick = (video) => {
        setSelectedProject(null);
        setSelectedVideo(null);  // Clear the current video
        setTimeout(() => setSelectedVideo(video), 1);  // Set new video after a short delay
    };

    const handleWorksClick = () => {
        if (sideBarExpanded) {
            setSelectedProject(null);
        }
        setSideBarExpanded(!sideBarExpanded);
    };

    const handleNameClick = () => {
        setSelectedProject(null);
        setSelectedVideo(null);
        setSideBarExpanded(false);
        setVideoSideBarExpanded(false);

        // Scroll to the top of the main content area
        if (mainContentRef.current) {
            mainContentRef.current.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
    const handleVideoWorksClick = () => {
        if (videoSideBarExpanded) {
            setSelectedVideo(null);
        }
        setVideoSideBarExpanded(!videoSideBarExpanded);
        setSideBarExpanded(false);
    };

    const [isScrolling, setIsScrolling] = useState(false);
    const [scrollTimeout, setScrollTimeout] = useState(null);

    const handleScroll = useCallback(() => {
        setIsScrolling(true);

        // Clear the existing timeout
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }

        // Set a new timeout
        const timeout = setTimeout(() => {
            setIsScrolling(false);
        }, 500); // Adjust this value to change how long after scrolling stops before the menu reappears

        setScrollTimeout(timeout);
    }, [scrollTimeout]);

    useEffect(() => {
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (mainContent) {
                mainContent.removeEventListener('scroll', handleScroll);
            }
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
        };
    }, [handleScroll, scrollTimeout]);

    return (
        <div className="app-container">
            <aside className={`sidebar ${sideBarExpanded || videoSideBarExpanded ? 'expanded' : 'collapsed'}`}>
                <h3 onClick={handleNameClick}>edie xu</h3>
                <h3 className="clickable" onClick={handleWorksClick}>selected works</h3>
                <ul>
                    {sideBarExpanded && projects.map((project) => (
                        <li key={project.id} onClick={() => handleProjectClick(project)}>
                            {project.title}
                        </li>
                    ))}
                </ul>
                <h3 className="clickable" onClick={handleVideoWorksClick}>video & performances</h3>
                <ul>
                    {videoSideBarExpanded && videos.map((video) => (
                        <li key={video.id} onClick={() => handleVideoClick(video)}>
                            {video.title}
                        </li>
                    ))}
                </ul>
            </aside>
            <main className="main-content hide-scrollbar" ref={mainContentRef}>
                {selectedProject ? (
                    <DisplayedProject project={selectedProject}/>
                ) : selectedVideo ? (
                    <DisplayedVideo video={selectedVideo}/>
                ) : (
                    <div className="home-project-list-right hide-scrollbar" ref={mainContentRef}>
                        {exhibitions.map((project) => (
                            <ProjectListing
                                project={project}
                                key={project.id}
                                onProjectClick={handleProjectClick}
                            />
                        ))}
                    </div>
                )}
            </main>
            <aside className={`top-right-menu ${isScrolling ? 'hidden' : ''}`}>
                <h3>download cv</h3>
                <h3>contact</h3>
            </aside>
        </div>
    );
};


const ProjectListing = ({project, onProjectClick}) => {
    return (
        <div className="project-listing-container" onClick={() => onProjectClick(project)}>
            <div className="title-container">
                <p className="listing-title">{project.title}</p>
                {/*<p>{project.material}</p>*/}
                <p>{project.location}</p>
                <p>{project.date}</p>
            </div>
            <div className="image-container">
                <img className="project-image" src={project.images[0]} alt={project.title} />
            </div>
        </div>
    );
};


const DisplayedVideo = ({ video }) => {
    return (
        <div className="displayed-video-container">
            <h2>{video.title}</h2>
            <p>{video.year}</p>
            <p>{video.duration}</p>
            {video.videoUrl ? (
                <div className="video-player">
                    <video
                        controls
                        preload="metadata"
                        poster={video.thumbnail}
                    >
                        <source src={video.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ) : (
                <div className="video-player">
                    <p>Video not available</p>
                </div>
            )}
        </div>
    );
};



DisplayedVideo.propTypes = {
    video: PropTypes.shape({
        title: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
        videoUrl: PropTypes.string,
        thumbnail: PropTypes.string
    }).isRequired
};

ProjectListing.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        material: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    onProjectClick: PropTypes.func.isRequired,
};

export default App;