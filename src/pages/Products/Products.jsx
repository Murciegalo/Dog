import React from 'react'
import Announcement from '../../components/Announcements/Announcement'
import Nav from '../../components/Nav/Nav'
import { Container, Filter, FilterContainer, Title } from './Products.styles'

const Products = () => {
  return (
    <Container>
      <Nav />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>Filter 1</Filter>
        <Filter>Filter 2</Filter>
      </FilterContainer>
    </Container>
  )
}

export default Products
