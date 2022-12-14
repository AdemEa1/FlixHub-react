import React from 'react'
import { useNavigate } from "react-router-dom";


const MovieFormat = ({ Poster, Title, Year }) => {
const navigate = useNavigate()

  return (
    <Format onClick={() => navigate(`/movie/${imdbID}`) }>        <Wrap>
        <img src={Poster} />
    <TextWrapper>
        <div className='text__wrap'>
            <h1 className='text__title'>{Title}</h1>
            <p className='text__year'>{Year}</p>
        </div>
    </TextWrapper>
    </Wrap>
    </Format>
  )
}

export default MovieFormat