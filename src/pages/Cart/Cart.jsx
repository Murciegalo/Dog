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
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductColor,
  ProductSize,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Hr,
  Summary
} from "./Cart.styles"
import { Add, Remove } from '@material-ui/icons'


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
          <Product>
            <ProductDetail>
              <Image src='https://static.highsnobiety.com/thumbor/WeSY61IKVaOCFMO-NNUlrysjAnk=/1600x1067/static.highsnobiety.com/wp-content/uploads/2019/03/14131455/iceberg-motorsport-sneakers-ss19-07.jpg' />
              <Details>
                <ProductName><b>Product:</b> Jhon Doe Shoes</ProductName>
                <ProductId><b>ID:</b> 112255663318</ProductId>
                <ProductColor color='black'/>
                <ProductSize><b>Size:</b> 46.5</ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductAmountContainer>
                <Add />
                <ProductAmount>2</ProductAmount>
                <Remove />
              </ProductAmountContainer>
              <ProductPrice>$ 300</ProductPrice>
            </PriceDetail>
          <Summary>Summary</Summary>
          </Product>
          <Hr color='#eee'/>
          <Product>
            <ProductDetail>
              <Image src='https://static.highsnobiety.com/thumbor/WeSY61IKVaOCFMO-NNUlrysjAnk=/1600x1067/static.highsnobiety.com/wp-content/uploads/2019/03/14131455/iceberg-motorsport-sneakers-ss19-07.jpg' />
              <Details>
                <ProductName><b>Product:</b> Jhon Doe Shoes</ProductName>
                <ProductId><b>ID:</b> 112255663318</ProductId>
                <ProductColor color='black'/>
                <ProductSize><b>Size:</b> 46.5</ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductAmountContainer>
                <Add />
                <ProductAmount>2</ProductAmount>
                <Remove />
              </ProductAmountContainer>
              <ProductPrice>$ 300</ProductPrice>
            </PriceDetail>
            <Summary>Summary</Summary>
          </Product>
          
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
