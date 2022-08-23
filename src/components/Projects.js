import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
// Projects component will iterate through each project accessed from project.js
const Projects = ({ projects, title, showLink }) => {
  // console.log(props)
  return (
    <section className="section projects">
      <Title title={title} />
      {/* mapping through projects accessed from project.js in project.id and passing all properties from node using spread operator '...project'  */}
      <div className="section-center project-center">
        {projects.map(project => {
          return <Project key={project.id} {...project} />
        })}
      </div>

      {/* A conditional link only shows if its in the index page not projects page */}
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  )
}

export default Projects
