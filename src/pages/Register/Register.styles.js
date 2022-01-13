import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.4)
  ), 
  url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background: white;
  border-radius: 5px;
`

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 300;
  text-align: center;
`

export const Form = styled.form`
  margin: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`

export const Input = styled.input`
  width: 90%;
  margin: 10px auto;
  padding: 10px;
  font-size: 20px;

`
export const Agreement = styled.span`
  width: 95%;
  font-size: 15px;
  margin: 0 auto;
  padding: 20px;
`
export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  font-size: 20px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  margin: 10px auto;
`

export const Link = styled.a`
  font-size: 18px;
  text-decoration: underline;
  cursor: pointer;

`
