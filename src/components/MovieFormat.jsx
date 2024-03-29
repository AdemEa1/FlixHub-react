import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

const MovieFormat = ({ Poster, Title, Year, imdbID }) => {
  const navigate = useNavigate();
  const [img, setImg] = useState();

  const mountedRef = useRef(false);

  useEffect(() => {
    const image = new Image();
    image.src = Poster;
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
          setImg(image);
        }
      }, 300);
    };
    return () => {
      mountedRef.current = true;
    };
  });

  return (
    <Format onClick={() => navigate(`/movie/${imdbID}`)}>
      {img ? (
        
          <Wrap className="page__wrap">
            <img src={Poster} className="wrap__img" />
            <TextWrapper>
              <div>
                <h1 className="wrap__title">{Title}</h1>
                <p className="wrap__year">{Year}</p>
              </div>
            </TextWrapper>
          </Wrap>
      ) : (
          <div className="movie__img--skeleton"></div>
      )}    </Format>
  );
};

export default MovieFormat;

const Format = styled.div`
  width: calc(100% / 5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 15px;
  margin-bottom: 28px;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6);
  transition: all 400ms ease-in-out;
  border-radius: 3px;
  overflow: hidden;

  img {
    width: 100%;
    height: 230px;
    z-index: 10;
    transition: all 300ms ease-in-out;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  height: max-content;
  width: 100%;
  background-color: #242424;
  justify-content: center;

  div {
    background-color: #242424;
    width: 100%;
    height: 90px;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
  }

  h1 {
    overflow: hidden;
    width: 100%;
    font-size: 16px;
    color: #fff;
    font-weight: 600;
  }

  p {
    font-size: 14px;
    color: #fff;
    font-weight: 600;
  }
`;
