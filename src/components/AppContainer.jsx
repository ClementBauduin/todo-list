import React from 'react'
import styledComponents from 'styled-components'

const AppContainer = styledComponents.div`
  background-color:#a4161a;
  margin:100px auto;
  border-radius: 15px 15px 0 0;
  padding: 25px;
  width:45vw;

`

const Container = ({children}) => {
  return (
    <AppContainer className='test'>{children}</AppContainer>
  )
}

export default Container