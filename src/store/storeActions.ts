import axios, { AxiosResponse } from "axios";
import { changeLoadingState, loadData, loadMore } from "./appStore";
import { store } from "./index";
interface paramters {
  searchQ: string | undefined;
  isMore: boolean;
}
let searchState = "";
export function fetchData({ searchQ, isMore }: paramters) {
  store.dispatch(changeLoadingState(true));
  axios
    .get(
      `https://youtube.googleapis.com/youtube/v3/search?maxResults=5&q=${
        searchQ || searchState
      }&${
        isMore ? `&pageToken=${store.getState().youtube.nextPageToken}` : ""
      }&part=snippet&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
    .then((res: AxiosResponse) => {
      store.dispatch(isMore ? loadMore(res.data) : loadData(res.data));
      searchState = searchQ ? searchQ : searchState;
    })
    .catch((e) => console.log(e))
    .finally(() => store.dispatch(changeLoadingState(false)));
}
