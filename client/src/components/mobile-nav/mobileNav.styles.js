import styled from 'styled-components';

export const FullWidth = styled.div`
  background: #fff;
`;

export const Container = styled.div`
  z-index: 12;
  width: 1000px;
  margin: 0 auto;
  display: flex;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
  background: #559eff;
  justify-content: flex-start;
  padding-left: 15px;
  > li {
    width: auto;
    list-style: none;
    padding: 10px;
    font-size: 14px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    > span {
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
  background: #559eff;
  justify-content: flex-start;
  justify-content: flex-end;
  padding-right: 15px;
  > li {
    width: auto;
    list-style: none;
    padding: 10px;
    font-size: 14px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    > span {
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const SubNav = styled.div`
  > li {
    font-size: 12px;
    list-style: none;
    padding: 10px 0 10px 15px;
    text-align: left;
    color: #000;
    font-weight: normal;
    cursor: pointer;
    &:hover {
      background: #fff;
    }
  }
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  width: 150px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 0;
  margin: 10px 0 0 -80px;
`;

export const MobileNavComponent = styled.ul`
  @media only screen and (max-width: 480px) {
    display: block;
    width: 90%;
    font-size: 24px;
    padding: 2% 5%;
    background: #fff;
    height: 100vh;
    list-style: none;
    margin: 0;
    li {
      margin: 5% 0;
      padding-bottom: 2%;
      border-bottom: 1px solid rgba(85, 158, 255, 0.9);
      color: rgba(0, 0, 0, 0.8);
      cursor: pointer;
      ul {
        padding: 0 10%;
        font-size: 20px;
        list-style: none;
      }
      li {
        margin: 5% 0;
        padding-bottom: 4%;
        border-bottom: 1px solid #49a429;
        color: rgba(0, 0, 0, 0.8);
        cursor: pointer;
      }
    }
  }
`;

export const WelcomeSection = styled.li`
  padding: 10px !important;
  cursor: default !important;
`;

export const WelcomeCopy = styled.div`
  text-align: center;
`;

export const WelcomeBtn = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
  button {
    padding: 5px 10px 2px;
    font-size: 12px;
  }

  @media only screen and (max-width: 480px) {
    button {
      padding: 10px 20px 4px;
      font-size: 16px;
    }
  }
`;

export const Exclusive = styled.li`
  &:hover {
    .subExclusive {
      display: block;
    }
  }
`;

export const Coupons = styled.li`
  &:hover {
    .subCoupons {
      display: block;
    }
  }
`;

export const FreedomTV = styled.li`
  &:hover {
    .subFreedomtv {
      display: block;
    }
  }
`;

export const Activities = styled.li`
  &:hover {
    .subActivities {
      display: block;
    }
  }
`;

export const Resources = styled.li`
  &:hover {
    .subResources {
      display: block;
    }
  }
`;

export const SignIn = styled.li`
  &:hover {
    .subSignIn {
      display: block;
    }
  }
`;


