import React from "react"
import Seo from "../components/Seo"
const contact = () => {
  return (
    <>
      <section className="contact-page">
        <article className="contact-form">
          <h3>Contact Me</h3>
          <form>
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
