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
  margin: ${props => props.type === 'filled' && '20px'};
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
  letter-spacing: .1em;
  cursor: pointer;
  margin: 0 10px;
`

export const Bottom = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
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
  padding: 10px 20px;
  font-size: 18px;
`

export const ProductId = styled.span`
  display: block;
  padding: 10px 20px;
  font-size: 18px;
`

export const ProductColor = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  margin-left: 20px;
  border-radius: 50%;
  background-color: ${props => props.color}
`

export const ProductSize = styled.span`
  display: block;
  padding: 10px 20px;
  font-size: 18px;
`

export const PriceDetail = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  border-left: 2px solid #eee;
`
export const ProductAmountContainer = styled.div`
  padding: 2px;
  border-radius: 5px;

  & svg{
    height: 1.2em;
    width: 1.2em;
    cursor: pointer;
    :hover{
      color: teal;
      transform: scaleX(1.2);
    }
  }
`

export const ProductAmount = styled.div`
  font-size: 24px;
  text-align: center;
`

export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`

export const Hr = styled.div`
  width: 90%;
  margin: 10px;
  border: none;
  border-bottom: 2px solid #eee;
`

export const Summary = styled.div`
  flex: 1;
  border-left: 2px solid #eee;
  padding: 20px;
`

export const SumItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin: 5px 0;
  font-size: ${props => props.type === 'total' && '22px'};
  font-weight: ${props => props.type === 'total' && 'bold'};
  margin-top: ${props => props.type === 'total' && '25px'};
  color: ${props => props.type === 'total' && 'teal'};
`

export const SumItemText = styled.div`
`

export const SumItemPrice = styled.div`
`
