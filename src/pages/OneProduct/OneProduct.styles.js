import styled from 'styled-components'

export const Container = styled.div`

`
export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`
export const ImgContainer = styled.div`
  flex: 1;
`
export const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`
export const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`
export const Title = styled.h1`
  
`
export const Desc = styled.p`
  margin: 20px 0;
`
export const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`
export const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`
export const Filter = styled.div`
  display: flex;
  align-items: center;
`
export const FilterTitle = styled.div`
  font-size: 20px;
  margin: 10px;
`
export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0 5px;
  cursor: pointer;
`
export const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  background: transparent;
  border: none;
  border-left: 3px solid antiquewhite;
  border-bottom: 3px solid antiquewhite;
  font-size: 16px;
`
export const FilterSizeOption = styled.option`

`
export const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65%;
`
export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: bolder;
  margin: 0 10px;
`
export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #f8f4f4;
  }
`