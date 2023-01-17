import { snippet } from "../../components/interfaces";

interface props {
  itemId: string;
  snippet: snippet;
}
export default function ChannelComp({ snippet, itemId }: props) {
  return (
    <div>
      <p>{snippet.channelTitle}</p>
      <p>{snippet.description}</p>
      <p>{snippet.publishedAt}</p>
      <img width='100rem' src={snippet.thumbnails.high.url} />
    </div>
  );
}
