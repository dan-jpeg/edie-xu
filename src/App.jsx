import { useState } from "react";
import PropTypes from "prop-types";
import './App.css';

const projects = [
    {
        id: "1",
        category: "Group Exhibition",
        location: "Shanghart, ShangHai",
        title: "limited intentionality",

        description: "if, as kant claimed, schematization is the very mechanism for human beings’ use of intelligence, then vision can be considered apremise for human reason.  edie xu‘s works reveal the effect of sexuality on intentional activities, where the relation between body schema and eroticism always implies the object-oriented dimension.",
        material: "stoneware",
        year: "2024",
        images: ["https://i.ibb.co/5WSgCmG/BNL3762-copy-2.jpg","https://i.ibb.co/fnFLDGg/BNL3767-copy-2.jpg", "https://i.ibb.co/5WSgCmG/BNL3762-copy-2.jpg"]
    },
    {
        id: "2",
        category: " ",
        location: " ",
        title: "0 20 24 ",
        description: "sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
        material: "stoneware",
        year: "2024",
        images: ["https://i.ibb.co/DLZRPMf/PNG-image-3.jpg", "https://i.ibb.co/93ZqQmn/PNG-image-1.jpg", "https://i.ibb.co/tHRbPhC/PNG-image-2.jpg"],
    },
    {
        id: "3",
        category: " ",
        location: " ",
        title: "oxygenated  ",
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        material: "stoneware",
        year: "2024",
        images: ["https://i.ibb.co/1n9KFhH/183-A0937-Finished-Crop-2.jpg", "https://i.ibb.co/Z8FnjyZ/1-Artboard-1.png", "https://i.ibb.co/ygRym71/PNG-image.jpg", "https://i.ibb.co/zNvMFWS/183-A0940-Finished.jpg"],
    },


];

const App = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };



    const [sideBarExpanded, setSideBarExpanded] = useState(false);

    const handleWorksClick = () => {
        if (sideBarExpanded) {
            setSelectedProject(null);
        }
        setSideBarExpanded(!sideBarExpanded);
    };

    return (
        <div className="app-container">
            <aside className={`sidebar ${sideBarExpanded ? 'expanded' : 'collapsed'}`}>
                <h3 onClick={handleWorksClick}>edie xu</h3>
                <h3 className="clickable" onClick={handleWorksClick}>selected works</h3>
                <ul>
                    {sideBarExpanded && projects.map((project) => (
                        <li key={project.id} onClick={() => handleProjectClick(project)}>
                            {project.title}
                        </li>
                    ))}
                </ul>
            </aside>
            <main className="main-content">
            {selectedProject ? (
                    <DisplayedProject project={selectedProject}/>
                ) : (
                    projects.map((project) => (
                        <ProjectListing
                            project={project}
                            key={project.id}
                            onProjectClick={handleProjectClick}
                        />
                    ))
                )}
            </main>
        </div>
    );
};

const ProjectListing = ({ project, onProjectClick }) => {
    return (
        <div className="project-listing-container" onClick={() => onProjectClick(project)}>
            <div className="title-container">
                <p className="listing-title">{project.title}</p>
                <p>{project.material}</p>
                <p>{project.category}</p>
                <p>{project.location}</p>
            </div>
            <div className="image-container">
                <img className="project-image" src={project.images[0]} alt={project.title} />
            </div>
        </div>
    );
};

const DisplayedProject = ({ project }) => {
    return (
        <div className="displayed-project-container">
            <div className="title-container">
                <p>{project.title}</p>
                <p>{project.material}</p>
                <p>{project.category}</p>
                <p>{project.location}</p>
            </div>
            <div className="image-container">
                <p >{project.description}</p>
                {project.images.map((image, index) => (
                    <img key={index} className="project-image" src={image} alt={`${project.title} ${index}`}/>
                ))}
            </div>
        </div>
    );
};

ProjectListing.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        material: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    onProjectClick: PropTypes.func.isRequired,
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
export default App;