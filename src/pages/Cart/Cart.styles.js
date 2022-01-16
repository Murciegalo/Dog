import styled from 'styled-components'

export const Container = styled.div`

`

export const Wrapper = styled.div`
  padding: 20px;
  background: white;
  border-radius: 5px;
`

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 300;
  text-align: center;
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

export const TopButton = styled.button`
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  border: ${props => props.type === 'filled' && 'none'};
  background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
  color: ${props => props.type === 'filled' && 'white'};
`
export const TopTexts = styled.div`
  display: flex;
`
export const Text = styled.div`
  font-size: 20px;
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`

export const Bottom = styled.div`
  display: flex;
  flex: 3;
  margin: 20px;

`
export const Product = styled.div`
  display: flex;
  flex: 3;

`

export const ProductDetail = styled.div`
  display: flex;

`

export const Image = styled.img`
  width: 200px;
`

export const Details = styled.div`
`

export const ProductName = styled.span`
  display: block;
  padding: 10px;
  font-size: 18px;
`

export const ProductId = styled.span`
  display: block;
  padding: 10px;
  font-size: 18px;
`

export const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color}
`

export const ProductSize = styled.span`
  display: block;
  padding: 10px;
  font-size: 18px;
`

export const PriceDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

`
export const ProductAmountContainer = styled.div`
  display: flex;
  aling-items: center;

`

export const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`

export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`

export const Summary = styled.div`
  flex: 1;
  background-color: red;
`

export const Info = styled.div`

`

