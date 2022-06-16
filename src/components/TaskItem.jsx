import React from 'react'
import { useDispatch } from 'react-redux'
import styledComponents from 'styled-components'
import { toggleTask,deleteTask } from '../redux.js'


const StyledDivSpan = styledComponents.span`
    background-color:#a4161a;
    color:white;
    padding:5px;
    font-size:10px;
    border-radius:5px;
    margin-left:10px;
`

const TaskItem = ({task}) => {

  const dispatch = useDispatch()
    
  return (
    <div>
        <label>
            <input type="checkbox"
            checked={task.done}
            onChange={() => dispatch(toggleTask(task.id))}
            />
            {task.text}    
        </label>
        <StyledDivSpan onClick={() => dispatch(deleteTask(task.id))}>╳</StyledDivSpan>
    </div>
  )
}

export default TaskItem