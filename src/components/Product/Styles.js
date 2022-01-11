import styled from 'styled-components'

const Container = styled.div`
  flex:1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5fbfd;
  position: relative;
`

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`
const Image = styled.img`
  height: 75%;
  z-index: 2;
`
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: gray;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Icon = styled.div`
  padding:20px;
  display: flex;
`

export { Container, Circle, Image, Info, Icon }