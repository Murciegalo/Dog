import Nav from '../../components/Nav/Nav'
import Announcement from '../../components/Announcements/Announcement'
import Footer from '../../components/Footer/Footer'
import { 
  Container, 
  Wrapper,
  Title,
  Top,
  TopButton,
  TopTexts,
  Text,
  Bottom,
  Info,
  Summary
} from "./Cart.styles"


const Cart = () => {
  return (
    <Container>
      <Nav />
      <Announcement />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopButton>Continue Shooping</TopButton>
          <TopTexts>
            <Text>Shopping Bag(2)</Text>
            <Text>Your Wishlist(0)</Text>
          </TopTexts>
          <TopButton type='filled'>Checkout</TopButton>
        </Top>
        <Bottom>
          <Info>Info</Info>
          <Summary>Summary</Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
