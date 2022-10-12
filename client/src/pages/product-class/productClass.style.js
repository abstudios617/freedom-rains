import styled from 'styled-components';

export const ProductRow = styled.div`
  display: flex;
  margin-bottom: 50px;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ProductImg = styled.img`
  width: 300px;
  height: auto;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;

  .moreThanOne {
    width: 280px;
  }

  @media only screen and (max-width: 480px) {
    margin: 5% auto 0;
  }
`;

export const ImgContain = styled.div`
  display: flex;
  width: 50%;
  height: 480px;
  align-items: center;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 200px;
  }
`;

export const ProdContent = styled.div`
  width: 47%;
  padding-left: 3%;
  background: #F9F9F9;
  border-radius: 20px;
  padding-top: 3%;

  @media only screen and (max-width: 480px) {
    margin-top: 10%;
    width: 100%;
    padding: 0;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 50px 0;
  width: 100%;
  button {
    padding: 10px 20px 5px;
    margin-right: 20px;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const Store = styled.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
`;

export const Price = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin: 35px 0;
`;

export const Description = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #3C4044;
  margin-bottom: 30px;
`;

export const ProdDetail = styled.ul`
  margin-bottom: 15px;
`;

export const Disclaimer = styled.div`
  color: rgba(0, 0, 0, 0.4);
  font-size: 12px;
  margin-top: 20px;
`;

export const HeaderLine = styled.div`
  color: #999;
  font-weight: bolder;
  margin-bottom: 20px;
`;

export const ProdHeader = styled.div`
  font-weight: 700;
  margin-bottom: 5px;
`;

export const Relate = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin-left: 15px;
`;

export const ProductDetails = styled.ul`
  li {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
  }
`;

export const ProductDetailsList = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`;

export const Breadcrumb = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #A9A9A9;
  display: flex;

  div {
    color: black;
    margin-left: 10px;
  }
`;

export const SecondaryImg = styled.div`
  background: #D9D9D9;
  height: 100px;
  width: 100px;
  margin-left: 20px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const SecondaryImgContain = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  margin-left: -40px;
`;

export const Arrow = styled.img`
  width: 60px;
  height: auto;
  margin-top: 20px;
  cursor: pointer;
`;

export const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Platform = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 85px;
  height: 30px;
  border: 4px solid #49A429;
  border-radius: 0px 18px 18px 18px;
  flex: none;
  order: 2;
  flex-grow: 0;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 16px;
  color: #49A429;
  margin-left: 10px;
  margin-bottom: 15px;
  text-transform: uppercase;
  background-color: #F9F9F9;

  &.black {
    border: 4px solid #3C4044;
    color: #3C4044;
  }
`;
