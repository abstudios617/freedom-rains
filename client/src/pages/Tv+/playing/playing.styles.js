import styled from 'styled-components';

export const VideoContainer = styled.div`
  width: 100%;
  height: 500px;
  background: #D9D9D9;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 480px) {
    height: 300px;
  } 
`;

export const PlayButton = styled.img`
  cursor: pointer;
  width: 40px;
  height: 40px;
`;

export const RatingsBar = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: right;

  span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #3C4044;
    margin-left: 15px;

    @media only screen and (max-width: 480px) {
      display: none;
    }
  }
`;

export const RatingsBarMobile = styled.div`
  display: none;

  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: row;
    margin-left: auto;
    float: right;
  }
`;

export const RatingIcon = styled.img`
  margin-right: 3px;
  cursor: pointer; 
  margin-top: 2px;
`;

export const ChannelName = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  
  span {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #3C4044;
    margin-top: 15px;
  }

  @media only screen and (max-width: 480px) {
    margin-left: 20px; 

    span {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

export const Channel = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -20px;
  
  @media only screen and (max-width: 480px) {
    margin-top: -5px;
  }
`;

export const Avatar = styled.img`
  background-color: lightgrey;
  margin: 10px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  :hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 480px) {
    width: 60px;
    height: 60px;

    &.mobileComment {
      width: 30px;
      height: 30px;
    }
  }
`;

export const SubscribeButton = styled.button`
  cursor: pointer;
  background: #1988FF;
  border-color: #1988FF;
  border-radius: 2px;
  padding: 2px 5px 3px;
  gap: 5px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  text-align: center;
  color: #F9F9F9;
  margin-top: 20px;

  @media only screen and (max-width: 480px) {
    margin-top: 5px;
    font-size: 10px;
    width: 61px;
    height: 20px;
  }
`;

export const VideoTitle = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #3C4044;
  align-items: center;
  margin-top: 40px;

  span {
    color: #8E8E8E;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    margin-left: 10px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 16px;
    line-height: 20px;
    flex-direction: column;
    align-items: flex-start;

    span {
      margin-left: 0;
      font-size: 12px;
      line-height: 15px;
    }
  }
`;

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #3C4044;
  margin-top: 10px;

  @media only screen and (max-width: 480px) {
    font-size: 16px;
    line-height: 20px;
    margin-top: 8px;
  }
`;

export const ShowMore = styled.span`
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin-top: 10px;
  color: #8E8E8E;

  @media only screen and (max-width: 480px) {
    font-size: 12px;
    line-height: 15px;
    margin-top: 8px;
  }
`;

export const UploadDate = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #8E8E8E;
  margin-top: 10px;

  @media only screen and (max-width: 480px) {
    font-size: 12px;
    line-height: 15px;
    margin-top: 8px;
  }
`;

export const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 21px;
`;

export const CommentsHeader = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #3C4044;
  align-items: center;

  span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #3C4044;
    margin-left: 20px;
    margin-top: 3px;

    &.view-all {
      margin-left: auto;
      float: right;
    }
  }
  
  img {
    &.desktop {
      margin-left: 20px;
    }
  }

  @media only screen and (max-width: 480px) {
    span {
      font-size: 12px;
      line-height: 15px;
      margin-top: 4px;

      &.view-all {
        display: none;
      }
    }
    img {
      &.desktop {
        display: none;
      }
    }
  }
`;

export const LeaveAComment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;

  input {
    margin-left: 30px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #8E8E8E;
    border: none;
    outline: none;
  }

  @media only screen and (max-width: 480px) {
    margin-top: 12px;
    border-top: 1px solid #E6E6E6;
    border-bottom: 1px solid #E6E6E6;

    input {
      font-size: 14px;
      line-height: 17px;
      margin-left: 20px;
    }
  }
`;

export const Line = styled.div`
  border: 1px solid #D9D9D9;
  background-color: #D9D9D9;
  width: 100%;
  height: 0px;
  margin-top: 15px;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UserName = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  align-items: center;

  span {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #8E8E8E;
    margin-left: 20px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 17px;

    span {
      font-size: 12px;
      line-height: 15px;  
    }
  }
`;

export const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-top: 10px;

  p {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #3C4044;
  }

  @media only screen and (max-width: 480px) {
    margin-left: 10px;
    p {
      font-size: 14px;
      line-height: 17px;
      margin-top: 3px;
    }
  }
`;

export const CommentRating = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;

  span {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin-left: 10px;
    margin-right: 30px;
    color: #3C4044;
  }
`;

export const SecondaryHeader = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  color: #3C4044;
  margin-top: 40px;

  @media only screen and (max-width: 480px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const Videos = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const MobileVideos = styled.div`
  display: none;

  @media only screen and (max-width: 480px) {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;
