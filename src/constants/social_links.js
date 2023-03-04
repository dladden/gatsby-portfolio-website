import React from "react"
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaBehanceSquare,
} from "react-icons/fa"
//Social_links are placed into an array. They are iterated in Hero.js and Footer.js components
const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/profile.php?id=100090632798905",
  },
  {
    id: 2,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/dladden",
  },
  {
    id: 3,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/denys-ladden",
  },
  {
    id: 4,
    icon: <FaBehanceSquare className="social-icon"></FaBehanceSquare>,
    url: "https://www.behance.net/denysladden",
  },
]

export default data
