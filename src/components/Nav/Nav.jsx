import { Search } from '@material-ui/icons'
import React from 'react'
import {
  Container,
  Wrapper,
  Left,
  Language,
  SearchContainer,
  Input,
  Center,
  Right
} from './Styles'


const Nav = () => {
  return (
    
    <Container>
      <Wrapper>
        <Left>
          <Language>Sp</Language>
          <SearchContainer>
            <Input />
            <Search />      
          </SearchContainer>
        </Left>
        <Center>Center</Center>
        <Right>Rig</Right>
      </Wrapper>
    </Container>
  )
}

export default Nav
