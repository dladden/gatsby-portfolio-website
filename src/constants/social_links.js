import React from "react"
import {
  FaInstagramSquare,
  FaGithubSquare,
  FaLinkedin,
  FaBehanceSquare,
  FaTwitterSquare,
} from "react-icons/fa"
//Social_links are placed into an array. They are iterated in Hero.js and Footer.js components
const data = [
  {
    id: 1,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/dladden",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "www.linkedin.com/in/denys-ladden-b5365512a",
  },
  {
    id: 3,
    icon: <FaBehanceSquare className="social-icon"></FaBehanceSquare>,
    url: "https://www.behance.net/denysladden",
  },
  {
    id: 4,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://www.twitter.com",
  },
  {
    id: 5,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.instagram.com/denysladden",
  },
]

export default data
