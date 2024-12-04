import { configureStore } from '@reduxjs/toolkit'
import tarefaReducer from './reducers/tarefas'

const store = configureStore({
  reducer: {
    tarefas: tarefaReducer
  }
})
export default store
export type RootReducer = ReturnType<typeof store.getState>
