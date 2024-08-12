import { useState, useEffect, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import Exhibition from "./Exhibition.jsx";
import './App.css';
import envelopeClosed from './assets/envelope_v4.png';
// import envelopeOpen from './assets/envelope-open.png';
import DisplayedProject from "./DisplayedProject.jsx";
import { selectedWorks, videos, exhibitions2 } from "./projects-and-videos.js"
import ReactPlayer from 'react-player/lazy'


const App = () => {
    const [isHome, setIsHome] = useState(true);
    const [isTransitioningToHome, setIsTransitioningToHome] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [selectedExhibition, setSelectedExhibition] = useState(null);
    const [sideBarExpanded, setSideBarExpanded] = useState(false);
    const [videoSideBarExpanded, setVideoSideBarExpanded] = useState(false);
    const [contactInfoVisible, setContactInfoVisible] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const [scrollTimeout, setScrollTimeout] = useState(null);
    const contactInfoRef = useRef(null);




    const mainContentRef = useRef(null);


    const goHome = () => {
        if (!isHome) {
            setIsTransitioningToHome(true);
            setTimeout(() => {
                setSelectedProject(null);
                setSelectedVideo(null);
                setSelectedExhibition(null);
                setSideBarExpanded(false);
                setVideoSideBarExpanded(false);
                setContactInfoVisible(false);
                setIsHome(true);
                setIsTransitioningToHome(false);
            }, 1); // This should match the transition duration in CSS
        }

            mainContentRef.current.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

    };


    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setSelectedVideo(null);
        setIsHome(false)
        setVideoSideBarExpanded(false)
    };

    const handleVideoClick = (video) => {
        setSelectedProject(null);
        setSelectedVideo(null);
        setSideBarExpanded(false)
        setIsHome(false)
        setTimeout(() => setSelectedVideo(video), 1);
    };

    const handleWorksClick = () => {
        setSideBarExpanded(!sideBarExpanded);
    };

    const handleVideoWorksClick = () => {


        setVideoSideBarExpanded(!videoSideBarExpanded);
    };

    const handleContactClick = () => {
        setContactInfoVisible(!contactInfoVisible);
    }

    const handleExhibitionClick = (exhibition) => {
        setSelectedVideo(null);
        setVideoSideBarExpanded(false)
        setSelectedExhibition(exhibition);
        setIsHome(false)
    }
    const handleOutsideClick = (e) => {
        if (contactInfoVisible && contactInfoRef.current && !contactInfoRef.current.contains(e.target)) {
            setContactInfoVisible(false);
        }
    }

    const handleScroll = useCallback(() => {
        setIsScrolling(true);

        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }

        const timeout = setTimeout(() => {
            setIsScrolling(false);
        }, 500);

        setScrollTimeout(timeout);
    }, [scrollTimeout]);


    return (
        <div className="app-container">
            <aside className={`sidebar ${sideBarExpanded || videoSideBarExpanded ? 'expanded' : 'collapsed'}`}>
                <h3 onClick={goHome}>edie xu</h3>
                <h3 className="clickable" onClick={handleWorksClick}>selected works</h3>
                <ul>
                    {sideBarExpanded && selectedWorks.map((project) => (
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
            <main
                className={`main-content hide-scrollbar ${isTransitioningToHome ? 'fading' : ''} ${selectedExhibition ? 'showing-exhibition' : ''}`}
                ref={mainContentRef}
            >

                {isHome ? (
                    <div className="home-project-list-right hide-scrollbar">
                        <div className="container-header">
                            <h3> Selected exhibitions </h3>
                        </div>
                        {exhibitions2.map((exhibition) => (
                            <ProjectListing
                                project={exhibition}
                                key={exhibition.id}
                                onProjectClick={handleExhibitionClick}
                            />
                        ))}
                    </div>
                ) : selectedProject ? (
                    <DisplayedProject project={selectedProject}/>
                ) : selectedVideo ? (
                    <DisplayedVideo video={selectedVideo}/>
                ) : selectedExhibition ? (
                    <Exhibition project={selectedExhibition}/>
                ) : null}
            </main>
            <aside className={`top-right-menu ${isScrolling ? 'hidden' : ''}`}>
                <a href="https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/assets/Edie+X+Resume-1.pdf" target="_blank"
                   rel="noopener noreferrer">
                    download cv
                </a>
            </aside>
            <div className="contact-menu">
                <img src={envelopeClosed} alt="Contact"/>
                {/*<p>Studio</p>*/}
                <p>s: New York, USA</p>
                <p>e: <a href="mailto:ediexxu@gmail.com">ediexxu@gmail.com</a></p>
                <p>i: <a href="http://instagram.com/e__xu">e__xu</a></p>
            </div>


            <div className="envelope">

            </div>
        </div>

    );
};
const ProjectListing = ({
                            project, onProjectClick
                        }) => {
    return (
        <div className="project-listing-container" onClick={() => onProjectClick(project)}>
            <div className="title-container">
                <p className="listing-title">{project.title}</p>
                {/*<p>{project.material}</p>*/}
                <p>{project.location}</p>
                <p>{project.date}</p>
            </div>
            <div className="image-container">
                <img className="project-image" src={project.images[0]} alt={project.title}/>
            </div>
        </div>
    );
};


const DisplayedVideo = ({video}) => {
    return (
        <div className="displayed-video-container">
            <div className="video-title-container">
                <h2 className="video-title">{video.title}</h2>
                <div className="video-details">
                    <p>{video.year}</p>
                    <p>{video.duration}</p>
                </div>
            </div>


            {video.videoUrl ? (
                <div className="video-wrapper">
                    <ReactPlayer url={video.videoUrl} playing={true} width='100%' height='100%' />
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