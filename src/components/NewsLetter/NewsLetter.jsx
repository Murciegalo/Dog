import { Send } from '@material-ui/icons'
import React from 'react'
import {
  Container,
  Title,
  Description,
  InputContainer,
  Input,
  Button
} from './NewsLetter.styles'


const NewsLetter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Description>Get weekly updates about your favourite clothes</Description>
      <InputContainer>  
        <Input placeholder='Please input your email'/>
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default NewsLetter
