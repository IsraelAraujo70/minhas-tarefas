import styled from 'styled-components'
import _var from '../../styles/var'

import * as enums from '../../utils/enums/tarefa'
type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}
function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'status') {
    if (props.status === enums.Status.CONCLUIDA) return _var.verde
    if (props.status === enums.Status.PENDENTE) return _var.amarelo
  } else if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE) return _var.vermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE) return _var.amarelo2
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Tag = styled.span<TagProps>`
  display: inline-block;
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
`

export const Descricao = styled.textarea`
  display: block;
  width: 100%;
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: monospace;
  margin-top: 16px;
  margin-bottom: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: solid 1px #000;
  padding-top: 16px;
`

export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${_var.verde};
`

export const BotaoCancelar = styled(Botao)`
  background-color: ${_var.vermelho};
`

export const BotaoRemover = styled(Botao)`
  background-color: ${_var.vermelho};
`
