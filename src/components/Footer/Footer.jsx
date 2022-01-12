import { Copyright, Instagram, Mail, Room, Twitter } from '@material-ui/icons'
import { 
  Container,
  Left, 
  Logo, 
  Desc, 
  SocialContainer, 
  SocialIcon,
  Center, 
  Title,
  List,
  ListItem,
  Right,
  ContactItem
} from './Footer.styles'

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Maiores qui ipsa. Aut, labore aspernatur?
          Atque, totam. Vitae excepturi aliquam porrout eum corporis velit nesci
        </Desc>
        <SocialContainer>
          <SocialIcon color="#E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>    
      <Center>
        <Title>Useful links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>  
          <ListItem>Male</ListItem>
          <ListItem>Females</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Pet in the way</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room /> Ruda 134, Madrid 28005</ContactItem>
        <ContactItem><Mail /> ayuda@hotmail.es </ContactItem>
        <ContactItem><Copyright /> All rights reserved. 2022 </ContactItem>
      </Right>
    </Container>
  )
}

export default Footer
