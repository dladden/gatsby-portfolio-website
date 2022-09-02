import React from "react"
import { FaCode, FaSketch, FaApple, FaCloud } from "react-icons/fa"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `Front-end development, and a little back-end integration using APIs are all my jam. Content management with CMS implementation and architecture for speed.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `Design in web, web application, UI/UX in native languages while committing to a responsive and optimized product. Wrapped in commitment to modern design.`,
  },
  {
    id: 3,
    icon: <FaApple className="service-icon" />,
    title: "app design",
    text: `Native application development, progressive web application development, and cross-platform. All with a focus on automation and the use of modern frameworks..`,
  },
  {
    id: 4,
    icon: <FaCloud className="service-icon" />,
    title: "Cloud Engineering",
    text: `Virtualization, databases, and security are all aspects of the new age of cloud migration; this is why I strive to be knowledgeable in many cloud platforms and their features.`,
  },
]

export default services
