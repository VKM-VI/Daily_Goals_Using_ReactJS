import React from 'react'

const Task = ({title,description,deleteTask,ind}) => {
  return (
    <div className='task'>
      <div>
        <p>{title}</p>
        <span>{description}</span>
      </div>
      <button onClick={()=>deleteTask(ind)}>-</button>
    </div>
  )
}

export default Task
