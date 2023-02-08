import ContactItem from "./ContactItem";

function ContactDetails() {
    const contacts = [
        {
            class: "address",
            icon: "bi-geo-alt",
            label: "Location",
            text: "123 Billy Street, London, UK MCZ042"
        },

        {
            class: "email",
            icon: "bi-envelope",
            label: "Email",
            text: "goloobab@xyz.com"
        },

        {
            class: "phone",
            icon: "bi-phone",
            label: "Call",
            text: "+44 123 456 7890"
        }
    ]
    return (
        <div className="col-lg-4">
            <div className="info">
                {
                    contacts.map((contact, index) => (
                        <ContactItem contact={contact} key={index} />
                    ))
                }

            </div>

        </div>
    );
}


export default ContactDetails;