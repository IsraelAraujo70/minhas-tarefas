import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BotaoSalvar } from '../../components/Tarefa/styles'
import { Campo, MainContainer, Titulo } from '../../styles'
import { Form, Opcoes } from './styles'
import * as enums from '../../utils/enums/tarefa'
import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    dispatch(
      cadastrar({
        titulo,
        prioridade,
        descricao,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }
  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          type="text"
          placeholder="Título"
        />
        <Campo
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          as="textarea"
          placeholder="Descrição"
        />
        <Opcoes>
          <p>Prioridade</p>
          <input
            value={enums.Prioridade.URGENTE}
            type="radio"
            id="urgente"
            name="prioridade"
            onChange={(evento) =>
              setPrioridade(evento.target.value as enums.Prioridade)
            }
            defaultChecked={prioridade === enums.Prioridade.NORMAL}
          />
          <label htmlFor="urgente">Urgente</label>
          <input
            value={enums.Prioridade.IMPORTANTE}
            type="radio"
            id="importante"
            name="prioridade"
            onChange={(evento) =>
              setPrioridade(evento.target.value as enums.Prioridade)
            }
            defaultChecked={prioridade === enums.Prioridade.NORMAL}
          />
          <label htmlFor="importante">Importante</label>
          <input
            value={enums.Prioridade.NORMAL}
            type="radio"
            id="normal"
            name="prioridade"
            onChange={(evento) =>
              setPrioridade(evento.target.value as enums.Prioridade)
            }
            defaultChecked={prioridade === enums.Prioridade.NORMAL}
          />
          <label htmlFor="normal">Normal</label>
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
