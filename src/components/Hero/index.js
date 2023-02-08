import Typed from "react-typed"
import "./style.css"

function Hero() {

    return (
        <section id="hero" className="d-flex flex-column justify-content-center">
            <div className="container" data-aos="zoom-in" data-aos-delay="100">
                <h1>Billy Golooba</h1>
                <p>
                    I'm a <Typed
                        strings={["Developer", "Freelancer", "Specialist in IT"]}
                        typeSpeed={100}
                        backSpeed={50}
                        backDelay={2000}
                        loop={true}
                    />
                </p>
                <div className="social-links">
                    <a href="https://github.com/goloobab/" className="github"><i className="bx bxl-github"></i></a>
                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                    <a href="https://www.linkedin.com/in/goloobab" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
            </div>
        </section>
    );
}

export default Hero;