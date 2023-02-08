function Skill(props) {
    return (
        <div className="progress">
            <span className="skill">{props.skill.name}<i className="val"> {props.skill.experience}%</i></span>
            <div className="progress-bar-wrap">
                <div
                    style={{ "width": props.skill.experience + "%" }}
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={props.skill.experience}
                    aria-valuemin="0"
                    aria-valuemax="100">
                </div>
            </div>
        </div>
    );
}

export default Skill;