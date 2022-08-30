import styled from 'styled-components';

export const Video = styled.div`
  margin-top: 10px;
  :hover {
    cursor: pointer;
  }
  &.trending {
    background-color: #F9F9F9;
    @media only screen and (min-width: 480px) {
      transition: all .2s ease-in-out;
      :hover { 
        transform: scale(1.3); 
        border: solid 10px #F9F9F9;
        margin-bottom: -70px;
        padding-bottom: 20px;
        >* {
          display: flex;
        }
      }
    }
  }
  @media only screen and (max-width: 480px) {
    margin: 10px auto; 
    &.trending {
      margin: 10px 10px;
    }
    &.playlist {
      display: flex;
      margin-left: 10px;
    }
    &.saved {
      display: flex;
      flex-direction: row;
    }
  }
`;

export const Img = styled.div`
  background-color: #D9D9D9;
  width: 300px;
  height: 180px;
  :hover {
    cursor: pointer;
  }
  &.trending {
    width: 220px;
    height: 150px;
  }
  @media only screen and (max-width: 480px) {
    width: 380px;
    height: 240px;
    &.playlist {
      width: 360px;
      height: 130px;
    } 
    &.saved {
      width: 210px;
      height: 129px;
    }
  }
  
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  &.trending {
    display: none;
    position: absolute;
    transform: scale(0.7) translate(-60px);
    width: 300px;
  }
`;

export const Info = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    &.playlist {
      width: 60%;
      margin-left: 20px;
      .playlist {
        >* {
          display: block;
          margin: 3px;
          :before {
            display: none;
          }
        }
      }
    }
    &.saved {
      margin-left: 10px;
    } 
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;


export const Title = styled.span`
  font-size: 14px;
  font-weight: 900;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Channel = styled.span`
  font-size: 10px;
  font-weight: 600;
  :hover {
    cursor: pointer;
  }
`;

export const Avatar = styled.img`
  background-color: lightgrey;
  margin: 10px;
  width: 40px;
  height: 35px;
  border-radius: 50%;
  :hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 480px) {
    &.playlist {
      display: none;
    }
    &.saved {
      display: none;
    } 
  } 
`;

export const Stats = styled.span`
  color: #8E8E8E;
  font-size: 8px;
  margin: 0 3px;
  font-weight: 900;
  &.saved {
    font-size: 10px;
    margin: 0 10px;
  }
  &.marked {
    :before {
      content:"";
      vertical-align: -10%;
      width:3px;
      height:3px;
      margin: 3px;
      border-radius:50%;
      background: #8E8E8E;
      display:inline-block;
    }
  }
  @media only screen and (max-width: 480px) {
    &.feat {
      display: block;
      margin: 5px;
    }
    &.savedPage {
      margin-left: 0px;
    }
    &.playlists {
      display: none;
    }
  }
`;

export const Subscribe = styled.span`
  font-size: 10px;
  line-height: 10px;
  padding: 4px;
  padding-top: 6px;
  color: white;
  width: fit-content;
  background-color: #1988FF;
  border-radius: 5px;
  :hover {
    box-shadow: 0 3px 2px #777777;
    cursor: pointer;
  }
`;

export const ChannelInfo = styled.div`
  @media only screen and (max-width: 480px) {
    &.saved {
      display: flex;
      flex-direction: column;
      list-decoration: none;
    }
  }
`;
