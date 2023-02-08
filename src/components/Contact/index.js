import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import "./style.css"


function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Contact</h2>
                </div>
                <div className="row mt-1">
                    <ContactDetails />
                    <ContactForm />
                </div>

            </div>
        </section>
    );

}

export default Contact;