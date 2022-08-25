import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <>
      <main className="error-page">
        <div className="error-container">
          <h1>OPS something went wrong</h1>
          <Link to="/" className="btn">
            Home Page
          </Link>
        </div>
      </main>
    </>
  )
}

export default Error
