import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import coffee from "../assets/images/coffee.gif"
// Projects component will iterate through each project accessed from project.js while tracking id and index
const Projects = ({ projects, title, showLink }) => {
  // console.log(props)
  return (
    <section className="section projects">
      <Title className="section-projects" title={title} />
      <div className="coffee">
        <img className="coffee" src={coffee} alt="" />
      </div>
      {/* iterating through by using map property through projects accessed from project.js 
      in project.id and passing all properties from node using spread operator '...project'  */}
      <div className="section-center project-center">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>

      {/* A conditional link only shows if its in the index page not projects page */}
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          All Projects
        </Link>
      )}
    </section>
  )
}

export default Projects
