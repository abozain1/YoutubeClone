import { configureStore } from '@reduxjs/toolkit'
import youtubeReducer  from './appStore'

export const store = configureStore({
  reducer: {
    counter: youtubeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch