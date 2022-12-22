import React from 'react';
import ButtonField from '../button-field';
import { addEvent } from '../../requests/analytics-request';
import { Wrapper, AdImg, AdTitle, AdDescription, AdImageTwo, Container, TextContainer, AdImageContainer } from './ad.style';

const Ad = ({ ad, rotate, priority, height, platform, page, url, btnColor, btnText, adText, descriptionText, image }) => {
  let adItem;

  if (ad) {
    adItem = ad.filter((item) => {
      return (
        item.priority === priority && item.platform === platform
      );
    })[0];
  } else {
    adItem = rotate;
  }

  const goToAd = () => {
    addEvent({
      event: 'Ad Placement',
      props: {
        action: 'Click',
        label: 'Invest in Freedom',
      },
    });
    window.open(url);
  };

  const trackPromo = (adName, page, url) => {
    addEvent({
      event: 'Promo Ads',
      props: {
        location: page,
        action: 'Click',
        label: adName,
      },
    });
  
    window.open(url);
  };

  return (
    <Wrapper>
      { adItem?.is_iframe === 'true' && (
        <iframe
          src={adItem.iframe}
          height={height}
          scrolling="no"
          border="0"
          marginWidth="0"
          frameBorder="0"
          title={adItem?.name}
        ></iframe>
      ) }

      { adItem?.url.length > 0 && (
        <div
          onClick={() => trackPromo(adItem.name, page, adItem.url)}
          href={adItem.url}
          target="_blank"
          rel="noreferrer"
        >
          <AdImg
            border="0"
            alt={adItem.name}
            src={adItem.path}
          />
        </div>
      ) }

      { adItem?.is_iframe !== 'true' && adItem?.url.length === 0 && !url && (
        <AdImg src={adItem.path} alt={adItem.name} />
      ) }

      { url && (
        <Container className={page === 'Coupons' && 'coupon'}>
          <TextContainer className={'homepage'}>
            <AdTitle>{adText}</AdTitle>
            <AdDescription>{descriptionText}</AdDescription>
            <ButtonField onClick={goToAd} color={btnColor}>
              {btnText}
            </ButtonField>
          </TextContainer>
          {image &&
            <AdImageContainer>
              <AdImageTwo src={image} alt={adText} />
            </AdImageContainer>
          }
          <TextContainer className={'homepageTopBtn'}>
            <ButtonField onClick={goToAd} color={btnColor}>
              {btnText}
            </ButtonField>
          </TextContainer>
        </Container>
      ) }
    </Wrapper>
  );
};

export default Ad;
