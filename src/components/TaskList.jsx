import React from 'react'
import { useSelector } from 'react-redux'
import styledComponents from 'styled-components'
import TaskItem from "./TaskItem"

const TaskListContainer = styledComponents.div`
    background-color: #ba181b;
    padding: 25px;
    line-height: 2.2rem;
`

const TaskList = () => {

  const task = useSelector(state => state.todo)

  return (
    <TaskListContainer>
        {task.map(t => ( 
          <TaskItem key={t.id} task={t}></TaskItem>
        ))}
    </TaskListContainer>
  )
}

export default TaskList