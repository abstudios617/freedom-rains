import React from 'react';
import {
  Toptitle,
  SectionTitle,
  IntroductionContainer,
  ShopperIcon,
  ContactIcon,
  ContactContainer,
  ContactTitle,
  ContactDescription,
  ContactDescriptionInfo,
  ContactDescriptionTitle,
  OurTeamContainer,
  TeamContainer,
  MemberContainer,
  MemberName,
  MemberImage,
  MemberTitle,
  MemberLinkedIn,
  Podcast,
  PodcastContainer,
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
  ColorContainer,
  CherryredColorBox,
  MidnightblueColorBox,
  LightturquoiseColorBox,
  HoneydewColorBox,
  CapriblueColorBox,
  ColorTitle,
  ColorDescription,
  BlackColorTitle,
  BlackColorDescription
} from './aboutUs.style';

import steffan_aman from '../../assets/about-us/steffan_aman.png';
import linkedInIcon from '../../assets/about-us/LinkerdInIcon.png';
import phoneIcon from '../../assets/about-us/PhoneIcon.png';
import emailIcon from '../../assets/about-us/EmailIcon.png';
import shopIcon from '../../assets/about-us/ShopperIcon.png';

import freedomLogo1 from '../../assets/about-us/Freedom1.png';
import freedomLogo2 from '../../assets/about-us/freedom2.png';
import absLogo from '../../assets/about-us/abs.png';
import path from 'path';

import { members } from '../../constants/members';
import { podcasts } from '../../constants/podcasts';
import { Container } from '../../styles/global.style';
import ButtonField from '../../components/button-field';

const AboutUs = () => {
  const goToPositions = () => {
    window.open('https://docs.google.com/forms/d/1xwvCekP8Tm_uEDg96kDGUnfA8wmzf51PvfqpAdW_nMU');
  };

  const goToIntern = () => {
    window.open('https://docs.google.com/forms/d/1xlvNcwjmCJZ4CdIRBn1BzXstP9CA-S0ULBsM803aDr4');
  };

  const MediaAsset = ({ title, images }) => {
    const pathToFile = (e) => {
      return path.join(
        __dirname, 'client', 'src', 'assets', 'about-us', e.target.title
      );
    };

    const listImages = (images) => {
      return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {Object.keys(images).map((item, index) => {
            return (
              <>
                <div style={{ 
                  display: 'flex', flexDirection: 'column', margin: '0 auto' 
                }}>
                  <LogoContainer>
                    <LogoImage key={index} src={images[item]} alt={item} />
                  </LogoContainer>
                  <ContactButton>
                    <a href={images[item]} title={item} download={pathToFile}>
                      <ButtonField color="newGreen">
                        Download Logo
                      </ButtonField>
                    </a>
                  </ContactButton>
                </div>
              </>
            );
          })}
        </div>
      );
    };

    return (
      <>
        <LogoTitle>{title}</LogoTitle>
        {
          listImages(images)
        }
      </>
    );
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
        <ShopperIcon src={shopIcon} alt="Picture" />
        <IntroductionDescription>
          We build and use strategies to drive digital growth and expand customer reach so you can focus on growing your business!
        </IntroductionDescription>
      </IntroductionContainer>

      <SectionTitleContainer>
        <SectionTitle
          style={{ margin: '1em 6.67em' }}
        >
          Services We Provide
        </SectionTitle>
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
        <div style={{ marginLeft: '2em' }}>
          <ContactDescriptionTitle>
            <ContactDescriptionInfo>
              <ContactIcon src={phoneIcon} alt="Phone" />
              Phone:
            </ContactDescriptionInfo>
            <ContactDescription>1-718-975-6166</ContactDescription>
          </ContactDescriptionTitle>
          <ContactDescriptionTitle>
            <ContactDescriptionInfo>
              <ContactIcon src={emailIcon} alt="Email" />
              Email:
            </ContactDescriptionInfo>
            <ContactDescription>sjackson@freedomrains.com</ContactDescription>
          </ContactDescriptionTitle>
        </div>
        <ContactButton>
          <ButtonField color="newPrimary" onClick={goToIntern}>Contact with us!</ButtonField>
        </ContactButton>
      </ContactContainer>


      <OurTeamContainer>
        <SectionTitleContainer>
          <SectionTitle
            style={{ margin: '1em 7.5em' }}
          >
            Meet the Team
          </SectionTitle>
        </SectionTitleContainer>
        <TeamContainer>{team}</TeamContainer>
      </OurTeamContainer>
      <PodcastContainer>
        <SectionTitleContainer>
          <SectionTitle
            style={{ margin: '1em 7.67em' }}
          >
            Media & Press
          </SectionTitle>
        </SectionTitleContainer>
        <Podcast>{podcast}</Podcast>
      </PodcastContainer>

      <HiringDescriptionContainer>
        <HiringImage src={steffan_aman} alt="Logo" />
        <HiringMessage>We are Hiring!<br />Join the Team and Help Us Support Local Businesses</HiringMessage>
        <SeeOpenButton>
          <ButtonField color="newGreen" onClick={goToPositions}>See Open Positions</ButtonField>
        </SeeOpenButton>
      </HiringDescriptionContainer>
      <SectionTitleContainer>
        <SectionTitle
          style={{ margin: '30px 300px',  }}
        >
          Company Assets
        </SectionTitle>
      </SectionTitleContainer>
      <MediaAsset
        title="The Freedom Logo"
        images={{
          'Logo1': freedomLogo1,
          'Logo2': freedomLogo2
        }}
      />
      <MediaAsset
        title="The Above & Beyond Studios Logo"
        images={{
          'CompanyLogo': absLogo
        }}
      />
      <LogoTitle>Colors</LogoTitle>
      <ColorContainer>
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
        <LightturquoiseColorBox>
          <BlackColorTitle>
            Light Turquoise
          </BlackColorTitle>
          <BlackColorDescription>
            Hex: #9ADCDB<br />Rgb: 154, 220, 219
          </BlackColorDescription>
        </LightturquoiseColorBox>
        <HoneydewColorBox>
          <BlackColorTitle>
            Honeydew
          </BlackColorTitle>
          <BlackColorDescription>
            Hex: #EEFAEE<br />Rgb: 238, 250, 38
          </BlackColorDescription>
        </HoneydewColorBox>
      </ColorContainer>
    </Container>
  );
};

export default AboutUs;
