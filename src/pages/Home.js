import React from "react";
import styled from "styled-components";

// import Sidebar from "./../components/sidebar";
import Header from "./../components/header";
import rightSidebar from "./../assets/images/rightSidebar.png";
import mainTop from "./../assets/images/mainTop.png";
import mobileSidebar from "./../assets/images/mobile_sidebar.png";
import mainImg from "./../assets/images/mainImg.png";
import mainItem1 from "./../assets/images/mainItem1.png";
import mainItem2 from "./../assets/images/mainItem2.png";
import mainItem3 from "./../assets/images/mainItem3.png";
import second from "./../assets/images/second.png";
import third from "./../assets/images/third.png";
import mobile_third from "./../assets/images/mobile_third.png";
import Footer from "../components/footer";

export default function Home(props) {
  return (
    <HomeWrapper>
      <Header />
      <div className="main-section  is-desktop">
        <div className="main-body">
          <div className="main-title">
            {/* <h3>Pump or Rekt Map</h3> */}
            <div className="main-top">
              <img src={mainTop} alt="mainTop" />
            </div>
          </div>
          <div className="mainImg">
            <img src={mainImg} alt="mainImg" />
          </div>
          <div className="main-right">
            <img src={rightSidebar} alt="sidebar" />
          </div>
        </div>
      </div>
      <div className="main-section  is-mobile">
        <div className="main-body">
          <div className="main-title">
            <h3>Pump or Rekt Map</h3>
            <div className="main-top">
              <img src={mobileSidebar} alt="mainTop" />
            </div>
          </div>
          <div className="mainList">
            <div className="mainItem">
              <h4>Technology {" >"} </h4>
              <img src={mainItem1} alt="mainImg" />
            </div>
            <div className="mainItem">
              <h4>Finance {" >"} </h4>
              <img src={mainItem2} alt="mainImg" />
            </div>
            <div className="mainItem">
              <h4>Retail Trade {" >"} </h4>
              <img src={mainItem3} alt="mainImg" />
            </div>
          </div>
        </div>
      </div>
      <div className="second-section is-desktop">
        <img src={second} alt="seocond" />
        <div>
          <h3>Degen's Declaration</h3>
          <p>
            <span>
              $DJI: 420 Million Degens, Fueled by Meme Magic and Moon Dreams,
              Set Out to Dominate the Degenverse.
            </span>
            <br />
            In a market where diamond hands reign supreme and ape armies rally,
            $DJI has become the go-to index for the most fearless of degens.
            With a massive 420 million supply and an unwavering dedication to
            the art of FOMO, $DJI captures the heart and spirit of crypto
            culture. Forget about balance sheets—this index rides the waves of
            speculation, fueled by hopium and moonshot ambitions. If you’re a
            true degen, $DJI isn’t just an investment—it’s a lifestyle.
          </p>
        </div>
      </div>
      .
      <div className="second-section is-mobile">
        <div>
          <h3>Degen's Declaration</h3>
          <p>
            <span>
              $DJI: 420 Million Degens, Fueled by Meme Magic and Moon Dreams,
              Set Out to Dominate the Degenverse.
            </span>
            <br />
            In a market where diamond hands reign supreme and ape armies rally,
            $DJI has become the go-to index for the most fearless of degens.
            With a massive 420 million supply and an unwavering dedication to
            the art of FOMO, $DJI captures the heart and spirit of crypto
            culture. Forget about balance sheets—this index rides the waves of
            speculation, fueled by hopium and moonshot ambitions. If you’re a
            true degen, $DJI isn’t just an investment—it’s a lifestyle.
          </p>
        </div>
        <img src={second} alt="seocond" />
      </div>
      <div className="third-section is-desktop">
        <img src={third} alt="third" />
      </div>
      <div className="third-section is-mobile">
        <img src={mobile_third} alt="third" />
      </div>
      <Footer />
    </HomeWrapper>
  );
}
const HomeWrapper = styled.div`
  .main-section {
    position: relative;
    background: #121722;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    .main-body {
      .main-title {
        position: relative;
        h3 {
          // font-family: Inter;
          font-size: 32px;
          font-weight: 600;
          line-height: 38.73px;
          text-align: left;
          color: white;
          padding: 20px;
          z-index: 100;
        }
        .main-top {
          padding-top: 10px;
        }
      }
    }
    .main-right {
      position: absolute;
      right: 0px;
      top: 0px;
    }
    &.is-mobile {
      .main-body {
        .main-title {
          h3 {
            font-size: 20px;
            font-weight: 600;
            line-height: 24.2px;
            text-align: left;
            color: #d4d8e3;
            margin: 0px;
          }
        }
        .mainList {
          .mainItem {
            padding: 7px;
            h4 {
              magrgin: 0px;
              font-size: 14px;
              font-weight: 500;
              line-height: 24px;
              color: white;
              margin-bottom: 2px;
            }
          }
        }
      }
    }
  }
  .second-section {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 26px;
    display: flex;
    justify-content: center;
    gap: 176px;
    img {
      max-width: 440px;
    }
    div {
      max-width: 558px;
      margin-top: auto;
      margin-bottom: auto;
      h3 {
        // font-family: Inter;
        font-size: 30px;
        font-weight: 700;
        line-height: 30px;
        text-align: left;
        color: #ffffff;
        margin-bottom: 35px;
      }
      p {
        // font-family: Inter;
        font-size: 16px;
        line-height: 24px;
        text-align: left;
        font-weight: 400;
        color: #a5a9b1;
        span {
          font-weight: 700;
          color: #ffffff;
        }
        margin: 0px;
      }
    }
    &.is-mobile {
      flex-wrap: wrap;
      div {
        padding: 26px;
        p,
        h4,
        h3 {
          text-align: center;
        }
      }
    }
  }
  .third-section {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }
  .is-desktop {
    display: block;
  }
  .is-mobile {
    display: none;
  }
  @media (max-width: 880px) {
    .is-desktop {
      display: none;
    }
    .is-mobile {
      display: block;
    }
  }
`;
