import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FaCircle } from "react-icons/fa"
import socialLinks from "../constants/social_links"
//Footer component iterates through the links array in social_links.js
//This component is then used in global component Layout.js which is set up with Gatsby Browser APIs

const query = graphql`
  query {
    strapiFooter {
      availability
      info
      email
    }
  }
`

const Footer = () => {
  const data = useStaticQuery(query)
  //console.log(data)
  const {
    strapiFooter: { availability, info, email },
  } = data

  return (
    <footer className="footer">
      <div>
        <div className="footer-info section-center">
          <h4>
            <FaCircle className="footer-icon"></FaCircle>
            <span> {availability} </span>
          </h4>
          <h5>{info}</h5>
        </div>
        <div className="section-center ">
          <button
            className="btn"
            onClick={() => (window.location = "mailto:denysladden@outlook.com")}
          >
            {email}
          </button>
        </div>
        <div className="footer-links social-links">
          {socialLinks.map(link => {
            return (
              <a href={link.url} key={link.id} className="social-link">
                {link.icon}
              </a>
            )
          })}
        </div>
        <div className="center-btn">
          <h4>&copy;/{new Date().getFullYear()}</h4>
        </div>
      </div>
    </footer>
  )
}

export default Footer
