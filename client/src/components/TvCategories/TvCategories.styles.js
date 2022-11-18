import styled from 'styled-components';

export const BlueTriangle = styled.img`
  margin-left: 125px;

  @media only screen and (max-width: 480px) {
    margin-left: 100px;
    margin-top: -15px;
  }
`;

export const CategoriesContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-top: -6px;
  background-color: #559EFF;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const CategoriesSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 213px;
  height: 280px;
  position: absolute;
  margin: 60px 100px;

  span {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #F9F9F9;
    padding-bottom: 40px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  &.row2 {
    width: 243px;
    height: 216px;
    background-color: #559EFF;
    margin-left: 404px;
    margin-top: 92px;
  }

  &.row3 {
    width: 160px;
    height: 216px;
    background-color: #559EFF;
    margin-left: 564px;
    margin-top: 92px;
  }

  &.row4 {
    width: 160px;
    height: 216px;
    background-color: #559EFF;
    margin-left: 724px;
    margin-top: 92px;
  }
`;

export const Line = styled.div`
  width: 240px;
  height: 0px;
  border: 1px solid #F9F9F9;
  transform: rotate(90deg);
  margin-left: 180px;
  margin-top: 200px;
  background-color: #F9F9F9;
  @media only screen and (max-width: 480px) {
    &.web {
      display: none;
      width: 10px;
    }
    position: absolute;
    transform: rotate(180deg);
    margin: 0;
    top: 42%;
    left: 15%;
    width: 340px;
  }
`;

export const CategoriesContainerMobile = styled.div`
  display: none;
  position: relative;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 900px;
    margin-top: -6px;
    background-color: #559EFF;
    display: flex;
    flex-direction: row;
  }
`;

export const CategoriesSectionMobile = styled.div`
  display: none;

  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-top: 110px;
    margin-left: 100px;

    span {
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #F9F9F9;
      margin-bottom: 48px;
      cursor: pointer;
  
      &:hover {
        text-decoration: underline;
      }
    }

    &.row2 {
      margin-left: 290px;
      margin-top: 110px;
    }

    &.row3 {
      margin-left: 100px;
      margin-top: 500px;

      span {
        margin-bottom: 40px;
      }
    }

    &.row4 {
      margin-left: 290px;
      margin-top: 500px;

      span {
        margin-bottom: 40px;
      }
    }
  }
`;
