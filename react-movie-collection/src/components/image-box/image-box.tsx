import type { MovieMetaData } from "../../types/movie.type";

export function ImageBox(movie: MovieMetaData) {
  return (
    <img
      src={movie.image}
      alt={movie.original_title}
      loading="lazy"
      className="centered-image"
    />
  );
}
