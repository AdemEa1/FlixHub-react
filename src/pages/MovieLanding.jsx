import React from "react";
import MovieFormat from "../components/MovieFormat";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const MovieLanding = () => {
  const API_KEY = `b2490897`;
  const { searchTerm } = useParams();

  const [vidsData, setVidsData] = useState([]);
  const [page, setPage] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetchVids();
  }, [page]);

  async function fetchVids() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}&page=${page}`
    );
    setVidsData(data.Search);
  }

  return (
    <LandingContainer>
      <MovieFlag>
      {vidsData?.map((elem, index) => (
          <MovieFormat
            key={index}
            Title={elem.Title}
            Poster={elem.Poster}
            Year={elem.Year}
            imdbID={elem.imdbID}
          />
        ))}
      </MovieFlag>
    </LandingContainer>
  );
};

export default MovieLanding;

const LandingContainer = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const MovieFlag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1300px;
  padding-top: 15px;
  overflow: hidden;
  margin: 0px 30px;
`;
