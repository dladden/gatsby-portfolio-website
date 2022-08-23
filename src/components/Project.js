import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"

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
      <GatsbyImage
        image={getImage(image.localFile)}
        className="project-img"
        alt={title}
      />
      {/* <div className="project-info">
        <span className="project-number">0{index + 1}</span>
      </div> */}
    </article>
  )
}

export default Project
