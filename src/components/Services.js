import React from "react"
import Title from "./Title"
import services from "../constants/services"

// services component will display my services and it will be called on from other pages
const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="Services" />
      <div className="section-center services-center">
        {services.map(service => {
          const { id, icon, title, text } = service
          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
