import { snippet } from "../../components/interfaces";

interface props {
  videoId: string;
  snippet: snippet;
}
export default function VideoComp({ snippet, videoId }: props) {
  return (
    <div>
      <p>{snippet.title}</p>
      <p>{snippet.channelTitle}</p>
      <p>{snippet.description}</p>
      <p>{snippet.publishedAt}</p>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
