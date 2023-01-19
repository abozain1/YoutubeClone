import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { fetchData } from "../store/storeActions";
import HeaderDesk from "./components/desktopHeader";
import HeaderMob from "./components/mobileHeader";
import { changeSearchParam } from "../store/appStore";
import FilterDesk from "./components/desktopFilter";
import FilterMob from "./components/mobileFilter";

function HeaderController() {

  const searchParam = useSelector(
    (state: RootState) => state.youtube.searchParam
  );
  const loading = useSelector((state: RootState) => state.youtube.loading);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const dispatch = useDispatch();

  function inputVhangeHandler(v: string) {
    dispatch(changeSearchParam(v));
  }
  function isMobileHandler() {
    setIsMobile(window.innerWidth <= 600);
  }
  function searchHandler() {
    fetchData({ isMore: false });
  }
  useEffect(() => {
    window.addEventListener("resize", isMobileHandler);
    return () => window.removeEventListener("resize", isMobileHandler);
  }, []);

  return (
    <>
      {isMobile ? (
        <HeaderMob
          inpV={searchParam}
          changeSearchP={inputVhangeHandler}
          search={searchHandler}
        />
      ) : (
        <HeaderDesk
          changeSearchP={inputVhangeHandler}
          inpV={searchParam}
          search={searchHandler}
        />
      )}
      {!loading &&( isMobile ? <FilterMob /> : <FilterDesk />)}
    </>
  );
}
export default HeaderController;
