import React from 'react'
import Projects from './Projects'
import Todo from './Todo'

const ProjectsTodo = () => {
  return (
    <div className='flex flex-row space-x-3 self-center justify-center w-full'>
        <Todo />
        <Projects />
    </div>
  )
}

export default ProjectsTodo