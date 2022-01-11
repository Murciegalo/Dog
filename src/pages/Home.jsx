import Announcement from '../components/Announcements/Announcement'
import Categories from '../components/Categories/Categories'
import Nav from '../components/Nav/Nav'
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
    </div>
  )
}

export default Home
