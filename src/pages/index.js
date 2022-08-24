import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
//Index passes the 'data' property then gives it an javascript alias of 'projects'. Then in a return section sets up all the components used
//in the index page like Hero.js, Services.js, Jobs.js Projects.js where
//Once "export const query = graphql" is set up the {data} can be accessed from that query in the function
const IndexPage = ({ data }) => {
  //console.log(data)
  const {
    allStrapiProjects: { nodes: projects },
  } = data
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Jobs />
        <Projects title="Featured Projects" showLink projects={projects} />
      </main>
    </>
  )
}

export const query = graphql`
  query {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        description
        featured
        github
        id
        slug
        title
        tools
        url
        stack {
          id
          title
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
      totalCount
    }
  }
`

export default IndexPage
