import {popularProducts} from '../../data'
import { Container } from './Styles'
import Product from '../Product/Product'

const Products = () => {
  return (
    <Container>
      {popularProducts.map(el => (
        <Product el={el} key={el.id}/>
      ))}
    </Container>
  )
}

export default Products
