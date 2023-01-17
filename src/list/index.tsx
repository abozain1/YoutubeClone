import { useSelector } from "react-redux";
import { RootState } from "../store";
import ListItem from "./listItem";

function List() {
  const items = useSelector((state: RootState) => state.youtube.items);
  console.log("🚀 ~ file: index.tsx:7 ~ List ~ items", items)
  return (
    <div>
      {items.map((ele: any) => (
        <ListItem
          kind={ele.id.kind}
          itemId={ele.id.videoId || ele.id.playlistId || ele.id.channelId}
          snippet={ele.snippet}
        />
      ))}
    </div>
  );
}
export default List;
