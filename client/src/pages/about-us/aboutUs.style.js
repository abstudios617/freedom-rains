import styled from 'styled-components';

export const Toptitle = styled.div`
  width: 60%;
  height: 100px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  margin: auto;

  @media only screen and (max-width: 480px) {
    font-size: 23px;
  }
`;

export const IntroductionContainer = styled.div`
  width: 83%;
  height: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const ShopperIcon = styled.img`
  width: 350px;
  height: 350px;
  margin: auto;

  @media only screen and (max-width: 480px) {
    width: 250px;
    height: 250px;
  }
`;

export const IntroductionDescription = styled.div`
  width: 81%;
  height: 150px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  margin: auto;
  color: #000000;

  @media only screen and (max-width: 480px) {
    font-size: 12px;
    padding: 15px 0px;
  }
`;

export const SectionTitle = styled.div`
  color: #49A429;
  width: 380px;
  height: 30px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 25px;
  line-height: 30px;
`;

export const SectionTitleContainer = styled.div`
  display: block;
  margin: 15px;
  width: 50%;
`;


export const PenIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const ArrowIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const ServiceIcon = styled.img`
  width: 50px;
  height: 50px;
`;

export const TotalContainer = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: row;
  padding: 0px 0px 0px 20px;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    height: 500px; 
  }
`;


export const ServiceTitle = styled.div`
  width: 32%;
  height: 22px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  padding: 0px 20px 0px 0px;

  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 16px;
    height: 180px; 
  }
`;

export const ServiceDescription = styled.div`
  width: 100%;
  height: 51px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 27px;
  color: #000000;
  padding: 10px 0px
`;

export const LearnmoreText = styled.div`
  width: 110px;
  height: 27px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #559EFF;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 0px;
  margin: auto;
  background-color: #F9F9F9;

`;

export const ContactTitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-style: normal;
  line-height: 37px;
  font-size: 30px;
  text-align: center;
  color: #000000;
  padding: 30px 0px 40px 0px;

  @media only screen and (max-width: 480px) {
    text-align: left;
    margin: 0% 5%;
  }
`;

export const ContactButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 20px;
  gap: 20px;

  @media only screen and (max-width: 480px) {
    justify-content: left;
  }
`;

export const LogoButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 20px;
  gap: 20px;

  @media only screen and (max-width: 480px) {
    justify-content: center;
  }
`;

export const ContactIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const ContactDescriptionTitle = styled.div`
  width: 450px;
  height: 25px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #3C4044;
  text-align: center;
  margin: auto;
  display: flex;
  flex-direction: row;
  padding: 5px;

  @media only screen and (max-width: 480px) {
    margin: 0% 4%;
    font-size: 14px; 
  }
`;

export const ContactDescription = styled.div`
  width: 130px;
  height: 22px;
  text-align: center;
  display: flex;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  color: #3C4044;
  margin: auto;

  @media only screen and (max-width: 480px) {
    margin: 0 0 0 50px;
  }
`;




export const HiringImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const HiringDescriptionContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 50%;
  padding: 2%;
  border-radius: 12px 30px 30px 0px;
`;

export const HiringMessage = styled.div`
  width: 700px;
  height: 200px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  text-align: center;
  color: #F9F9F9;
  position: absolute;

  @media only screen and (max-width: 480px) {
    font-size: 23px;
    width: 300px;
  }
`;

export const SeeOpenButton = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  margin-top: 100px;

  @media only screen and (max-width: 480px) {
    margin-top: 40px;
  }
`;

export const OurTeamContainer = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 2%;
  margin: 50px 0;
  background-color: white;
  border-radius: 108px;
`;

export const OurTeamHeader = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 140%;
  text-align: center;
  color: #000000;
`;

export const OurTeamSubtitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  text-align: center;
  letter-spacing: 0.02em;
  color: rgba(0, 0, 0, 0.5);
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const MemberContainer = styled.div`
  margin: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MemberImage = styled.img`
  border-radius: 100px;
  width: 125px;
`;

export const MemberName = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  text-align: center;
  color: #000000;
  padding: 10px;
`;

export const MemberTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
`;

export const MemberLinkedIn = styled.img`
  width: 30px;
  height: 30px;
`;

export const PodcastHeader = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 140%;
  text-align: center;
  color: #000000;
`;

export const Podcast = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const PodcastTitle = styled.div`
  width: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-align: left;
  letter-spacing: 0.02em;
  color: #000000;
  height: 30px;
  padding: 2% 2% 2% 0%;
`;

export const PodcastItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 1%;
  width: 32%;

  @media only screen and (max-width: 480px) {
    width: 100%; 
  }
`;

export const LogoTitle = styled.div`
  width: 330px;
  height: 22px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  text-align: center;
  margin: 50px auto;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  width: 440px;
  height: 210px;
  margin: auto;
`;

export const LogoImage = styled.img`
  width: 150px;
  height: 160px;
  margin: auto;

  @media only screen and (max-width: 480px) {
    width: 120px;
    height: 130px; 
  }
`;

export const LogoImage2 = styled.img`
  width: 200px;
  height: 130px;
  margin: auto;

  @media only screen and (max-width: 480px) {
    width: 170px;
    height: 100px; 
  }
`;

export const AbsLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  width: 240px;
  height: 210px;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    height: 500px;
  }
`;

export const AbsWholeLogoContainer = styled.div`
  flex-direction: row;

  @media only screen and (max-width: 480px) {
    display: flex;
    height: 650px;
  }
`;

export const AbsImage = styled.img`
  width: 220px;
  height: 210px;
  margin: auto;

  @media only screen and (max-width: 480px) {
    width: 200px;
    height: 170px;
  }
`;

export const ColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 43px;
  width: 700px;
  height: 216px;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    height: 460px; 
  }
`;

export const ColorRowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CherryredColorBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 93px 25px 44px;
  gap: 10px;
  width: 120px;
  background-color: #F9193D;
  height: 80px;

  @media only screen and (max-width: 480px) {
    width: 80px;
    height: 40px;
    margin-left: 10px;
  }
`;

export const MidnightblueColorBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 93px 25px 44px;
  gap: 10px;
  width: 120px;
  background-color: #14365B;
  height: 80px;

  @media only screen and (max-width: 480px) {
    width: 80px;
    height: 40px;
    margin-left: 10px;
  }
`;

export const CapriblueColorBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 93px 25px 44px;
  gap: 10px;
  width: 120px;
  background-color: #2F7DA1;
  height: 80px;

  @media only screen and (max-width: 480px) {
    width: 80px;
    height: 40px;
    margin-left: 10px;
  }
`;

export const LightturquoiseColorBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 93px 25px 44px;
  gap: 10px;
  width: 120px;
  background-color: #9ADCDB;
  height: 80px;

  @media only screen and (max-width: 480px) {
    width: 80px;
    height: 40px;
    margin-left: 10px;
  }
`;

export const HoneydewColorBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 93px 25px 44px;
  gap: 10px;
  width: 120px;
  background-color: #EEFAEE;
  height: 80px;

  @media only screen and (max-width: 480px) {
    width: 80px;
    height: 40px;
    margin-left: 10px;
  }
`;

export const ColorTitle = styled.div`
  width: 150px;
  height: 23px;
  font-family: 'Avenir Next', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  color: #FFFFFF;

  @media only screen and (max-width: 480px) {
    font-size: 13px;
  }
`;

export const ColorDescription = styled.div`
  width: 150px;
  height: 46px;
  font-family: 'Avenir Next', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #F9F9F9;

  @media only screen and (max-width: 480px) {
    font-size: 13px;
  }
`;

export const BlackColorTitle = styled.div`
  width: 150px;
  height: 23px;
  font-family: 'Avenir Next', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  color: #000000;

  @media only screen and (max-width: 480px) {
    font-size: 13px;
  }
`;

export const BlackColorDescription = styled.div`
  width: 150px;
  height: 46px;
  font-family: 'Avenir Next', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #000000;

  @media only screen and (max-width: 480px) {
    font-size: 13px;
  }
`;

export const PressPieceDescription = styled.div`
  flex-direction: column;
  width: 100%;
  height: 300px; 
  padding-left: 3%;

  @media only screen and (max-width: 480px) {
    height: 170px;

  }
`;

export const PressDescription = styled.div`
  width: 100%;
  height: 100px; 
  font-size: 10px; 

`;

export const ReadmoreText = styled.div`
  width: 110px;
  height: 27px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10px; 
  color: #559EFF;

`;
