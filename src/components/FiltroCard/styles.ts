import styled from 'styled-components'
import { Props } from '.'

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.activated ? '#1E90FF' : '#a1a1a1')};
  border-radius: 8px;
  background-color: ${(props) => (props.activated ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.activated ? '#1E90FF' : '#5E5E5E')};
`
export const Contador = styled.span`
  font-weight: bold;

  font-size: 24px;
  display: block;
`
export const Label = styled.label`
  font-size: 14px;
`
