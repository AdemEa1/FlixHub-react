import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieHome = () => {
    const API_KEY = `b2490897`;
    const [movieData, setmovieData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
      fetchMovieData(id);
    }, []);
  
    async function fetchMovieData(movieId) {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`
      );
      setmovieData(data);
    }
  return (
    <MovieDataContainer>
        <MovieWrapper>
            <img src={movieData.Poster} alt="" />
            <MovieTextWrapper>
                <div>
                <span>
                    <h1>{movieData.Title}</h1>
                    <p>{movieData.Plot}</p>
                </span>
                <TextAreaWrap>
                    <p>{movieData.Genre}</p>
                    <p>{movieData.Released}</p>
                    <p>{movieData.Rated}</p>
                </TextAreaWrap>
                </div>
                <TextExtras>
                    <div>
                        <p>Actors:</p>
                        <h3>{movieData.Actors}</h3>
                    </div>
                    <div>
                        <p>Language:</p>
                        <h3>{movieData.Language}</h3>
                    </div>
                    <div>
                        <p>Duration:</p>
                        <h3>{movieData.Runtime}</h3>
                    </div>
                    <div>
                        <p>Awards:</p>
                        <h3>{movieData.Awards}</h3>
                    </div>
                </TextExtras>
            </MovieTextWrapper>
        </MovieWrapper>
    </MovieDataContainer>
  )
}

export default MovieHome