import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import logo from "../assets/images/sign.svg"
import Seo from "../components/Seo"
//About Page utilizes Strapi's single content type query to access data.
//Additionaly in order to use an svg image the image is called on from a public URL
const About = ({ data }) => {
  const {
    strapiAboutPage: { title, info, stack, image },
  } = data
  return (
    <>
      <Seo title="AboutMe" />
      <section className="about-page">
        <div className="section-center about-center">
          <img
            src={image.localFile.publicURL}
            alt={title}
            className="about-img-svg"
          />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            {/*Iterating through the stack with aliases of item*/}
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
        <div className="about-page-sign">
          <img src={logo} alt="DL logo" />
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  query {
    strapiAboutPage {
      title
      info
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

export default About
