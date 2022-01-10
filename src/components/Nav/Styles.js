import styled from 'styled-components'

const Container = styled.div`
  height: 60px;
`
const Wrapper = styled.div`
  padding: 10px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Left = styled.div`
  flex:1;
  display: flex;
  align-items: center;
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

`
const Input = styled.input`
  border: none;
`

const Center = styled.div`
  flex:1;
  text-align: center;
  font-size: 40px;
`
const Logo = styled.div`
  font-weight: bold;
`
const Right = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

export { Container, Wrapper, Left, Language, SearchContainer, Input, Center, Logo, Right, MenuItem }