import cls from "../header.module.scss";

export default function FilterMob() {
  return (
    <div className={cls.mobFilterCont}>
      <select disabled>
        <option>All</option>
      </select>
      <select disabled>
        <option>Any Time</option>
      </select>
    </div>
  );
}
