import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import * as enums from '../../utils/enums/tarefa'
const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver a Aula 3 da Ebac',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Pagar Ebac',
    descricao: 'Baixar a fatura',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Ir na academia',
    descricao: 'Dia de peito',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  }
]

const ListaDeTarefas = () => {
  return (
    <Container>
      <p>
        2 tarefas marcadas como : &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.titulo}>
            <Tarefa
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
