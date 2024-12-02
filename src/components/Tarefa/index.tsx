import * as S from './styles'

const Tarefa = () => {
  return (
    <S.Card>
      <S.Title>Nome da Tarefa</S.Title>
      <S.Tag>Importante</S.Tag>
      <S.Tag>Pendente</S.Tag>
      <S.Descricao />
      <S.BarraAcoes>
        <S.Botao>Editar</S.Botao>
        <S.Botao>Remover</S.Botao>
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
