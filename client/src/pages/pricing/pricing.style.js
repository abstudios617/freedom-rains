import styled from 'styled-components';
import priceBg from '../../assets/pricing/pricing-bg.png';

export const PackagesSection = styled.div`
  margin-bottom: 70px;
`;

export const Packages = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;

  > div {
    width: 30%;
    text-align: center;
  }

  img {
    width: 150px;
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    > div {
      width: 90%;
      margin-bottom: 30px;
    }
  }
`;

export const PackagesName = styled.div`
  font-weight: 700;
  font-size: 24px;
  margin: 20px 0;
`;

export const PackagesContent = styled.div`
  font-size: 16px;
  color: #696871;
`;

export const PackagesArrow = styled.img`
  width: 50px;
  margin: 0 10px;
`;

export const PackagesTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
`;

export const FeaturedSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  > div {
    width: 40%;
    padding: 5%;
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    > div {
      width: 90%;
      margin-bottom: 10px;
    }
  }
`;

export const FeaturedItem = styled.div`
  filter: drop-shadow(0px 20px 80px rgba(0, 0, 0, 0.15));
  background: #ffffff;
  border-radius: 40px;
  height: 250px;

  img {
    width: 70px;
  }

  @media only screen and (max-width: 480px) {
    height: auto;
  }

  &.featuredBlank {
    background: transparent;
    border-radius: 40px;
    height: 250px;

    @media only screen and (max-width: 480px) {
      height: auto;
    }
  }
`;

export const FeaturedName = styled.div`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const FeaturedContent = styled.div`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
`;

export const FeaturedSpecial = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  .featuredBasic {
    margin-bottom: 20px;
  }
`;

export const FeaturedPopular = styled.div`
  background: #ff7143;
  border-radius: 13.5px;
  color: #fff;
  padding: 10px 20px;
  font-weight: 700;
`;

export const HeaderSection = styled.div`
  background: url(${priceBg}) no-repeat;
  background-size: cover;
  margin-bottom: 30px;

  @media only screen and (max-width: 480px) {
    background: none;
    margin-bottom: 12%;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 100px;

  > div {
    width: 50%;
  }

  @media only screen and (max-width: 480px) {
    padding: 0;
    flex-direction: column;
    > div {
      width: 90%;
      margin-bottom: 30px;
    }
  }
`;

export const HeaderTitle = styled.div`
  font-weight: 700;
  font-size: 40px;
  color: #000000;
  margin-bottom: 30px;
`;

export const HeaderDescription = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #696871;
`;
