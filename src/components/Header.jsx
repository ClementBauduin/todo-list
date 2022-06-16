import React from 'react'
import { useSelector } from 'react-redux'
import styledComponents from 'styled-components'

const HeaderContainer = styledComponents.div`
  background-color: #a4161a;
  padding: 25px;
  border-radius: 15px 15px 0px 0px;
`

const Header = () => {
  const task = useSelector(state => state.todo)

  return (
    <HeaderContainer>
      <h1 className='h1-title'>React Todo List</h1>
      <p className='p-task-number'>Tâches à faire: {task.length}</p>
    </HeaderContainer>
  )
}

export default Header