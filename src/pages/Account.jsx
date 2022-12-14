import React from 'react'
import styled from "styled-components";
import "../components/App.css";

const Account = () => {
  return (
    <AccountPage>
    <AccountWrapper>
        <AccountWrap>
            <h1>My Account</h1>
            <form>
            <li className='click'>Account Settings</li> 
            <li className='click'>My List</li> 
            <li className='click'>Sign Out</li> 
            <AccountCheck>
                <p>copyright © 2022</p>
            </AccountCheck>
            </form>
        </AccountWrap>
    </AccountWrapper>
    </AccountPage>
  )
}

export default Account

const AccountPage = styled.div`
position: fixed;
width: 100%;
padding: 20px 60px;
`

const AccountWrapper = styled.div`
max-width: 450px;
height: 470px;
box-shadow: 0px 0px 7px rgba(24, 24, 24, 0.2);
margin-left: auto;
margin-right: auto;
`

const AccountWrap = styled.div`
padding-top: 60px;
padding-bottom: 60px;
max-width: 320px;
margin-left: auto;
margin-right: auto;

h1 {
    font-weight: 700;
    font-size: 30px;
    line-height: 30px;
    text-align: center
}

form {
    padding-top: 20px;
    padding-bottom: 12px;
    flex-direction: column;
    width: 100%;
    display: flex;
    cursor: not-allowed;
}

li {
    font-weight: 600;
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #242424;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #fff;
    border-radius: 3px;
    text-align: center;
}
`

const AccountCheck = styled.div`
padding-top: 10px;
    padding-bottom: 20px;
p {
    color: #242424;
    font-size: 15px;
    text-align: center;
}
`