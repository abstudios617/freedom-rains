import React, { useState, useEffect } from 'react';
import { socialsConstant } from '../../constants/socials';
import { addEvent } from '../../requests/analytics-request';
import absLogo from '../../assets/footer/abs_logo.png';
import roku from '../../assets/footer/roku.png';
import ios from '../../assets/footer/ios.png';
import chrome from '../../assets/footer/google.png';
import firefox from '../../assets/footer/firefox.png';
import { 
  FullWidth,
  Container,
  Logo,
  Content,
  Heart,
  SocialLinks,
  DownloadLinks,
  IgFooterImg,
  Section,
  Title,
  SocialImgContainer,
  IsMobile,
  TextSection,
  Text,
  Line,
  Copyright,
} from './footer.styles';
import { targetPage } from '../../utils';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  const date = new Date();
  const [socials, setSocials] = useState(null);
  const [followDropdown, setFollowDropdown] = useState(null);
  const [policiesDropdown, setPoliciesDropdown] = useState(null);
  const [feedbackDropdown, setFeedbackDropdown] = useState(null);
  const [companyDropdown, setCompanyDropdown] = useState(null);

  const getSocialMedia = () => {
    const media = socialsConstant.map((item) => {
      const goToSocialMedia = () => {
        window.open(item.url);
        addEvent({
          event: 'Social Media item',
          props: {
            action: 'Click',
            label: `${item.name}`,
          },
        });
      };
      return (
        <SocialImgContainer key={item.name}>
          <FontAwesomeIcon 
            alt={item.name}
            onClick={goToSocialMedia}
            icon={item.image}
          />
        </SocialImgContainer>
      );
    });
    setSocials(media);
  };

  useEffect(() => {
    if (!socials) {
      getSocialMedia();
    }
  }, [socials]);

  return (
    <>
      <FullWidth className={'top'}>
        <Container>
          <Content>
            <Section className={'first'}>
              <Title 
                className={'business'}
                onClick={() => targetPage('forbusiness')}
              >
                FOR BUSINESSES &gt;
              </Title>
            </Section>
            <Section>
              <Title>Follow Us
                <IsMobile>
                  <KeyboardArrowDownIcon 
                    onClick={followDropdown ? () => setFollowDropdown(false,) : () => setFollowDropdown(true)}
                  />
                </IsMobile>
              </Title>
              <SocialLinks className={!followDropdown && 'mobile'}>{socials}</SocialLinks>
            </Section>
            <Line className={'mobile'}/>
            <Section className={'last'}>
              <Title>Download</Title>
              <DownloadLinks>
                <IgFooterImg
                  src={chrome}
                  alt="Chrome Extension"
                  onClick={() => window.open('https://chrome.google.com/webstore/detail/shop-with-freedom-shop-lo/cibkpkemnhicmcmkchpledgebbapjdbp')}
                />
                <IgFooterImg
                  src={firefox}
                  alt="Firefox Extension"
                  onClick={() => window.open('https://addons.mozilla.org/en-US/firefox/addon/shop-with-freedom/')}
                />
                <IgFooterImg 
                  src={roku} 
                  alt="Roku" 
                  onClick={() => window.open('https://channelstore.roku.com/en-ot/details/25d1bb353a476399904f57a98b99ab6e/freedom-tv-plus')}
                />
                <IgFooterImg 
                  src={ios}
                  alt="iOS App"
                  onClick={() => targetPage('earlyaccess')}
                />
              </DownloadLinks>
            </Section>
            <Line/>
            <Section>
              <Title>Policies
                <IsMobile>
                  <KeyboardArrowDownIcon
                    onClick={policiesDropdown ? () => setPoliciesDropdown(false) : () => setPoliciesDropdown(true)}
                  />
                </IsMobile>
              </Title>
              <TextSection className={!policiesDropdown && 'mobile'}>
                <Text onClick={() => window.open('https://www.freedomrains.com/static/media/ABS_Privacy_Policy.5c2ed2647d75a8b0f293.pdf')}>
                  Privacy Policy
                </Text>
                <Text onClick={() => window.open('https://www.freedomrains.com/static/media/ABS_Terms_of_Use.53e939a09949f58eafb7.pdf')}>
                  Terms of Use
                </Text>
              </TextSection>
            </Section>
            <Line/>
            <Section>
              <Title>Add Feedback
                <IsMobile>
                  <KeyboardArrowDownIcon
                    onClick={feedbackDropdown ? () => setFeedbackDropdown(false) : () => setFeedbackDropdown(true)}
                  />
                </IsMobile>
              </Title>
              <TextSection className={!feedbackDropdown && 'mobile'}>
                <Text onClick={() => window.open('https://forms.gle/rhZ6KshNgAncwcbv7')}>
                  General Feedback
                </Text>
                <Text onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfui2IvWsAkgRetGJe92f1GswiMDTCDRONLoewEO3gM0oMisA/viewform')}>
                  Browser Extension Feedback
                </Text>
              </TextSection>
            </Section>
            <Line/>
            <Section>
              <Title>Company
                <IsMobile>
                  <KeyboardArrowDownIcon
                    onClick={companyDropdown ? () => setCompanyDropdown(false) : () => setCompanyDropdown(true)}
                  />
                </IsMobile>
              </Title>
              <TextSection className={!companyDropdown && 'mobile'}>
                <Text onClick={() => window.open('https://www.youtube.com/playlist?list=PLekneCO_rtSqbabdO36ZqKC5HCrd0Uu2w')}>
                  Podcast
                </Text>
                <Text onClick={() => window.open('https://shopwithfreedomblog.wordpress.com/')}>
                  Blog
                </Text>
                <Text onClick={() => targetPage('contact')}>
                  Contact Us
                </Text>
                <Text onClick={() => targetPage('team')}>
                  For Business
                </Text>
                <Text onClick={() => window.open('mailto:info@freedomrains.com')}>
                  Refer a Business
                </Text>
              </TextSection>
            </Section>
            <Line className={'mobile'}/>
            <Section className={'last'}>
              <Title 
                className={'business'}
                onClick={() => targetPage('pricing')}
              >
                FOR BUSINESSES &gt;
              </Title>
            </Section>
          </Content>
        </Container>
      </FullWidth>
      <FullWidth>
        <Container className={'bottom'}>
          <Content className={'bottom'}>
            <Text onClick={() => targetPage('')}>
              <Logo
                src={absLogo}
                alt="Above & Beyond Studios"
              />
            </Text>
            <Heart>
              Made with <FavoriteIcon/> in Boston
            </Heart>
            <Copyright>
              &copy; 2019-{date.getFullYear()} Above &amp; Beyond Studios, Inc.
              All rights reserved.
            </Copyright>
          </Content>
        </Container>
      </FullWidth>
    </>
  );
};

export default Footer;
