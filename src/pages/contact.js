import React from "react"
import Seo from "../components/Seo"
import plant from "../assets/images/my-plant.png"
const contact = () => {
  return (
    <>
      <Seo title="Connect" />
      <section className="contact-page">
        <div className="plant">
          <img className="plant" src={plant} alt="DL logo" />
        </div>
        <article className="contact-form">
          <h3>Contact Me</h3>
          <form action="/" method="POST" data-netlify="true" name="contact">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="name"
              />
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="email"
              />
              <textarea
                className="form-control"
                rows="5"
                type="text"
                name="message"
                placeholder="message"
              />
            </div>
            <button type="submit" className="submit-btn btn">
              Submit Message
            </button>
          </form>
        </article>
      </section>
    </>
  )
}

export default contact
