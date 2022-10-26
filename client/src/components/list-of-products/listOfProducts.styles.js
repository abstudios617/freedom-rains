import styled from 'styled-components';

export const ImgContainer = styled.div`
  height: 140px;
  display: grid;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  &.featured {
    height: 200px;
  }
  .imgContainerSearch {
    height: 160px;
    overflow: hidden;
    display: grid;
    align-items: center;
  }

  .homepage {
    position: static; 
    z-index: -1;
    height: 160px;
    width: 110px;
  }

  @media only screen and (max-width: 480px) {
    &.homepage {
      position: static; 
      z-index: -1;
      height: auto;
      width: 100%;
    }
  }
`;

export const ProdImg = styled.img`
  width: 100%;
  height: auto;
  display:block;

  &.featured {
    width: 100%;
    height: 100%;
    padding: 0;
  }
  .prodImgSearch {
    width: 220px;
    height: auto;
  }

  &.homepage {
    width: 110px;
    height: 110px;
    padding: 0;
    object-fit: cover;
  }
`;

export const ProductName = styled.div`
  width: 180px;
  height: 66px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #3C4044;
  flex-grow: 0;
  margin-left: 10px;
  overflow: hidden;
  margin-bottom: 10px;
`;

export const ProductNameHomepage = styled.div`
  font-weight: 700;
  margin: 5px 0 10px;
  font-size: 12px;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  height: 30px;

  @media only screen and (max-width: 480px) {
    width: 94%;
    margin: 15px 0;
    font-size: 12px;
  }
`;

export const ListProd = styled.div`
  display: flex;
  margin: 15px auto 0;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;

  &.listProdSearch {
    display: flex;
    justify-content: center;
    margin: 15px auto 0;
    width: 100%;
    flex-wrap: wrap;

    @media only screen and (max-width: 480px) {
      flex-wrap: nowrap;
      padding-top: 30px;
      overflow-x: auto;
      overflow-y: hidden;
      height: 100%;
      justify-content: space-between;
      ::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .productLocal {
    width: 200px;
    margin: 0 15px 15px;
    cursor: pointer;
    background-color: #fff;
    box-shadow: 5px 7px 7px rgb(0 0 0 / 20%);
    border: 1px solid rgb(0 0 0 / 0.1);
    border-radius: 10px;

    @media only screen and (max-width: 480px) {
      width: 45%;
      margin: 0 2% 5%;
    }
  }

  .productLocalSearch {
    width: 200px;
    margin: 0 10px 15px;
    cursor: pointer;
    background-color: #fff;
    &:hover {
      border-radius: 10px;
      box-shadow: 0 2px 8px #333;
    }

    @media only screen and (max-width: 480px) {
      border-radius: 10px;
      box-shadow: 0 2px 8px #333;
    }
  }

  .productLocalHomepage {
    width: 200px;
    margin: 0 15px 15px;
    cursor: pointer;
    border-radius: 10px;

    @media only screen and (max-width: 480px) {
      width: 45%;
      margin: 0 2% 5%;
    }
  }

  .productBlack {
    width: 200px;
    margin: 0 15px 15px;
    cursor: pointer;
    background-color: #fff;
    box-shadow: 5px 7px 7px rgb(0 0 0 / 20%);
    border: 1px solid rgb(0 0 0 / 0.1);
    border-radius: 10px;

    @media only screen and (max-width: 480px) {
      width: 45%;
      margin: 0 2% 5%;
    }
  }

  .productBlackSearch {
    width: 200px;
    margin: 0 10px 15px;
    cursor: pointer;
    background-color: #fff;
    &:hover {
      border-radius: 10px;
      box-shadow: 0 2px 8px #333;
    }

    @media only screen and (max-width: 480px) {
      border-radius: 10px;
      box-shadow: 0 2px 8px #333;
    }
  }

  .productBlackHomepage {
    width: 200px;
    margin: 0 15px 15px;
    cursor: pointer;
    border-radius: 10px;

    @media only screen and (max-width: 480px) {
      width: 45%;
      margin: 0 2% 5%;
    }
  }


  .platformLocalSearch {
    background-color: #49a429;
    color: #fff;
    text-align: left;
    padding: 5px 10px;
    text-transform: capitalize;
    font-weight: 700;
    width: 40%;
    margin-top: 15px;
  }

  
  .platformLocal {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    width: 85px;
    height: 30px;
    background: #FFFFFF;
    border: 4px solid #49A429;
    border-radius: 0px 18px 18px 18px;
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
  }

  .platformLocalHomepage {
    border: 4px solid #49a429;
    border-radius: 0 20px 20px 30px;
    color: #49a429;
    text-align: center;
    padding: 2px 12px 2px 8px;
    text-transform: uppercase;
    font-weight: 700;
    width: 19%;
    margin: 15px 0 0;
    font-size: 8px;
  }

  .platformBlackSearch {
    background-color: #3C4044;
    color: #fff;
    text-align: left;
    padding: 5px 10px;
    text-transform: capitalize;
    font-weight: 700;
    width: 40%;
    margin-top: 15px;
  }
  
  .platformBlack {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    width: 85px;
    height: 30px;
    background: #FFFFFF;
    border: 4px solid #3C4044;
    border-radius: 0px 18px 18px 18px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    line-height: 16px;
    color: #3C4044;
    margin-left: 10px;
    margin-bottom: 15px;
    text-transform: uppercase;
  }

  .platformBlackHomepage {
    border: 4px solid #3C4044;
    border-radius: 0 20px 20px 30px;
    color: #3C4044;
    text-align: center;
    padding: 2px 12px 2px 8px;
    text-transform: uppercase;
    font-weight: 700;
    width: 19%;
    margin: 15px 0 0;
    font-size: 8px;
  }

  @media only screen and (max-width: 480px) {
    .platformLocalHomepage {
      margin: 15px 0 0 0;
      padding: 2px 14px 2px 8px;
      font-size: 7px;
    }

    .platformBlackHomepage {
      margin: 15px 0 0 0;
      padding: 2px 14px 2px 8px;
      font-size: 7px;
    }
`;

export const ProductPrice = styled.div`
  width: 58px;
  height: 22px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #828A94;
  margin: 10px;

  &.sale {
    color: #8EC90E;
  }

  &.homepage {
    color: #6D6D6D;
    font-size: 12px;
    padding: 0 0 5px;
    margin: 0;
  }

  @media only screen and (max-width: 480px) {
    &.homepage {
      color: #6D6D6D;
      font-size: 10px;
      padding: 0 0 5px;
    }
`;

export const Icon = styled.div`
  display: block;
  position: absolute;
  right: 5px;
  top: 5px;
  :hover {
    cursor: pointer;
  }
`;

export const ShopBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 10px;

  @media only screen and (max-width: 480px) {
    button {
      padding: 10px 10px 5px;
      &:first-child {
        padding: 8px 8px 0;
      }
    }
  }
`;

export const FavBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 10px;
  flex-direction: column;
  margin-top: 10px;
`;

export const HomepageProduct = styled.div`
  margin: 0 5px;
  width: 115px;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const ProdName = styled.div`
  text-transform: capitalize;
  font-weight: 700;
  font-size: 24px;
`;
