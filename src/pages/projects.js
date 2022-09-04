import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
//projects page calls on the Projects components which maps through the project.js
//However, in this case the filter for the featured in the query is removed (all projects are shown)
const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects_ },
  },
}) => {
  return (
    <>
      <Seo title="Projects" />
      <main>
        <section className="projects-page">
          <Projects title="All Projects" projects={projects_} />
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  query {
    allStrapiProjects {
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

export default ProjectsPage
