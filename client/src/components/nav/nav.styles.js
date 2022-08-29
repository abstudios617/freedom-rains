import styled from 'styled-components';


export const NavContainer = styled.div`
  z-index: 12;
  width: 100%;
  margin: 0 auto;
  height: 127px;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
  }
`;


export const NavTop = styled.ul`
  display: flex;
  
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
  height: 60px;
 
  > li {
    width: auto;
    list-style: none;
    padding: 10px;
    font-size: 14px;
    text-align: center;
    text-decoration: none;
    color: #333333;
    font-weight: 700;
    > span {
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 480px) {
    display: none;
  }

  &.bottom {
    font-size: 12px;
    position: relative;
    border-top: 2px solid rgba(255, 255, 255, 0.8);
    padding: 0px;
    align-items: center;
    height: 35px;
    background-color: #1988FF;
    @media only screen and (max-width: 480px) {
      width: 100%;
      padding: 2% 0 4%;
      margin-top: 4%;
      
      div {
        margin-bottom: 3%;
      }
    }
  }
`;

export const NavBottom = styled.ul`
  display: flex;
  
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
  height: 60px;
 
  > li {
    width: auto;
    list-style: none;
    padding: 10px;
    font-size: 14px;
    text-align: center;
    text-decoration: none;
    color: #333333;
    font-weight: 700;
    > span {
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 480px) {
    display: none;
  }

  &.bottom {
    font-size: 12px;
    position: relative;
    border-top: 2px solid rgba(255, 255, 255, 0.8);
    padding: 0px;
    align-items: center;
    height: 35px;
    background-color: #1988FF;
    @media only screen and (max-width: 480px) {
      width: 100%;
      padding: 2% 0 4%;
      margin-top: 4%;
      
      div {
        margin-bottom: 3%;
      }
    }
  }
`;

export const SubNav = styled.ul`
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

  .subResources {
    display: block;
  }

  .subSignIn {
    display: block;
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
  span {
    color: white;
  }
  .active {
    border-bottom: 5px solid white;
  }
`;

export const FreedomTV = styled.li`
  span {
    color: white;
  }
  .active {
    border-bottom: 5px solid white;
  }
  &:hover {
    .subFreedomtv {
      display: block;
    }
  }
`;

export const Activities = styled.li`
  span {
    color: white;
  }
  .active {
    border-bottom: 5px solid white;
  }
  &:hover {
    .subActivities {
      display: block;
    }
  }
`;

export const Resources = styled.li`
  span {
    color: white;
  }
  .active {
    border-bottom: 5px solid white;
  }

  &:hover {
    .subResources {
      display: block;
    }
  }
  &.forbusiness {
    position: absolute;
    right: 20px;
  }

`;

export const SignIn = styled.li`
  &:hover {
    .subSignIn {
      display: block;
    }
  }
`;

export const Box = styled.div`
.item1 {
  width: 100%;
  font-weight: bold;
}

.item2 {
  width: 100px;
  font-size: 10px;
  display: inline;
  span {
    cursor: pointer;
    font-size: 15px;
  }
}

.container {
  width: 100px;
  display: flex;
  flex-wrap: wrap;
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
`;

export const Logo = styled.img`
  width: 150px;
  margin-left: -30px;
`;

export const Image = styled.img`
  position: relative;
  left: -3px;
`;

export const ProfileImage = styled.div`
  height: 80px;
  width: 135px;
  overflow: hidden;
  position: relative;
  top: 20px;
  left: 40px;
  img {
    height: 35px;
  }

  label{
    width: 100%;
    bottom: 0;
    position: absolute;
    text-align: center;
    font-size: 15px;
    border-radius: 50%;
    cursor: pointer;
    color: white;
  }
`;


export const Account = styled.span`
  display: flex;
  align-items: center;
  img {
    width: 20px;
    margin-right: 5px;
  }
`;

export const SearchIcon = styled.img`
  width: 25px;
  cursor: pointer;
  position: relative;
  left: -25px;
`;

export const SearchX = styled.div`
  font-size: 16px;
  position: relative;
  right: 10px;
  cursor: pointer;
`;
