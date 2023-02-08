import Skill from './Skill';
import './style.css'

function Skills() {
  const skillsDetails = [
    {
      name: "HTML",
      experience: 95
    },
    {
      name: "CSS",
      experience: 90
    },
    {
      name: "Javascript",
      experience: 65
    },
    {
      name: "React",
      experience: 50
    },
    {
      name: "WordPress/CMS",
      experience: 90
    },
    {
      name: "IT support",
      experience: 90
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Skills</h2>
          <p>Over the years I have acquired skills in different technologies and libraries.</p>
        </div>

        <div className="row skills-content">

          <div className="col-lg-6">
            {
              skillsDetails.slice(0, 3).map((skill, index) => (
                <Skill skill={skill} key={index} />
              ))
            }
          </div>

          <div className="col-lg-6">
            {
              skillsDetails.slice(3).map((skill, index) => (
                <Skill skill={skill} key={index} />
              ))
            }

          </div>
        </div>
      </div>
    </section>
  )

}

export default Skills;