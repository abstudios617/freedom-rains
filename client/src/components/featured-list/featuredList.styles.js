import styled from 'styled-components';

export const ImgContainer = styled.div`
  height: 125px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px 20px 0 0;

  @media only screen and (max-width: 480px) {
    height: 160px;
    width: 100%;
    button {
      padding: 10px 20px 5px;
    }
  }
`;

export const ProductImage = styled.img`
  width: 300px;
  
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const ProductName = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 10px 10px 10px 20px;
  font-weight: 700;
  font-size: 12px;
`;

export const Product = styled.div`
  width: 300px;
  height: 200px;
  margin: 0 10px 15px;
  background-color: #fff;
  box-shadow: 5px 5px 14px rgb(0 0 0 / 20%);
  border-radius: 20px 20px 0 0;

  @media only screen and (max-width: 480px) {
    width: 96%;
    border-radius: 20px;
    height: 240px;
  }
`;

export const ListProduct = styled.div`
  display: flex;
  justify-content: center;
  margin: 80px auto;
  width: 100%;
  flex-wrap: wrap;

  @media only screen and (max-width: 480px) {
    width: 100%;
    margin: 60px auto;
  }
`;

export const CTA = styled.div`
  border-radius: 20px;
  background-color: #49A429;
  color: #fff;
  text-align: center;
  padding: 4px 4px 5px 4px;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 9px;
  width: 60px;
  margin-left: 20px;

  &:hover {
    cursor: pointer;
  }
`;
