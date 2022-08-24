import React from "react"
//Project Template has access to the page Context inheritanly via the prop pageContext
//This allows access to the tittle which is passed
//This title is then accessed
const ProjectTemplate = ({ pageContext: { title } }) => {
  return (
    <div>
      <h4>{title}</h4>
    </div>
  )
}

export default ProjectTemplate
