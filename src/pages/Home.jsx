import Announcement from '../components/Announcements/Announcement'
import Categories from '../components/Categories/Categories'
import Nav from '../components/Nav/Nav'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import Products from '../components/Products/Products'
import Slider from '../components/Slider/Slider'

const Home = () => {
  
  return (
    <div>
      <Announcement />
      <Nav/>
      <Slider />
      <Categories />
      <Products />  
      <NewsLetter />  
    </div>
  )
}

export default Home
