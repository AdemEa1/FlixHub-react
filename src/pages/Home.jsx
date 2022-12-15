import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../components/App.css";
import { Paper } from "@mui/material";

const Home = () => {
  const [searchData, setSearchData] = useState("");
  const navigate = useNavigate();

  function handleEvent(e) {
    e.preventDefault();
  }

  function handleInput() {
    searchData !== "" && navigate(`/movieland/${searchData}`);
  }


  return (
    <Paper component="form">
    <Header>
    <TextArea>
        <h1>FLIXHUB.co</h1>
        <h3>FlixHub is the greatest website for you and your family to stream your favourite movies and Tv shows with such ease.</h3>
    </TextArea>
    <SearchArea>
        <form onSubmit={handleEvent}>
        <input
            className="search-bar"
            placeholder="Search..."
            onKeyPress={(event) => {
              event.key === "Enter" && handleInput();
            }}
            onChange={(event) => setSearchData(event.target.value)}
            />
    <SearchIcon
            className="search--icon click"
            type="submit"
            onClick={() => handleInput()}
            />
        </form>
    </SearchArea>
    </Header>
    </Paper>
  );
};

export default Home;

const Header = styled.div`
  width: 100%;
  max-width: 1200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const TextArea = styled.div`
  width: 100%;
  position: relative;
  height: calc(100% + 85px);
  h1 {
    font-size: 90px;
    font-weight: 800;
    padding-bottom: 20px;
    text-align: left;
    line-height: 1;
  }
  h3 {
    max-width: 800px;
    font-weight: 700;
    font-size: 24px;
    text-align: left;
    padding-bottom: 40px;
    line-height: 1.3;
  }
`;

const SearchArea = styled.div`
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: fit-content;
    background-color: #fff;
    padding: 5px 15px;
    border: 2px solid #242424;
  }
  input {
    width: 350px;
    height: 45px;
    font-size: 22px;
    outline: none;
    background-color: transparent;
    padding-left: 10px;
  }
  input::placeholder {
    color: #242424;
  }
`;
