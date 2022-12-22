import styled from 'styled-components';

export const FourOFourImg = styled.img`
  width: 500px;

  @media only screen and (max-width: 480px) {
    width: 80%;
  }
`;

export const FourOFourImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0 40px;
`;

export const FourOFourMessage = styled.div`
  font-size: 16px;
  text-align: center;

  @media only screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const FourOFourRedirectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 18px 0 100px;

  button {
    border-radius: 20px;
  }
`;

export const FourOFourSocialsImg = styled.div`
  width: 20px;

  @media only screen and (max-width: 480px) {
    width: 60%;
  }
`;

export const FourOFourSocialsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 100px;

  button {
    color: #1988FF;
    background-color: #e0f0ff;
    width: 35px;
    border: 0;
    border-radius: 12px;
  }
`;
