import * as S from './styles'

export type Props = {
  activated?: boolean
}

const FiltroCard = (props: Props) => {
  return (
    <S.Card activated={props.activated}>
      <S.Contador>3</S.Contador>
      <S.Label>pendentes</S.Label>
    </S.Card>
  )
}

export default FiltroCard
