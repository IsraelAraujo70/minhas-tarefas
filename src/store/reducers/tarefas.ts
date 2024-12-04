import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Tarefa } from '../../models/Tarefa'
import * as enums from '../../utils/enums/tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: {
    itens: [
      new Tarefa(
        'Estudar React',
        enums.Prioridade.IMPORTANTE,
        enums.Status.PENDENTE,
        'Estudar sobre os principais recursos do React',
        1
      ),
      new Tarefa(
        'Estudar Redux',
        enums.Prioridade.NORMAL,
        enums.Status.CONCLUIDA,
        'Estudar sobre a biblioteca Redux',
        2
      ),
      new Tarefa(
        'Estudar TypeScript',
        enums.Prioridade.URGENTE,
        enums.Status.PENDENTE,
        'Estudar sobre a biblioteca TypeScript',
        3
      )
    ]
  },
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})
export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer
