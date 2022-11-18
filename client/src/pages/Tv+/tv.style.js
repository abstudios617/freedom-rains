import styled from 'styled-components';

export const Trending = styled.div`
  margin-top: 50px;
`;

export const Header = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    &.playlist {
      justify-content: left;
    }
    &.playlists {
      display: none;
    }
  }
`;

export const Title = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 700;
  @media only screen and (max-width: 480px) {
    margin-left: 10px;
  }
`;

export const More = styled.span`
  font-size: 14px;
  color: #828A94;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
  @media only screen and (max-width: 480px) {
    &.playlist {
      display: none;
    }
  }
`;

export const Videos = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media only screen and (max-width: 480px) {
    &.trending {
      flex-wrap: nowrap;
      overflow: scroll;
    }
  }
`;

export const Video = styled.div`
  margin: 10px 0;
  background-color: #D9D9D9;
  :hover {
    cursor: pointer;
  }
  &.trending {
    width: 220px;
    height: 150px;
    transition: all .2s ease-in-out;
    :hover { 
      transform: scale(1.2); 
      border: solid 10px #F9F9F9;
      margin-bottom: -30px;
      height: fit-content;
    }
  }
  &.new {
    width: 300px;
    height: 180px;
  }
`;

export const NewVideos = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const BottomAdd = styled.div`
  margin: 20px auto;
  width: 85%;
  display: flex;
  justify-content: space-between;
`;

export const AddImg = styled.div`
  width: 420px;
  height: 250px;
  background-color: lightgrey;
  @media only screen and (max-width: 480px) {
    width: 200px;
    height: 125px;
  }
`;

export const AddMsg = styled.div`
  h1 {
    font-size: 22px;
    color: #1988FF;
    font-weight: 900;
    margin: 20px 0;
  }
  h2 {
    font-size: 16px;
    margin: 20px 0;
    color: #8EC90E;
  }
  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 14px;
    }
    h2 {
      font-size: 10px;
    }
  }

`;
