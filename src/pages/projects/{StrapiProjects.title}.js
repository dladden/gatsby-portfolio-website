import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../../components/Seo"
//Project Template has access to the page Context inheritanly via the prop pageContext
//This allows access to the tittle which is passed by the slug in the project.js
//Seo tag attaches the project name, description and image to the meta tag so that there is a nice project card
const ProjectTemplate = ({ pageContext: { title, image }, data }) => {
  return (
    <>
      <Seo
        title={data.strapiProjects.title.toUpperCase()}
        description={data.strapiProjects.description}
        image={data.strapiProjects.image.localFile.publicURL}
      />

      <main className="project-template-page">
        <div className="project-template-img ">
          <img
            src={data.strapiProjects.image.localFile.publicURL}
            alt={title}
            className="about-img-svg"
          />
          <h2>{title}</h2>
        </div>
        <div className="section-center">
          <p>{data.strapiProjects.description_long}</p>
        </div>
      </main>
    </>
  )
}

export const query = graphql`
  query getSingleProject($title: String) {
    strapiProjects(title: { eq: $title }) {
      description
      description_long
      title
      github
      stack {
        id
        title
      }
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`

export default ProjectTemplate
