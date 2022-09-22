import styled from 'styled-components';
import helperBg from '../../assets/services/helperBackground.png';

export const Title = styled.div`
  font-size: 25px;
  font-weight: 900;
  color: #49a429;
  padding: 30px 0px 30px 0px;
`;

export const PortfolioTitle = styled.div`
  font-size: 25px;
  font-weight: 900;
  padding: 30px 0px 30px 0px;
  color: #FFFF;
`;

export const Description = styled.div`
  font-size: 16px;
  width: 80%;
  margin: 20px auto 0;
  font-weight: 900;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const HelpContainer = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  letter-spacing: 0.02em;
  color: rgba(0, 0, 0, 0.5);
  border-bottom: 30px solid #a7cafc;
  padding-bottom: 10px;
`;

export const HelpContainerImage = styled.img`
  width: 30%;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const HelpNumberOne = styled.div`
  display: flex;
  align-items: center;
  background: rgb(0 0 0 / 0.05);
  width: 75%;
  padding: 1% 2%;
  border-radius: 10px;
  margin-bottom: 10px;

  img {
    width: 20px;
    height: 100%;
  }

  @media only screen and (max-width: 480px) {
    width: 96%;

    img {
      width: 30px;
    }
  }
`;

export const HelpNumberOneContent = styled.div`
  margin-left: 2%;
  font-size: 14px;
  font-weight: 700;
  color: #000;
`;

export const HelpBg = styled.div`
  background: url(${helperBg});
  background-size: 69%;
  background-repeat: no-repeat;
  background-position: right;

  @media only screen and (max-width: 480px) {
    background: none;
  }
`;

export const HelpTitle = styled.div`
  font-weight: 700;
  font-size: 50px;
  line-height: 120%;
  width: 70%;
  margin-bottom: 20px;
  color: #000;

  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 30px;
  }
`;

export const HelpContent = styled.div`
  width: 90%;
  margin: 20px 0;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const HelpLink = styled.a`
  text-decoration-line: underline;
  text-transform: capitalize;
  color: #559eff;
  font-weight: 700;
`;

export const ServiceContainer = styled.div`
  margin: 70px 0;
  padding: 30px;
  text-align: center;

  button {
    margin-top: 30px;
  }

  @media only screen and (max-width: 480px) {
    background-image: none;
  }
`;

export const ServiceItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;

  @media only screen and (max-width: 480px) {
    flex-wrap: nowrap;
    height: auto;
  }
`;

export const ProductItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 30px 0;

  @media only screen and (max-width: 480px) {
    justify-content: start;
  }
`;

export const AdsItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const ServiceItem = styled.div`
  width: 30%;
  margin: 2% 1%;
  display: flex;
  flex-direction: row;
  flex-basis: 90px;

  img {
    width: 80px;
  }

  @media only screen and (max-width: 480px) {
    width: 44%;
    margin: 2% 3%;
    flex-basis: auto;
  }
`;

export const ServiceItemTitle = styled.div`
  font-weight: 700;
  margin: 20px 20px;
`;

export const ServiceItemDescription = styled.div`
  color: rgb(0 0 0 / 0.5);
  font-size: 14px;
`;

export const ProductContainer = styled.div`
  text-align: center;
  margin: 50px 0;
  background-color: yellow;
`;

export const AdsContainer = styled.div`
  text-align: center;
  margin: 50px 0;
`;

export const ProcessContainer = styled.div`
  text-align: center;
  margin: 50px 0;
`;

export const ProductItem = styled.div`
  width: 30%;
  margin: 0 1%;

  img {
    width: 100%;
  }

  @media only screen and (max-width: 480px) {
    width: 44%;
    margin: 2% 3%;
  }
`;

export const ProductItemTitle = styled.div`
  font-weight: bold;
`;

export const AdsItemTitle = styled.div`
  font-weight: bold;
`;

export const ProductItemDescription = styled.div`
  font-size: 14px;
  margin: 5px 0 20px;
`;

export const AdsItemDescription = styled.div`
  font-size: 14px;
  margin: 5px 0 20px;
`;

export const AdsItem = styled.div`
  width: 46%;
  margin: 0 2%;

  iframe {
    width: 100%;
  }

  @media only screen and (max-width: 480px) {
    width: 44%;
    margin: 2% 3%;
  }
`;

export const ProcessItemWrapper = styled.div`
  display: flex;
  margin: 30px 0;
`;

export const ProcessItemImage = styled.img`
  width: 40%;
  height: 100%;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const ProcessItemContent = styled.div`
  margin-left: 3%;

  .descript {
    margin-left: 0;
    margin-bottom: 30px;
    width: 100%;
    text-align: left;
  }
`;

export const ProcessItem = styled.div`
  display: flex;
  text-align: left;
  margin: 30px 0;

  img {
    margin-right: 20px;
    height: 100%;
  }
`;

export const ProcessItemTitle = styled.div`
  font-weight: 700;
`;

export const ProcessItemDescription = styled.div`
  font-size: 14px;
  color: rgb(0 0 0 / 0.5);
  margin-top: 5px;
`;

export const Quote = styled.div`
  background: rgba(18, 84, 255, 0.8);
  color: #fff;
  height: 150px;
  padding: 20px;
  display: flex;
  margin-bottom: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const QuoteMessage = styled.div`
  font-size: 25px;
  font-weight: 700;
`;

export const QuoteTag = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin: 20px 0 0 80%;

  @media only screen and (max-width: 480px) {
    width: 100%;
    margin: 20px 0 0 0;
    text-align: right;
  }
`;

export const TestimonyContainer = styled.div`
  display: flex;
  margin: 70px 0;
`;

export const TestimonyContainerImage = styled.img`
  width: 45%;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const TestimonyItemWrapper = styled.div`
  margin-left: 3%;

  .descript {
    margin-left: 0;
    margin-top: 10px;
    width: 100%;
  }
`;

export const TestimonyItemLabel = styled.div`
  font-weight: 700;
  margin: 30px 0 15px;
`;

export const TestimonyItemUser = styled.div`
  display: flex;
  margin: 20px 0;
  align-items: center;
`;

export const TestimonyItemUserContent = styled.div`
  margin-left: 2%;
`;

export const TestimonyItemUserTitle = styled.div`
  font-weight: 700;
`;

export const TestimonyItemUserDescription = styled.div`
  color: rgb(0 0 0 /0.5);
  font-size: 14px;
  margin-top: 10px;
`;

export const ProductItemImg = styled.img`
  width: 1000px;
  height: 200px;
`;

export const PortfolioCarouselContainer = styled.div`
  text-align: left;
`;
