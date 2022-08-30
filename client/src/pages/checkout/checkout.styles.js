import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 80px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 811px;
  height: 2742px;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 10px 16px;
  gap: 5px;
  width: 611px;
  background: #FFFFFF;
  box-shadow: 2px 2px 7px rgba(159, 159, 159, 0.25);
  border-radius: 6px;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;

  &.dropDown {
    margin-left: 12px;
  }
`;

export const InfoHeader = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 27px;
  line-height: 33px;
  display: flex;
  align-items: center;
  color: #3A3A3A;

  span {
    margin-left: 10px;
  }
`;

export const Email = styled.input`
  border: 1px solid #A6A6A6;
  border-radius: 4px;
  margin-top: 18px;
  height: 35px;
  width: 601px;

  ::placeholder {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #B4B4B4;
  }
`;

export const NotificationCheckBox = styled.div`
    margin-top: 18px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 12px 13px 12px 0px;
    gap: 10px;
    width: 419px;
    height: 58px;
`;

export const SaveButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 601px;
  height: 44px;
  background: #1988FF;
  border-radius: 6px;
  border: none;
  color: #FFFFFF;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  cursor: pointer;
`;

export const Login = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: right;
  text-decoration-line: underline;
  color: #000000;
  cursor: pointer;
  float: right;
  margin-left: auto;
  margin-right: 10px;
`;

export const ContactBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 611px;
  height: 55px;
  background: #FFFFFF;
  box-shadow: 2px 2px 7px rgba(159, 159, 159, 0.25);
  border-radius: 6px;

  span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #3C4044;
    margin-left: 12px;
  }
`;

export const Edit = styled.img`
  width: 12px;
  height: 12px;
  margin-bottom: 20px;
`;

export const EditButton = styled.div`
  cursor: pointer;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #3C4044;
  float: right;
  margin-left: auto;

  span {
    margin-left: 0px;
    margin-right: 10px;

    &:hover {
      text-decoration-line: underline;
    }
  }
`;
