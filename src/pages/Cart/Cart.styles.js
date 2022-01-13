import styled from 'styled-components'

export const Container = styled.div`

`

export const Wrapper = styled.div`
  padding: 20px;
  background: white;
  border-radius: 5px;
`

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 300;
  text-align: center;
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

export const TopButton = styled.button`
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  border: ${props => props.type === 'filled' && 'none'};
  background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
  color: ${props => props.type === 'filled' && 'white'};
`
export const TopTexts = styled.div`
  display: flex;
`
export const Text = styled.div`
  font-size: 20px;
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Info = styled.div`
  flex: 3;
`

export const Summary = styled.div`
  flex: 1;
  background-color: red;
`

