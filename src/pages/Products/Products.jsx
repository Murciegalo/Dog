import {} from '@material-ui/icons'
import React from 'react'
import Announcement from '../../components/Announcements/Announcement'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Nav/Nav'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import ProductsList from '../../components/ProductsList/ProductsList'
import { Container, Filter, FilterContainer, FilterText, Option, Select, Title } from './Products.styles'

const Products = () => {
  return (
    <Container>
      <Nav />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option> 
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option> 
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
            <Select>
              <Option selected>Newest</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <ProductsList />
      <NewsLetter />
      <Footer />
    </Container>
  )
}

export default Products
