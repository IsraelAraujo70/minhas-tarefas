import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  return (
    <Container>
      <p>
        2 tarefas marcadas como : &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {itens.map((tarefa) => (
          <li key={tarefa.titulo}>
            <Tarefa
              id={tarefa.id}
              descricao={tarefa.descricao}
              titulo={tarefa.titulo}
              prioridade={tarefa.prioridade}
              status={tarefa.status}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
