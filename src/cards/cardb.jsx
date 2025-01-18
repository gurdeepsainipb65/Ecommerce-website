import React from "react";
import styled from "styled-components";
import Aos from "aos";

const Carddb = ({ image, name }) => {
  return (
    <StyledWrapper>
      <div data-aos="fade-up" data-aos-duration="1500" className="container">
        <div className="card_box" style={{ backgroundImage: `url(${image})` }}>
          <Name name={name}></Name>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card_box {
    width: 200px;
    height: 250px;
    border-radius: 20px;
    position: relative;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.55);
    cursor: pointer;
    transition: all 0.3s;
    background-size: cover;
    background-position: center;
  }

  .card_box:hover {
    transform: scale(0.9);
  }
`;

const Name = styled.span`
  position: absolute;
  overflow: hidden;
  width: 150px;
  height: 150px;
  top: -10px;
  left: -10px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    position: absolute;
    width: 150%;
    height: 40px;
    background-image: linear-gradient(
      45deg,
      #ff6547 0%,
      #ffb144 51%,
      #ff7053 100%
    );
    transform: rotate(-45deg) translateY(-20px);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.23);
    content: "${(props) => props.name}";
  }

  &::after {
    content: "";
    position: absolute;
    width: 10px;
    bottom: 0;
    left: 0;
    height: 10px;
    z-index: -1;
    box-shadow: 140px -140px #cc3f47;
    background-image: linear-gradient(
      45deg,
      #ff512f 0%,
      #f09819 51%,
      #ff512f 100%
    );
  }
`;

export default Carddb;
