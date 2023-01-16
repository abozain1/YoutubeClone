import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  data: object[];
  nextPageToken: string;
}

const initialState: CounterState = {
  data: [],
  nextPageToken: "",
};

export const youtubeSlice = createSlice({
  name: "youtube",
  initialState,
  reducers: {
    loadData: (state, action: PayloadAction<{items:[],nextPageToken:string}>) => {
      state.data = [...state.data, ...action.payload.items];
      state.nextPageToken=action.payload.nextPageToken
    },
  },
});

export const { loadData } = youtubeSlice.actions;

export default youtubeSlice.reducer;
