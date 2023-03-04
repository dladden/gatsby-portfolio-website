import React from "react"
import { graphql } from "gatsby"
import { FaGithub, FaBuffer, FaLink } from "react-icons/fa"
import { BsPersonBoundingBox, BsCalendarCheck, BsHeart } from "react-icons/bs"
import Seo from "../../components/Seo"
//Project Template has access to the page Context inheritanly via the prop pageContext
//This allows access to the tittle which is passed by the slug in the project.js
//Seo tag attaches the project name, description and image to the meta tag so that there is a nice project card
const ProjectTemplate = ({
  pageContext: { title, github, tools, url },
  data,
}) => {
  return (
    <>
      <Seo
        title={data.strapiProjects.title.toUpperCase()}
        description={data.strapiProjects.description}
        image={data.strapiProjects.image.localFile.publicURL}
      />

      <main className="project-template-page">
        <div className="project-page_">
          <div className="project-template-page_ gradient-overlay">
            <section className="project-hero">
              <img
                src={data.strapiProjects.image.localFile.publicURL}
                alt={title}
                style={{ maxWidth: "100%" }}
                className="project-template-img"
              />

              <article className="project-text">
                <h2>{title}</h2>
                <div className="project-links">
                  <a
                    href={data.strapiProjects.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="project-icon"></FaGithub>
                  </a>
                  <a
                    href={data.strapiProjects.tools}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaBuffer className="project-icon"></FaBuffer>
                  </a>
                  <a
                    href={data.strapiProjects.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLink className="project-icon"></FaLink>
                  </a>
                </div>
                <p>{data.strapiProjects.description_long}</p>
                <div className="project-icons">
                  <article>
                    <BsPersonBoundingBox />
                    <h5>Client:</h5>
                    <p>{data.strapiProjects.client}</p>
                  </article>
                  <article>
                    <BsCalendarCheck />
                    <h5>Date:</h5>
                    <p>{data.strapiProjects.date.split("-")[0]}</p>
                  </article>
                  <article>
                    <BsHeart />
                    <h5>Service:</h5>
                    <p>{data.strapiProjects.service}</p>
                  </article>
                </div>
              </article>
            </section>
          </div>
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
      tools
      url
      client
      date
      service
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
