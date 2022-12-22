import styled from 'styled-components';
import adDesktopBg from '../../assets/promo/promo-bg.jpg';
import adMobileBg from '../../assets/promo/promo-bg-mobile.jpg';

export const Content = styled.div`
  font-size: 18px;
  line-height: 32px;
  width: 400px;
  font-weight: 700;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Promotion = styled.div`
  background-image: url(${adDesktopBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  input {
    box-shadow: 1px 1px #000;
    text-indent: 5px;
  }

  h2 {
    font-family: "Bernhard", sans-serif;
    font-size: 50px;
    font-weight: 100;
    margin: 20px 0;
    line-height: 0.9;
  }

  @media only screen and (max-width: 480px) {
    width: 90%;
    padding: 5%;
    background-image: url(${adMobileBg});

    h2 {
      font-size: 35px;
    }

    input {
      width: 100%;
    }
  }
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  margin: 0 auto;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    width: auto;
  }
`;

export const Retry = styled.div`
  cursor: pointer;
  color: #559eff;
  text-decoration: underline;
`;

export const Info = styled.div`
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.8);
  padding: 0 30px 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 480px) {
    width: 76%;
    padding: 0 12% 7%;
  }
`;

export const Response = styled.div`
  margin: 0 auto;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 5px;

  @media only screen and (max-width: 480px) {
    width: 76%;
    padding: 0 12% 7%;
  }
`;
