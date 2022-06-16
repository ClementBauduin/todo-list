import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styledComponents from 'styled-components'
import { addTask } from '../redux'


const InputContainer = styledComponents.div`
  background-color: #a4161a;
  padding: 25px;
  border-radius: 0px  0px 15px 15px 

`

const StyledInput = styledComponents.input`
  width: 100%;
  padding:10px 15px 10px 15px;
  background-color:#660708;
  border-radius: 5px;
  border: 2px solid #9d5052;
  color: lightgrey;
  font-size: 1.2rem;
  &:focus {
    border: 2px solid #FF0000;
    box-shadow: 0px 0px 18px #FF0000;
  }
`

const Input = () => {

  const dispatch = useDispatch()
  const [text,setText] = useState("")

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      dispatch(addTask(text))
      setText("")
    }
  }

  return (
    <InputContainer>
        <StyledInput 
        placeholder="Ajouter une tâche"
        onChange={(e) => setText(e.target.value)}
        value={text}
        onKeyPress={(e) => handleSubmit(e)}

         />
    </InputContainer>
  )
}

export default Input