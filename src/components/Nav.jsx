import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import HomeLogo from "../assets/ABC.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";

const Nav = () => {
  return (
    <Container className="nav__wrapper">
      <LeftMenu>
        <Link className="img__wrapper">
          <img src={HomeLogo} className="cursor-pointer" alt="" />
        </Link>
        <li className="link__hover">Home</li>
        <li className="link__hover">Tv Shows</li>
        <li className="link__hover">Movies</li>
        <li className="link__hover">Recently Added</li>
        <li className="link__hover">Browse by Language</li>
      </LeftMenu>

      <RightMenu>
      <a className="link__hover cursor-not-allowed"><NotificationsIcon /></a>
        <a className="link__hover click cursor-pointer"><PersonIcon /></a>
      </RightMenu>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  top: 0;
  min-height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px 24px;
  z-index: 1;
`;
const LeftMenu = styled.div`
  display: flex;
  align-items: center;

  a,
  li {
    text-decoration: none;
    font-size: 18px;
    color: #242424;
    font-weight: 700;
    margin: 0 12px;
    cursor: not-allowed;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    transform: scale(1.2);
    color: #242424;
    margin: 0 12px;
  }
`;
