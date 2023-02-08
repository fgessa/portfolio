import ProjectItem from "./ProjectItem";

function ProjectsList(props) {
    return (
        <div className="row project-container" data-aos="fade-up" data-aos-delay="100">
            {
                props.projects.map((project, index) => (
                    <ProjectItem key={index} project={project} />
                ))
            }
        </div>
    );
}

export default ProjectsList;