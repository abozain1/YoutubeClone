import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  data: object[]
}

const initialState: CounterState = {
  data: [],
}

export const youtubeSlice = createSlice({
  name: 'youtube',
  initialState,
  reducers: {
   
  },
})

export const {  } = youtubeSlice.actions

export default youtubeSlice.reducer