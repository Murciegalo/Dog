import {css} from 'styled-components'

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px){
      ${props}
    }
  `
}

export const mobileBig = (props) => {
  return css`
    @media only screen and (max-width: 420px){
      ${props}
    }
  `
}

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 810px){
      ${props}
    }
  `
}