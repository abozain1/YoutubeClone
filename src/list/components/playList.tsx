import { snippet } from "../../components/interfaces";
import moment from "moment";
import cls from "../list.module.scss";
import { AiOutlineUnorderedList } from "react-icons/ai";

interface props {
  itemId: string;
  snippet: snippet;
}
export default function PlayListComp({ snippet, itemId }: props) {
  return (
    <div className={cls.videoCont}>
      <div className={cls.imgContainer}>
        <img src={snippet.thumbnails.high.url} />
        <div className={cls.modal}>
          {" "}
          <AiOutlineUnorderedList />
        </div>
      </div>
      <div>
        <p className={cls.title}>{snippet.title}</p>
        <p className={cls.channel}>
          {snippet.channelTitle}{"   "}
          {moment(snippet.publishedAt, "YYYYMMDD").fromNow()}
        </p>
        <p className={cls.description}>{snippet.description}</p>
      </div>
    </div>
  );
}
