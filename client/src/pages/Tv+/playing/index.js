import React, { useState } from 'react';
import { Container } from '../../../styles/global.style';
import TvNav from '../../../components/TvNav';
import {
  VideoContainer,
  RatingsBar,
  RatingIcon,
  PlayButton,
  ChannelName,
  Avatar,
  Channel,
  SubscribeButton,
  VideoTitle,
  VideoInfo,
  Description,
  ShowMore,
  UploadDate,
  CommentSection,
  CommentsHeader,
  LeaveAComment,
  Line,
  Comment,
  UserName,
  CommentContent,
  CommentRating,
  SecondaryHeader,
  Videos,
  RatingsBarMobile,
  MobileVideos,
} from './playing.styles';
import Ad from '../../../components/ad';
import { VideoFilter } from '../../../components/video-filter';
import playButton from '../../../assets/icons/playButton.svg';
import plusSave from '../../../assets/icons/plusSave.svg';
import like from '../../../assets/icons/like.svg';
import dislike from '../../../assets/icons/dislike.svg';
import tvshare from '../../../assets/icons/tvshare.svg';
import report from '../../../assets/icons/report.svg';
import commentsLogo from '../../../assets/icons/comments.svg';

const Playing = () => {
  const [showMore, setShowMore] = useState(false);

  const showMoreFunction = () => {
    if (showMore) {
      setShowMore(false);
    } else {  
      setShowMore(true);
    }  
  };

  const description = 'In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.In a laoree nunc. Aliquam erat volutpat';

  return (
    <Container>
      <TvNav />
      <VideoContainer>
        <PlayButton src={playButton} alt="playButton" />
      </VideoContainer>
      <RatingsBar>
        <span>
          <RatingIcon src={plusSave} alt="plusSave" />
          Save
        </span>
        <span>
          <RatingIcon src={like} alt="like" />
          Like
        </span>
        <span>
          <RatingIcon className="dislike" src={dislike} alt="dislike" />
          Dislike
        </span>
        <span>
          <RatingIcon src={tvshare} alt="tvshare" />
          Share
        </span>
        <span>
          <RatingIcon src={report} alt="report" />  
          Report
        </span>
      </RatingsBar>
      <RatingsBarMobile>
        <RatingIcon src={like} alt="like" />
        <RatingIcon className="dislike" src={dislike} alt="dislike" />
        <RatingIcon src={plusSave} alt="plusSave" />
        <RatingIcon src={tvshare} alt="tvshare" />
        <RatingIcon src={report} alt="report" />
      </RatingsBarMobile>
      <Channel>
        <Avatar src="https://play-lh.googleusercontent.com/S4wylkvt2jz16hnG9IG0pAZosbB82nWWy8P-rQkb54uH-SCVd5L2j7z7x1Vz5pZvIRc"/>
        <ChannelName>
          <span>Alaina Pinto</span>
          <SubscribeButton>Subscribe</SubscribeButton>
        </ChannelName>
      </Channel>
      <VideoInfo>
        <VideoTitle>
          Jamaica Plain in Boston is Rad!
          <span>1000 views</span>
        </VideoTitle>
        <Description>
          {showMore ? description : description.slice(0, 100)}
        </Description>
        {description.length > 100 && (
          <ShowMore onClick={showMoreFunction}>
            {showMore ? 'Show less' : 'Show more'}
          </ShowMore>
        )}
        <UploadDate>Upload Date: 06/01/2022</UploadDate>
      </VideoInfo>
      <CommentSection>
        <CommentsHeader>
          Comments
          <span>300</span>
          <img className="desktop" src={commentsLogo} alt="commentsLogo" />
          <span className="view-all">View all</span>
        </CommentsHeader>
        <LeaveAComment>
          <Avatar src="https://play-lh.googleusercontent.com/S4wylkvt2jz16hnG9IG0pAZosbB82nWWy8P-rQkb54uH-SCVd5L2j7z7x1Vz5pZvIRc"/>
          <input placeholder="Leave a comment..."></input>
        </LeaveAComment>
        <Line />
        <Comment>
          <Avatar className="mobileComment" src="https://play-lh.googleusercontent.com/S4wylkvt2jz16hnG9IG0pAZosbB82nWWy8P-rQkb54uH-SCVd5L2j7z7x1Vz5pZvIRc"/>
          <CommentContent>
            <UserName>
              JE vsqs
              <span>2 Weeks Ago</span>
            </UserName>
            <p>
            In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quisIn a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.
            </p>
            <CommentRating>
              <img src={like} alt="like" />
              <span>150</span>
              <img src={dislike} alt="dislike" />
              <span>7</span>
            </CommentRating>
          </CommentContent>
        </Comment>
      </CommentSection>
      <Ad
        btnColor="black"
        adText="Invest. Earn Equity. Build The Future."
        btnText="Invest In Us"
        url="https://netcapital.com/companies/above-beyond"
      />
      <SecondaryHeader>More On This Channel</SecondaryHeader>
      <Videos>
        {Array(3).fill(0).map((index) => (
          <VideoFilter key={index}/>
        ))}
      </Videos>
      <MobileVideos>
        {Array(3).fill(0).map((index) => (
          <VideoFilter cta="saved" key={index} />
        ))}
      </MobileVideos>
      <SecondaryHeader>Similar To This Video</SecondaryHeader>
      <Videos>
        {Array(6).fill(0).map((index) => (
          <VideoFilter key={index} />
        ))}
      </Videos>
      <MobileVideos>
        {Array(6).fill(0).map((index) => (
          <VideoFilter cta="saved" key={index} />
        ))}
      </MobileVideos>
    </Container>
  );
};

export default Playing;
