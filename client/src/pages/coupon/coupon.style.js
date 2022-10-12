import styled from 'styled-components';

export const DealContain = styled.div`
  text-align: center;

  h5 {
    text-align: center;
    margin-top: 2%;
  }

  select {
    width: 200px;
    height: 41px;
    border-radius: 10px;
    padding: 10px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export const Chrome = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 50px;
  }
`;

export const ChromeCopy = styled.div`
  font-size: 16px;
  color: #000;
  text-align: left;
  line-height: 1.5;
  padding-left: 5px;
`;

export const ChromeSmall = styled.div`
  font-size: 12px;
`;

export const StoreName = styled.div`
  display: inline;
  text-transform: capitalize;
`;

export const NoStores = styled.div`
  color: #0c5460;
  background-color: #d1ecf1;
  border-color: #bee5eb;
  display: inline-block;
  padding: 3% 5%;
  width: 80%;
  border-radius: 20px;
  margin: 2% 5% 0;
`;

export const Save = styled.div`
  margin: 0 0 10px 0;
  text-align: center;
`;

export const FullBar = styled.div`
  width: 500px;
  border-radius: 100px;
  text-transform: uppercase;
  font-weight: bold;
  height: 35px;
  font-size: 20px;
  padding: 5px 2%;
  display: grid;
  align-items: center;
  color: #fff;
  background: #559eff;
  border: 2px solid #000;
  font-family: "Bernhard", sans-serif;
  margin: 0 auto 20px;

  @media only screen and (max-width: 480px) {
    width: 95%;
  }
`;

export const Number = styled.div`
  display: inline;
  color: #49a429;
  font-weight: 700;
  font-size: 16px;
`;

export const SmallLogo = styled.div`
  height: 30px;
  position: relative;
  top: 10px;
  display: inline-block;
  text-align: left;
`;

export const ProductLogo = styled.img`
  width: auto;
  height: 100%;
`;

export const StoreLogo = styled.div`
  h5 {
    margin-bottom: 5px;
  }
  img {
    width: 150px;
    height: 150px;
    margin-bottom: 10px;
  }
`;

export const Center = styled.div`
  margin: 30px 0;
  iframe {
    width: 300px;
    margin: 30px 0;
  }
`;

export const CouponContainer = styled.div`
  margin: 30px 0;
`;

export const Section = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  > span {
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

export const Title = styled.div`
  display: block;
  font-size: 18px;
  font-weight: bold;
`;

export const ShopWithFreedom = styled.div`
  margin: 20px auto;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

export const SWFImg = styled.div`
  width: 55%;
  height: 300px;
  background-color: #D9D9D9;
  @media only screen and (max-width: 480px) {
    height: 120px;
  }
`;

export const SWFtext = styled.div`
  position: relative;
  width: 40%;
  padding: 40px 0 20px 0;

  h1 {
    color: #1988FF;
    font-size: 24px;
  }

  h2 {
    color: #8EC90E;
    font-size: 18px;
    margin-bottom: 50px;
  }

  @media only screen and (max-width: 480px) {
    padding: 10px 0 20px 0;
    h1 {
      font-size: 12px;
    }
  
    h2 {
      font-size: 10px;
      margin-bottom: 25px;
    }
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
`;

