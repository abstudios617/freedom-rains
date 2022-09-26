import React from 'react';
import {
  Toptitle,
  SectionTitle,
  IntroductionContainer,
  ShopperIcon,
  ContactIcon,
  ServiceIcon,
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
  BlackColorDescription,
  PressPieceDescription,
  PressDescription,
  ReadmoreText,
  LogoButton,
  AbsWholeLogoContainer,
  ColorRowContainer
} from './aboutUs.style';
import steffan_aman from '../../assets/about-us/steffan_aman.png';
import linkedInIcon from '../../assets/about-us/LinkerdInIcon.png';
import phoneIcon from '../../assets/about-us/PhoneIcon.png';
import emailIcon from '../../assets/about-us/EmailIcon.png';
import shopIcon from '../../assets/about-us/ShopperIcon.png';
import freedomLogo1 from '../../assets/about-us/Freedom1.png';
import freedomLogo2 from '../../assets/about-us/freedom2.png';
import absLogo1 from '../../assets/about-us/abs-1-01.png';
import absLogo2 from '../../assets/about-us/abs-1-02.png';
import absLogo3 from '../../assets/about-us/abs-1-03.png';
import absLogo4 from '../../assets/about-us/abs-1-04.png';
import absLogo5 from '../../assets/about-us/abs-1-05.png';
import absLogo6 from '../../assets/about-us/abs-1-06.png';
import absLogo7 from '../../assets/about-us/abs-1-07.png';
import absLogo8 from '../../assets/about-us/abs-1-08.png';
import ecommerceIcon from '../../assets/services/ecommerceService.png';
import emailMarketIcon from '../../assets/services/emailMarketing.png';
import mobileAppIcon from '../../assets/services/mobileApp.png';
import SEOIcon from '../../assets/services/SEOService.png';
import socialMediaIcon from '../../assets/services/socialMediaServices.png';
import webDesignIcon from '../../assets/services/webDesign.png';


import { members } from '../../constants/members';
import { podcasts } from '../../constants/podcasts';
import { Container } from '../../styles/global.style';
import ButtonField from '../../components/button-field';

const AboutUs = () => {
  const goToPositions = () => {
    window.open('https://docs.google.com/forms/d/1xwvCekP8Tm_uEDg96kDGUnfA8wmzf51PvfqpAdW_nMU');
  };

  const downloadFreeLogo = () => {
    window.open({ freedomLogo1 });
    window.open({ freedomLogo2 });
  };

  const downloadAbsLogo = () => {
    window.open({ absLogo1 });
  };

  const team = members.map((item) => {
    return (
      <MemberContainer key={item.id}>
        <MemberImage src={item.image} alt={item.name} />
        <MemberName>{item.name}</MemberName>
        <MemberTitle>{item.title}</MemberTitle>
        <a href={item.LinkedInLink}>
          <MemberLinkedIn src={linkedInIcon} alt="LinkedIn" >
          </MemberLinkedIn>
        </a>
      </MemberContainer>
    );
  });

  const podcast = podcasts.map((item) => {
    return (
      <PodcastItemContainer key={item.id}>
        <iframe
          src={item.link}
          width="50%"
          height="auto"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={item.title}
        ></iframe>
        <PressPieceDescription>
          <PodcastTitle>{item.title}</PodcastTitle>
          <PressDescription>{item.description}</PressDescription>
          <ReadmoreText>
            <a href={item.link}>Read more &rarr;</a>
          </ReadmoreText>
        </PressPieceDescription>
      </PodcastItemContainer>
    );
  });

  return (
    <Container>

      <Toptitle>Helping Small Business Enter the Digital Age</Toptitle>
      <IntroductionContainer>
        <ShopperIcon src={shopIcon} alt="Picture" />
        <IntroductionDescription>
          We build and use strategies to drive digital growth and expand customer reach so you can focus on growing your business!
        </IntroductionDescription>
      </IntroductionContainer>
      <BrowseContainer>
        <a href="/forbusiness#products">
          Browse Our Past Work
        </a>
      </BrowseContainer>
      <BorderContainer></BorderContainer>
      <SectionTitleContainer>
        <SectionTitle>Service We Provide</SectionTitle>
      </SectionTitleContainer>
      <TotalContainer>
        <ServiceTitle>
          <ServiceIcon src={ecommerceIcon} alt="ecommerce" />
          E-Commerce
          <ServiceDescription>
            We sell your products online and social media through coupons
          </ServiceDescription>
          <LearnmoreText>
            <a href="/pricing#pricing">Learn more &rarr;</a>
          </LearnmoreText>
        </ServiceTitle>
        <ServiceTitle>
          <ServiceIcon src={emailMarketIcon} alt="email" />
          Email Marketing
          <ServiceDescription>
            E-mail marketing converts mailing lists into return customers.
          </ServiceDescription>
          <LearnmoreText>
            <a href="/pricing#marketing">Learn more &rarr;</a>
          </LearnmoreText>
        </ServiceTitle>
        <ServiceTitle>
          <ServiceIcon src={socialMediaIcon} alt="social media" />
          Social Media Services
          <ServiceDescription>
            Social Media is just as important as your website to the next generation.
          </ServiceDescription>
          <LearnmoreText>
            <a href="/pricing#pricing">Learn more &rarr;</a>
          </LearnmoreText>
        </ServiceTitle>
      </TotalContainer>
      <TotalContainer>
        <ServiceTitle>
          <ServiceIcon src={SEOIcon} alt="SEO" />
          SEO Optimization
          <ServiceDescription>
            Professional SEO helps brands increase their organic search score drastically.
          </ServiceDescription>
          <LearnmoreText>
            <a href="/pricing#marketing">Learn more &rarr;</a>
          </LearnmoreText>
        </ServiceTitle>
        <ServiceTitle>
          <ServiceIcon src={webDesignIcon} alt="web design" />
          Website Design
          <ServiceDescription>
            Our team specializes in affordable web design and e-commerce.
          </ServiceDescription>
          <LearnmoreText>
            <a href="/pricing#development">Learn more &rarr;</a>
          </LearnmoreText>
        </ServiceTitle>
        <ServiceTitle>
          <ServiceIcon src={mobileAppIcon} alt="mobile app" />
          Mobile App Development
          <ServiceDescription>
            Mobile is the future. We help create & develop your app no matter the size.
          </ServiceDescription>
          <LearnmoreText>
            <a href="/pricing#development">Learn more &rarr;</a>
          </LearnmoreText>
        </ServiceTitle>
      </TotalContainer>

      <ContactContainer>
        <ContactTitle>
          Contact
        </ContactTitle>
        <ContactDescriptionTitle>
          <ContactIcon src={phoneIcon} alt="Phone" />
          Phone Number
          <ContactDescription>1-718-975-6166</ContactDescription>
        </ContactDescriptionTitle>
        <ContactDescriptionTitle>
          <ContactIcon src={emailIcon} alt="Email" />
          Email&emsp;&emsp;&emsp;&emsp;&emsp;
          <ContactDescription>sjackson@freedomrains.com</ContactDescription>
        </ContactDescriptionTitle>
        <ContactButton>
          <ButtonField color="roundPrimary">
            <a href="/contact">Contact with us!</a>
          </ButtonField>
        </ContactButton>
      </ContactContainer>


      <OurTeamContainer>
        <SectionTitleContainer>
          <SectionTitle>Meet the Team</SectionTitle>
        </SectionTitleContainer>
        <TeamContainer>{team}</TeamContainer>
      </OurTeamContainer>
      <HiringDescriptionContainer>
        <HiringMessage>We&apos;re hiring!<br />Join the team and help us suport local businesses💜</HiringMessage>
        <SeeOpenButton>
          <ButtonField color="roundGreen" onClick={goToPositions}>See Openings</ButtonField>
        </SeeOpenButton>
        <HiringImage src={steffan_aman} alt="Logo" />
      </HiringDescriptionContainer>
      <div>
        <SectionTitleContainer>
          <SectionTitle>Media & Press</SectionTitle>
        </SectionTitleContainer>
        <Podcast>{podcast}</Podcast>
      </div>

      <SectionTitleContainer>
        <SectionTitle>Company Assets</SectionTitle>
      </SectionTitleContainer>
      <LogoTitle>The Freedom Logo</LogoTitle>
      <LogoContainer>
        <LogoImage src={freedomLogo1} alt="Logo1" />
        <LogoImage2 src={freedomLogo2} alt="Logo2" />
      </LogoContainer>
      <LogoButton>
        <ButtonField color="roundGreen" onClick={downloadFreeLogo}>Download Logos</ButtonField>
      </LogoButton>
      <LogoTitle>The Above & Beyond Studios Logo</LogoTitle>
      <AbsWholeLogoContainer>
        <AbsLogoContainer>
          <AbsImage src={absLogo1} alt="AbsLogo1" />
          <AbsImage src={absLogo2} alt="AbsLogo2" />
          <AbsImage src={absLogo3} alt="AbsLogo3" />
          <AbsImage src={absLogo4} alt="AbsLogo4" />
        </AbsLogoContainer>
        <AbsLogoContainer>
          <AbsImage src={absLogo5} alt="AbsLogo5" />
          <AbsImage src={absLogo6} alt="AbsLogo6" />
          <AbsImage src={absLogo7} alt="AbsLogo7" />
          <AbsImage src={absLogo8} alt="AbsLogo8" />
        </AbsLogoContainer>
      </AbsWholeLogoContainer>
      <LogoButton>
        <ButtonField color="roundGreen" onClick={downloadAbsLogo}>Download Logos</ButtonField>
      </LogoButton>
      <LogoTitle>Colors</LogoTitle>
      <ColorContainer>
        <ColorRowContainer>
          <CherryredColorBox>
            <ColorTitle>
              Cherry Red
            </ColorTitle>
            <ColorDescription>
              Hex: #F9193D<br />Rgb: 249, 25, 61
            </ColorDescription>
          </CherryredColorBox>
          <MidnightblueColorBox>
            <ColorTitle>
              Midnight Blue
            </ColorTitle>
            <ColorDescription>
              Hex: #14365B<br />Rgb: 20, 54, 91
            </ColorDescription>
          </MidnightblueColorBox>
          <CapriblueColorBox>
            <ColorTitle>
              Capri Blue
            </ColorTitle>
            <ColorDescription>
              Hex: #2F7DA1<br />Rgb: 47, 125, 161
            </ColorDescription>
          </CapriblueColorBox>
        </ColorRowContainer>
        <ColorRowContainer>
          <LightturquoiseColorBox>
            <ColorTitle>
              Light Turquoise
            </ColorTitle>
            <ColorDescription>
              Hex: #9ADCDB<br />Rgb: 154, 220, 219
            </ColorDescription>
          </LightturquoiseColorBox>
          <HoneydewColorBox>
            <BlackColorTitle>
              Honeydew
            </BlackColorTitle>
            <BlackColorDescription>
              Hex: #EEFAEE<br />Rgb: 238, 250, 38
            </BlackColorDescription>
          </HoneydewColorBox>
        </ColorRowContainer>
      </ColorContainer>
    </Container>
  );
};

export default AboutUs;
