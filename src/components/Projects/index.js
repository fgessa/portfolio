import { useState, useEffect, useRef } from "react";
import Isotope from "isotope-layout";
import ProjectsList from "./ProjectsList";
import "./style.css"

const Projects = (props) => {
    const projectsRef = useRef();

    // store the filter keyword in a state
    const [isotope, setIsotope] = useState(null);
    const [filterKey, setFilterKey] = useState('*')
  
    // initialize an Isotope object with configs
    useEffect(() => {
        setIsotope(
            new Isotope(projectsRef.current, {
                itemSelector: '.project-item',
            }) 
        );
    }, [])
  
    // handling filter key change
    useEffect(() => {
        if(isotope){
            filterKey === '*'
                ? isotope.arrange({filter: `*`})
                : isotope.arrange({filter: `${filterKey}`})
        }
    }, [isotope, filterKey])

    const toggleActiveClass = (current, elems) => {
        const activeClass = "filter-active"

        Object.values(elems).map(elem => elem.classList.remove(activeClass))
        current.classList.add(activeClass)
    }

    const handleFilter = (e) =>{
        const current = e.target;
        const siblings = current.parentNode.children;
        const filter = current.getAttribute("data-filter")

        toggleActiveClass(current, siblings)
        setFilterKey(filter)
    } 
  
  
    return (
        <section id="projects" className="project section-bg">
        <div className="container">

            <div className="section-title">
                <h2>Projects</h2>
                <div className="row" data-aos="fade-up">
                <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="project-flters">
                        <li data-filter="*" onClick={handleFilter} className="filter-active">All</li>
                        <li data-filter=".filter-app" onClick={handleFilter}>App</li>
                        <li data-filter=".filter-cli" onClick={handleFilter}>Cli</li>
                        <li data-filter=".filter-web" onClick={handleFilter}>Web</li>
                    </ul>
                </div>

                </div>
                    <p>"I am proud to showcase a selection of my recent projects, each demonstrating my technical 
                        abilities and design sensibility. From dynamic landing pages to complex web applications, 
                        these projects highlight my skills in front-end development and my commitment to delivering 
                        outstanding results."
                    </p>
                </div>


            <div ref={projectsRef} className="row project-container" data-aos="fade-up" data-aos-delay="100">
                <ProjectsList projects={props.projects} />
            </div>

        </div>
        </section> 
    )
  }
  
export default Projects;