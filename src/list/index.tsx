import { useSelector } from "react-redux";
import { RootState } from "../store";
import { fetchData } from "../store/storeActions";
import ListItem from "./listItem";
import cls from "./list.module.scss";
import Loading from "../components/loading/loading";
function List() {
  const items = useSelector((state: RootState) => state.youtube.items);
  const isMoreLoading = useSelector(
    (state: RootState) => state.youtube.isMoreLoading
  );
  return (
    <div className={cls.mainCont}>
      {items.map((ele: any) => (
        <ListItem
          kind={ele.id.kind}
          itemId={ele.id.videoId || ele.id.playlistId || ele.id.channelId}
          snippet={ele.snippet}
        />
      ))}
      {items.length > 0 &&
        (isMoreLoading ? (
          <Loading isMain={false} />
        ) : (
          <button
            className={cls.moreBtn}
            onClick={() => fetchData({ isMore: true })}
          >
            Show More
          </button>
        ))}
    </div>
  );
}
export default List;
