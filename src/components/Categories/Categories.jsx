import { categories } from '../../data.js'
import CategItem from '../CategItem/CatgItem'
import {Container} from './Styles.js'

const Categories = () => {
  return (
    <Container>
      {categories.map(el => (
        <CategItem  el={el} key={el.id}/>
      ))}
    </Container>
  )
}

export default Categories
