import styled from 'styled-components/macro';

export const ImgContainer = styled.div`
  height: 180px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;

  @media only screen and (max-width: 480px) {
    height: 164px;
    button {
      padding: 10px 20px 5px;
    }
  }
`;

export const ProductImage = styled.img`
  width: 270px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  display: flex;
  width: 100%;
  justify-content: flex-start;

  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const View = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-right: 15px;
  font-size: 13px;

  &:hover {
    cursor:pointer;
  }
`;


export const SectionText = styled.div`
  margin: 30px 0;
  width: 960px;
  display: flex;

  @media only screen and (max-width: 480px) {
    margin-top: 0;
  }
`;

export const ProductName = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  font-weight: 700;
  font-size: 13px;
  position: absolute;
  bottom: 0;
  height: 20px;
  width: 176px;
  background-color: white;
  border-radius: 0 0 20px 20px;
  padding: 4px 0 3px;
  opacity: .96;

  @media only screen and (max-width: 480px) {
    width: 160px;
  }
`;

export const GradientContainer = styled.div`
  background: linear-gradient(transparent, white);
  position: absolute;
  bottom: 26px;
  height: 26px;
  width: 176px;

  @media only screen and (max-width: 480px) {
    width: 160px;
  }
`;

export const ProductContainer = styled.div`
  width: 176px;
  height: 180px;
  margin: 0 8px 15px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 1px 3px 3px rgb(0 0 0 / 10%);
  position: relative;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 480px) {
    width: 160px;
    height: 164px;
  }
`;

export const ListProduct = styled.div`
  display: flex;
  margin: 60px auto;
  width: 100%;
  flex-wrap: wrap;

  @media only screen and (max-width: 480px) {
    width: 100%;
    margin: 40px auto;
  }
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  flex-wrap: wrap;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
