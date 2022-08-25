import styled from 'styled-components';

export const Prev = styled.div`
  margin: 0 5px;
  padding: 0 5px;
  cursor: pointer;
`;

export const Next = styled.div`
  margin: 0 5px;
  padding: 0 5px;
  cursor: pointer;
`;

export const Num = styled.div`
  margin: 0 5px;
  padding: 0 5px;
  cursor: pointer;
`;

export const Disabled = styled.div`
  cursor: text;
  color: rgba(0, 0, 0, 0.3);
`;

export const Paginate = styled.div`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
`;

export const Active = styled.div`
  background: #559eff;
  color: #fff;
  font-weight: 700;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  img {
    width: 30px;
    position: relative;
    top: -2px;
  }

  @media only screen and (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

export const BtnCategory = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 85px;
  text-transform: capitalize;
`;

export const Sections = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ActivePlatform = styled.div`
  font-weight: 700;
  font-size: 36px;
  color: #559eff;
  margin-right: 85px;
  pointer-events: none;

  &.inactivePlatform {
    margin-right: 85px;
    color: #333;
    text-decoration: underline;
    cursor: pointer;
    font-weight: normal;
    pointer-events: all;
  }
`;

export const CarouselImg = styled.img`
  width: 100%;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 480px) {
    height: 100%;
    width: auto;
  }
`;

export const CarouselImgContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    height: 240px;
  }
`;

export const SectionTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  
  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const SectionView = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-right: 15px;
  font-size: 13px;

  &:hover {
    cursor: pointer;
  }
`;

export const SectionText = styled.div`
  margin-top: 60px;
  width: 960px;
  display: flex;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;


export const PromoContainer = styled.div`
  margin: 0 10px 0 20px;

  @media only screen and (max-width: 480px) {
    margin: 20px 0;
  }
`;

export const TopPromo = styled.img`
  width: 280px;
  height: 430px;
  margin: 0 0 0 20px;
  border-radius: 15px;
  object-fit: cover;

  &:hover {
    cursor: pointer;
  }
  
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    height: 230px;
    border-radius: 0;
    margin: 0 0 30px 0;
  }
`;

export const TopCarouselContainer = styled.div`
  width: 1020px;
  margin: 0 auto;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
