import React from 'react'

const date  = new Date().getDate()

const ProjectList = () => {
  return (
    <div className="project-list section">

      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">Project title</span>
          <p>Posted by Zafer</p>
          <p className="grey-text">date</p>
        </div>
      </div>

      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">Project title</span>
          <p>Posted by Zafer</p>
          <p className="grey-text">date</p>
        </div>
      </div>

      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">Project title</span>
          <p>Posted by Zafer</p>
          <p className="grey-text">date</p>
        </div>
      </div>
      
    </div>
  )
}

export default ProjectList;