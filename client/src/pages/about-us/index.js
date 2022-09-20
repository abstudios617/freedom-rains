import React from 'react';
import {
  Toptitle,
  SectionTitle,
  IntroductionContainer,
  BrowseContainer,
  BorderContainer,
  ShopperIcon,
  ContactIcon,
  ContactContainer,
  ContactTitle,
  ContactDescription,
  ContactDescriptionTitle,
  OurTeamContainer,
  TeamContainer,
  MemberContainer,
  MemberName,
  MemberImage,
  MemberTitle,
  MemberLinkedIn,
  Podcast,
  PodcastItemContainer,
  PodcastTitle,
  SectionTitleContainer,
  ContactButton,
  IntroductionDescription,
  TotalContainer,
  ServiceDescription,
  ServiceTitle,
  LearnmoreText,
  HiringDescriptionContainer,
  HiringMessage,
  HiringImage,
  SeeOpenButton,
  LogoTitle,
  LogoContainer,
  LogoImage,
  LogoImage2,
  AbsLogoContainer,
  AbsImage,
  ColorContainer,
  CherryredColorBox,
  MidnightblueColorBox,
  LightturquoiseColorBox,
  HoneydewColorBox,
  CapriblueColorBox,
  ColorTitle,
  ColorDescription,
  BlackColorTitle,
  BlackColorDescription} from './aboutUs.style';
import steffan_aman from '../../assets/about-us/steffan_aman.png';
import linkedInIcon from '../../assets/about-us/LinkerdInIcon.png';
import phoneIcon from '../../assets/about-us/PhoneIcon.png';
import emailIcon from '../../assets/about-us/EmailIcon.png';
import shopIcon from '../../assets/about-us/ShopperIcon.png';
import freedomLogo1 from '../../assets/about-us/Freedom1.png';
import freedomLogo2 from '../../assets/about-us/freedom2.png';
import absLogo from '../../assets/about-us/abs.png';

import {members}from '../../constants/members';
import {podcasts}from '../../constants/podcasts';
import { Container } from '../../styles/global.style';
import ButtonField from '../../components/button-field';

const AboutUs = () => {
  const goToPositions = () => {
    window.open('https://docs.google.com/forms/d/1xwvCekP8Tm_uEDg96kDGUnfA8wmzf51PvfqpAdW_nMU');
  };

  const goToIntern = () => {
    window.open('https://docs.google.com/forms/d/1xlvNcwjmCJZ4CdIRBn1BzXstP9CA-S0ULBsM803aDr4');
  };

  const downloadFreeLogo = () => {
    window.open({freedomLogo1});
    window.open({freedomLogo2});
  };

  const downloadAbsLogo = () => {
    window.open({absLogo});
  };

  const team = members.map((item) => {
    return (
      <MemberContainer key={item.id}>
        <MemberImage src={item.image} alt={item.name} />
        <MemberName>{item.name}</MemberName>
        <MemberTitle>{item.title}</MemberTitle>
        <MemberLinkedIn src={linkedInIcon} alt="LinkedIn" >
        </MemberLinkedIn>
      </MemberContainer>
    );
  });

  const podcast = podcasts.map((item) => {
    return (
      <PodcastItemContainer key={item.id}>
        <iframe
          src={item.link}
          width="100%"
          height="auto"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={item.title}
        ></iframe>
        <PodcastTitle>{item.title}</PodcastTitle>
      </PodcastItemContainer>
    );
  });

  return (
    <Container>
    
      <Toptitle>Helping Small Business Enter the Digital Age</Toptitle>
      <IntroductionContainer>
        <ShopperIcon src={shopIcon} alt="Picture"/>
        <IntroductionDescription>
          We build and use strategies to drive digital growth and expand customer reach so you can focus on growing your business!
        </IntroductionDescription>
      </IntroductionContainer>
      <BrowseContainer>
        Browse Our Past Work
      </BrowseContainer>
      <BorderContainer></BorderContainer>
      <SectionTitleContainer>
        <SectionTitle>Services We Provide</SectionTitle>
      </SectionTitleContainer>
      <TotalContainer>
        <ServiceTitle>
          E-Commerce
          <ServiceDescription>
            We sell your products online and social media through coupons
          </ServiceDescription>
          <LearnmoreText>
            <a href="/forbusiness">Learn more</a>
          </LearnmoreText>
        </ServiceTitle>
        <ServiceTitle>
          Email Marketing
          <ServiceDescription>
            E-mail marketing converts mailing lists into return customers.
          </ServiceDescription>
          <LearnmoreText>
            <a href="/forbusiness">Learn more</a>
          </LearnmoreText>
        </ServiceTitle>
        <ServiceTitle>
          Social Media Services
          <ServiceDescription>
            Social Media is just as important as your website to the next generation.
          </ServiceDescription>
          <LearnmoreText>
            <a href="/forbusiness">Learn more</a>
          </LearnmoreText>
        </ServiceTitle>
      </TotalContainer>
      <TotalContainer>
        <ServiceTitle>
          SEO Optimization
          <ServiceDescription>
            Professional SEO helps brands increase their organic search score drastically.
          </ServiceDescription>
          <LearnmoreText>
            <a href="/forbusiness">Learn more</a>
          </LearnmoreText>
        </ServiceTitle>
        <ServiceTitle>
          Website Design
          <ServiceDescription>
            Our team specializes in affordable web design and e-commerce.
          </ServiceDescription>
          <LearnmoreText>
            <a href="/forbusiness">Learn more</a>
          </LearnmoreText>
        </ServiceTitle>
        <ServiceTitle>
          Mobile App Development
          <ServiceDescription>
            Mobile is the future. We help create & develop your app no matter the size.
          </ServiceDescription>
          <LearnmoreText>
            <a href="/forbusiness">Learn more</a>
          </LearnmoreText>
        </ServiceTitle>
      </TotalContainer>
      <ContactContainer>
        <ContactTitle>
          Contact
        </ContactTitle>
        <ContactDescriptionTitle>
          <ContactIcon src={phoneIcon} alt="Phone"/>
          Phone Number
          <ContactDescription>1-718-975-6166</ContactDescription>
        </ContactDescriptionTitle>
        <ContactDescriptionTitle>
          <ContactIcon src={emailIcon} alt="Email"/>
          Email
          <ContactDescription>sjackson@freedomrains.com</ContactDescription>
        </ContactDescriptionTitle>
        <ContactButton>
          <ButtonField color="primary" onClick={goToIntern}>Contact with us!</ButtonField>
        </ContactButton>
      </ContactContainer>
      
      <OurTeamContainer>
        <SectionTitleContainer>
          <SectionTitle>Meet the Team</SectionTitle>
        </SectionTitleContainer>
        <TeamContainer>{team}</TeamContainer>
      </OurTeamContainer>
      <div>
        <SectionTitleContainer>
          <SectionTitle>Media & Press</SectionTitle>
        </SectionTitleContainer>
        <Podcast>{podcast}</Podcast>
      </div>

      <HiringDescriptionContainer>
        <HiringMessage>We are Hiring!<br/>Join the team and help us suport local businesses</HiringMessage>
        <SeeOpenButton>
          <ButtonField color="green" onClick={goToPositions}>See Openings</ButtonField>
        </SeeOpenButton>
        <HiringImage src={steffan_aman} alt="Logo" />
      </HiringDescriptionContainer>
      <SectionTitleContainer>
        <SectionTitle>Company Assets</SectionTitle>
      </SectionTitleContainer>
      <LogoTitle>The Freedom Logo</LogoTitle>
      <LogoContainer>
        <LogoImage src={freedomLogo1} alt="Logo1"/>
        <LogoImage2 src={freedomLogo2} alt="Logo2"/>
      </LogoContainer>
      <ContactButton>
        <ButtonField color="green" onClick={downloadFreeLogo}>Download Logos</ButtonField>
      </ContactButton>
      <LogoTitle>The Above & Beyond Studios Logo</LogoTitle>
      <AbsLogoContainer>
        <AbsImage src={absLogo} alt="AbsLogo"/>
      </AbsLogoContainer>
      <ContactButton>
        <ButtonField color="green" onClick={downloadAbsLogo}>Download Logos</ButtonField>
      </ContactButton>
      <LogoTitle>Colors</LogoTitle>
      <ColorContainer>
        <CherryredColorBox>
          <ColorTitle>
            Cherry Red
          </ColorTitle>
          <ColorDescription>
            Hex: #F9193D<br/>Rgb: 249, 25, 61
          </ColorDescription>
        </CherryredColorBox>
        <MidnightblueColorBox>
          <ColorTitle>
            Midnight Blue
          </ColorTitle>
          <ColorDescription>
            Hex: #14365B<br/>Rgb: 20, 54, 91
          </ColorDescription>
        </MidnightblueColorBox>
        <CapriblueColorBox>
          <ColorTitle>
            Capri Blue
          </ColorTitle>
          <ColorDescription>
            Hex: #2F7DA1<br/>Rgb: 47, 125, 161
          </ColorDescription>
        </CapriblueColorBox>
        <LightturquoiseColorBox>
          <ColorTitle>
            Light Turquoise
          </ColorTitle>
          <ColorDescription>
            Hex: #9ADCDB<br/>Rgb: 154, 220, 219
          </ColorDescription>
        </LightturquoiseColorBox>
        <HoneydewColorBox>
          <BlackColorTitle>
            Honeydew
          </BlackColorTitle>
          <BlackColorDescription>
            Hex: #EEFAEE<br/>Rgb: 238, 250, 38
          </BlackColorDescription>
        </HoneydewColorBox>
      </ColorContainer>
    </Container>
  );
};

export default AboutUs;
