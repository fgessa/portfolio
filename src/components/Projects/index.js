import ProjectsList from "./ProjectsList";
import "./style.css"

function Projects(props) {
    return (
        <section id="projects" className="project section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Projects</h2>
                    <p>"I am proud to showcase a selection of my recent projects, each demonstrating my technical 
                        abilities and design sensibility. From dynamic landing pages to complex web applications, 
                        these projects highlight my skills in front-end development and my commitment to delivering 
                        outstanding results."
                    </p>
                </div>

                <ProjectsList projects={props.projects} />

            </div>
        </section>
    );
}

export default Projects;