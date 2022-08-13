import React from "react"
import logo from "../assets/images/portfolio-logo-01.svg"
import { FaAlignJustify } from "react-icons/fa"
import pageLinks from "../constants/links"
import { Link } from "gatsby"

//toggle button for phone view
//setting the links as constants (constants/links.js) to implement changes quickly!
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="DL logo" />
          <button type="button" className="toggle-btn">
            <FaAlignJustify />
          </button>
        </div>
        <div className="nav-links">
          {pageLinks.map(link => {
            return (
              <Link key={link.id} to={link.url}>
                {link.text}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
