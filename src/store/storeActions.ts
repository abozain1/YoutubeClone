import axios, { AxiosResponse } from "axios";
import {
  changeLoadingState,
  changeSearchParam,
  loadData,
  loadMore,
} from "./appStore";
import { store } from "./index";
interface paramters {
  isMore: boolean;
}
const defaultSearch='spongBob'
export function fetchData({isMore }: paramters) {
  const searchParam = store.getState().youtube.searchParam;
  store.dispatch(changeLoadingState({ isMore, value: true }));
  axios
    .get(
      `https://youtube.googleapis.com/youtube/v3/search?maxResults=5&q=${
       searchParam||defaultSearch
      }&${
        isMore ? `&pageToken=${store.getState().youtube.nextPageToken}` : ""
      }&part=snippet&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
    .then((res: AxiosResponse) => {
      store.dispatch(isMore ? loadMore(res.data) : loadData(res.data));
      store.dispatch(changeSearchParam(  searchParam||defaultSearch));
    })
    .catch((e) => console.log(e))
    .finally(() =>
      store.dispatch(changeLoadingState({ isMore, value: false }))
    );
}
