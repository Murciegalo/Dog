import { Agreement, Button, Container, Form, Input, Link, Title, Wrapper } from "./Register.styles"

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign Up</Title>
        <Form>
          <Input placeholder = 'email' />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            <b>*</b> By creating an account, I give my consent to the processing of my personal data 
            in accordance to our <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>Sign Up</Button>
          <Agreement>Already have an account?<Link> Login</Link></Agreement>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
