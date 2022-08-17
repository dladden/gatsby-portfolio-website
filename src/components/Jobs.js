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
//p
const Jobs = () => {
  const data = useStaticQuery(query)
  //console.log(data)
  const {
    allStrapiExperiences: { nodes: experiences },
  } = data //storing query in data
  //React use-state hook for the job selection
  const [value, setValue] = React.useState(0)
  const { position, company, date, desc } = experiences[value]
  return (
    <section className="section jobs">
      <Title title="Experience" />
      <div className="jobs-center">
        {/* btn container  */}
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
        {/* job info  */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p classNme="job-date">{date}</p>
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
