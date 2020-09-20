import React, { useEffect } from "react";
import { useState } from "react";
import axiosm from "../../utils/axiosm";
import "./row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, url, isLarge, settingId }) {
  const IMG_URL = "http://image.tmdb.org/t/p/w185";
  const [Movies, setMovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const result = await axiosm.get(url);
      setMovies(result.data.results);
    }
    fetchData();
  }, [url]);
  //   console.log(Movies[0]);
  const opts = {
    height: "390",
    width: "400%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    settingId(movie.id);
    if (trailerUrl) {
      settrailerUrl("");
    } else {
      movieTrailer(
        movie?.name || Movies?.title || Movies?.original_name || ""
      ).then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        settrailerUrl(urlParams.get("v"));
      });
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {Movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            className="row__poster"
            id={movie.id}
            key={movie.id}
            src={`${IMG_URL}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          ></img>
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
