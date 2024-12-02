import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => {
  return (
    <S.Aside>
      <div>
        <S.Campo type="text" placeholder="buscar" />
        <S.Filtros>
          <FiltroCard description="pendentes" counter={1} />
          <FiltroCard description="concluídas" counter={2} />
          <FiltroCard description="urgentes" counter={3} />
          <FiltroCard description="importantes" counter={4} />
          <FiltroCard description="normal" counter={5} />
          <FiltroCard activated description="todas" counter={6} />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
