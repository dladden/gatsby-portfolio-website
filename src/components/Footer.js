import React from "react"
import socialLinks from "../constants/social_links"
//Footer component iterates through the links array in social_links.js
//This component is then used in global component Layout.js which is set up with Gatsby Browser APIs
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-links social-links">
          {socialLinks.map(link => {
            return (
              <a href={link.url} key={link.id} className="social-link">
                {link.icon}
              </a>
            )
          })}
        </div>
        <h4>
          copyright&copy; {new Date().getFullYear()}
          <span> WebDev </span>all rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
