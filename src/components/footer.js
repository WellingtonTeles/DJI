import React from "react";
import styled from "styled-components";
import tryIcon from "./../assets/images/tryIcon.png";
import xIcon from "./../assets/images/xIcon.png";
import headIcon from "./../assets/images/headIcon.png";
import chartIcon from "./../assets/images/chartIcon.png";
import djiIcon from "./../assets/images/djiIcon.mp4";

export default function Footer(props) {
  return (
    <FooterWrapper>
      <div className="footer">
        <div className="footer-first is-desktop">
          <video autoplay muted loop class="video-background">
            <source src={djiIcon} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="footer-main">
            <h4>Contract</h4>
            <div className="contract-list">
              <div className="contract-item">
                CA: <span>SKDJFH87SDFH87SD7F7348Y393</span>
              </div>
              <div className="contract-item">
                Name: <span>DJI420</span>
              </div>
              <div className="contract-item">
                Symbol: <span>$DJI</span>
              </div>
              <div className="contract-item">
                Supply: <span>420,000,000</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-first is-mobile">
          <video autoplay muted loop class="video-background">
            <source src={djiIcon} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="footer-main">
            <h4>Contract</h4>
            <div className="contract-list">
              <div className="contract-item">
                CA: <span>SKDJFH87SDFH87SD7F7348Y393</span>
              </div>
              <div className="contract-item">
                Name: <span>DJI420</span>
              </div>
              <div className="contract-item">
                Symbol: <span>$DJI</span>
              </div>
              <div className="contract-item">
                Supply: <span>420,000,000</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-list get-connected">
          <ul>
            <li className="box-list">
              <img src={chartIcon} alt="chartIcon" />
              <img src={headIcon} alt="headIcon" />
              <img src={xIcon} alt="xIcon" />
              <img src={tryIcon} alt="tryIcon" />
            </li>
          </ul>
        </div>
      </div>
    </FooterWrapper>
  );
}
const FooterWrapper = styled.div`
  padding: 48px;
  background: #000000;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  .footer-first {
    display: flex;
    gap: 128px;
    justify-content: center;
    h4 {
      // font-family: Inter;
      font-size: 30px;
      font-weight: 700;
      line-height: 30px;
      color: #ffffff;
      margin-bottom: 11px;
    }
    .footer-main {
      margin-top: auto;
      margin-bottom: auto;
    }
    .contract-list {
      display: flex;
      gap: 10px;
      flex-direction: column;
      .contract-item {
        // font-family: Inter;
        font-size: 16px;
        font-weight: 500;
        line-height: 30px;
        text-align: left;
        color: #a5a9b1;
        span {
          color: white;
        }
      }
    }
  }
  .footer-list {
    border-top: 1px solid #292d39;
    display: flex;
    padding: 24px;
    justify-content: center;
    ul {
      list-style-type: none;
      padding: 0px;
      margin: 0px;
      display: flex;
      gap: 28px;
      li {
        &.box-list {
          display: flex;
          gap: 14px;
          img {
            cursor: pointer;
            width: 18px;
            height: 18px;
            // background: white;
          }
        }
      }
    }
  }
  .is-desktop {
    display: block;
  }
  .is-mobile {
    display: none;
  }

  @media (max-width: 880px) {
    padding: 0px;
    .is-desktop {
      display: none;
    }
    .is-mobile {
      display: block;
    }
    .footer-first.is-mobile {
      video {
        margin-left: auto;
        margin-right: auto;
      }
      .footer-main h4 {
        text-align: center;
      }
      flex-direction: column;
      .contract-list {
        padding-bottom: 36px;
        justify-content: center;
        .contract-item {
          text-align: center;
        }
      }
    }
  }
`;
