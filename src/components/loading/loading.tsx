import ReactLoading from "react-loading";
import cls from "./loading.module.scss";
export default function Loading({ isMain }: { isMain: boolean }) {
  return (
    <div className={isMain?cls.mainLoad:cls.moreLoad}>
      <ReactLoading type="spokes" color="#989898" height={50} width={50} />
      <p>Loading</p>
    </div>
  );
}
