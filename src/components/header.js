import React, { useState } from "react";
import styled from "styled-components";
import logo from "./../assets/images/logo.png";
import tryIcon from "./../assets/images/tryIcon.png";
import xIcon from "./../assets/images/xIcon.png";
import headIcon from "./../assets/images/headIcon.png";
import chartIcon from "./../assets/images/chartIcon.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HeaderWrapper>
      <div className="falcon-header is-desktop">
        <Link to="/home">
          {" "}
          <img src={logo} />
        </Link>
        <ul className="main-body">
          {/* <li>
            <Link to="/home">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link to="/token">
              <a>Token</a>
            </Link>
          </li>
          <li>
            <Link to="/aboutus">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link to="/intelligence">
              {" "}
              <a>Falcon</a>
            </Link>
          </li>
          <li>
            <Link to="/loading">
              {" "}
              <a>AI</a>
            </Link>
          </li> */}
          <h3>Degen Jpegs Incorporated</h3>
        </ul>
        <div className="btns-group">
          <img src={chartIcon} alt="icon" />
          <img src={headIcon} alt="icon" />
          <img src={xIcon} alt="icon" />
          <img src={tryIcon} alt="icon" />
        </div>
      </div>
      <div className="falcon-header is-mobile">
        <div className="header-above">
          <img src={logo} />
          <div className="btns-group">
            <img src={chartIcon} alt="icon" />
            <img src={headIcon} alt="icon" />
            <img src={xIcon} alt="icon" />
            <img src={tryIcon} alt="icon" />
          </div>
        </div>
        <h3>Degen Jpegs Incorporated</h3>
      </div>
    </HeaderWrapper>
  );
}
const HeaderWrapper = styled.div`
  position: relative;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  position: sticky;
  top: 0;
  z-index: 1000;
  .falcon-header {
    display: flex;
    justify-content: space-between;
    background: #121722;
    position: relative;
    align-items: center;
    padding: 16.5px 40px;
    img {
      width: 70px;
      height: 38.83px;
    }
    ul {
      display: flex;
      list-style-type: none;
      margin: 0px;
      h3 {
        // font-family: Inter;
        font-size: 18px;
        font-weight: 700;
        line-height: 21.78px;
        color: #ffffff;
        margin: 0px;
      }
    }
    .btns-group {
      display: flex;
      cursor: pointer;
      gap: 28px;
      color: #e8e8e8;
      img {
        width: 18px;
        height: 18px;
      }
    }
  }
  .is-desktop {
    display: flex;
  }
  .is-mobile {
    display: none;
  }
  @media (max-width: 880px) {
    width: 100%;
    padding: 0px;
    .falcon-header {
      &.is-desktop {
        display: none !important;
      }
      &.is-mobile {
        display: flex !important;
        width: 100%;
        padding: 0px;
        flex-direction: column;
        .header-above {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #292d39;
          padding: 15px 20px;
          img {
            width: 52px;
            height: 28.85px;
          }
          .btns-group {
            display: flex;
            gap: 10px;
            align-items: center;
            img {
              width: 18px;
              height: 18px;
            }
          }
        }
        h3 {
          padding: 30px;
          text-align: center;
          // font-family: Inter;
          font-size: 18px;
          font-weight: 700;
          line-height: 21.78px;
          margin: 0px;
          color: white;
        }
      }
      h3 {
        // font-family: Inter;
        font-size: 18px;
        font-weight: 700;
        line-height: 21.78px;
        text-align: left;
        color: #ffffff;
      }
    }
  }
  .sidebar {
    position: fixed;
    top: 0;
    right: -250px; /* Hidden by default */
    width: 250px;
    height: 100%;
    background-color: #333;
    color: white;
    transition: right 0.3s ease;
    z-index: 1000;
  }

  .sidebar.open {
    right: 0; /* Show sidebar */
  }

  .close-btn {
    font-size: 30px;
    cursor: pointer;
    padding: 10px;
    text-align: right;
  }

  .sidebar ul {
    list-style-type: none;
    padding: 0;
  }

  .sidebar li {
    padding: 15px;
    text-align: center;
  }

  .sidebar a {
    color: white;
    text-decoration: none;
  }

  .sidebar a:hover {
    text-decoration: underline;
  }
  .falcon-header .btn-gray .blue-img {
    width: 16px;
    height: 13.33px;
    margin-left: 8px;
    margin-bottom: 0px;
  }
`;
