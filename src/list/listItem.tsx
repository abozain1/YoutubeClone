import { snippet } from "../components/interfaces";
import ChannelComp from "./components/channel";
import PlayListComp from "./components/playList";
import VideoComp from "./components/video";

interface props {
  kind: string;
  itemId: string;
  snippet: snippet;
}

function ListItem({ snippet, itemId, kind }: props) {
  console.log("🚀 ~ file: listItem.tsx:11 ~ ListItem ~ kind", kind)
  switch (kind) {
    case "youtube#video":
      return <VideoComp snippet={snippet} videoId={itemId} />;
    case "youtube#playlist":
      return <PlayListComp  />;
    case "youtube#channel":
      return <ChannelComp  />;
  }
  return null;
}
export default ListItem;
