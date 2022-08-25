import styled from 'styled-components';

export const GamesContainer = styled.div`
  width: 960px;
  height: auto;
  overflow: hidden;
  margin: 0 auto 50px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    margin: 0 auto 30px;
  }
`;

export const Cover = styled.div`
  background: #fff;
  width: 100%;
  margin: 0 auto 20px;

  &.hide {
    display: none;
  }

  @media only screen and (max-width: 480px) {
    width: 98%;
    padding: 4% 1%;
    background: none;

    &.hide {
      display: none;
    }
  }
`;

export const Logo = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 13px;
  position: relative;

  &.lockedImg {
    filter: brightness(50%);
  }

  &.lockedImgLogo {
    object-fit: contain;
    width: 100px;
    height: 100px;
    position: absolute;
    top: 7px;
    left: 15px;
    margin: 35px;
  }

  &.carouselLockedImgLogo {
    object-fit: contain;
    width: 70px;
    height: 70px;
    position: absolute;
    top: 2px;
    left: 10px;
    margin: 20px;
  }

  @media only screen and (max-width: 480px) {
    width: 150px;
    height: 150px;

    &.lockedImgLogo {
      top: 11px;
      left: 12px;
      margin: 15px;
    }
  }
`;

export const GamePoint = styled.div`
  cursor: pointer;
  text-align: center;
  
  &.locked {
    position: relative;
  }
`;

export const GameName = styled.div`
  margin: 20px 0 0 15px;
  font-weight: 700;
  font-size: 11px;
  text-align: left;
`;

export const GameContainer = styled.div`
  width: 100%;

  iframe {
    width: 100%;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    iframe {
      width: 94%;
    }
  }
`;

export const CarouselImg = styled.img`
  width: 100%;
  height: 270px;
  object-fit: cover;
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    height: 150px;
  }
`;

export const TopCarouselContainer = styled.div`
  width: 1020px;
  margin: 0 auto;
  text-align: center;
  position: relative;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const HeaderText = styled.div`
  position: absolute;
  top: 105px;
  left: 65px;
  font-size: 27px;
  font-weight: 700;
  color: #fff;
  width: 320px;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const VerticalGameImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  object-fit: cover;
  margin: 6px 0;
  position: relative;

  &.lockedImg {
    filter: brightness(50%);
  }
`;

export const FeaturedGameContainer = styled.div`
  width: 900px;
  height: 160px;
  display: flex;
  border-bottom: 1px solid #B3B3B3;
  padding-top: 15px;
  margin: 0 30px;

  &.locked {
    background: #ddd !important;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    margin: 0 auto 10px;
    height: 100px;
  }
`;

export const FeaturedGameImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

export const FeaturedTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0 15px 30px;

  @media only screen and (max-width: 480px) {
    padding: 0 0 0 15px;
  }
`;

export const FeaturedGameName = styled.div`
  font-weight: 700;
  color: #6A6A6A;
  font-size: 20px;
  margin-bottom: 15px;

  &.mostPopular {
    color: #1988FF;
  }

  @media only screen and (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 5px;
    color: #3C4044;

    &.mostPopular {
      color: #3C4044;
    }
  }
`;

export const FeaturedGameRules = styled.div`
  font-size: 10px;
  margin: 0 50px 12px 0;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;

  @media only screen and (max-width: 480px) {
    font-size: 9px;
    margin: 0 10px 8px 0;
  }
`;

export const FreedomFriday = styled.div`
  color: #fff;
  font-size: 10px;
  text-align: center;
  font-weight: 700;
  background-color: #8EC90E;
  width: 100px;
  padding: 5px;
  border-radius: 5px 10px 10px 30px;
  margin-bottom: 5px;

  @media only screen and (max-width: 480px) {
    border-radius: 5px 30px 30px 60px;
    font-size: 8px;
    padding: 3px 0;
    margin-bottom: 0;
  }
`;

export const FeaturedGameScore = styled.div`
  font-weight: 700;
  font-size: 10px;
  display: inline;

  @media only screen and (max-width: 480px) {
    font-size: 8px;
  }
`;

export const FeaturedStarImg = styled.img`
  height: 10px;
  width: 10px;
  padding-right: 4px;
  display: inline;
  object-fit: cover;

  &.isMobile {
    display: none;
  }

  @media only screen and (max-width: 480px) {
    height: 9px;

    &.isMobile {
      display: inline;
    }

    &.isDesktop {
      display: none;
    }
  }
`;
