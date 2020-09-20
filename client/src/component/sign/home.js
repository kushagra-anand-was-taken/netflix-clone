import React, { useEffect } from "react";
import { useState } from "react";
import Row from "../layout/Row";
import request from "../../keys";
import Banner from "./Banner";
import Header from "./Header";

const Home = () => {
  const [id, setId] = useState("420817");
  const settingId = (item) => {
    setId(item);

    // console.log(id);
  };
  return (
    <div className="app">
      <Header />
      <Banner id={id} />
      <Row
        title="Netflix Originals"
        url={request.fetchNetflixOriginals}
        isLarge
        settingId={settingId}
      ></Row>
      <Row
        title="Trending Movies"
        url={request.fetchTrending}
        settingId={settingId}
      ></Row>
      <Row
        title="Top Rated"
        url={request.fetchTopRated}
        settingId={settingId}
      ></Row>
      <Row
        title="Romantic Movies"
        url={request.fetchRomanceMovies}
        settingId={settingId}
      ></Row>
      <Row
        title="Action Movies"
        url={request.fetchActionMovies}
        settingId={settingId}
      ></Row>
      <Row
        title="Comedy Movies"
        url={request.fetchComedyMovies}
        settingId={settingId}
      ></Row>
      <Row
        title="Documentaries"
        url={request.fetchDocumentaries}
        settingId={settingId}
      ></Row>
      <Row
        title="Horror Movies"
        url={request.fetchHorrorMovies}
        settingId={settingId}
      ></Row>
    </div>
  );
};

export default Home;
