import styled from 'styled-components'

const Container = styled.div`
  height:60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 60px;
  margin: 15px;
`

const Description = styled.div`
  font-size: 24px;
  font-weight: bolder;
  margin: 15px;
`

const InputContainer = styled.div`
  width: 30%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: none;
  margin: 10px;
`

const Input = styled.input`
  border: none;
  border-bottom: 3px solid lightgray;
  border-left: 3px solid lightgray;
  flex: 5;
  font-size: 18px;
  font-weight: bolder;
  padding: 5px;
  &:focus{
    font-size: 0px;
  }
`

const Button = styled.button`
  flex: 1;
  border: none;
  cursor: pointer;
  background-color: teal;
  color: white;
  border-radius: 5%;
  &:hover {
    transform: scale(1.1);
  }
`

export { Container, Title, Description, InputContainer, Input, Button }