import { useState } from "react";
import PropTypes from "prop-types";
import './App.css';

const projects = [
    {
        id: "0",
        category: " ",
        location: " ",
        title: "CMMMMC - Ceramic Meets Metal Metal Meets Ceramic",
        description: "Ceramic Meets Metal Metal Meets Ceramic",
        material: "Oxidized metal and broken fired stoneware",
        year: "2024",
        dimensions: "70 x 23 x 94 inches (177 x 58 x 240 cm)",
        duration: "15 min",
        images: ["https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/ceramic_metal_01.png", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/ceramic_metal_02.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/ceramic_metal_03.JPG"]
    },
    {
        id: "1",
        category: "Group Exhibition",
        location: "Shanghart, ShangHai",
        title: "limited intentionality",
        description: "if, as kant claimed, schematization is the very mechanism for human beings' use of intelligence, then vision can be considered apremise for human reason.  edie xu's works reveal the effect of sexuality on intentional activities, where the relation between body schema and eroticism always implies the object-oriented dimension.",
        material: "stoneware",
        year: "2024",
        images: ["https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/limited_intentionality_01.jpeg","https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/limited_intentionality_02.jpeg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/limited_intentionality_03.jpeg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/limited_intentionality_04.jpeg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/limited_intentionality_05.jpeg"]
    },
    {
        id: "2",
        category: " ",
        location: " ",
        title: "0 20 24 ",
        description: "",
        material: "stoneware",
        year: "2023",
        images: ["https://i.ibb.co/DLZRPMf/PNG-image-3.jpg", "https://i.ibb.co/93ZqQmn/PNG-image-1.jpg", "https://i.ibb.co/tHRbPhC/PNG-image-2.jpg"],
    },
    {
        id: "3",
        category: " ",
        location: " ",
        title: "Thine air",
        description: "An unglazed stoneware piece created in 2023",
        material: "Unglazed stoneware",
        year: "2023",
        dimensions: "34 x 23 x 15 inches (86 x 58 x 38 cm)",
        images: ["https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/thine_air_01.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/thine_air_02.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/thine_air_03.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/thine_air_04.jpg"]
    },

    {
        id: "4",
        category: " ",
        location: " ",
        title: "oxygenated  ",
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        material: "stoneware",
        year: "2024",
        dimensions: "34 x 23 x 15 inches (86 x 58 x 38 cm)",
        images: ["https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/oxygenated_01.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/oxygenated_02.png", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/oxygenated_03.png", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/oxygenated_04.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/oxygenated_05.jpg"],
    },
    {
        id: "5",
        category: " ",
        location: " ",
        title: "philtrum",
        description: "",
        material: "stoneware with wash",
        year: "2022",
        images:  [
            "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/philtrum_01.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/philtrum_02.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/philtrum_03.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/philtrum_04.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/philtrum_05.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/philtrum_06.jpg"
        ],
    },
    // {
    //     id: "5",
    //     category: " ",
    //     location: " ",
    //     title: "N...S...",
    //     description: "consectet cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    //     material: "stoneware",
    //     year: "2024",
    //     images:  [
    //         "https://i.ibb.co/zPz1y7f/1.png",
    //         "https://i.ibb.co/QnjpLcL/Screenshot-2024-07-31-at-7-13-40-PM.png",
    //         "https://i.ibb.co/vLscbV7/Screenshot-2024-08-01-at-7-09-44-PM.png"
    //     ],
    // },

    {
        id: "6",
        category: " ",
        location: " ",
        title: "Being series 01",
        description: "An unglazed stoneware piece created in 2022",
        material: "Unglazed stoneware",
        year: "2022",
        dimensions: "24 x 18 x 15 inches (60 x 45 x 38 cm)",
        images: ["https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/being-01_01.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/being-01_02.png"]
    },
    {
        id: "7",
        category: " ",
        location: " ",
        title: "Being series 02",
        description: "A terracotta piece created in 2023",
        material: "Terracotta",
        year: "2023",
        dimensions: "35 x 30 inches (89 x 76 cm)",
        images: ["https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/being-02_02.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/being-02_02.jpg"]
    },
    {
        id: "8",
        category: " ",
        location: " ",
        title: "White (resonance)",
        description: "A stoneware piece with glaze created in 2022",
        material: "Stoneware with glaze",
        year: "2022",
        dimensions: "48 x 24 x 32 inches (121 x 60 x 81 cm)",
        images: ["https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/white_resonance_01.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/white_resonance_02.png", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/white_resonance_03.png"]
    },
    {
        id: "9",
        category: " ",
        location: " ",
        title: "Peculiar intimacy",
        description: "A mixed media piece created in 2022",
        material: "Machine knit, metal and plaster",
        year: "2022",
        dimensions: "75 x 65 x 28 inches (190 x 165 x 71 cm)",
        images: ["https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/peculiar_intimacy_01.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/peculiar_intimacy_02.jpg", "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/peculiar_intimacy_03.jpg"]
    },
    // {
    //     id: "6",
    //     category: " ",
    //     location: " ",
    //     title: "Out of place",
    //     description: "consectet cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    //     material: "stoneware",
    //     year: "2024",
    //     images:  [
    //         "https://i.ibb.co/16J3rRD/1-V6-A8863-copy.jpg",
    //         "https://i.ibb.co/6bXvn8W/1-V6-A8872-copy.jpg",
    //         "https://i.ibb.co/4T0hLLw/1-V6-A8924-copy-2.jpg",
    //         "https://i.ibb.co/FX9YQ0p/1-V6-A8962-copy.jpg",
    //         "https://i.ibb.co/8s3FPvY/3-L7-A6632-copy.jpg",
    //         "https://i.ibb.co/n6hbxWD/3-L7-A6633-copy.jpg",
    //         "https://i.ibb.co/fD09Nk8/3-L7-A8971-copy.jpg",
    //         "https://i.ibb.co/Tbkm63M/3-L7-A8974-copy.jpg",
    //         "https://i.ibb.co/71KxxPS/3-L7-A8979-copy.jpg",
    //         "https://i.ibb.co/LxCmkYV/3-L7-A8981-copy.jpg",
    //         "https://i.ibb.co/RY133Ns/Wechat-IMG221-copy.jpg",
    //         "https://i.ibb.co/V3vVrBK/Wechat-IMG223-copy-2.jpg"
    //     ],
    // },
    // {
    //     id: "7",
    //     category: " ",
    //     location: " ",
    //     title: "Resonate with fragmentation",
    //     description: "consectet cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    //     material: "stoneware",
    //     year: "2024",
    //     images: [
    //         "https://i.ibb.co/dr91b9L/01-copy.jpg",
    //         "https://i.ibb.co/6X8ykWx/02-copy.jpg",
    //         "https://i.ibb.co/8z4zx7R/03-copy.jpg",
    //         "https://i.ibb.co/89ZDKZ7/04-copy.png"
    //     ]
    // },
    // {
    //     id: "8",
    //     category: " ",
    //     location: " ",
    //     title: "Somatic Attunement",
    //     description: "consectet cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    //     material: "stoneware fired with greenware",
    //     year: "2024",
    //     images: [
    //         "https://i.ibb.co/vJx0d4N/3L7A6311.jpg",
    //         "https://i.ibb.co/swgvLrP/3L7A6383.jpg",
    //         "https://i.ibb.co/ZXJb8sZ/3L7A6402.jpg",
    //         "https://i.ibb.co/P16C1fg/3L7A6441.jpg",
    //         "https://i.ibb.co/HzCQbgj/3L7A6517.jpg",
    //         "https://i.ibb.co/FXkR815/3L7A6586.jpg",
    //         "https://i.ibb.co/JmxrkBW/3L7A6591.jpg",
    //         "https://i.ibb.co/DRFTQLp/3L7A6594.jpg",
    //         "https://i.ibb.co/tHGJqLS/3L7A6601.jpg",
    //         "https://i.ibb.co/LNJCyFG/3L7A6656.jpg",
    //         "https://i.ibb.co/FgJmXJQ/DSC02337-1-copy.jpg"
    //     ]
    // },

    // {
    //     id: "10",
    //     category: " ",
    //     location: " ",
    //     title: "02 20",
    //     description: "A stoneware piece created in 2023",
    //     material: "Stoneware",
    //     year: "2023",
    //     dimensions: "12 x 12 x 27 inches (30 x 30 x 69 cm)",
    //     images: ["placeholder1.jpg", "placeholder2.jpg"]
    // },
    //
    // {
    //     id: "14",
    //     category: " ",
    //     location: " ",
    //     title: "Being series 02",
    //     description: "A terracotta piece created in 2023",
    //     material: "Terracotta",
    //     year: "2023",
    //     dimensions: "35 x 30 inches (89 x 76 cm)",
    //     images: ["placeholder1.jpg", "placeholder2.jpg"]
    // },

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
                    <img key={index} className="displayed-project-image" src={image} alt={`${project.title} ${index}`}/>
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