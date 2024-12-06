import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { Campo } from '../../styles'
import { RootReducer } from '../../store'
import * as enums from '../../utils/enums/tarefa'
import { alteraTermo } from '../../store/reducers/filtro'
import { Botao } from '../../components/Tarefa/styles'

type Props = {
  mostraFiltros: boolean
}

const BarraLateral = ({ mostraFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        {mostraFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="buscar"
              value={termo}
              onChange={(e) => dispatch(alteraTermo(e.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Status.PENDENTE}
                criterio="status"
                description="pendentes"
              />
              <FiltroCard
                valor={enums.Status.CONCLUIDA}
                criterio="status"
                description="concluídas"
              />
              <FiltroCard
                valor={enums.Prioridade.URGENTE}
                criterio="prioridade"
                description="urgentes"
              />
              <FiltroCard
                valor={enums.Prioridade.IMPORTANTE}
                criterio="prioridade"
                description="importantes"
              />
              <FiltroCard
                valor={enums.Prioridade.NORMAL}
                criterio="prioridade"
                description="normal"
              />
              <FiltroCard criterio="todas" description="todas" />
            </S.Filtros>
          </>
        ) : (
          <>
            <Botao type="button" onClick={() => navigate('/')}>
              Voltar a lista de tarefas
            </Botao>
          </>
        )}
      </div>
    </S.Aside>
  )
}
export default BarraLateral
