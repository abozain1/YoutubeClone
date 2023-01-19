import { AiFillYoutube, AiOutlineSearch } from "react-icons/ai";
import cls from "../header.module.scss";

interface props {
  search: () => void;
  inpV: string;
  changeSearchP: (v: string) => void;
}
export default function HeaderDesk({ inpV, changeSearchP, search }: props) {
  return (
    <div className={cls.desktopSearchCont}>
      <div className={cls.subContainer}>
        <div className={cls.tubeIcon}>
          <AiFillYoutube />
          <p>YouTube</p>
        </div>
        <div className={cls.search}>
          <input
            value={inpV}
            onChange={(e) => changeSearchP(e.target.value)}
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                search();
              }
            }}
          />
         <button>

            <AiOutlineSearch onClick={() => search()}/>
         </button>
          
        </div>
      </div>
    </div>
  );
}
