import styled from 'styled-components'
import { mobile } from '../../responsive'

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column'})}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h1`
`

const Desc = styled.p`
  margin: 20px 0px;
  margin-left: 10px;
`

const SocialContainer = styled.div`
  display: flex;
  margin-left: 10px;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display: 'none'})}
`

const Title = styled.h3`
  margin-bottom: 30px;
  font-weight: 900;
`

const List = styled.ul`
  margin: 0;
  margin-left: 10px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`
const Right = styled.div`
  flex: 1;
  padding: 20px;
`
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`


export { Container, Left, Logo, Desc, SocialContainer, SocialIcon, Center, Title, List, ListItem, Right, ContactItem}