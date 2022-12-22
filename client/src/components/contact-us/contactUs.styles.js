import styled from 'styled-components';
import ContactInfoBg from '../../assets/contact/contactInfoBg.png';

export const Cta = styled.div`
  text-align: center;
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 40px 0;

  @media only screen and (max-width: 480px) {
    flex-direction: column-reverse;
    input {
      width: 90%;
    }
  }
`;

export const Info = styled.div`
  background: url(${ContactInfoBg}) no-repeat;
  background-size: contain;
  border-radius: 20px;
  color: #fff;
  width: 415px;
  height: 640px;
  padding: 20px;

  @media only screen and (max-width: 480px) {
    width: 90%;
    margin-top: 40px;
  }
`;

export const ContactDetails = styled.div`
  color: #fff;
  font-size: 20px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  a {
    color: #fff;
    font-size: 20px;
    margin-bottom: 10px;
    &:visited {
      color: #fff;
      font-size: 20px;
      margin-bottom: 10px;
    }
  }
  img {
    margin-right: 10px;
  }
`;

export const ContactDescription = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const ContactTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 20px 0;
`;

export const ContactResponse = styled.div`
  background: #1254FF;
  border-radius: 70px;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 600px;
  margin: 0 auto;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const ContactIcon = styled.img`
  width: 200px;
`;

export const ContactLogo = styled.img`
  width: 300px;
`;

export const ContactThanks = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`;

export const ContactRespond = styled.div`
  color: #D7D7D7;
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
  text-align: center;
  line-height: 140%;
`;

export const ContactMsgLeft = styled.div`
  width: 350px;

  @media only screen and (max-width: 480px) {
    margin-bottom: 30px;
  }
`;
