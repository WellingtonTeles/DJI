import React from "react";
import styled from "styled-components";

export default function CardSection(props) {
  const { title, cards, footer = "" } = props;
  return (
    <CardSectionWrapper className="card-section">
      <h3>{title}</h3>
      <div className="home-card-list">
        {cards.map((card, cardIndex) => (
          <div className="home-card" key={"card-" + cardIndex}>
            <div className="home-card-img">
              <img className="img img1" src={card.src} alt="Card-alt" />
              <img className="img img2" src={card.src1} alt="Card-alt" />
            </div>
            <h4>{card.name}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      {footer != "" && <div className="card-footer">{footer}</div>}
    </CardSectionWrapper>
  );
}

const CardSectionWrapper = styled.div`
  &.card-section {
    padding: 68px;
    h3 {
      // font-family: Inter;
      font-size: 38px;
      font-weight: 500;
      line-height: 45.99px;
      text-align: center;
      color: #e8e8e8;
      max-width: 390px;
      margin: 0px auto;
      margin-bottom: 58px;
    }
    .home-card-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 1074px;
      margin: 0px auto;
      gap: 24px;
      .home-card {
        max-width: 342px;
        background: #0f1010;
        box-shadow: 1px 1px 2px 0px #ffffff0d inset;
        padding: 24px;
        border-radius: 18px;
        display: flex;
        gap: 10px;
        flex-direction: column;
        .home-card-img {
          position: relative;
          height: 122px;
          width: 100%;
          img {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            opacity: 0;
            // transition: opacity 0.5s ease;
            transition:
              transform 0.5s ease,
              opacity 0.5s ease;
          }
          .img1 {
            opacity: 1;
            transition:
              transform 0.5s ease,
              opacity 0.5s ease;
          }
        }
        &:hover .img1 {
          opacity: 0;
          transform: translateY(-20px);
        }

        &:hover .img2 {
          opacity: 1;
          transform: translateX(0);
        }
        h4 {
          // font-family: Inter;
          font-size: 18px;
          font-weight: 500;
          line-height: 21.78px;
          text-align: left;
          color: #e8e8e8;
          margin-top: 6px;
          margin-bottom: 0px;
        }
        p {
          // font-family: Inter;
          font-size: 16px;
          font-weight: 400;
          line-height: 26px;
          text-align: left;
          color: #6e7073;
          margin: 0px;
          padding-right: 30px;
        }
      }
    }
    .card-footer {
      //   font-family: Inter;
      font-size: 24px;
      font-weight: 400;
      line-height: 34px;
      text-align: center;
      color: #e8e8e8;
      max-width: 600px;
      margin: 0px auto;
      margin-top: 44px;
    }
    @media (max-width: 880px) {
      padding: 68px 20px;
      h3 {
        font-size: 30px;
        line-height: 36.31px;
        margin-bottom: 34px;
      }
    }
  }
`;
