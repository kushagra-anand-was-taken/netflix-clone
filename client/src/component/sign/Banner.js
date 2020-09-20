import React, { useEffect, useState } from "react";
import axiosm from "../../utils/axiosm";
import "./banner.css";
function Banner({ id }) {
  const [Movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await axiosm.get(
        `movie/${id}?api_key=544b42f36a4d77211d5eed4b2b3b7624&language=en-US`
      );
      setMovies(result.data);
    }
    fetchData();
  }, [id]);
  // console.log(id);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("http://image.tmdb.org/t/p/original/${Movies.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner__header">
          {Movies?.title || Movies?.name || Movies?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {Movies?.overview?.length > 5
            ? `${Movies?.overview.substring(0, 150)}...`
            : Movies?.overview}
        </h1>
      </div>
      <div className="banner__fadebottom" />
    </header>
  );
}

export default Banner;
