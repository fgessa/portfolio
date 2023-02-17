import ProjectItem from "./ProjectItem";
import React from "react";


const ProjectsList = (props  => (
    
        <>
            {
                props.projects.map((project, index) => (
                    <ProjectItem key={index} project={project} />
                ))
            }
        </>
));

export default ProjectsList;


// function ProjectsList(props) {
//     return (
//         <div className="row project-container" data-aos="fade-up" data-aos-delay="100">
//             {
//                 props.projects.map((project, index) => (
//                     <ProjectItem key={index} project={project} />
//                 ))
//             }
//         </div>
//     );
// }

// export default ProjectsList;