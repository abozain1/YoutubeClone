import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { fetchData } from "../store/storeActions";
import cls from "./header.module.scss";
function Header() {
  const totalResults = useSelector(
    (state: RootState) => state.youtube.pageInfo.totalResults
  );
  const neact = useSelector(
    (state: RootState) => state.youtube.nextPageToken
  );
  const [inpV, setInpV] = useState("");
  function searchHandler() {
    fetchData({ searchQ: inpV, isMore: false });
  }
  return (
    <>
      <div className={cls.searchCont}>
        <p>logo</p>
        <input
          value={inpV}
          onChange={(e) => setInpV(e.target.value)}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              searchHandler();
            }
          }}
        />
        <button onClick={searchHandler}>search</button>
      </div>
      <div className={cls.filterCont}>
        <p>{totalResults}</p>
        <p>filter</p>
      </div>
    </>
  );
}
export default Header;
