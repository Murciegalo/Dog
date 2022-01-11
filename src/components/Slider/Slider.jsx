import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import {useState} from 'react'
import {slideItems} from '../../data'
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
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = direction => {
    if(direction === 'left'){
      setSlideIndex( slideIndex > 0 ? slideIndex - 1 : slideItems.length - 1)
    }
    else{
      setSlideIndex( slideIndex < slideItems.length - 1 ? slideIndex + 1 : 0 )
    }
  }

  return (
    <Container>
      <Arrow direction = "left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />  
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {slideItems.map(el => (
          <Slide bg={el.bg} key={el.id}>
            <ImgContainer>
              <Image src={el.img}/>
            </ImgContainer>
            <InfoContainer>
              <Title>{el.title}</Title>
              <Desc>{el.desc}</Desc>
              <Button>SHOW ME</Button>
            </InfoContainer>
        </Slide>
        ))}
      </Wrapper>
      <Arrow direction = "right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined /> 
      </Arrow>
    </Container>
  )
}

export default Slider
