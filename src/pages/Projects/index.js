import React from 'react'
import {useGlobal} from 'state'

export const Projects = () => {
  const projects = useGlobal('projects')
  console.log(projects)
  return (
    <div>
      Projects Page
      {projects.map(project => (
        <div key={project}>{project}</div>
      ))}
    </div>
  )
}