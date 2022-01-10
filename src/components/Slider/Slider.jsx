import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import {
  Container,
  Arrow,
  Wrapper,
  Slide,
  ImgContainer,
  Image,
  InfoContainer
} from './Styles'

const Slider = () => {
  return (
    <Container>
      <Arrow direction = "left">
        <ArrowLeftOutlined />  
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image src="https://www.newshub.co.nz/home/lifestyle/2019/11/dog-years-are-a-myth-2-year-old-dogs-already-middle-aged-scientists/_jcr_content/par/video/image.dynimg.1280.q75.jpg/v1574572358818/GETTY-labrador-puppy-1120.jpg" />
          </ImgContainer>
          <InfoContainer>

          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction = "right">
        <ArrowRightOutlined /> 
      </Arrow>
    </Container>
  )
}

export default Slider
