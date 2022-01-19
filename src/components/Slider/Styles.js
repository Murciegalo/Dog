import styled from 'styled-components'
import { mobile } from '../../responsive'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ height: '200px'})}
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top:0;
  bottom: 0;
  left: ${props => props.direction === "left" && "10px" };
  right: ${props => props.direction === "right" && "10px" };
  margin: auto;
  cursor: pointer;
  opacity: 0.7;
  z-index: 4;
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all .6s ease;
  transform: translateX(
    ${props => props.slideIndex * -100}vw
  );
`
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;  
  align-items: center;
  background-color: ${ props => props.bg};
  ${mobile({ height: '200px'})}
`
const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  ${mobile({ height: '200px'})}
  ${mobile({ alignItems: 'center'})}
`
const Image = styled.img`
  ${mobile({ height: '180px'})}
`
const InfoContainer = styled.div`
  flex: 1;
  width: 50%;
  padding: 50px;
  ${mobile({ display: 'none'})}
`
const Title = styled.h1`
  font-size: 70px;
`
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500px;
  letter-spacing: 3px;
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`

export { Container, Arrow, Wrapper, Slide, ImgContainer, Image, InfoContainer, Title, Desc, Button }