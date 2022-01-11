import { FavoriteBorderOutlined, SearchRounded, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { 
  Container,
  Circle,
  Image,
  Info,
  Icon
} from './Styles'

const Product = ({el}) => {
  return (
    <Container>
      <Circle />
      <Image src={el.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchRounded />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>   
    </Container>
  )
}

export default Product
