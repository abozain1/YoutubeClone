import moment from "moment";
import { snippet } from "../../components/interfaces";
import cls from "../list.module.scss";

interface props {
  itemId: string;
  snippet: snippet;
}
export default function ChannelComp({ snippet, itemId }: props) {
  return (
    <div className={cls.videoCont}>
    <img className={cls.roundImg} src={snippet.thumbnails.high.url} />
    <div>
      <p className={cls.title}>{snippet.title}</p>
      <p className={cls.channel}>
        {snippet.channelTitle}{" "}
        {moment(snippet.publishedAt, "YYYYMMDD").fromNow()}
      </p>
      <p className={cls.description}>{snippet.description}</p>
    </div>
  </div>
  );
}
