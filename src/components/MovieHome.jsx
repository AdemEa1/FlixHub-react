import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import styled from "styled-components";

const MovieHome = () => {
    const API_KEY = `b2490897`;
    const [videos, setVideos] = useState([]);
    const { id } = useParams();
    useEffect(() => {
    fetchVideosData(id);
    }, []);
  
    async function fetchVideosData() {
    const { data } = await axios.get(
    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
    );
    setVideos(data);
    }

  return (
    <MovieDataContainer>
      <MovieWrapper>
        <img src={videos.Poster} alt="" />
        <MovieTextWrapper>
          <div>
            <span>
              <h1>{videos.Title}</h1>
              <p>{videos.Plot}</p>
            </span>
            <TextAreaWrap>
              <p>{videos.Genre}</p>
              <p>{videos.Released}</p>
              <p>{videos.Rated}</p>
            </TextAreaWrap>
          </div>
          <TextExtras>
            <div>
              <p>Actors :</p>
              <h3>{videos.Actors}</h3>
            </div>
            <div>
              <p>Language :</p>
              <h3>{videos.Language}</h3>
            </div>
            <div>
              <p>Duration :</p>
              <h3>{videos.Runtime}</h3>
            </div>
            <div>
              <p>Awards :</p>
              <h3>{videos.Awards}</h3>
            </div>
          </TextExtras>
        </MovieTextWrapper>
      </MovieWrapper>
    </MovieDataContainer>
  );
};

export default MovieHome;

const MovieDataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

const MovieWrapper = styled.div`
  width: 1350px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.1);

  img {
    width: 25%;
    height: 100%;
    border-radius: 3px;
  }
`;

const MovieTextWrapper = styled.div`
  height: 100%;
  width: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 26px;

  div {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px 25px;
    background-color: #242424;
    box-shadow: 0px 0px 15px rgb(0, 0, 0, 0.5);
    border-radius: 3px;
  }

  h1 {
    font-size: 24px;
    position: relative;
    width: 550px;
    overflow: hidden;
    color: #fff;
    padding-bottom: 5px;
  }

  p {
    width: 100%;
    max-width: 550px;
    color: #fff;
    font-size: 14px;
    padding-right: 20px;
  }
`;

const TextAreaWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
`;

const TextExtras = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-left: 20px;
  gap: 10px;

  h3 {
    width: 200px;
    text-align: left;
    color: #fff;
    font-size: 14px;
  }

  p {
    font-size: 14px;
  }
`;
