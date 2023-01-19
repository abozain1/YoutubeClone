import { useState } from "react";
import { AiFillYoutube, AiOutlineSearch } from "react-icons/ai";
import cls from "../header.module.scss";

interface props {
  search: () => void;
  inpV: string;
  changeSearchP: (v: string) => void;
}
export default function HeaderMob({ inpV, changeSearchP, search }: props) {
  const [searching, setSearching] = useState(false);
  return (
    <>
      {searching ? (
        <div className={cls.mobSearch}>
          <AiFillYoutube className={cls.youatube} />
          <input
            value={inpV}
            onChange={(e) => changeSearchP(e.target.value)}
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                search();
              }
            }}
          />

          <AiOutlineSearch
            className={cls.searchIcon}
            onClick={() => {
              search();

              setSearching(false);
            }}
          />
        </div>
      ) : (
        <div className={cls.mobSearch}>
          <AiFillYoutube className={cls.youatube} />
          <p>{inpV || "YouTube"}</p>

          <AiOutlineSearch
            className={cls.searchIcon}
            onClick={() => setSearching(true)}
          />
        </div>
      )}
    </>
  );
}
