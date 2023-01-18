import ReactLoading from "react-loading";
import cls from './loading.module.scss'
export default function Loading() {
  return (
    <div className={cls.loadingCont} >
      <ReactLoading type="spokes" color="#989898" height={50} width={50} />
      <p>Loading</p>
    </div>
  );
}
