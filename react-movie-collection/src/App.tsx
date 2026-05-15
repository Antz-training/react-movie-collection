import { useEffect, useState } from "react";
import { ImageBox } from "./components/image-box/image-box";
import type { MovieMetaData } from "./types/movie.type";
import "./styles/main.scss";

function App() {
  const [movieMetaData, setMovieMetaData] = useState<MovieMetaData[]>([]);

  useEffect(() => {
    fetch("/data/movies.json")
      .then((response) => response.json())
      .then((jsonData) => setMovieMetaData(jsonData))
      .catch((error) =>
        console.error("Error loading the movies.json file", error),
      );
  }, []); // ensures that the useEffect only renders once - this is important!

  const movieData = movieMetaData[0];

  return (
    <>
      <ImageBox {...movieData} />
      <ul>
        {movieMetaData.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
