import {
  Container,
  Image,
  Info,
  Title,
  Button
} from './Styles.js'

const CatgItem = ({el}) => {
  return (
    <Container>
      <Image src={el.img} />
      <Info>
        <Title>{el.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  )
}

export default CatgItem
