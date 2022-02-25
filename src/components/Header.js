import styled from "styled-components";
import React from "react";
import { Outlet, Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Nav>
        <ul>
          <img alt="" src="vscinemasLogo.png" />
          <li>
            <Link to="/about">影城介紹</Link>
          </li>
          <li>電影介紹</li>
          <li>映演品牌</li>
          <li>餐飲與商品</li>
          <li>活動公告</li>
          <li>業務專區</li>
          <li>娛樂購物</li>
          <li>會員專區</li>
        </ul>
      </Nav>
      <Outlet/>
    </>
  );
};

export default Header;

const Nav = styled.nav`
  height: 100px;
  margin: 0px auto;
  padding-top: 10px;
  background-color: #2660a9;

  @media (max-width: 768px) {
    max-width: 768px;
  }

  ul {
    list-style: none;
    text-decoration: none;
    display: flex;
    justify-content: space-evenly;
    color: white;
  }

  li {
    position: relative;
    padding-top: 30px;
  }

`;
