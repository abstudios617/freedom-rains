import styled from 'styled-components';

export const LoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  height: 85vh;
`;

export const Split = styled.div`
  font-size: 16px;
  line-height: 32px;
  font-weight: 700;
  text-align: center;
  margin: 0 15px;
`;

export const Submit = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  button.allWhite {
    margin-top: 15px;
  }
`;

export const Star = styled.div`
  color: red;
  font-size: 12px;
  font-weight: 600;
`;

export const CustomerLogin = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const LoginBox = styled.div`
  width: 80%;
  height: 400px;
  padding: 0 3%;
`;

export const LoginHeader = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 16px;
`;

export const LoginSubHeader = styled(LoginHeader)`
  font-size: 14px;
  margin-top: 20px;
  font-weight: normal;
`;

export const LoginBenefits = styled.ul`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  margin-bottom: 30px;

  li {
    margin-bottom: 10px;
  }
`;

export const ButtonImg = styled.img`
  width: 22px;
  height: 22px;
  margin-bottom: 2px;
  margin-right: 2px;
  vertical-align: middle;
  box-sizing: border-box;
`;

export const ForgetButton = styled.div`
  width: 203px;
  height: 27px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  color: #3c4044;
  text-decoration: underline;
  vertical-align: top;
  text-underline-offset: 6px;

  &:hover {
    cursor: pointer;
    color: gray;
  }
`;

export const Or = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 22.53px;
  line-height: 27px;
  line-height: 100%;
`;

export const NoAccount = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 21px;
  font-weight: bold;
  line-height: 27px;
  line-height: 100%;
`;
