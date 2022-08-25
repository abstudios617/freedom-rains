import styled from 'styled-components';

export const Brands = styled.div`
  display: flex;
  justify-content: space-between;
  p:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
    overflow: auto;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const RoundImg = styled.img`
  width: 150px;
  border-radius: 50%;
  :hover {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  width: 960px;
  padding: 20px 20px 500px;
  margin: 0 auto;
  @media only screen and (max-width: 480px) {
    width: 96%;
    padding: 2%;
  }
`;

export const Links = styled.button`
  margin: 30px 0;
  background: transparent;
  border: none;
  padding: 0;
`;

export const LinkText = styled.span`
  font-size: 16px;
  line-height: 32px;
  font-weight: 700;
  margin-top: 30px;
  text-align: center;
  color: #559eff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Alert = styled.div`
  color: #b7211a;
  font-size: 13px;
  margin-left: 10px;
  margin-top: 5px;
`;

export const ContactFields = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  line-height: 32px;
  margin: 10px 0 20px 0;
  text-align: center;
  span {
    font-weight: 700;
    font-size: 30px;
  }
`;

export const SubTitle = styled.div`
  width: 300px;
  margin: 20px auto;
  line-height: 25px;
  text-align: center;
`;

export const Update = styled.div`
  font-size: 18px;
  line-height: 32px;
  font-weight: 700;
  margin: 10% 10%;
  text-align: center;
  color: #000;
  @media only screen and (max-width: 480px) {
    margin: 10% 2%;
  }
`;

export const UpdateToken = styled.div`
  font-size: 18px;
  line-height: 32px;
  font-weight: 700;
  margin-top: 20px;
  text-align: center;
  color: #49a429;
`;

export const HorizontalBtn = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HorizontalBtnButton = styled.button`
  padding: 12px 70px 8px;
`;
