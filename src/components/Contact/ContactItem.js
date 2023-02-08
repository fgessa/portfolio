function ContactItem(props) {
    return (
        <div className={props.contact.class}>
            <i className={"bi " + props.contact.icon}></i>
            <h4>{props.contact.label}:</h4>
            <p>{props.contact.text}</p>
        </div>

    );
}

export default ContactItem;