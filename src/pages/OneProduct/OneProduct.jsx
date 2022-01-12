import Nav from '../../components/Nav/Nav'
import Announcements from '../../components/Announcements/Announcement'
import Footer from '../../components/Footer/Footer'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import { Container } from './OneProduct.styles'

const OneProduct = () => {
  return (
    <Container>
      <Nav />
      <Announcements />
      
      <NewsLetter />
      <Footer />
    </Container>
  )
}

export default OneProduct
