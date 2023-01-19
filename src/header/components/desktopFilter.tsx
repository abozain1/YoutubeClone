import { IoFilterSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import cls from "../header.module.scss";

export default function FilterDesk() {
  const totalResults = useSelector(
    (state: RootState) => state.youtube.pageInfo.totalResults
  );
  return (
    <div className={cls.desktopFilterCont}>
      <p>About {totalResults} Filtered Results</p>
      <div>
        <IoFilterSharp />
        <p>FILTER</p>
      </div>
    </div>
  );
}
