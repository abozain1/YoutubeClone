import axios, { AxiosResponse } from "axios";
import { loadData } from "./appStore";
import { store } from "./index";
export function fetchData(searchQ: string) {
  axios
    .get(
      `https://youtube.googleapis.com/youtube/v3/search?maxResults=50&pageToken=${
        store.getState().counter.nextPageToken
      }&q=${searchQ}&key=AIzaSyBB3YUWo250Qv-A8V0k_kzuUe4dNXrSJRE`
    )
    .then((res: AxiosResponse) => store.dispatch(loadData(res.data)))
    .catch((e) => console.log(e));
}
