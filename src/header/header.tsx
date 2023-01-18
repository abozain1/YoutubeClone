import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { fetchData } from "../store/storeActions";
import { AiFillYoutube, AiOutlineSearch } from "react-icons/ai";
import { IoFilterSharp } from "react-icons/io5";
import cls from "./header.module.scss";
function Header() {
  const totalResults = useSelector(
    (state: RootState) => state.youtube.pageInfo.totalResults
  );
  const neact = useSelector((state: RootState) => state.youtube.nextPageToken);
  const [inpV, setInpV] = useState("");
  function searchHandler() {
    fetchData({ searchQ: inpV, isMore: false });
  }
  return (
    <>
      <div className={cls.searchCont}>
        <div className={cls.subContainer}>
          <div className={cls.tubeIcon}>
            <AiFillYoutube />
            <p>YouTube</p>
          </div>
          <div className={cls.search}>
            <input
              value={inpV}
              onChange={(e) => setInpV(e.target.value)}
              onKeyDown={(e) => {
                if (e.code === "Enter") {
                  searchHandler();
                }
              }}
            />
            <button onClick={searchHandler}>
              <AiOutlineSearch />
            </button>
          </div>
        </div>
      </div>
        <div className={cls.filterCont}>
          <p >About {totalResults} Filtered Results</p>
          <div>
            <IoFilterSharp />
            <p>Filter</p>
          </div>
        </div>
    </>
  );
}
export default Header;
