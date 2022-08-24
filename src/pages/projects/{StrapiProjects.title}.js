import React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/Seo"
//Project Template has access to the page Context inheritanly via the prop pageContext
//This allows access to the tittle which is passed by the slug in the project.js
const ProjectTemplate = ({ pageContext: { title }, data }) => {
  return (
    <>
      <main className="project-template-page">
        <h2>{title}</h2>
        <p>{data.strapiProjects.description_long}</p>
      </main>
    </>
  )
}

export const query = graphql`
  query getSingleProject($title: String) {
    strapiProjects(title: { eq: $title }) {
      description_long
      title
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`

export default ProjectTemplate
