import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import {
  Container,
  Wrapper,
  Left,
  Language,
  SearchContainer,
  Input,
  Center,
  Right,
  Logo,
  MenuItem
} from './Styles'


const Nav = () => {
  return (
    
    <Container>
      <Wrapper>
        <Left>
          <Language>Sp</Language>
          <SearchContainer>
            <Input />
            <Search style={{
              color: "grey",
              fontSize: 16
            }}/>      
          </SearchContainer>
        </Left>
        <Center><Logo>LAMA.</Logo></Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Nav
