import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover } from '../../store/reducers/tarefas'
import { Tarefa as TarefaType } from '../../models/Tarefa'

type Props = TarefaType

const Tarefa = ({ prioridade, descricao, status, titulo, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <S.Card>
      <S.Title>{titulo}</S.Title>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao value={descricao} />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelar onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
