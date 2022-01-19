import styled from 'styled-components'
import { mobile } from '../../responsive'

const Container = styled.div`
  height: 60px;
  ${mobile({height: '45px'})}
`
const Wrapper = styled.div`
  padding: 10px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding: '10px 5px'})}
`
const Left = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  ${mobile({display: 'none'})}
`
const Language = styled.span`
  font-size: 14;
  cursor: pointer;
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 5px;
  ${mobile({marginLeft: '0px'})}

`
const Input = styled.input`
  border: none;
  ${mobile({width: '50px'})}
`

const Center = styled.div`
  flex:1;
  text-align: center;
  font-size: 40px;
`
const Logo = styled.div`
  font-weight: bold;
  ${mobile({fontSize: '24px'})}
`
const Right = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({justifyContent: 'flex-start'})}
  ${mobile({flex: '2'})}
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({marginLeft: '8px'})}

`

export { Container, Wrapper, Left, Language, SearchContainer, Input, Center, Logo, Right, MenuItem }