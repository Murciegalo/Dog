import React from 'react'
import { Agreement, Button, Container, Form, Input, Link, Title, Wrapper } from "./Login.styles"

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form>
          <Input placeholder = 'email' />
          <Input placeholder="Password" />
          <Agreement>Forgot your password? <Link>Click Here</Link></Agreement>
          <Button>Sign Up</Button>
          <Agreement>Don't have an account? <Link>Register</Link></Agreement>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
