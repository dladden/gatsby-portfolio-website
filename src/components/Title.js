import React from "react"
// Component which will eliminate code repetition by allowing to
// access the tittle in index or chose default tittle for the project
const Title = ({ title }) => {
  return (
    <div className="section-title">
      <h2>{title || "default tittle"}</h2>
      <div className="underline"></div>
    </div>
  )
}

export default Title
