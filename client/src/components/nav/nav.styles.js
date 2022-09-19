import styled from 'styled-components';


export const NavContainer = styled.div`
  z-index: 12;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  background: linear-gradient( to right, #2F7DA1, #14365B, #F9193D);
  @media only screen and (max-width: 480px) { 
    height: auto;
    width: 100%;
  }
`;

// Start of nav top
export const NavTop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 480px) {
    display:none;
  }
`;



export const Coupons = styled.li`
  border-bottom: solid 3px #1988FF;
  transition-delay: 1s;
  transition: 0.1s;
  :hover{
    cursor:pointer 
  }
span {
  color: white;
}
`;

export const LogoContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
//inside logo container
export const Logo = styled.img`
  width: 115px;
  height: 40px;
  :hover{
    cursor: pointer;
  }
`;
//end of logo container


export const BtnContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
//stuff inside button container comes from button styles


export const UserDataContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
//Inside UserDataContainer
export const UserIcons = styled.img`
  height: 30px;
`;

export const UserContainer = styled.div`
display: flex;
flex-direction: row;
gap: 5px;
.item1 {
  font-weight: bold;
}
.item2 {
  font-size: 12px;
}
&:hover{
  cursor: pointer;
}
`;
//End of UserDataContainer

// End of nav top

// Start of nav bottom
export const NavBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 12px;
  border-top: 2px solid rgba(255, 255, 255, 0.8);
  background-color: #1988FF;
  @media only screen and (max-width: 480px) {
    display: none;
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

export const NavItemsContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  margin-left: 180px;
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
`;

export const BusinessContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  margin-right: 150px;
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
`;

export const FreedomTV = styled.li`
  span {
    color: white;
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

`;


export const Image = styled.img`
  position: relative;
  left: -3px;
`;


//End of nav bottom
