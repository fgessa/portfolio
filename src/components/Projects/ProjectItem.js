function ProjectItem(props) {
    return (
        <div className="col-lg-4 col-md-6 project-item">
            <div className="project-wrap">
                <img src={process.env.PUBLIC_URL + props.project.imageSrc} className="img-fluid" alt="" />

                <div className="project-info">
                    <h4>{props.project.title}</h4>
                    <p>{props.project.summary}</p>
                    <div className="project-links">
                        {props.project.details.map((item, index) => (
                            <a href={item.url} key={index}><i className={"bx " + item.icon}></i></a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;