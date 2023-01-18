import moment from "moment";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { snippet } from "../../components/interfaces";
import cls from "../list.module.scss";
interface props {
  typeId: number;
  snippet: snippet;
}
export default function VideoComp({ snippet, typeId }: props) {
  return (
    <div className={cls.videoCont}>
      <div className={cls.imgContainer}>
        <img
          className={typeId === 3 ? cls.roundImg : cls.img}
          src={snippet.thumbnails.high.url}
        />
        {typeId === 2 && (
          <div className={cls.modal}>
            {" "}
            <AiOutlineUnorderedList />
          </div>
        )}
      </div>
      <div>
        <p className={cls.title}>{snippet.title}</p>
        <p className={cls.channel}>
          {typeId!==3&&snippet.channelTitle}
          {" -  "}
          {moment(snippet.publishedAt, "YYYYMMDD").fromNow()}
        </p>
        <p className={cls.description}>{snippet.description}</p>
      </div>
    </div>
  );
}
