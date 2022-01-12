import Nav from '../../components/Nav/Nav'
import Announcements from '../../components/Announcements/Announcement'
import Footer from '../../components/Footer/Footer'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import { Container,
  Title, 
  Image, 
  ImgContainer, 
  InfoContainer, 
  Wrapper, 
  Desc, 
  Price,
  FilterContainer,
  FilterTitle,
  Filter,
  FilterColor,
  FilterSize,
  FilterSizeOption 
} from './OneProduct.styles'


const OneProduct = () => {
  return (
    <Container>
      <Nav />
      <Announcements />
      <Wrapper>
        <ImgContainer>
          <Image src='https://i.ibb.co/S6qMxwr/jean.jpg' />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione necessitatibus iusto,
            quaerat aut alias corrupti saepe temporibus nostrum optio molestias vero dolorum veritatis 
            possimus blanditiis vitae assumenda eum corporis. Ratione?
            Corporis, perferendis quae. Incidunt repellendus ipsam numquam nesciunt temporibus dolorum
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color='black' />
              <FilterColor color='darkblue' />
              <FilterColor color='gray' />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  )
}

export default OneProduct
