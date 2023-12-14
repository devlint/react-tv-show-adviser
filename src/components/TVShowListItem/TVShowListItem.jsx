import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import s from "./style.module.css";

export function TVShowListItem({ tvShow, onClick }) {
  return (
    <div className={s.container} onClick={() => onClick(tvShow)}>
      <img
        alt={tvShow.name}
        className={s.img}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
      />
      <p className={s.title}>{tvShow.name}</p>
    </div>
  );
}
