import styled from 'styled-components';

export const Banner = styled.div`
  margin: 20px 0;
  height: 150px;
  overflow: hidden;
`;

export const Bio = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
`;

export const Ava = styled.img`
  border-radius: 50%;
  height: 80px;
  border: 1px solid black;
  :hover {
    cursor: pointer;
  }
`;

export const Info = styled.div`
  padding: 20px;

`;

export const ChannelName = styled.span`
  font-weight: 900;
  font-size: 22px;
  margin-right: 20px;
`;

export const Featured = styled.div`
  width: 90%;
  margin: 20px auto;
  height: 240px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    display: block;
  }
`;

export const Left = styled.div`
  width: 55%;
  height: 100%;
  position: relative;
  background-color: #D9D9D9;
  :hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 230px;
  }
`;

export const PlayIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Right = styled.div`
  width: 40%;
`;

export const VideoTitle = styled.span`
  font-size: 16px;
  font-weight: 900;
  margin-right: 10px;
  margin-top: 10px;
  white-space: nowrap;
  @media only screen and (max-width: 480px) {
    display: block;
    margin-left: 5px;
    margin-right: auto;
  }
`;

export const VideoDesc = styled.p`
  font-size: 12px;
  margin: 15px 0;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const ShowMore = styled.p`
  font-size: 10px;
  color: #828A94;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const BannerImg = styled.img`
  width: 100%;
  height: auto;
`;

export const ChannelNav = styled.div`
  color: #1988FF;
  display: flex;
  >* {
    font-weight: 900;
    margin-right: 20px;
    :hover {
      cursor: pointer;
    }
    &.selected {
      border-bottom: 2px solid #1988FF;
    }
  }
  @media only screen and (max-width: 480px) {
    margin-top: 40px;
    margin-left: 10px;
  }
`;

export const PlayAll = styled.div`
  display: none;
  vertical-align: middle;
  >span {
    padding-top: 2px;
  }
  @media only screen and (max-width: 480px) {
    display: flex;
    vertical-align: middle;
    margin-left: 10px;
    background-color: #DEE1E5;
    color: black;
    padding: 3px 5px;
    :hover {
      text-decoration: none;
      box-shadow: 0 3px 2px #777777;
      cursor: pointer;
    }
  }
`;

