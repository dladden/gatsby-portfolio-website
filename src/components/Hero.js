import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
//import heroImg from "../assets/images/hero03.png"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>Hi, I'm Denys</h1>
            <h4>DevOps, Web Dev, Fullstack, Cloud Engineering</h4>
            <Link to="/contact" className="btn">
              {" "}
              CONTACT ME{" "}
            </Link>
            <div className="social-links">
              {socialLinks.map(link => {
                return (
                  <a href={link.url} key={link.id} className="social-link">
                    {link.icon}
                  </a>
                )
              })}
            </div>
          </div>
        </article>
        <StaticImage
          src="../assets/images/hero03.png"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
        {/* <img src={heroImg} alt="portfolio" className="hero-img-svg" /> */}
      </section>
    </header>
  )
}

export default Hero
