import { useSelector } from "react-redux";
import { RootState } from "../store";
import { fetchData } from "../store/storeActions";
import ListItem from "./listItem";

function List() {
  const items = useSelector((state: RootState) => state.youtube.items);
  const isMoreLoading = useSelector(
    (state: RootState) => state.youtube.isMoreLoading
  );
  return (
    <div>
      {items.map((ele: any) => (
        <ListItem
          kind={ele.id.kind}
          itemId={ele.id.videoId || ele.id.playlistId || ele.id.channelId}
          snippet={ele.snippet}
        />
      ))}
      {items.length > 0 &&
        (isMoreLoading ? (
          <p>loading</p>
        ) : (
          <button 
            onClick={() => fetchData({ searchQ: undefined, isMore: true })}
          >
            Show More
          </button>
        ))}
    </div>
  );
}
export default List;
