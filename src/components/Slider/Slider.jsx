import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import {
  Container,
  Arrow,
  Wrapper,
  Slide,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Button
} from './Styles'

const Slider = () => {

  const handleClick = direction => {

  }

  return (
    <Container>
      <Arrow direction = "left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />  
      </Arrow>
      <Wrapper>
        <Slide bg="#f5fafd">
          <ImgContainer>
            <Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.uFogVrXWP3ahmi3BoUfEMwHaJ4%26pid%3DApi&f=1" />
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Desc>DON'T COMPROMISE ON STYLE, GET 30% OFF ON NEW ARRIVALS</Desc>
            <Button>SHOW ME</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="#fcf1ed">
          <ImgContainer>
            <Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.uFogVrXWP3ahmi3BoUfEMwHaJ4%26pid%3DApi&f=1" />
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Desc>NEW YEAR dresses, GET 20% OFF ON 2nd unit</Desc>
            <Button>SHOW ME</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction = "right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined /> 
      </Arrow>
    </Container>
  )
}

export default Slider
