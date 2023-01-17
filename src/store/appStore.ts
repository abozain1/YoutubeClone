import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface dataState {
  loading: boolean;
  nextPageToken: string;

  pageInfo: {
    totalResults: number;
  };
  items: object[];
}

const initialState: dataState = {
  loading:false,
  nextPageToken: "",

  pageInfo: {
    totalResults: 0,
  },
  items: [],
};

export const youtubeSlice = createSlice({
  name: "youtube",
  initialState,
  reducers: {
    loadMore: (state, action: PayloadAction<dataState>) => {
      const combinedItems = [...state.items, ...action.payload.items];
      state.items = combinedItems;
      state.nextPageToken = action.payload.nextPageToken;
    },
    loadData: (state, action: PayloadAction<dataState>) => {
      state.items = action.payload.items;
      state.pageInfo = action.payload.pageInfo;
      state.nextPageToken = action.payload.nextPageToken;
    },
    changeLoadingState: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
     
    },
  },
});

export const { loadData, loadMore,changeLoadingState } = youtubeSlice.actions;

export default youtubeSlice.reducer;
