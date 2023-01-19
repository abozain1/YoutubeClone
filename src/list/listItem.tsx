import { snippet } from "../components/interfaces";
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
 
  return <VideoComp snippet={snippet} typeId={typeId} />;
}
export default ListItem;
