import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithub, FaBuffer, FaLink } from "react-icons/fa"
import { Link } from "gatsby"
//This component destructures the the query with all objects. Gets the image, index, and sets up the slug.
//Project also set up the description propert
const Project = ({
  description,
  github,
  slug,
  title,
  tools,
  url,
  stack,
  index,
  image,
}) => {
  return (
    <article className="project">
      <div className="project-img-div">
        <Link to={`/projects/${slug}`}>
          <GatsbyImage
            image={getImage(image.localFile)}
            className="project-img"
            alt={title}
            href={`/projects/${slug}`}
          />
        </Link>
      </div>
      <div className="project-info">
        {/* slug bounded to the project title which is used to create a nested structure programmatically in folder pages/projects*/}
        <span className="project-number">0{index + 1}</span>
        <Link to={`/projects/${slug}`} className="project-slug">
          <h3> {title} </h3>
        </Link>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="project-icon"></FaGithub>
          </a>
          <a href={tools} target="_blank" rel="noopener noreferrer">
            <FaBuffer className="project-icon"></FaBuffer>
          </a>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <FaLink className="project-icon"></FaLink>
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
