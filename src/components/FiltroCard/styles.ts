import styled from 'styled-components'

type Props = {
  activated: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.activated ? '#1E90FF' : '#a1a1a1')};
  border-radius: 8px;
  background-color: ${(props) => (props.activated ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.activated ? '#1E90FF' : '#5E5E5E')};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.98);
  }
`
export const Contador = styled.span`
  font-weight: bold;

  font-size: 24px;
  display: block;
`
export const Label = styled.label`
  font-size: 14px;
`
