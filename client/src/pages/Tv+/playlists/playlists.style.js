import styled from 'styled-components';

export const Playlist = styled.div`
  width: 220px;
  padding-bottom: 20px;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 129px;
    display: flex;
    flex-direction: row;
  }
`;

export const PlaylistImg = styled.div`
  width: 100%;
  height: 150px;
  background-color: #D9D9D9;
  :hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 480px) {
    width: 210px;
    height: 129px;
  }
`;

export const PlaylistTitle = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #3C4044;

  @media only screen and (max-width: 480px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const PlayAll = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
`;

export const PlaylistHeader = styled.div`
  >* {
    :hover {
      cursor: pointer;
    }
  }
  margin-top: 10px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const PlaylistHeaderMobile = styled.div`
  display: none;
  
  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    align-items: center;

    span {
      &.mobileChannelName {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        margin-top: 10px;
        margin-left: -5px;
      }
      &.statsMobile {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        color: #8E8E8E;
        margin-top: 10px;
        margin-left: -35px;
      }
    }
  }
`;

