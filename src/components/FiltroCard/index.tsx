import * as S from './styles'

export type Props = {
  activated?: boolean
  counter: number
  description: string
}

const FiltroCard = ({ activated, counter, description }: Props) => {
  return (
    <S.Card activated={activated}>
      <S.Contador>{counter}</S.Contador>
      <S.Label>{description}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
