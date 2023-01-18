import { snippet } from "../components/interfaces";
import ChannelComp from "./components/channel";
import PlayListComp from "./components/playList";
import VideoComp from "./components/video";

interface props {
  kind: string;
  itemId: string;
  snippet: snippet;
}
function getType(kind: string) {
  switch (kind) {
    case "youtube#video":
      return 1;
    case "youtube#playlist":
      return 2;
    case "youtube#channel":
      return 3;
    default:
      return 0;
  }
}
function ListItem({ snippet, itemId, kind }: props) {
  const typeId = getType(kind);
  // switch (kind) {
  //   case "youtube#video":
  //     return <VideoComp snippet={snippet} typeId={1} />;
  //   case "youtube#playlist":
  //     return <VideoComp snippet={snippet} typeId={2} />;
  //   case "youtube#channel":
  //     return <VideoComp snippet={snippet} typeId={3} />;
  // }
  return <VideoComp snippet={snippet} typeId={typeId} />;
}
export default ListItem;
