import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

//GraphQl query accessed using a Strapi plug in to generate api access
const query = graphql`
  query {
    allStrapiExperiences(sort: { fields: created_at, order: DESC }) {
      nodes {
        position
        company
        date
        desc {
          id
          name
        }
      }
    }
  }
`
//The Experience component accesses the graphQL query and displays the values as an array and iterating through
//the description values. Finally, it checks to see which company is selected for highlited btn. A sort querry is set
//fields: created_at. order: DESC
const Jobs = () => {
  const data = useStaticQuery(query) //querying with GraphQL at build time stored in data object
  //console.log(data)
  const {
    allStrapiExperiences: { nodes: experiences },
  } = data //data provides allStrapiExperiences query from nodes with alises 'experiences'
  //React Use-State hook for the job selection
  const [value, setValue] = React.useState(0)
  const { position, company, date, desc } = experiences[value] //storing the query data in experiences array
  return (
    <section className="section jobs">
      <Title title="Experience" />
      {/* JOB CONTAINER  */}
      <div className="jobs-center">
        {/* BTN CONTAINER  */}
        <div className="btn-container">
          {experiences.map((item, index) => {
            return (
              <button
                key={index}
                className={index === value ? "job-btn active-btn" : "job-btn"}
                onClick={() => setValue(index)}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* JOB INFO  */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>

      <Link to="/about" className="btn center-btn">
        More Info
      </Link>
    </section>
  )
}

export default Jobs
