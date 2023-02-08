import "./style.css"

function About() {
    return (
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>About</h2>
                    <p>Started as IT Specialist that enjoyed playing with Ms Paint to a versatile IT professional with a passion for web development. 
                    </p>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <img src="images/profile/billy.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content">
                        <h3>FrontEnd Developer &amp; IT Support Specialist.</h3>
                        <p className="fst-italic">
                            I bring a unique combination of technical skills and creative flair to every project.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Chelmsford, UK</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                </ul>
                            </div>
                        </div>
                        <p>
                        I am a junior front-end developer with a passion for creating user-friendly websites and applications. Proficient in
                         HTML, CSS, JavaScript, and React, I bring a creative approach to development and a strong attention to detail. 
                         I have worked on multiple projects, collaborating with teams and delivering high-quality results. Continuously
                          learning and eager for new challenges, I am excited to grow as a front-end developer."

                        </p>
                        <div className="text-center"><a href="files/Resume.pdf" className="btn" download>Download CV</a></div>
                    </div>
                </div>

            </div>
        </section >
    );
}

export default About;